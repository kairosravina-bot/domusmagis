/**
 * DOMUS MAGI - MOTOR DE BATALLA TÁCTICO
 * Programador: Solo Developer (Tú)
 */

// 1. BASE DE DATOS DE PODER (Valores de tus tablas)
const DATABASE_CARTAS = {
    0: { nombre: "Draco Sica", a: 6, d: 2, h: 1, m: 1, faccion: "azul" },
    1: { nombre: "Leo Sica", a: 4, d: 4, h: 1, m: 1, faccion: "rojo" },
    2: { nombre: "Aquila Sica", a: 4, d: 2, h: 1, m: 3, faccion: "azul" },
    3: { nombre: "Aper Sica", a: 3, d: 5, h: 1, m: 1, faccion: "rojo" },
    // Puedes seguir agregando hasta el nivel 10 aquí
};

// 2. ESTADO DEL JUEGO
let miHP = 20;
let rivalHP = 20;
let cartaActiva = null;

// 3. ELEMENTOS DE LA INTERFAZ
const uiJuego = document.getElementById('game-ui');
const pantallaVideo = document.getElementById('pantalla'); // El plano AR
const displayMiHP = document.getElementById('my-hp');
const displayRivalHP = document.getElementById('rival-hp');

// 4. DETECCIÓN DE CARTAS
// Escuchamos a todas las entidades que tengan la clase .target-card
document.querySelectorAll('.target-card').forEach((card) => {
    
    card.addEventListener("targetFound", () => {
        // Obtenemos el índice de la carta (0, 1, 2...)
        const index = card.getAttribute('mindar-image-target').split(':')[1].trim();
        cartaActiva = DATABASE_CARTAS[index];
        
        console.log("Carta en mesa: " + cartaActiva.nombre);
        uiJuego.style.display = "block"; // Mostramos los botones
    });

    card.addEventListener("targetLost", () => {
        uiJuego.style.display = "none"; // Escondemos los botones si no hay carta
        cartaActiva = null;
    });
});

// 5. FUNCIÓN MAESTRA DE ACCIÓN (Se dispara al tocar los botones)
function lanzarHechizo(tipo) {
    if (!cartaActiva) return;

    let videoId = "";
    let mensaje = "";

    // A. Selección de Animación y Lógica
    switch (tipo) {
        case 'ataque':
            videoId = "#vid-ataque";
            rivalHP -= cartaActiva.a;
            mensaje = `¡${cartaActiva.nombre} ataca con ${cartaActiva.a} de poder!`;
            break;
        case 'defensa':
            videoId = "#vid-defensa";
            mensaje = `${cartaActiva.nombre} activa escudo de nivel ${cartaActiva.d}`;
            // Aquí podrías sumar defensa para el próximo turno del rival
            break;
        case 'cura':
            videoId = "#vid-cura";
            miHP += 2;
            mensaje = "Recuperas 2 puntos de Vitalitas";
            break;
        case 'magia':
            videoId = "#vid-magia";
            rivalHP -= cartaActiva.m;
            mensaje = `¡Hechizo especial causa ${cartaActiva.m} de daño arcano!`;
            break;
    }

    // B. Ejecutar video en Realidad Aumentada
    pantallaVideo.setAttribute('src', videoId);
    const videoElement = document.querySelector(videoId);
    videoElement.muted = false; // Queremos que suene el "IMPETUS"
    videoElement.currentTime = 0;
    videoElement.play();

    // C. Actualizar Vida en Pantalla
    actualizarMarcadores();

    // D. Verificar Victoria
    if (rivalHP <= 0) {
        alert("⚔️ ¡VICTORIA! El rival ha sido desterrado de Domus Magi.");
        reiniciarJuego();
    }
}

function actualizarMarcadores() {
    displayMiHP.innerText = miHP;
    displayRivalHP.innerText = rivalHP;
    
    // Cambiar color si la vida es baja
    displayMiHP.style.color = miHP < 5 ? "red" : "#0f0";
    displayRivalHP.style.color = rivalHP < 5 ? "red" : "#0f0";
}

function reiniciarJuego() {
    miHP = 20;
    rivalHP = 20;
    actualizarMarcadores();
}

// 6. VINCULAR BOTONES FÍSICOS DE LA PANTALLA
document.getElementById('btn-impetus').addEventListener('click', () => lanzarHechizo('ataque'));
document.getElementById('btn-tutela').addEventListener('click', () => lanzarHechizo('defensa'));
document.getElementById('btn-auxilium').addEventListener('click', () => lanzarHechizo('cura'));
document.getElementById('btn-mysterium').addEventListener('click', () => lanzarHechizo('magia'));