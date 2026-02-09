// ojo.js - MODULO DE REALIDAD AUMENTADA (MindAR + Three)
import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { RUTA_BASE, CARTAS } from './biblioteca.js';

let mindarThree = null;

export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    if (mindarThree) return;

    mindarThree = new MindARThree({
        container: document.getElementById(containerId),
        imageTargetSrc: RUTA_BASE + 'targets1.mind', 
        maxTrack: 1,
        uiLoading: "no",
        uiScanning: "no",
        uiError: "no"
    });

    const { renderer, scene, camera } = mindarThree;

    // Registramos los 58 targets (del 0 al 57)
    for (let targetId = 0; targetId < 58; targetId++) {
        const anchor = mindarThree.addAnchor(targetId);
        
        // Obtenemos la carta correspondiente de la biblioteca por su índice de target
        const carta = CARTAS[targetId];
        const codReal = carta ? carta.codTarget : null;

        anchor.onTargetFound = () => {
            if (codReal) {
                console.log("Detectado:", codReal);
                onEncontrado(codReal);
            }
        };

        anchor.onTargetLost = () => {
            onPerdido();
        };
    }

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}