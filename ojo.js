import { CARTAS } from './biblioteca.js';

/**
 * Motor de Escaneo QR "Domus Magi"
 * @param {string} containerId - Div donde se mostrará la cámara
 * @param {function} onEncontrado - Callback cuando detecta una carta nueva
 */
export async function iniciarOjo(containerId, onEncontrado) {
    const container = document.getElementById(containerId);
    
    // Crear elementos de video y procesamiento
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    
    let ultimoIdDetectado = null;

    console.log("🔭 Iniciando Bucle de Escaneo QR...");

    try {
        // 1. Configurar Cámara
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: "environment",
                width: { ideal: 1280 },
                height: { ideal: 720 }
            } 
        });
        
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // Requerido para iOS
        video.play();
        container.appendChild(video);

        // 2. Cargar Librería de Decodificación (jsQR) de forma dinámica
        await cargarScript("https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js");

        // 3. Bucle de Detección
        function bucle() {
            if (video.readyState === video.HAVE_ENOUGH_DATA) {
                // Ajustar canvas al tamaño del video
                canvas.height = video.videoHeight;
                canvas.width = video.videoWidth;
                
                // Dibujar frame actual en el canvas oculto
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                
                // Obtener datos de imagen para escanear
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                
                // Intentar leer QR
                const code = window.jsQR(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: "dontInvert",
                });

                if (code && code.data) {
                    const numeroDetectado = parseInt(code.data.trim());

                    // Solo actuar si el número es válido y es distinto al actual
                    if (!isNaN(numeroDetectado) && numeroDetectado !== ultimoIdDetectado) {
                        const carta = CARTAS[numeroDetectado];
                        
                        if (carta) {
                            console.log(`✅ Carta Detectada: ${numeroDetectado} - ${carta.nombre}`);
                            ultimoIdDetectado = numeroDetectado;
                            onEncontrado(carta);
                        } else {
                            console.warn(`⚠️ QR detectó el número ${numeroDetectado} pero no existe en la biblioteca.`);
                        }
                    }
                }
            }
            requestAnimationFrame(bucle);
        }

        requestAnimationFrame(bucle);

    } catch (err) {
        console.error("❌ Error al acceder a la cámara:", err);
        alert("No se pudo acceder a la cámara. Asegúrate de dar permisos HTTPS.");
    }
}

/**
 * Función auxiliar para cargar la librería jsQR si no está presente
 */
function cargarScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}