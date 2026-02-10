// ojo.js - MODULO DE REALIDAD AUMENTADA (Optimizado)
import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { RUTA_BASE } from './biblioteca.js';

let mindarThree = null;

export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    if (mindarThree) return;

    mindarThree = new MindARThree({
        container: document.getElementById(containerId),
        imageTargetSrc: RUTA_BASE + 'targets1.mind', 
        maxTrack: 1, // Enfoca toda la potencia en una sola carta
        uiLoading: "no",
        uiScanning: "no",
        uiError: "no",
        // Parámetros de estabilidad para evitar confusiones
        filterMinCF: 0.0001, 
        filterBeta: 0.001
    });

    const { renderer, scene, camera } = mindarThree;

    // Registramos los 58 targets por su ID de compilación
    for (let i = 0; i < 58; i++) {
        const anchor = mindarThree.addAnchor(i);
        
        // El ojo ahora solo reporta el NÚMERO que ve, no busca nombres
        anchor.onTargetFound = () => {
            onEncontrado(i); 
        };

        anchor.onTargetLost = () => {
            onPerdido();
        };

        // Objeto invisible para mantener el tracking estable
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
        );
        anchor.group.add(plane);
    }

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}