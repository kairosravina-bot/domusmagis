import { CARTAS } from './biblioteca.js';

let scanning = false;
let lastDetectedId = null;
let lostTimeout = null;

export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    const container = document.getElementById(containerId);
    
    const video = document.createElement('video');
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.setAttribute('playsinline', true);
    video.setAttribute('muted', true);
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
        console.error("Error cámara:", err);
    }

    function tick() {
        if (!scanning) return;

        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            // jsQR se encarga de la lectura del número
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                const detectId = code.data.trim();
                
                if (lostTimeout) { clearTimeout(lostTimeout); lostTimeout = null; }

                // Cambio de carta detectado
                if (detectId !== lastDetectedId) {
                    lastDetectedId = detectId;
                    const cartaOriginal = buscarCarta(detectId);
                    if (cartaOriginal) {
                        // Enviamos una COPIA para evitar que valores de una carta pisen a otra
                        onEncontrado(JSON.parse(JSON.stringify(cartaOriginal)));
                    }
                }
            } else {
                // Si no hay código, esperamos un momento antes de dar por perdida la carta
                if (!lostTimeout) {
                    lostTimeout = setTimeout(() => {
                        lastDetectedId = null;
                        onPerdido();
                    }, 800); 
                }
            }
        }
        requestAnimationFrame(tick);
    }

    function buscarCarta(id) {
        const num = parseInt(id);
        // Prioridad por ID numérico directo (1, 2, 3...)
        if (CARTAS[num]) return CARTAS[num];
        // Búsqueda por codTarget si el QR tiene ceros a la izquierda (001, 005...)
        return Object.values(CARTAS).find(c => c.codTarget == id || parseInt(c.codTarget) == num);
    }
}