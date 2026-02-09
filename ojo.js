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
        uiLoading: "no", uiScanning: "no", uiError: "no"
    });

    const { renderer, scene, camera } = mindarThree;

    Object.keys(CARTAS).forEach(i => {
        const anchor = mindarThree.addAnchor(parseInt(i));
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
        const plane = new THREE.Mesh(geometry, material);
        anchor.group.add(plane);

        anchor.onTargetFound = () => onEncontrado(i);
        anchor.onTargetLost = () => onPerdido();
    });

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}