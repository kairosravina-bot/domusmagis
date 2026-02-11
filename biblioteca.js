export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
export const VIDEOS_BATALLA = ["Explosión_Elemental.mp4", "Invocaciones_Etéreas.mp4"];

/** 
 * genB: Generador de estructura de botones para cada carta
 * i = Impetus (Ataque/Rojo)
 * a = Auxilium (Refuerzo/Verde)
 * t = Tutela (Defensa/Gris)
 * m = Mysterium (Magia/Violeta)
 */
const genB = (i, a, t, m) => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: "ataque.mp4" },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: "cura.mp4" },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: "defensa.mp4" },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: "magia.mp4" }
});

export const CARTAS = {
    // === TIERRA (001 - 020) ===
    1: { id: 1, nombre: "APER", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(6,1,5,0), codTarget: "001" },
    2: { id: 2, nombre: "SAXUM", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(3,1,12,1), codTarget: "002" },
    3: { id: 3, nombre: "BESTIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(9,1,5,5), codTarget: "003" },
    4: { id: 4, nombre: "LEO", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(8,5,7,4), codTarget: "004" },
    5: { id: 5, nombre: "GAIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(10,5,8,3), codTarget: "005" },
    6: { id: 6, nombre: "TIRONIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(5,2,4,1), codTarget: "006" },
    7: { id: 7, nombre: "EQUES", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(8,2,6,1), codTarget: "007" },
    8: { id: 8, nombre: "SAGITIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(10,2,5,3), codTarget: "008" },
    9: { id: 9, nombre: "ALCHEMIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(4,9,5,6), codTarget: "009" },
    10: { id: 10, nombre: "CAESAR", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(9,8,6,4), codTarget: "010" },
    11: { id: 11, nombre: "SICA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "011.png", botones: genB(7,1,2,0), codTarget: "011" },
    12: { id: 12, nombre: "CLAVA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "012.png", botones: genB(8,1,2,0), codTarget: "012" },
    13: { id: 13, nombre: "HASTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "013.png", botones: genB(6,4,3,0), codTarget: "013" },
    14: { id: 14, nombre: "SECURIS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "014.png", botones: genB(8,5,3,1), codTarget: "014" },
    15: { id: 15, nombre: "SCUTUM", elemento: "TERRA", tipo: "ARMA", imgEscudo: "015.png", botones: genB(1,2,8,0), codTarget: "015" },
    16: { id: 16, nombre: "GLADIUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "016.png", botones: genB(6,2,4,1), codTarget: "016" },
    17: { id: 17, nombre: "ARCUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "017.png", botones: genB(9,5,1,0), codTarget: "017" },
    18: { id: 18, nombre: "MANUBALLISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "018.png", botones: genB(8,1,2,2), codTarget: "018" },
    19: { id: 19, nombre: "BALISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "019.png", botones: genB(10,0,2,0), codTarget: "019" },
    20: { id: 20, nombre: "ONIAGER", elemento: "TERRA", tipo: "ARMA", imgEscudo: "020.png", botones: genB(9,1,3,1), codTarget: "020" },

    // === CIELO (021 - 040) ===
    21: { id: 21, nombre: "FENRIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(7,1,2,2), codTarget: "021" },
    22: { id: 22, nombre: "THALGRIM", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(4,3,8,3), codTarget: "022" },
    23: { id: 23, nombre: "AQUILON", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(2,5,3,9), codTarget: "023" },
    24: { id: 24, nombre: "NIVIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(6,2,5,9), codTarget: "024" },
    25: { id: 25, nombre: "AURORA", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(8,7,7,6), codTarget: "025" },
    26: { id: 26, nombre: "BOREAS", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(5,2,3,1), codTarget: "026" },
    27: { id: 27, nombre: "VALKYR", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(9,1,2,1), codTarget: "027" },
    28: { id: 28, nombre: "EIDOLON", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(3,4,9,2), codTarget: "028" },
    29: { id: 29, nombre: "KORIN", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(2,7,2,7), codTarget: "029" },
    30: { id: 30, nombre: "TYRION", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(6,6,6,5), codTarget: "030" },
    31: { id: 31, nombre: "SICA", elemento: "COELI", tipo: "ARMA", imgEscudo: "031.png", botones: genB(5,4,2,4), codTarget: "031" },
    32: { id: 32, nombre: "HASTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "032.png", botones: genB(6,3,3,3), codTarget: "032" },
    33: { id: 33, nombre: "CLAVA", elemento: "COELI", tipo: "ARMA", imgEscudo: "033.png", botones: genB(7,1,2,5), codTarget: "033" },
    34: { id: 34, nombre: "SECURIS", elemento: "COELI", tipo: "ARMA", imgEscudo: "034.png", botones: genB(7,2,2,4), codTarget: "034" },
    35: { id: 35, nombre: "SCUTUM", elemento: "COELI", tipo: "ARMA", imgEscudo: "035.png", botones: genB(1,4,7,6), codTarget: "035" },
    36: { id: 36, nombre: "GLADIUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "036.png", botones: genB(6,3,3,4), codTarget: "036" },
    37: { id: 37, nombre: "ARCUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "037.png", botones: genB(6,6,1,5), codTarget: "037" },
    38: { id: 38, nombre: "MANUBALLISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "038.png", botones: genB(7,2,2,4), codTarget: "038" },
    39: { id: 39, nombre: "BALISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "039.png", botones: genB(9,1,2,5), codTarget: "039" },
    40: { id: 40, nombre: "ONIAGER", elemento: "COELI", tipo: "ARMA", imgEscudo: "040.png", botones: genB(8,1,2,7), codTarget: "040" },

    // === AGUA (041 - 060) ===
    41: { id: 41, nombre: "SCORPIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(5,1,1,5), codTarget: "041" },
    42: { id: 42, nombre: "TRITONIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(3,6,4,6), codTarget: "042" },
    43: { id: 43, nombre: "HYDRUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(5,8,8,4), codTarget: "043" },
    44: { id: 44, nombre: "LEVIATHAN", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(7,9,2,7), codTarget: "044" },
    45: { id: 45, nombre: "TIAMAT", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: genB(9,6,7,12), codTarget: "045" },
    46: { id: 46, nombre: "HASTATUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(2,7,2,3), codTarget: "046" },
    47: { id: 47, nombre: "CORSARIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(4,5,3,4), codTarget: "047" },
    48: { id: 48, nombre: "ORACULUM", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(6,1,5,6), codTarget: "048" },
    49: { id: 49, nombre: "ADMIRALIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(8,5,6,6), codTarget: "049" },
    50: { id: 50, nombre: "NEPTUNUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: genB(10,7,8,7), codTarget: "050" },
    51: { id: 51, nombre: "SICA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "051.png", botones: genB(1,5,4,3), codTarget: "051" },
    52: { id: 52, nombre: "HASTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "052.png", botones: genB(2,6,5,5), codTarget: "052" },
    53: { id: 53, nombre: "CLAVA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "053.png", botones: genB(3,6,2,3), codTarget: "053" },
    54: { id: 54, nombre: "SECURIS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "054.png", botones: genB(4,6,2,4), codTarget: "054" },
    55: { id: 55, nombre: "SCUTUM", elemento: "AQUA", tipo: "ARMA", imgEscudo: "055.png", botones: genB(5,1,5,9), codTarget: "055" },
    56: { id: 56, nombre: "GLADIUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "056.png", botones: genB(6,6,4,4), codTarget: "056" },
    57: { id: 57, nombre: "ARCUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "057.png", botones: genB(7,5,4,2), codTarget: "057" },
    58: { id: 58, nombre: "MANUBALLISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "058.png", botones: genB(8,7,2,3), codTarget: "058" },
    59: { id: 59, nombre: "BALISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "059.png", botones: genB(9,9,3,4), codTarget: "059" },
    60: { id: 60, nombre: "ONIAGER", elemento: "AQUA", tipo: "ARMA", imgEscudo: "060.png", botones: genB(10,8,2,5), codTarget: "060" },

    // === MAGIA / DIMENSIO (061 - 080) ===
    61: { id: 61, nombre: "FAMILIARES", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(1,3,2,3), codTarget: "061" },
    62: { id: 62, nombre: "ELEMENTUM", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(3,5,4,5), codTarget: "062" },
    63: { id: 63, nombre: "PHANTASMA", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(5,8,1,1), codTarget: "063" },
    64: { id: 64, nombre: "AVATARUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(7,2,9,5), codTarget: "064" },
    65: { id: 65, nombre: "AETHERUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: genB(9,5,7,5), codTarget: "065" },
    66: { id: 66, nombre: "TYRO", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(2,2,2,1), codTarget: "066" },
    67: { id: 67, nombre: "QUAESITOR", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(4,5,1,4), codTarget: "067" },
    68: { id: 68, nombre: "MIMUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(6,1,4,6), codTarget: "068" },
    69: { id: 69, nombre: "ARCHIMAGUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(8,3,5,2), codTarget: "069" },
    70: { id: 70, nombre: "MAGITER", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: genB(10,5,7,4), codTarget: "070" },
    71: { id: 71, nombre: "SICA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "071.png", botones: genB(4,3,1,7), codTarget: "071" },
    72: { id: 72, nombre: "HASTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "072.png", botones: genB(4,4,2,7), codTarget: "072" },
    73: { id: 73, nombre: "CLAVA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "073.png", botones: genB(5,2,2,8), codTarget: "073" },
    74: { id: 74, nombre: "SECURIS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "074.png", botones: genB(6,1,1,8), codTarget: "074" },
    75: { id: 75, nombre: "SCUTUM", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "075.png", botones: genB(1,5,5,9), codTarget: "075" },
    76: { id: 76, nombre: "GLADIUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "076.png", botones: genB(6,2,1,7), codTarget: "076" },
    77: { id: 77, nombre: "ARCUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "077.png", botones: genB(4,4,1,8), codTarget: "077" },
    78: { id: 78, nombre: "MANUBALLISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "078.png", botones: genB(2,4,2,10), codTarget: "078" },
    79: { id: 79, nombre: "BALISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "079.png", botones: genB(7,2,2,10), codTarget: "079" },
    80: { id: 80, nombre: "ONIAGER", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "080.png", botones: genB(7,3,2,11), codTarget: "080" },

    // === ARTEFACTOS (081 - 089) ===
    81: { id: 81, nombre: "IGNIS FIALA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "081.png", botones: genB(6,0,-2,2), codTarget: "081" },
    82: { id: 82, nombre: "SPECULUM", elemento: "TERRA", tipo: "ARTEFACTO", imgEscudo: "082.png", botones: genB(1,2,7,4), codTarget: "082" },
    83: { id: 83, nombre: "MANICA", elemento: "TERRA", tipo: "ARTEFACTO", imgEscudo: "083.png", botones: genB(7,0,-2,2), codTarget: "083" },
    84: { id: 84, nombre: "LUCERNA", elemento: "COELI", tipo: "ARTEFACTO", imgEscudo: "084.png", botones: genB(1,7,2,3), codTarget: "084" },
    85: { id: 85, nombre: "APERTUM", elemento: "COELI", tipo: "ARTEFACTO", imgEscudo: "085.png", botones: genB(4,5,3,5), codTarget: "085" },
    86: { id: 86, nombre: "AEGIS", elemento: "AQUA", tipo: "ARTEFACTO", imgEscudo: "086.png", botones: genB(1,5,10,4), codTarget: "086" },
    87: { id: 87, nombre: "VEXILLUM", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "087.png", botones: genB(3,9,2,3), codTarget: "087" },
    88: { id: 88, nombre: "OCULUS", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "088.png", botones: genB(2,9,2,10), codTarget: "088" },
    89: { id: 89, nombre: "MONOLITH", elemento: "AQUA", tipo: "ARTEFACTO", imgEscudo: "089.png", botones: genB(0,0,12,6), codTarget: "089" },

    // === POCIONES (090 - 098) ===
    90: { id: 90, nombre: "VITA", elemento: "COELI", tipo: "POCION", imgEscudo: "090.png", botones: genB(1,8,3,4), codTarget: "090" },
    91: { id: 91, nombre: "AETHER", elemento: "COELI", tipo: "POCION", imgEscudo: "091.png", botones: genB(1,3,1,8), codTarget: "091" },
    92: { id: 92, nombre: "PETRA", elemento: "TERRA", tipo: "POCION", imgEscudo: "092.png", botones: genB(2,1,8,1), codTarget: "092" },
    93: { id: 93, nombre: "VENENUM", elemento: "TERRA", tipo: "POCION", imgEscudo: "093.png", botones: genB(6,0,2,4), codTarget: "093" },
    94: { id: 94, nombre: "AMBROSIA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "094.png", botones: genB(10,5,5,5), codTarget: "094" },
    95: { id: 95, nombre: "VELOCITAS", elemento: "AQUA", tipo: "POCION", imgEscudo: "095.png", botones: genB(12,6,2,1), codTarget: "095" },
    96: { id: 96, nombre: "FUROR", elemento: "TERRA", tipo: "POCION", imgEscudo: "096.png", botones: genB(14,10,0,0), codTarget: "096" },
    97: { id: 97, nombre: "OBLIVIO", elemento: "AQUA", tipo: "POCION", imgEscudo: "097.png", botones: genB(16,1,3,5), codTarget: "097" },
    98: { id: 98, nombre: "FORTUNA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "098.png", botones: genB(18,4,4,4), codTarget: "098" },

    // === BÚHOS (099 - 108) ===
    99: { id: 99, nombre: "JUDEX", elemento: "TERRA", tipo: "BUHO", imgEscudo: "099.png", botones: genB(4,4,4,4), codTarget: "099" },
    100: { id: 100, nombre: "CARNIFEX", elemento: "COELI", tipo: "BUHO", imgEscudo: "100.png", botones: genB(7,1,2,2), codTarget: "100" },
    101: { id: 101, nombre: "SCRIPTOR", elemento: "TERRA", tipo: "BUHO", imgEscudo: "101.png", botones: genB(1,3,3,7), codTarget: "101" },
    102: { id: 102, nombre: "CUSTOS", elemento: "COELI", tipo: "BUHO", imgEscudo: "102.png", botones: genB(2,2,8,2), codTarget: "102" },
    103: { id: 103, nombre: "TEMPUS", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "103.png", botones: genB(5,3,6,4), codTarget: "103" },
    104: { id: 104, nombre: "UMBRA", elemento: "AQUA", tipo: "BUHO", imgEscudo: "104.png", botones: genB(6,6,4,4), codTarget: "104" },
    105: { id: 105, nombre: "MACHINA", elemento: "AQUA", tipo: "BUHO", imgEscudo: "105.png", botones: genB(7,5,1,9), codTarget: "105" },
    106: { id: 106, nombre: "AUGUR", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "106.png", botones: genB(8,1,5,2), codTarget: "106" },
    107: { id: 107, nombre: "JUSTITIA", elemento: "NEUTRO", tipo: "BUHO", imgEscudo: "107.png", botones: genB(9,5,5,5), codTarget: "107" },
    108: { id: 108, nombre: "IMPERATOR", elemento: "NEUTRO", tipo: "BUHO", imgEscudo: "108.png", botones: genB(10,6,4,6), codTarget: "108" }
};