// ojo_fb.js - MODULO DE REALIDAD AUMENTADA OPTIMIZADO (56 CARTAS)
// Para First Blood - Sin Búhos ni Armas
import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { RUTA_BASE } from './biblioteca_fb.js';

let mindarThree = null;

/**
 * Inicia el motor AR con 56 cartas (0-57)
 * @param {string} containerId - ID del contenedor donde renderizar
 * @param {function} onEncontrado - Callback cuando se detecta una carta (recibe ID 0-57)
 * @param {function} onPerdido - Callback cuando se pierde la detección
 */
export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    if (mindarThree) return; // Evitar doble inicio

    console.log("Iniciando OJO DE DOMUS MAGI FIRST BLOOD (56 CARTAS)...");

    try {
        mindarThree = new MindARThree({
            container: document.getElementById(containerId),
            imageTargetSrc: RUTA_BASE + 'targets1.mind', // Archivo .mind con 56+ cartas
            maxTrack: 1,
            uiLoading: "no",
            uiScanning: "no",
            uiError: "no"
        });

        const { renderer, scene, camera } = mindarThree;

        // Crear anclas invisibles para IDs 0-57 (56 cartas)
        for (let i = 0; i < 58; i++) {
            const anchor = mindarThree.addAnchor(i);
            
            // Plano invisible para tracking
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial({ 
                transparent: true, 
                opacity: 0 
            });
            const plane = new THREE.Mesh(geometry, material);
            anchor.group.add(plane);

            // Eventos de detección
            anchor.onTargetFound = () => {
                console.log(`[OJO] Detectada carta ID: ${i}`);
                onEncontrado(i);
            };

            anchor.onTargetLost = () => {
                console.log(`[OJO] Perdida carta ID: ${i}`);
                onPerdido();
            };
        }

        // Iniciar AR
        await mindarThree.start();
        console.log("✅ AR iniciado correctamente");
        
        // Bucle de renderizado
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });

    } catch (error) {
        console.error("❌ Error iniciando AR:", error);
        throw error;
    }
}

/**
 * Detiene el motor AR
 */
export function detenerOjo() {
    if (mindarThree) {
        mindarThree.stop();
        mindarThree = null;
    }
}
