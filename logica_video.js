/* logica.js */

// 1. BASE DE DATOS DE CARTAS (Nivel 1 al 10)
const DB_CARTAS = {
    0: { nombre: "Draco Sica (Azul)", pwr: 6 },
    1: { nombre: "Leo Sica (Rojo)", pwr: 4 },
    2: { nombre: "Aper Hasta (Rojo)", pwr: 7 },
    3: { nombre: "Aquila Hasta (Azul)", pwr: 6 }
};

let cartasActivas = new Set();
let vitalitas = 20;

const videoSource = document.getElementById('video-source');
const canvas = document.getElementById('canvas-chroma');
const ctx = canvas.getContext('2d');

// 2. DETECCIÓN MULTI-CARTA (Suma de solapas)
[0, 1, 2, 3].forEach(index => {
    const el = document.getElementById(`target${index}`);
    if (el) {
        el.addEventListener("targetFound", () => {
            cartasActivas.add(index);
            actualizarHUD();
        });
        el.addEventListener("targetLost", () => {
            cartasActivas.delete(index);
            actualizarHUD();
        });
    }
});

function actualizarHUD() {
    let sumaTotal = 0;
    cartasActivas.forEach(id => {
        if(DB_CARTAS[id]) sumaTotal += DB_CARTAS[id].pwr;
    });
    document.getElementById('pwr-total').innerText = sumaTotal;
}

// 3. EJECUCIÓN DE HECHIZOS (Botones I, T, A, M)
function ejecutar(tipo) {
    if (cartasActivas.size === 0) {
        alert("¡No hay cartas en la mesa!");
        return;
    }
    
    // Reproducir el video correspondiente
    videoSource.src = `${tipo}.mp4`;
    videoSource.play();
    
    // Lógica de juego
    if (tipo === 'cura') {
        vitalitas += 2;
        document.getElementById('hp-user').innerText = vitalitas;
    }
}

// 4. MOTOR CHROMA KEY (Limpiador de Verde en tiempo real)
function procesarChroma() {
    if (!videoSource.paused && !videoSource.ended) {
        canvas.width = videoSource.videoWidth;
        canvas.height = videoSource.videoHeight;
        ctx.drawImage(videoSource, 0, 0, canvas.width, canvas.height);
        
        let frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let l = frame.data.length / 4;

        for (let i = 0; i < l; i++) {
            let r = frame.data[i * 4 + 0];
            let g = frame.data[i * 4 + 1];
            let b = frame.data[i * 4 + 2];
            // Si el pixel es verde, lo hacemos transparente
            if (g > 100 && g > r * 1.2 && g > b * 1.2) {
                frame.data[i * 4 + 3] = 0;
            }
        }
        ctx.putImageData(frame, 0, 0);
    }
    requestAnimationFrame(procesarChroma);
}

requestAnimationFrame(procesarChroma);