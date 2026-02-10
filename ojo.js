// ojo.js - MODULO DE REALIDAD AUMENTADA (MindAR + Three)
import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { RUTA_BASE, CARTAS } from './biblioteca.js';

let mindarThree = null;

// Esta función inicia la cámara y recibe dos funciones del juego:
// onEncontrado(codTarget) -> Recibe el código completo de la carta (ej: "064-MA-BE-ID7")
// onPerdido()             -> Qué hacer cuando la pierde
export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    if (mindarThree) return; // Evitar doble inicio

    console.log("Iniciando OJO DE DOMUS MAGI...");

    mindarThree = new MindARThree({
        container: document.getElementById(containerId),
        imageTargetSrc: RUTA_BASE + 'targets1.mind', // Archivo .mind universal
        maxTrack: 1,
        uiLoading: "no",
        uiScanning: "no",
        uiError: "no"
    });

    const { renderer, scene, camera } = mindarThree;

    // Crear un ancla para CADA código de carta (58 cartas = 58 targets)
    // Cada target en el archivo .mind corresponde a un codTarget único
    for (let targetId = 0; targetId < 58; targetId++) {
        const carta = CARTAS[targetId];
        if (!carta) continue;

        const anchor = mindarThree.addAnchor(targetId);
        
        // Plano invisible para ayudar al tracking
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
        const plane = new THREE.Mesh(geometry, material);
        anchor.group.add(plane);

        // Capturar codTarget en closure
        const codTarget = carta.codTarget;

        // Eventos - cuando detecta THIS carta específica
        anchor.onTargetFound = () => {
            console.log("OJO: Detectó carta con código: " + codTarget);
            // Enviar SOLO el código completo (como un lector QR)
            onEncontrado(codTarget);
        };

        anchor.onTargetLost = () => {
            console.log("OJO: Perdió carta: " + codTarget);
            onPerdido();
        };
    }

    await mindarThree.start();
    
    // Bucle de renderizado
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}
