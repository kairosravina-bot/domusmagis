// ojo.js - MODULO DE REALIDAD AUMENTADA
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
        uiLoading: "no",
        uiScanning: "no",
        uiError: "no",
        filterMinCF: 0.0001, // Aumenta la estabilidad
        filterBeta: 0.001
    });

    const { renderer, scene, camera } = mindarThree;

    // Registramos los 58 targets uno por uno
    for (let i = 0; i < 58; i++) {
        const anchor = mindarThree.addAnchor(i);
        
        // Usamos una función autoejecutada para cerrar el alcance de 'idx'
        ((idx) => {
            anchor.onTargetFound = () => {
                console.log("Target detectado físicamente:", idx);
                onEncontrado(idx); 
            };
            anchor.onTargetLost = () => {
                onPerdido();
            };
        })(i);

        // Objeto invisible para ayudar al motor
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
        const plane = new THREE.Mesh(geometry, material);
        anchor.group.add(plane);
    }

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}