// --- BIBLIOTECA INTEGRADA EN EL OJO ---
const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
const VIDEOS_BATALLA = ["ExplosiÃ³n_Elemental.mp4", "Invocaciones_EtÃ©reas.mp4"];

const genB = (i, a, t, m) => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: "ataque.mp4" },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: "cura.mp4" },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: "defensa.mp4" },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: "magia.mp4" }
});

const CARTAS = {
    1: { id: 1, nombre: "APER", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(6,1,5,0), codTarget: "1" },
    2: { id: 2, nombre: "SAXUM", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(3,1,12,1), codTarget: "2" },
    3: { id: 3, nombre: "BESTIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(9,1,5,5), codTarget: "3" },
    4: { id: 4, nombre: "LEO", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(8,5,7,4), codTarget: "4" },
    5: { id: 5, nombre: "GAIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(10,5,8,3), codTarget: "5" },
    6: { id: 6, nombre: "TIRONIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(5,2,4,1), codTarget: "6" },
    7: { id: 7, nombre: "EQUES", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(8,2,6,1), codTarget: "7" },
    8: { id: 8, nombre: "SAGITIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(10,2,5,3), codTarget: "8" },
    9: { id: 9, nombre: "ALCHEMIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(4,9,5,6), codTarget: "9" },
    10: { id: 10, nombre: "CAESAR", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(9,8,6,4), codTarget: "10" },
    11: { id: 11, nombre: "SICA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "011.png", botones: genB(7,1,2,0), codTarget: "11" },
    12: { id: 12, nombre: "CLAVA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "012.png", botones: genB(8,1,2,0), codTarget: "12" },
    13: { id: 13, nombre: "HASTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "013.png", botones: genB(6,4,3,0), codTarget: "13" },
    14: { id: 14, nombre: "SECURIS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "014.png", botones: genB(8,5,3,1), codTarget: "14" },
    15: { id: 15, nombre: "SCUTUM", elemento: "TERRA", tipo: "ARMA", imgEscudo: "015.png", botones: genB(1,2,8,0), codTarget: "15" },
    16: { id: 16, nombre: "GLADIUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "016.png", botones: genB(6,2,4,1), codTarget: "16" },
    17: { id: 17, nombre: "ARCUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "017.png", botones: genB(9,5,1,0), codTarget: "17" },
    18: { id: 18, nombre: "MANUBALLISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "018.png", botones: genB(8,1,2,2), codTarget: "18" },
    19: { id: 19, nombre: "BALISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "019.png", botones: genB(10,0,2,0), codTarget: "19" },
    20: { id: 20, nombre: "ONIAGER", elemento: "TERRA", tipo: "ARMA", imgEscudo: "020.png", botones: genB(9,1,3,1), codTarget: "20" },
    21: { id: 21, nombre: "FENRIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(7,1,2,2), codTarget: "21" },
    22: { id: 22, nombre: "THALGRIM", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(4,3,8,3), codTarget: "22" },
    23: { id: 23, nombre: "AQUILON", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(2,5,3,9), codTarget: "23" },
    24: { id: 24, nombre: "NIVIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(6,2,5,9), codTarget: "24" },
    25: { id: 25, nombre: "AURORA", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(8,7,7,6), codTarget: "25" },
    26: { id: 26, nombre: "BOREAS", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(5,2,3,1), codTarget: "26" },
    27: { id: 27, nombre: "VALKYR", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(9,1,2,1), codTarget: "27" },
    28: { id: 28, nombre: "EIDOLON", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(3,4,9,2), codTarget: "28" },
    29: { id: 29, nombre: "KORIN", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(2,7,2,7), codTarget: "29" },
    30: { id: 30, nombre: "TYRION", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(6,6,6,5), codTarget: "30" },
    41: { id: 41, nombre: "SCORPIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(5,1,1,5), codTarget: "41" },
    42: { id: 42, nombre: "TRITONIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(3,6,4,6), codTarget: "42" },
    43: { id: 43, nombre: "HYDRUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(5,8,8,4), codTarget: "43" },
    44: { id: 44, nombre: "LEVIATHAN", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(7,9,2,7), codTarget: "44" },
    45: { id: 45, nombre: "TIAMAT", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(9,6,7,12), codTarget: "45" },
    46: { id: 46, nombre: "HASTATUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(2,7,2,3), codTarget: "46" },
    47: { id: 47, nombre: "CORSARIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(4,5,3,4), codTarget: "47" },
    48: { id: 48, nombre: "ORACULUM", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(6,1,5,6), codTarget: "48" },
    49: { id: 49, nombre: "ADMIRALIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(8,5,6,6), codTarget: "49" },
    50: { id: 50, nombre: "NEPTUNUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(10,7,8,7), codTarget: "50" },
    61: { id: 61, nombre: "FAMILIARES", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(1,3,2,3), codTarget: "61" },
    62: { id: 62, nombre: "ELEMENTUM", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(3,5,4,5), codTarget: "62" },
    63: { id: 63, nombre: "PHANTASMA", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(5,8,1,1), codTarget: "63" },
    64: { id: 64, nombre: "AVATARUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(7,2,9,5), codTarget: "64" },
    65: { id: 65, nombre: "AETHERUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(9,5,7,5), codTarget: "65" },
    66: { id: 66, nombre: "TYRO", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(2,2,2,1), codTarget: "66" },
    67: { id: 67, nombre: "QUAESITOR", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(4,5,1,4), codTarget: "67" },
    68: { id: 68, nombre: "MIMUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(6,1,4,6), codTarget: "68" },
    69: { id: 69, nombre: "ARCHIMAGUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(8,3,5,2), codTarget: "69" },
    70: { id: 70, nombre: "MAGITER", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(10,5,7,4), codTarget: "70" },
    81: { id: 81, nombre: "IGNIS FIALA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "081.png", botones: genB(6,0,-2,2), codTarget: "81" },
    82: { id: 82, nombre: "SPECULUM", elemento: "TERRA", tipo: "ARTEFACTO", imgEscudo: "082.png", botones: genB(1,2,7,4), codTarget: "82" },
    86: { id: 86, nombre: "AEGIS", elemento: "AQUA", tipo: "ARTEFACTO", imgEscudo: "086.png", botones: genB(1,5,10,4), codTarget: "86" },
    90: { id: 90, nombre: "VITA", elemento: "COELI", tipo: "POCION", imgEscudo: "090.png", botones: genB(1,8,3,4), codTarget: "90" },
    94: { id: 94, nombre: "AMBROSIA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "094.png", botones: genB(10,5,5,5), codTarget: "94" },
    96: { id: 96, nombre: "FUROR", elemento: "TERRA", tipo: "POCION", imgEscudo: "096.png", botones: genB(14,10,0,0), codTarget: "96" },
    99: { id: 99, nombre: "JUDEX", elemento: "TERRA", tipo: "BUHO", imgEscudo: "099.png", botones: genB(4,4,4,4), codTarget: "99" },
    108: { id: 108, nombre: "IMPERATOR", elemento: "NEUTRO", tipo: "BUHO", imgEscudo: "108.png", botones: genB(10,6,4,6), codTarget: "108" }
};

// --- MOTOR DEL OJO - ULTRA OPTIMIZADO ---
let scanning = false;
let lastConfirmedId = null;
let currentCandidateId = null;
let confidenceCounter = 0;
let guiaScanner = null;
let lastCheckTime = 0;
const MIN_FRAME_INTERVAL = 33; // ~30 FPS

export async function iniciarOjo(containerId, onEncontrado) {
    const container = document.getElementById(containerId);
    const video = document.createElement('video');
    video.style.width = '100%'; video.style.height = '100%'; video.style.objectFit = 'cover';
    video.setAttribute('playsinline', true); video.setAttribute('muted', true);
    container.appendChild(video);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    
    guiaScanner = document.getElementById('guia-scanner');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: "environment",
                width: { ideal: 640 },
                height: { ideal: 480 }
            } 
        });
        video.srcObject = stream;
        video.play();
        scanning = true;
        requestAnimationFrame(tick);
    } catch (err) { 
        console.error("Error cámara:", err);
        if (guiaScanner) guiaScanner.style.borderColor = '#ff0000';
    }

    function tick() {
        if (!scanning) return;
        
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
                if (guiaScanner) guiaScanner.style.borderColor = '#ff0000';
                requestAnimationFrame(tick);
                return;
            }

            const code = window.jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                const detectId = code.data.trim();
                
                if (guiaScanner) {
                    guiaScanner.classList.remove('verde');
                    guiaScanner.classList.add('dorado');
                }
                
                // SENSIBILIDAD EXTREMA: Confirma casi instantáneamente
                if (detectId === currentCandidateId) {
                    confidenceCounter++;
                } else {
                    currentCandidateId = detectId;
                    confidenceCounter = 1;
                }

                // Trigger ultra-rápido (sin esperas adicionales)
                if (confidenceCounter >= 1 && detectId !== lastConfirmedId) {
                    lastConfirmedId = detectId;
                    
                    if (guiaScanner) {
                        guiaScanner.classList.remove('dorado');
                        guiaScanner.classList.add('verde');
                    }
                    
                    const original = CARTAS[parseInt(detectId)] || Object.values(CARTAS).find(c => c.codTarget == detectId);
                    if (original) {
                        onEncontrado(JSON.parse(JSON.stringify(original)));
                        
                        setTimeout(() => {
                            if (guiaScanner) {
                                guiaScanner.classList.remove('verde', 'dorado');
                            }
                        }, 100);
                    }
                }
            } else {
                currentCandidateId = null;
                confidenceCounter = 0;
            }
        }
        requestAnimationFrame(tick);
    }
}

export function resetUltimoId() {
    lastConfirmedId = null;
    currentCandidateId = null;
    confidenceCounter = 0;
    if (guiaScanner) guiaScanner.classList.remove('verde', 'dorado');
}

export { RUTA_BASE, VIDEOS_BATALLA };