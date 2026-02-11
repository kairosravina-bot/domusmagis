import { CARTAS } from './biblioteca.js';

export async function iniciarOjo(containerId, onEncontrado) {
    const container = document.getElementById(containerId);
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    
    let ultimoId = null;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "environment", width: 1280, height: 720 } 
        });
        video.srcObject = stream;
        video.setAttribute("playsinline", true);
        video.play();
        container.appendChild(video);

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
                    const idString = code.data.trim();
                    const idNum = parseInt(idString);
                    // Solo actualiza si el ID es un número válido y cambió
                    if (!isNaN(idNum) && idNum !== ultimoId) {
                        if (CARTAS[idNum]) {
                            ultimoId = idNum;
                            console.log("✅ QR detectado:", idNum);
                            // Enviamos la carta Y el número escaneado real
                            onEncontrado(CARTAS[idNum], idString);
                        }
                    }
                }
            }
            requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    } catch (e) {
        console.error("Error cámara:", e);
    }
}