// --- BIBLIOTECA INTEGRADA EN EL OJO ---
const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
const VIDEOS_BATALLA = ["Explosion_Elemental.mp4", "Invocaciones_Etereas.mp4"];

const genB = (i, a, t, m) => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: "ataque.mp4" },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: "cura.mp4" },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: "defensa.mp4" },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: "magia.mp4" }
});

const CARTAS = {
    1: { id: 1, nombre: "APER", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(6,1,5,0), codTarget: "1" },
    2: { id: 2, nombre: "SAXUM", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(3,1,12,1), codTarget: "2" },
    3: { id: 3, nombre: "BESTIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(9,1,5,5), codTarget: "3" },
    4: { id: 4, nombre: "LEO", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(8,5,7,4), codTarget: "4" },
    5: { id: 5, nombre: "GAIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(10,5,8,3), codTarget: "5" },
    6: { id: 6, nombre: "TIRONIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(5,2,4,1), codTarget: "6" },
    7: { id: 7, nombre: "EQUES", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(8,2,6,1), codTarget: "7" },
    8: { id: 8, nombre: "SAGITIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(10,2,5,3), codTarget: "8" },
    9: { id: 9, nombre: "ALCHEMIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(4,9,5,6), codTarget: "9" },
    10: { id: 10, nombre: "CAESAR", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(9,8,6,4), codTarget: "10" },
    11: { id: 1, nombre: "SICA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "011.png", botones: genB(7,1,2,0), codTarget: "11" },
    12: { id: 2, nombre: "HASTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "012.png", botones: genB(6,4,3,0), codTarget: "12" },
    13: { id: 3, nombre: "CLAVA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "013.png", botones: genB(8,1,2,0), codTarget: "13" },    
    14: { id: 4, nombre: "SECURIS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "014.png", botones: genB(8,5,3,1), codTarget: "14" },
    15: { id: 5, nombre: "SCUTUM", elemento: "TERRA", tipo: "ARMA", imgEscudo: "015.png", botones: genB(1,2,8,0), codTarget: "15" },
    16: { id: 6, nombre: "GLADIUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "016.png", botones: genB(6,2,4,1), codTarget: "16" },
    17: { id: 7, nombre: "ARCUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "017.png", botones: genB(9,5,1,0), codTarget: "17" },
    18: { id: 8, nombre: "MANUBALLISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "018.png", botones: genB(8,1,2,2), codTarget: "18" },
    19: { id: 9, nombre: "BALISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "019.png", botones: genB(10,0,2,0), codTarget: "19" },
    20: { id: 10, nombre: "ONIAGER", elemento: "TERRA", tipo: "ARMA", imgEscudo: "020.png", botones: genB(9,1,3,1), codTarget: "20" },
    21: { id: 1, nombre: "FENRIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(7,1,2,2), codTarget: "21" },
    22: { id: 2, nombre: "THALGRIM", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(4,3,8,3), codTarget: "22" },
    23: { id: 3, nombre: "AQUILON", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(2,5,3,9), codTarget: "23" },
    24: { id: 4, nombre: "NIVIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(6,2,5,9), codTarget: "24" },
    25: { id: 5, nombre: "AURORA", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(8,7,7,6), codTarget: "25" },
    26: { id: 6, nombre: "BOREAS", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(5,2,3,1), codTarget: "26" },
    27: { id: 7, nombre: "VALKYR", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(9,1,2,1), codTarget: "27" },
    28: { id: 8, nombre: "EIDOLON", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(3,4,9,2), codTarget: "28" },
    29: { id: 9, nombre: "KORIN", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(2,7,2,7), codTarget: "29" },
    30: { id: 10, nombre: "TYRION", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(6,6,6,5), codTarget: "30" },
    31: { id: 1, nombre: "SICA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(5,4,2,4), codTarget: "31" },
    32: { id: 2, nombre: "HASTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(6,3,3,3), codTarget: "32" },
    33: { id: 3, nombre: "CLAVA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(7,1,2,5), codTarget: "33" },    
    34: { id: 4, nombre: "SECURIS", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(7,2,2,4), codTarget: "34" },
    35: { id: 5, nombre: "SCUTUM", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(1,4,2,6), codTarget: "35" },
    36: { id: 6, nombre: "GLADIUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(6,3,3,4), codTarget: "36" },
    37: { id: 7, nombre: "ARCUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(6,6,1,5), codTarget: "37" },
    38: { id: 8, nombre: "MANUBALLISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(7,2,2,4), codTarget: "38" },
    39: { id: 9, nombre: "BALISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(9,1,2,5), codTarget: "39" },
    40: { id: 10, nombre: "ONIAGER", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(8,1,2,7), codTarget: "40" },
    41: { id: 1, nombre: "SCORPIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(5,1,5,5), codTarget: "41" },
    42: { id: 2, nombre: "TRITONIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(6,4,6,4), codTarget: "42" },
    43: { id: 3, nombre: "HYDRUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(8,8,4,2), codTarget: "43" },
    44: { id: 4, nombre: "LEVIATHAN", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(9,2,7,5), codTarget: "44" },
    45: { id: 5, nombre: "TIAMAT", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(6,7,12,5), codTarget: "45" },
    46: { id: 6, nombre: "HASTATUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(7,2,3,1), codTarget: "46" },
    47: { id: 7, nombre: "CORSARIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(5,3,4,2), codTarget: "47" },
    48: { id: 8, nombre: "ORACULUM", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(1,5,6,9), codTarget: "48" },
    49: { id: 9, nombre: "ADMIRALIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(5,6,6,5), codTarget: "49" },
    50: { id: 10, nombre: "NEPTUNUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(7,8,7,6), codTarget: "50" },
    51: { id: 1, nombre: "SICA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-AG-AR1.png", botones: genB(5,4,3,2), codTarget: "51" },
    52: { id: 2, nombre: "HASTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(6,5,5,3), codTarget: "52" },
    53: { id: 3, nombre: "CLAVA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-AG-AR1.png", botones: genB(6,2,3,1), codTarget: "53" },    
    54: { id: 4, nombre: "SECURIS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(6,2,4,2), codTarget: "54" },
    55: { id: 5, nombre: "SCUTUM", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-AG-AR1.png", botones: genB(1,5,9,3), codTarget: "55" },
    56: { id: 6, nombre: "GLADIUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(6,4,4,2), codTarget: "56" },
    57: { id: 7, nombre: "ARCUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-TI-AG-AR1.png", botones: genB(5,4,2,3), codTarget: "57" },
    58: { id: 8, nombre: "MANUBALLISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(7,2,3,2), codTarget: "58" },
    59: { id: 9, nombre: "BALISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-AG-AR1.png", botones: genB(9,3,4,3), codTarget: "59" },
    60: { id: 10, nombre: "ONIAGER", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(8,2,5,3), codTarget: "60" },
    61: { id: 1, nombre: "FAMILIARES", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(3,2,3,8), codTarget: "61" },
    62: { id: 2, nombre: "ELEMENTUM", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(5,4,5,9), codTarget: "62" },
    63: { id: 3, nombre: "PHANTASMA", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(8,1,1,11), codTarget: "63" },
    64: { id: 4, nombre: "AVATARUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(2,9,5,10), codTarget: "64" },
    65: { id: 5, nombre: "AETHERUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(5,7,5,13), codTarget: "65" },
    66: { id: 6, nombre: "TYRO", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(2,2,1,9), codTarget: "66" },
    67: { id: 7, nombre: "QUAESITOR", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(5,1,4,7), codTarget: "67" },
    68: { id: 8, nombre: "MIMUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(1,4,6,10), codTarget: "68" },
    69: { id: 9, nombre: "ARCHIMAGUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(3,5,2,12), codTarget: "69" },
    70: { id: 10, nombre: "MAGITER", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(5,7,4,10), codTarget: "70" }, 
    71: { id: 1, nombre: "SICA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(4,3,1,7), codTarget: "71" },
    72: { id: 2, nombre: "HASTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(4,4,2,7), codTarget: "72" },
    73: { id: 3, nombre: "CLAVA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(5,2,2,8), codTarget: "73" },    
    74: { id: 4, nombre: "SECURIS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(6,1,1,8), codTarget: "74" },
    75: { id: 5, nombre: "SCUTUM", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(1,5,5,9), codTarget: "75" },
    76: { id: 6, nombre: "GLADIUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(6,2,1,7), codTarget: "76" },
    77: { id: 7, nombre: "ARCUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(4,4,1,8), codTarget: "77" },
    78: { id: 8, nombre: "MANUBALLISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(2,4,2,10), codTarget: "78" },
    79: { id: 9, nombre: "BALISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(7,2,2,10), codTarget: "79" },
    80: { id: 10, nombre: "ONIAGER", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(7,3,2,11), codTarget: "80" },
    81: { id: 1, nombre: "IGNIS PHIALA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(6,0,-2,2), codTarget: "81" },
    82: { id: 2, nombre: "VITA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(1,8,3,4), codTarget: "82" },
    83: { id: 3, nombre: "SPECULUM", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(1,2,7,4), codTarget: "83" },
    84: { id: 4, nombre: "AETHER", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(1,3,1,8), codTarget: "84" },
    85: { id: 5, nombre: "MANICA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(7,0,-2,2), codTarget: "85" },
    86: { id: 6, nombre: "PETRA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(2,1,8,1), codTarget: "86" },
    87: { id: 7, nombre: "LUCERNA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(1,7,2,3), codTarget: "87" },
    88: { id: 8, nombre: "VENENUN", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(6,0,2,4), codTarget: "88" },
    89: { id: 9, nombre: "APERTUM", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(4,5,3,5), codTarget: "89" },
    90: { id: 10, nombre: "AMBROSIA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(5,5,5,5), codTarget: "90" },
    91: { id: 11, nombre: "AEGIS", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(1,5,10,4), codTarget: "91" },
    92: { id: 12, nombre: "VELOCITAS", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(6,2,1,4), codTarget: "92" },
    93: { id: 13, nombre: "VEXILLUM", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(3,9,2,3), codTarget: "93" },
    94: { id: 14, nombre: "FUROR", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(10,0,0,0), codTarget: "94" },
    95: { id: 15, nombre: "OCULUS", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(2,9,2,10), codTarget: "95" },
    96: { id: 16, nombre: "OBLIVIO", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(1,3,5,6), codTarget: "96" },
    97: { id: 17, nombre: "MONOLITH", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(0,0,12,6), codTarget: "97" },
    98: { id: 18, nombre: "FORTUNA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(4,4,4,4), codTarget: "98" },
    99: { id: 1, nombre: "JUDEX", elemento: "TERRA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(4,4,4,4), codTarget: "99" },
    100: { id: 2, nombre: "CARNIFEX", elemento: "COELI", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(7,1,2,2), codTarget: "100" },
    101: { id: 3, nombre: "SCRIPTOR", elemento: "TERRA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(1,3,3,7), codTarget: "101" },
    102: { id: 4, nombre: "CUSTOS", elemento: "COELI", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(2,2,8,2), codTarget: "102" },
    103: { id: 5, nombre: "TEMPUS", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(3,6,4,3), codTarget: "103" },
    104: { id: 6, nombre: "UMBRA", elemento: "AQUA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(6,4,4,3), codTarget: "104" },
    105: { id: 7, nombre: "MACHINA", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(5,1,9,1), codTarget: "105" },
    106: { id: 8, nombre: "AUGUR", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(1,5,2,8), codTarget: "106" },
    107: { id: 9, nombre: "JUSTITIA", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(5,5,5,1), codTarget: "107" },
    108: { id: 10, nombre: "IMPERATOR", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(6,4,6,4), codTarget: "108" }
};

// ============ SCANNER QR ============
let scanning = false;
let lastCheckTime = 0;
const MIN_FRAME_INTERVAL = 50;
let lastConfirmedId = null;
let currentCandidateId = null;
let confidenceCounter = 0;
let guiaScanner = null;

export function iniciarScanner(onEncontrado) {
    const video = document.getElementById('video-qr');
    const canvas = document.getElementById('canvas-qr');
    guiaScanner = document.getElementById('guia-scanner');

    if (!video || !canvas) {
        console.error("❌ Elementos video/canvas no encontrados en DOM");
        return;
    }

    const constraints = { video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } } };

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) {
            console.error("❌ No se pudo obtener contexto 2D del canvas");
            return;
        }
        video.srcObject = stream;
        video.play();
        scanning = true;
        requestAnimationFrame(tick);
    }).catch(err => { 
        console.error("Error cámara:", err);
        if (guiaScanner) guiaScanner.style.borderColor = '#ff0000';
    });

    function tick() {
        if (!scanning) return;
        
        const now = performance.now();
        if (now - lastCheckTime < MIN_FRAME_INTERVAL) {
            requestAnimationFrame(tick);
            return;
        }
        lastCheckTime = now;
        
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            const context = canvas.getContext('2d', { willReadFrequently: true });
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            
            if (typeof window.jsQR === 'undefined') {
                console.error("jsQR no cargado");
                if (guiaScanner) guiaScanner.style.borderColor = '#ff0000';
                requestAnimationFrame(tick);
                return;
            }

            const code = window.jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                const detectId = code.data.trim();
                const idNumerico = parseInt(detectId);
                
                // Validar que sea un número entre 1-108
                if (isNaN(idNumerico) || idNumerico < 1 || idNumerico > 108) {
                    console.warn(`⚠️ QR inválido: "${detectId}" (fuera de rango 1-108)`);
                    currentCandidateId = null;
                    confidenceCounter = 0;
                    requestAnimationFrame(tick);
                    return;
                }
                
                if (guiaScanner) {
                    guiaScanner.classList.remove('verde');
                    guiaScanner.classList.add('dorado');
                }
                
                // Requiere 2 detecciones idénticas
                if (detectId === currentCandidateId) {
                    confidenceCounter++;
                } else {
                    currentCandidateId = detectId;
                    confidenceCounter = 1;
                }

                // Confirma tras 2 frames idénticos
                if (confidenceCounter >= 2 && detectId !== lastConfirmedId) {
                    lastConfirmedId = detectId;
                    
                    if (guiaScanner) {
                        guiaScanner.classList.remove('dorado');
                        guiaScanner.classList.add('verde');
                    }
                    
                    const original = CARTAS[idNumerico];
                    console.log(`✅ QR: "${detectId}" → Carta: ${original ? original.nombre : 'NO ENCONTRADA'}`);
                    
                    if (original) {
                        onEncontrado(JSON.parse(JSON.stringify(original)));
                        
                        setTimeout(() => {
                            if (guiaScanner) {
                                guiaScanner.classList.remove('verde', 'dorado');
                            }
                        }, 200);
                    } else {
                        console.error(`❌ Carta no existe para ID: ${idNumerico}`);
                        lastConfirmedId = null;
                    }
                }
            } else {
                currentCandidateId = null;
                confidenceCounter = 0;
            }
        }
        requestAnimationFrame(tick);
    }
}

export function resetUltimoId() {
    lastConfirmedId = null;
    currentCandidateId = null;
    confidenceCounter = 0;
    if (guiaScanner) guiaScanner.classList.remove('verde', 'dorado');
}

export { RUTA_BASE, VIDEOS_BATALLA };