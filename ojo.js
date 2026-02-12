// --- BIBLIOTECA INTEGRADA EN EL OJO ---
export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
export const VIDEOS_BATALLA = ["Explosion_Elemental.mp4", "Invocaciones_Etereas.mp4"];

const genB = (i, a, t, m) => ({
    "btn-i": { valor: i, video: "ataque.mp4" },
    "btn-a": { valor: a, video: "cura.mp4" },
    "btn-t": { valor: t, video: "defensa.mp4" },
    "btn-m": { valor: m, video: "magia.mp4" }
});

const CARTAS = {
    1: { idar: 1, id: 1, nombre: "APER", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(6,1,5,0), codTarget: "1" },
    2: { idar: 2, id: 2, nombre: "SAXUM", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(3,1,12,1), codTarget: "2" },
    3: { idar: 3, id: 3, nombre: "BESTIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(9,1,5,5), codTarget: "3" },
    4: { idar: 4, id: 4, nombre: "LEO", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(8,5,7,4), codTarget: "4" },
    5: { idar: 5, id: 5, nombre: "GAIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(10,5,8,3), codTarget: "5" },
    6: { idar: 6, id: 6, nombre: "TIRONIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(5,2,4,1), codTarget: "6" },
    7: { idar: 7, id: 7, nombre: "EQUES", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(8,2,6,1), codTarget: "7" },
    8: { idar: 8, id: 8, nombre: "SAGITIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(10,2,5,3), codTarget: "8" },
    9: { idar: 9, id: 9, nombre: "ALCHEMIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(4,9,5,6), codTarget: "9" },
    10: { idar: 10, id: 10, nombre: "CAESAR", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(9,8,6,4), codTarget: "10" },
    11: { idar: 11, id: 1, nombre: "SICA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "011.png", botones: genB(7,1,2,0), codTarget: "11" },
    12: { idar: 12, id: 2, nombre: "HASTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "012.png", botones: genB(6,4,3,0), codTarget: "12" },
    13: { idar: 13, id: 3, nombre: "CLAVA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "013.png", botones: genB(8,1,2,0), codTarget: "13" },
    14: { idar: 14, id: 4, nombre: "SECURIS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "014.png", botones: genB(8,5,3,1), codTarget: "14" },
    15: { idar: 15, id: 5, nombre: "SCUTUM", elemento: "TERRA", tipo: "ARMA", imgEscudo: "015.png", botones: genB(1,2,8,0), codTarget: "15" },
    16: { idar: 16, id: 6, nombre: "GLADIUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "016.png", botones: genB(6,2,4,1), codTarget: "16" },
    17: { idar: 17, id: 7, nombre: "ARCUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "017.png", botones: genB(9,5,1,0), codTarget: "17" },
    18: { idar: 18, id: 8, nombre: "MANUBALLISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "018.png", botones: genB(8,1,2,2), codTarget: "18" },
    19: { idar: 19, id: 9, nombre: "BALISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "019.png", botones: genB(10,0,2,0), codTarget: "19" },
    20: { idar: 20, id: 10, nombre: "ONIAGER", elemento: "TERRA", tipo: "ARMA", imgEscudo: "020.png", botones: genB(9,1,3,1), codTarget: "20" },
    21: { idar: 21, id: 1, nombre: "FENRIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(7,1,2,2), codTarget: "21" },
    22: { idar: 22, id: 2, nombre: "THALGRIM", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(4,3,8,3), codTarget: "22" },
    23: { idar: 23, id: 3, nombre: "AQUILON", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(2,5,3,9), codTarget: "23" },
    24: { idar: 24, id: 4, nombre: "NIVIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(6,2,5,9), codTarget: "24" },
    25: { idar: 25, id: 5, nombre: "AURORA", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(8,7,7,6), codTarget: "25" },
    26: { idar: 26, id: 6, nombre: "BOREAS", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(5,2,3,1), codTarget: "26" },
    27: { idar: 27, id: 7, nombre: "VALKYR", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(9,1,2,1), codTarget: "27" },
    28: { idar: 28, id: 8, nombre: "EIDOLON", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(3,4,9,2), codTarget: "28" },
    29: { idar: 29, id: 9, nombre: "KORIN", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(2,7,2,7), codTarget: "29" },
    30: { idar: 30, id: 10, nombre: "TYRION", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(6,6,6,5), codTarget: "30" },
    31: { idar: 31, id: 1, nombre: "SICA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(5,4,2,4), codTarget: "31" },
    32: { idar: 32, id: 2, nombre: "HASTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(6,3,3,3), codTarget: "32" },
    33: { idar: 33, id: 3, nombre: "CLAVA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(7,1,2,5), codTarget: "33" },
    34: { idar: 34, id: 4, nombre: "SECURIS", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(7,2,2,4), codTarget: "34" },
    35: { idar: 35, id: 5, nombre: "SCUTUM", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(1,4,2,6), codTarget: "35" },
    36: { idar: 36, id: 6, nombre: "GLADIUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(6,3,3,4), codTarget: "36" },
    37: { idar: 37, id: 7, nombre: "ARCUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(6,6,1,5), codTarget: "37" },
    38: { idar: 38, id: 8, nombre: "MANUBALLISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(7,2,2,4), codTarget: "38" },
    39: { idar: 39, id: 9, nombre: "BALISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1033-CI-AR1.png", botones: genB(9,1,2,5), codTarget: "39" },
    40: { idar: 40, id: 10, nombre: "ONIAGER", elemento: "COELI", tipo: "ARMA", imgEscudo: "1034-CI-AR2.png", botones: genB(8,1,2,7), codTarget: "40" },
    41: { idar: 41, id: 1, nombre: "SCORPIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(5,1,5,5), codTarget: "41" },
    42: { idar: 42, id: 2, nombre: "TRITONIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(6,4,6,4), codTarget: "42" },
    43: { idar: 43, id: 3, nombre: "HYDRUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(8,8,4,2), codTarget: "43" },
    44: { idar: 44, id: 4, nombre: "LEVIATHAN", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(9,2,7,5), codTarget: "44" },
    45: { idar: 45, id: 5, nombre: "TIAMAT", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(6,7,12,5), codTarget: "45" },
    46: { idar: 46, id: 6, nombre: "HASTATUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(7,2,3,1), codTarget: "46" },
    47: { idar: 47, id: 7, nombre: "CORSARIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(5,3,4,2), codTarget: "47" },
    48: { idar: 48, id: 8, nombre: "ORACULUM", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(1,5,6,9), codTarget: "48" },
    49: { idar: 49, id: 9, nombre: "ADMIRALIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(5,6,6,5), codTarget: "49" },
    50: { idar: 50, id: 10, nombre: "NEPTUNUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(7,8,7,6), codTarget: "50" },
    51: { idar: 51, id: 1, nombre: "SICA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-AG-AR1.png", botones: genB(5,4,3,2), codTarget: "51" },
    52: { idar: 52, id: 2, nombre: "HASTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(6,5,5,3), codTarget: "52" },
    53: { idar: 53, id: 3, nombre: "CLAVA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-AG-AR1.png", botones: genB(6,2,3,1), codTarget: "53" },
    54: { idar: 54, id: 4, nombre: "SECURIS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(6,2,4,2), codTarget: "54" },
    55: { idar: 55, id: 5, nombre: "SCUTUM", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-AG-AR1.png", botones: genB(1,5,9,3), codTarget: "55" },
    56: { idar: 56, id: 6, nombre: "GLADIUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(6,4,4,2), codTarget: "56" },
    57: { idar: 57, id: 7, nombre: "ARCUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-TI-AG-AR1.png", botones: genB(5,4,2,3), codTarget: "57" },
    58: { idar: 58, id: 8, nombre: "MANUBALLISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(7,2,3,2), codTarget: "58" },
    59: { idar: 59, id: 9, nombre: "BALISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1053-AG-AR1.png", botones: genB(9,3,4,3), codTarget: "59" },
    60: { idar: 60, id: 10, nombre: "ONIAGER", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1054-AG-AR2.png", botones: genB(8,2,5,3), codTarget: "60" },
    61: { idar: 61, id: 1, nombre: "FAMILIARES", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(3,2,3,8), codTarget: "61" },
    62: { idar: 62, id: 2, nombre: "ELEMENTUM", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(5,4,5,9), codTarget: "62" },
    63: { idar: 63, id: 3, nombre: "PHANTASMA", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(8,1,1,11), codTarget: "63" },
    64: { idar: 64, id: 4, nombre: "AVATARUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(2,9,5,10), codTarget: "64" },
    65: { idar: 65, id: 5, nombre: "AETHERUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(5,7,5,13), codTarget: "65" },
    66: { idar: 66, id: 6, nombre: "TYRO", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(2,2,1,9), codTarget: "66" },
    67: { idar: 67, id: 7, nombre: "QUAESITOR", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(5,1,4,7), codTarget: "67" },
    68: { idar: 68, id: 8, nombre: "MIMUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(1,4,6,10), codTarget: "68" },
    69: { idar: 69, id: 9, nombre: "ARCHIMAGUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(3,5,2,12), codTarget: "69" },
    70: { idar: 70, id: 10, nombre: "MAGITER", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(5,7,4,10), codTarget: "70" },
    71: { idar: 71, id: 1, nombre: "SICA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(4,3,1,7), codTarget: "71" },
    72: { idar: 72, id: 2, nombre: "HASTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(4,4,2,7), codTarget: "72" },
    73: { idar: 73, id: 3, nombre: "CLAVA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(5,2,2,8), codTarget: "73" },
    74: { idar: 74, id: 4, nombre: "SECURIS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(6,1,1,8), codTarget: "74" },
    75: { idar: 75, id: 5, nombre: "SCUTUM", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(1,5,5,9), codTarget: "75" },
    76: { idar: 76, id: 6, nombre: "GLADIUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(6,2,1,7), codTarget: "76" },
    77: { idar: 77, id: 7, nombre: "ARCUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(4,4,1,8), codTarget: "77" },
    78: { idar: 78, id: 8, nombre: "MANUBALLISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(2,4,2,10), codTarget: "78" },
    79: { idar: 79, id: 9, nombre: "BALISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1073-MA-AR1.png", botones: genB(7,2,2,10), codTarget: "79" },
    80: { idar: 80, id: 10, nombre: "ONIAGER", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1074-MA-AR2.png", botones: genB(7,3,2,11), codTarget: "80" },
    81: { idar: 81, id: 1, nombre: "IGNIS PHIALA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(6,0,-2,2), codTarget: "81" },
    82: { idar: 82, id: 2, nombre: "VITA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(1,8,3,4), codTarget: "82" },
    83: { idar: 83, id: 3, nombre: "SPECULUM", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(1,2,7,4), codTarget: "83" },
    84: { idar: 84, id: 4, nombre: "AETHER", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(1,3,1,8), codTarget: "84" },
    85: { idar: 85, id: 5, nombre: "MANICA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(7,0,-2,2), codTarget: "85" },
    86: { idar: 86, id: 6, nombre: "PETRA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(2,1,8,1), codTarget: "86" },
    87: { idar: 87, id: 7, nombre: "LUCERNA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(1,7,2,3), codTarget: "87" },
    88: { idar: 88, id: 8, nombre: "VENENUN", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(6,0,2,4), codTarget: "88" },
    89: { idar: 89, id: 9, nombre: "APERTUM", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(4,5,3,5), codTarget: "89" },
    90: { idar: 90, id: 10, nombre: "AMBROSIA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(5,5,5,5), codTarget: "90" },
    91: { idar: 91, id: 11, nombre: "AEGIS", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(1,5,10,4), codTarget: "91" },
    92: { idar: 92, id: 12, nombre: "VELOCITAS", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(6,2,1,4), codTarget: "92" },
    93: { idar: 93, id: 13, nombre: "VEXILLUM", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(3,9,2,3), codTarget: "93" },
    94: { idar: 94, id: 14, nombre: "FUROR", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(10,0,0,0), codTarget: "94" },
    95: { idar: 95, id: 15, nombre: "OCULUS", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(2,9,2,10), codTarget: "95" },
    96: { idar: 96, id: 16, nombre: "OBLIVIO", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(1,3,5,6), codTarget: "96" },
    97: { idar: 97, id: 17, nombre: "MONOLITH", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1083-ART-PO.png", botones: genB(0,0,12,6), codTarget: "97" },
    98: { idar: 98, id: 18, nombre: "FORTUNA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1083-ART-PO.png", botones: genB(4,4,4,4), codTarget: "98" },
    99: { idar: 99, id: 1, nombre: "JUDEX", elemento: "TERRA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(4,4,4,4), codTarget: "99" },
    100: { idar: 100, id: 2, nombre: "CARNIFEX", elemento: "COELI", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(7,1,2,2), codTarget: "100" },
    101: { idar: 101, id: 3, nombre: "SCRIPTOR", elemento: "TERRA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(1,3,3,7), codTarget: "101" },
    102: { idar: 102, id: 4, nombre: "CUSTOS", elemento: "COELI", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(2,2,8,2), codTarget: "102" },
    103: { idar: 103, id: 5, nombre: "TEMPUS", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(3,6,4,3), codTarget: "103" },
    104: { idar: 104, id: 6, nombre: "UMBRA", elemento: "AQUA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(6,4,4,3), codTarget: "104" },
    105: { idar: 105, id: 7, nombre: "MACHINA", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(5,1,9,1), codTarget: "105" },
    106: { idar: 106, id: 8, nombre: "AUGUR", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(1,5,2,8), codTarget: "106" },
    107: { idar: 107, id: 9, nombre: "JUSTITIA", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(5,5,5,1), codTarget: "107" },
    108: { idar: 108, id: 10, nombre: "IMPERATOR", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: genB(6,4,6,4), codTarget: "108" }
};

let scanning = false;
let lastConfirmedId = null;

export async function iniciarOjo(containerId, onEncontrado) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const video = document.createElement('video');
    video.style.width='100%'; video.style.height='100%'; video.style.objectFit='cover';
    video.setAttribute('playsinline',true); video.muted=true;
    container.appendChild(video);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', {willReadFrequently:true});
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment", width: { ideal: 640 }, height: { ideal: 480 } }
        });
        video.srcObject = stream;
        await video.play();
        scanning = true;
        setInterval(() => {
            if(!scanning || video.readyState !== 4) return;
            canvas.width = 400; canvas.height = 300;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = window.jsQR(imageData.data, imageData.width, imageData.height);
            if(code && code.data.trim() !== lastConfirmedId) {
                const detectId = code.data.trim();
                const carta = CARTAS[detectId] || Object.values(CARTAS).find(c => c.codTarget == detectId);
                if(carta) {
                    lastConfirmedId = detectId;
                    const guia = document.getElementById('guia-scanner');
                    if(guia) { guia.classList.add('verde'); setTimeout(() => guia.classList.remove('verde'), 600); }
                    onEncontrado(JSON.parse(JSON.stringify(carta)));
                }
            }
        }, 250);
    } catch(e) { console.error("Error cámara:", e); }
}

export function resetUltimoId() { lastConfirmedId = null; }