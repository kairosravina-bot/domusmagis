import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { RUTA_BASE } from './biblioteca.js';

let mindarThree = null;

export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    if (mindarThree) return;

    mindarThree = new MindARThree({
        container: document.getElementById(containerId),
        imageTargetSrc: RUTA_BASE + 'targets1.mind', 
        maxTrack: 1,
        uiLoading: "no", uiScanning: "no", uiError: "no"
    });

    const { renderer, scene, camera } = mindarThree;

    // Escuchar los 100 posibles slots del archivo .mind
    for (let i = 0; i <= 100; i++) {
        const anchor = mindarThree.addAnchor(i);
        // El ID que MindAR pasa es 'i'. Lo usamos para buscar en CARTAS.
        anchor.onTargetFound = () => { onEncontrado(i); }; 
        anchor.onTargetLost = () => { onPerdido(); };
    }

    await mindarThree.start();
    renderer.setAnimationLoop(() => { renderer.render(scene, camera); });
}