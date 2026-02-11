import { CARTAS } from './biblioteca.js';

let scanning = false;
let lastDetectedId = null;
let lostTimeout = null;

export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    const container = document.getElementById(containerId);
    
    // Crear video para la cámara
    const video = document.createElement('video');
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.setAttribute('playsinline', true);
    container.appendChild(video);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "environment" } 
        });
        video.srcObject = stream;
        video.play();
        scanning = true;
        requestAnimationFrame(tick);
    } catch (err) {
        console.error("Error al acceder a la cámara:", err);
    }

    function tick() {
        if (!scanning) return;

        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            // jsQR se carga globalmente en batalla.html
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                // Si detecta un código (ej: "1")
                const detectId = code.data.trim();
                
                if (lostTimeout) { clearTimeout(lostTimeout); lostTimeout = null; }

                if (detectId !== lastDetectedId) {
                    lastDetectedId = detectId;
                    const carta = buscarCarta(detectId);
                    if (carta) {
                        console.log("✅ Identificado:", carta.nombre);
                        onEncontrado(carta);
                    }
                }
            } else {
                // Lógica de pérdida de rastro (1 segundo de gracia)
                if (!lostTimeout) {
                    lostTimeout = setTimeout(() => {
                        lastDetectedId = null;
                        onPerdido();
                    }, 1000);
                }
            }
        }
        requestAnimationFrame(tick);
    }

    function buscarCarta(id) {
        // Busca en la biblioteca por ID numérico
        const num = parseInt(id);
        return CARTAS[num] || Object.values(CARTAS).find(c => c.codTarget == id);
    }
}