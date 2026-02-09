import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { RUTA_BASE, CARTAS } from './biblioteca.js';

let mindarThree = null;

export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    if (mindarThree) {
        console.log("⚠️ El ojo ya está inicializado");
        return;
    }

    try {
        console.log("🔍 Inicializando detección AR...");

        mindarThree = new MindARThree({
            container: document.getElementById(containerId),
            imageTargetSrc: RUTA_BASE + 'targets1.mind',
            maxTrack: 1,
            uiLoading: "no",
            uiScanning: "no",
            uiError: "no"
        });

        const { renderer, scene, camera } = mindarThree;

        let targetCount = 0;
        Object.keys(CARTAS).forEach(i => {
            const anchor = mindarThree.addAnchor(parseInt(i));
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0
            });
            const plane = new THREE.Mesh(geometry, material);
            anchor.group.add(plane);

            anchor.onTargetFound = () => {
                console.log(`🎯 Target encontrado: ${i} (${CARTAS[i].nombre})`);
                onEncontrado(i);
            };

            anchor.onTargetLost = () => {
                console.log(`❌ Target perdido: ${i}`);
                onPerdido();
            };

            targetCount++;
        });

        console.log(`✅ ${targetCount} targets registrados`);

        await mindarThree.start();
        
        console.log("📡 AR Engine iniciado correctamente");
        
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });

    } catch (error) {
        console.error("❌ Error al inicializar ojo.js:", error);
        console.error("Detalles del error:", error.message);
    }
}

export function detenerOjo() {
    if (mindarThree) {
        console.log("🛑 Deteniendo AR Engine...");
        mindarThree.stop();
        mindarThree = null;
    }
}