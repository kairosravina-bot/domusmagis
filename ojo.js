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
        maxTrack: 1, // Solo una carta a la vez para máxima precisión
        uiLoading: "no",
        uiScanning: "no",
        uiError: "no"
    });

    const { renderer, scene, camera } = mindarThree;

    // Registramos los 58 targets (0 al 57)
    for (let i = 0; i < 58; i++) {
        const anchor = mindarThree.addAnchor(i);
        
        // Usamos una función de flecha para capturar el valor exacto de 'i' en cada iteración
        anchor.onTargetFound = () => {
            console.log("OJO: Target detectado índice:", i);
            onEncontrado(i); // Enviamos el índice numérico directamente
        };

        anchor.onTargetLost = () => {
            onPerdido();
        };

        // Objeto visual invisible para el tracking
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