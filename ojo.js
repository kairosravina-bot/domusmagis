import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { CARTAS, RUTA_BASE } from './biblioteca.js';

let mindarThree = null;

export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    if (mindarThree) return;

    console.log("🔮 Iniciando OJO DE DOMUS MAGI...");

    mindarThree = new MindARThree({
        container: document.getElementById(containerId),
        imageTargetSrc: RUTA_BASE + 'targets1.mind',
        maxTrack: 1,
        uiLoading: "no",
        uiScanning: "no",
        uiError: "no"
    });

    const { renderer, scene, camera } = mindarThree;

    // Mapeo de targets a códigos
    const codigosPorTarget = [
        "001-TI-BE-ID1", "002-TI-BE-ID3", "003-TI-BE-ID5", "004-TI-BE-ID7", "005-TI-BE-ID9",
        "006-TI-HU-ID2", "007-TI-HU-ID4", "008-TI-HU-ID6", "009-TI-HU-ID8", "010-TI-HU-ID10",
        "021-CI-BE-ID1", "022-CI-BE-ID3", "023-CI-BE-ID5", "024-CI-BE-ID7", "025-CI-BE-ID9",
        "026-CI-HU-ID2", "027-CI-HU-ID4", "028-CI-HU-ID6", "029-CI-HU-ID8", "030-CI-HU-ID10",
        "041-AG-BE-ID1", "042-AG-BE-ID3", "043-AG-BE-ID5", "044-AG-BE-ID7", "045-AG-BE-ID9",
        "046-AG-HU-ID2", "047-AG-HU-ID4", "048-AG-HU-ID6", "049-AG-HU-ID8", "050-AG-HU-ID10",
        "061-MA-BE-ID1", "062-MA-BE-ID3", "063-MA-BE-ID5", "064-MA-BE-ID7", "065-MA-BE-ID9",
        "066-MA-HU-ID2", "067-MA-HU-ID4", "068-MA-HU-ID6", "069-MA-HU-ID8", "070-MA-HU-ID10",
        "081-AR-ID1", "082-AR-ID3", "083-AR-ID5", "084-AR-ID7", "085-AR-ID9",
        "086-AR-ID11", "087-AR-ID13", "088-AR-ID15", "089-AR-ID17",
        "090-PO-ID2", "091-PO-ID4", "092-PO-ID6", "093-PO-ID8", "094-PO-ID10",
        "095-PO-ID12", "096-PO-ID14", "097-PO-ID16", "098-PO-ID18"
    ];

    function buscarCartaPorCodigo(codigo) {
        for (let key in CARTAS) {
            if (CARTAS[key].codTarget === codigo) {
                return CARTAS[key];
            }
        }
        return null;
    }

    for (let i = 0; i < 58; i++) {
        const anchor = mindarThree.addAnchor(i);

        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
        const plane = new THREE.Mesh(geometry, material);
        anchor.group.add(plane);

        anchor.onTargetFound = () => {
            const codigo = codigosPorTarget[i];
            const carta = buscarCartaPorCodigo(codigo);
            
            if (carta) {
                console.log(`✅ DETECTADO: ${carta.nombre}`);
                onEncontrado(carta);
            } else {
                console.warn(`⚠️ Código no encontrado: ${codigo}`);
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
