// ojo.js - MODULO DE REALIDAD AUMENTADA (MindAR + Three) V100
import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { RUTA_BASE } from './biblioteca.js';

let mindarThree = null;

// Esta función inicia la cámara y recibe dos funciones del juego:
// onEncontrado(id) -> Qué hacer cuando ve una carta
// onPerdido()      -> Qué hacer cuando la pierde
export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    if (mindarThree) return; // Evitar doble inicio

    console.log("Iniciando OJO DE DOMUS MAGI (108 CARTAS)...");

    mindarThree = new MindARThree({
        container: document.getElementById(containerId),
        imageTargetSrc: RUTA_BASE + 'targets1.mind', // Archivo .mind universal con las 108 cartas
        maxTrack: 1,
        uiLoading: "no",
        uiScanning: "no",
        uiError: "no"
    });

    const { renderer, scene, camera } = mindarThree;

    // Crear anclas invisibles para los IDs del 0 al 107
    for (let i = 0; i < 108; i++) {
        const anchor = mindarThree.addAnchor(i);
        // Plano invisible para ayudar al tracking
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
        const plane = new THREE.Mesh(geometry, material);
        anchor.group.add(plane);

        // Eventos
        anchor.onTargetFound = () => {
            console.log("OJO: Detectado ID " + i);
            onEncontrado(i);
        };

        anchor.onTargetLost = () => {
            console.log("OJO: Perdido ID " + i);
            onPerdido();
        };
    }

    await mindarThree.start();
    
    // Bucle de renderizado
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}