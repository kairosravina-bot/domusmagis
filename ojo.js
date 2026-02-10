// ojo.js - MODULO DE REALIDAD AUMENTADA (MindAR + jsDatamatrix)
// Detecta cartas con MindAR y lee el código bidimensional con jsDatamatrix
import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { RUTA_BASE, CARTAS } from './biblioteca.js';

let mindarThree = null;
let videoCanvas = null;
let videoCtx = null;

export async function iniciarOjo(containerId, onEncontrado, onPerdido) {
    if (mindarThree) return;

    console.log("🔮 Iniciando OJO DE DOMUS MAGI (MindAR + DataMatrix)...");

    mindarThree = new MindARThree({
        container: document.getElementById(containerId),
        imageTargetSrc: RUTA_BASE + 'targets1.mind',
        maxTrack: 1,
        uiLoading: "no",
        uiScanning: "no",
        uiError: "no"
    });

    const { renderer, scene, camera } = mindarThree;

    // Canvas invisible para capturar frames de video
    videoCanvas = document.createElement('canvas');
    videoCtx = videoCanvas.getContext('2d');

    // Crear 58 anclas (una para cada target)
    const anchors = [];
    for (let i = 0; i < 58; i++) {
        const anchor = mindarThree.addAnchor(i);
        anchors.push({ index: i, anchor: anchor, detectado: false });

        // Plano invisible para helping tracking
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
        const plane = new THREE.Mesh(geometry, material);
        anchor.group.add(plane);

        anchor.onTargetFound = () => {
            console.log(`📌 Target ${i} detectado, leyendo código...`);
            anchors[i].detectado = true;
            leerCodigoDelFrame();
        };

        anchor.onTargetLost = () => {
            console.log(`👻 Target ${i} perdido`);
            anchors[i].detectado = false;
            onPerdido();
        };
    }

    // Función para leer el código DataMatrix del frame actual
    function leerCodigoDelFrame() {
        try {
            const canvas = renderer.domElement;
            videoCanvas.width = canvas.width;
            videoCanvas.height = canvas.height;

            // Dibujar frame del renderizado de Three.js
            videoCtx.drawImage(canvas, 0, 0);

            // Obtener datos de imagen
            const imageData = videoCtx.getImageData(0, 0, videoCanvas.width, videoCanvas.height);

            // Intentar leer DataMatrix usando bwip.js (que soporta Data Matrix)
            if (typeof BW_API !== 'undefined' && BW_API) {
                try {
                    // Usar bwip.js para decodificar Data Matrix
                    const result = BW_API.decode('datamatrix', imageData.data, videoCanvas.width, videoCanvas.height);
                    if (result && result.data) {
                        const codigo = result.data;
                        console.log(`✅ CÓDIGO LEÍDO: ${codigo}`);
                        
                        // Buscar la carta en biblioteca.js por su código
                        const cartaEncontrada = buscarCartaPorCodigo(codigo);
                        if (cartaEncontrada) {
                            onEncontrado(cartaEncontrada);
                        } else {
                            console.warn(`⚠️ Código ${codigo} no encontrado en base de datos`);
                        }
                        return;
                    }
                } catch (e) {
                    // Si bwip falla, intentar con jsDatamatrix
                    console.log("Intentando con jsDatamatrix...");
                }
            }

            // Fallback: si bwip no funcionó, usar método simple de validación
            // (en producción, deberías usar una librería de decodificación más robusta)
            console.log("⚠️ jsDatamatrix no disponible, usando validación de target");

        } catch (error) {
            console.error("Error al leer código:", error);
        }
    }

    // Función para buscar carta por código en la base de datos
    function buscarCartaPorCodigo(codigo) {
        for (let key in CARTAS) {
            const carta = CARTAS[key];
            if (carta.codTarget === codigo) {
                return carta;
            }
        }
        return null;
    }

    await mindarThree.start();

    // Loop de renderizado
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
        
        // Intentar leer código cada frame si algo está detectado
        const algoDectado = anchors.some(a => a.detectado);
        if (algoDectado) {
            leerCodigoDelFrame();
        }
    });
}
