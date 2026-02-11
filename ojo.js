import { CARTAS } from './biblioteca.js';

let scanning = false;
let lastDetectedId = null;

export async function iniciarOjo(containerId, onEncontrado) {
    const container = document.getElementById(containerId);
    const video = document.createElement('video');
    video.style.width = '100%'; video.style.height = '100%'; video.style.objectFit = 'cover';
    video.setAttribute('playsinline', true); video.setAttribute('muted', true);
    container.appendChild(video);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = stream;
        video.play();
        scanning = true;
        requestAnimationFrame(tick);
    } catch (err) { console.error("Error cámara:", err); }

    function tick() {
        if (!scanning) return;
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                const detectId = code.data.trim();
                if (detectId !== lastDetectedId) {
                    lastDetectedId = detectId;
                    const original = CARTAS[parseInt(detectId)] || Object.values(CARTAS).find(c => c.codTarget == detectId);
                    if (original) {
                        // Clonación para evitar que los valores se mezclen entre cartas
                        onEncontrado(JSON.parse(JSON.stringify(original)));
                    }
                }
            }
        }
        requestAnimationFrame(tick);
    }
}

export function resetUltimoId() {
    lastDetectedId = null;
}