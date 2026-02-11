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
    container.appendChild(video);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
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
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                if (lostTimeout) { clearTimeout(lostTimeout); lostTimeout = null; }
                const detectId = code.data.trim();
                if (detectId !== lastDetectedId) {
                    lastDetectedId = detectId;
                    const carta = buscarCarta(detectId);
                    if (carta) onEncontrado(carta);
                }
            } else {
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
        // Busca por el número literal (ej: "1") o por el código formateado (ej: "001")
        const num = parseInt(id);
        return CARTAS[num] || Object.values(CARTAS).find(c => c.codTarget == id || parseInt(c.codTarget) == num);
    }
}