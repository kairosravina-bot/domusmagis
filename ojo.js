// ojo.js - MODULO DE REALIDAD AUMENTADA (MindAR + Three)
import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { RUTA_BASE, CARTAS } from './biblioteca.js';

let mindarThree = null;

// Esta función inicia la cámara y recibe dos funciones del juego:
// onEncontrado(codTarget) -> Qué hacer cuando ve una carta (recibe el código completo)
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

    // Crear anclas para cada una de las 58 cartas
    // Cada posición en CARTAS tiene un codTarget único
    for (let targetId = 0; targetId < 58; targetId++) {
        try {
            const anchor = mindarThree.addAnchor(targetId);
            
            // Plano invisible para ayudar al tracking
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
            const plane = new THREE.Mesh(geometry, material);
            anchor.group.add(plane);

            // Obtener la carta en esta posición
            const carta = CARTAS[targetId];
            const codTarget = carta ? carta.codTarget : null;

            // Eventos
            anchor.onTargetFound = () => {
                console.log("OJO: Detectado Target " + targetId + " -> Código: " + codTarget);
                // Pasar el codTarget COMPLETO al callback
                if (codTarget) {
                    onEncontrado(codTarget);
                }
            };

            anchor.onTargetLost = () => {
                console.log("OJO: Perdido Target " + targetId);
                onPerdido();
            };
        } catch (e) {
            console.warn("No se pudo crear ancla para target " + targetId, e);
        }
    }

    await mindarThree.start();
    
    // Bucle de renderizado
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}
