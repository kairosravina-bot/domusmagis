import { CARTAS } from './biblioteca.js';

export async function iniciarOjo(containerId, onEncontrado) {
    const container = document.getElementById(containerId);
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    
    let ultimoIdDetectado = null;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "environment", width: 1280, height: 720 } 
        });
        video.srcObject = stream;
        video.setAttribute("playsinline", true);
        video.play();
        container.appendChild(video);

        // Carga dinámica de jsQR para no depender de compilados
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js";
        document.head.appendChild(script);

        function tick() {
            if (video.readyState === video.HAVE_ENOUGH_DATA && window.jsQR) {
                canvas.height = video.videoHeight;
                canvas.width = video.videoWidth;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);

                if (code && code.data) {
                    const idLimpio = code.data.trim();
                    const idNum = parseInt(idLimpio);

                    // Solo avisamos si es un número válido y es distinto al que ya está cargado
                    if (!isNaN(idNum) && idNum !== ultimoIdDetectado && CARTAS[idNum]) {
                        ultimoIdDetectado = idNum;
                        onEncontrado(CARTAS[idNum], idLimpio);
                    }
                }
            }
            requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    } catch (e) {
        console.error("Cámara bloqueada:", e);
    }
}