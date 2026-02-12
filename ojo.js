// --- OJO2.JS - VERSIÓN SIMPLE Y DIRECTA ---

const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";

const genB = (i, a, t, m) => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: "ataque.mp4" },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: "cura.mp4" },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: "defensa.mp4" },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: "magia.mp4" }
});

const CARTAS = {
    1: { "id-ar": 1, id: 1, nombre: "APER", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(6,1,5,0), codTarget: "1" },
    2: { "id-ar": 2, id: 2, nombre: "SAXUM", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(3,1,12,1), codTarget: "2" },
    3: { "id-ar": 3, id: 3, nombre: "BESTIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(9,1,5,5), codTarget: "3" },
    4: { "id-ar": 4, id: 4, nombre: "LEO", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(8,5,7,4), codTarget: "4" },
    5: { "id-ar": 5, id: 5, nombre: "GAIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(10,5,8,3), codTarget: "5" },
    6: { "id-ar": 6, id: 6, nombre: "TIRONIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(5,2,4,1), codTarget: "6" },
};

// Variables privadas
let lastConfirmedId = null;
let currentCandidateId = null;
let confidenceCounter = 0;
let guiaScanner = null;
let lastCheckTime = 0;

const MIN_FRAME_INTERVAL = 50; // ms entre chequeos

export function inicializarOjo(video, canvas, canvasGuia, onEncontrado) {
    guiaScanner = canvasGuia;
    
    const context = canvas.getContext('2d');
    
    function tick() {
        const now = performance.now();
        if (now - lastCheckTime < MIN_FRAME_INTERVAL) {
            requestAnimationFrame(tick);
            return;
        }
        lastCheckTime = now;
        
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            
            if (typeof window.jsQR === 'undefined') {
                console.error("jsQR no cargado");
                requestAnimationFrame(tick);
                return;
            }

            const code = window.jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                // Limpiar datos: solo números
                const rawData = code.data.trim();
                const cleanData = rawData.replace(/[^\d]/g, '');
                const detectId = cleanData;
                
                console.log(`[QR RAW] "${rawData}" -> [LIMPIO] "${cleanData}"`);
                
                if (guiaScanner) {
                    guiaScanner.classList.remove('verde');
                    guiaScanner.classList.add('dorado');
                }
                
                // Contar confirmaciones consecutivas del MISMO número
                if (detectId === currentCandidateId) {
                    confidenceCounter++;
                    console.log(`[COUNTER] ${detectId} = ${confidenceCounter}`);
                } else {
                    currentCandidateId = detectId;
                    confidenceCounter = 1;
                    console.log(`[NUEVO] Candidato: ${detectId}`);
                }

                // Procesar cuando se confirme 3 veces (más tolerante que 5)
                if (confidenceCounter >= 3 && detectId !== lastConfirmedId) {
                    lastConfirmedId = detectId;
                    
                    if (guiaScanner) {
                        guiaScanner.classList.remove('dorado');
                        guiaScanner.classList.add('verde');
                    }
                    
                    // Convertir a número
                    const idNumerico = parseInt(detectId);
                    
                    // Buscar en CARTAS
                    let original = null;
                    if (CARTAS[idNumerico]) {
                        original = CARTAS[idNumerico];
                    }
                    
                    console.log(`[CONFIRMADO] ID: ${detectId} -> Número: ${idNumerico} -> Carta: ${original ? original.nombre : 'NO EXISTE'}`);
                    
                    if (original) {
                        // Disparar callback
                        onEncontrado(JSON.parse(JSON.stringify(original)));
                        
                        setTimeout(() => {
                            if (guiaScanner) {
                                guiaScanner.classList.remove('verde', 'dorado');
                            }
                        }, 100);
                    } else {
                        console.warn(`[ERROR] Carta ${idNumerico} no encontrada en CARTAS`);
                        lastConfirmedId = null;
                    }
                }
            } else {
                // Sin QR visible
                currentCandidateId = null;
                confidenceCounter = 0;
            }
        }
        requestAnimationFrame(tick);
    }
    
    tick();
}

export function resetUltimoId() {
    lastConfirmedId = null;
    currentCandidateId = null;
    confidenceCounter = 0;
    if (guiaScanner) guiaScanner.classList.remove('verde', 'dorado');
}

export { RUTA_BASE };