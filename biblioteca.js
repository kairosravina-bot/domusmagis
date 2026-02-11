export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
export const VIDEOS_BATALLA = ["Explosión_Elemental.mp4", "Invocaciones_Etéreas.mp4"];

/** 
 * Filosofía de Atributos:
 * I = Impetus (Rojo/Ataque)
 * A = Auxilium (Verde/Refuerzo)
 * T = Tutela (Azul/Defensa)
 * M = Mysterium (Morado/Magia)
 */
const genB = (i, a, t, m) => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: "ataque.mp4" },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: "cura.mp4" },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: "defensa.mp4" },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: "magia.mp4" }
});

export const CARTAS = {
    // === TIERRA (001 - 020) ===
    // Bestias
    1: { nombre: "APER", elemento: "TERRA", tipo: "BESTIA", imgEscudo: "001.png", botones: genB(6,1,5,0) },
    2: { nombre: "SAXUM", elemento: "TERRA", tipo: "BESTIA", imgEscudo: "002.png", botones: genB(3,1,12,1) },
    3: { nombre: "BESTIA", elemento: "TERRA", tipo: "BESTIA", imgEscudo: "003.png", botones: genB(9,1,5,5) },
    4: { nombre: "LEO", elemento: "TERRA", tipo: "BESTIA", imgEscudo: "004.png", botones: genB(8,5,7,4) },
    5: { nombre: "GAIA", elemento: "TERRA", tipo: "BESTIA", imgEscudo: "005.png", botones: genB(10,5,8,3) },
    // Humanos
    6: { nombre: "TIRONIS", elemento: "TERRA", tipo: "HUMANO", imgEscudo: "006.png", botones: genB(5,2,4,1) },
    7: { nombre: "EQUES", elemento: "TERRA", tipo: "HUMANO", imgEscudo: "007.png", botones: genB(8,2,6,1) },
    8: { nombre: "SAGITIS", elemento: "TERRA", tipo: "HUMANO", imgEscudo: "008.png", botones: genB(10,2,5,3) },
    9: { nombre: "ALCHEMIA", elemento: "TERRA", tipo: "HUMANO", imgEscudo: "009.png", botones: genB(4,9,5,6) },
    10: { nombre: "CAESAR", elemento: "TERRA", tipo: "HUMANO", imgEscudo: "010.png", botones: genB(9,8,6,4) },
    // Armas Tierra
    11: { nombre: "SICA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "011.png", botones: genB(7,1,2,0) },
    12: { nombre: "CLAVA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "012.png", botones: genB(8,1,2,0) },
    13: { nombre: "HASTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "013.png", botones: genB(6,4,3,0) },
    14: { nombre: "SECURIS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "014.png", botones: genB(8,5,3,1) },
    15: { nombre: "SCUTUM", elemento: "TERRA", tipo: "ARMA", imgEscudo: "015.png", botones: genB(1,2,8,0) },
    16: { nombre: "GLADIUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "016.png", botones: genB(6,2,4,1) },
    17: { nombre: "ARCUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "017.png", botones: genB(9,5,1,0) },
    18: { nombre: "MANUBALLISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "018.png", botones: genB(8,1,2,2) },
    19: { nombre: "BALISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "019.png", botones: genB(10,0,2,0) },
    20: { nombre: "ONIAGER", elemento: "TERRA", tipo: "ARMA", imgEscudo: "020.png", botones: genB(9,1,3,1) },

    // === CIELO (021 - 040) ===
    // Bestias
    21: { nombre: "FENRIS", elemento: "COELI", tipo: "BESTIA", imgEscudo: "021.png", botones: genB(7,1,2,2) },
    22: { nombre: "THALGRIM", elemento: "COELI", tipo: "BESTIA", imgEscudo: "022.png", botones: genB(4,3,8,3) },
    23: { nombre: "AQUILON", elemento: "COELI", tipo: "BESTIA", imgEscudo: "023.png", botones: genB(2,5,3,9) },
    24: { nombre: "NIVIS", elemento: "COELI", tipo: "BESTIA", imgEscudo: "024.png", botones: genB(6,2,5,9) },
    25: { nombre: "AURORA", elemento: "COELI", tipo: "BESTIA", imgEscudo: "025.png", botones: genB(8,7,7,6) },
    // Humanos
    26: { nombre: "BOREAS", elemento: "COELI", tipo: "HUMANO", imgEscudo: "026.png", botones: genB(5,2,3,1) },
    27: { nombre: "VALKYR", elemento: "COELI", tipo: "HUMANO", imgEscudo: "027.png", botones: genB(9,1,2,1) },
    28: { nombre: "EIDOLON", elemento: "COELI", tipo: "HUMANO", imgEscudo: "028.png", botones: genB(3,4,9,2) },
    29: { nombre: "KORIN", elemento: "COELI", tipo: "HUMANO", imgEscudo: "029.png", botones: genB(2,7,2,7) },
    30: { nombre: "TYRION", elemento: "COELI", tipo: "HUMANO", imgEscudo: "030.png", botones: genB(6,6,6,5) },
    // Armas Cielo
    31: { nombre: "SICA", elemento: "COELI", tipo: "ARMA", imgEscudo: "031.png", botones: genB(5,4,2,4) },
    32: { nombre: "HASTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "032.png", botones: genB(6,3,3,3) },
    33: { nombre: "CLAVA", elemento: "COELI", tipo: "ARMA", imgEscudo: "033.png", botones: genB(7,1,2,5) },
    34: { nombre: "SECURIS", elemento: "COELI", tipo: "ARMA", imgEscudo: "034.png", botones: genB(7,2,2,4) },
    35: { nombre: "SCUTUM", elemento: "COELI", tipo: "ARMA", imgEscudo: "035.png", botones: genB(1,4,7,6) },
    36: { nombre: "GLADIUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "036.png", botones: genB(6,3,3,4) },
    37: { nombre: "ARCUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "037.png", botones: genB(6,6,1,5) },
    38: { nombre: "MANUBALLISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "038.png", botones: genB(7,2,2,4) },
    39: { nombre: "BALISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "039.png", botones: genB(9,1,2,5) },
    40: { nombre: "ONIAGER", elemento: "COELI", tipo: "ARMA", imgEscudo: "040.png", botones: genB(8,1,2,7) },

    // === AGUA (041 - 060) ===
    // Bestias
    41: { nombre: "SCORPIUS", elemento: "AQUA", tipo: "BESTIA", imgEscudo: "041.png", botones: genB(5,1,1,5) },
    42: { nombre: "TRITONIS", elemento: "AQUA", tipo: "BESTIA", imgEscudo: "042.png", botones: genB(3,6,4,6) },
    43: { nombre: "HYDRUS", elemento: "AQUA", tipo: "BESTIA", imgEscudo: "043.png", botones: genB(5,8,8,4) },
    44: { nombre: "LEVIATHAN", elemento: "AQUA", tipo: "BESTIA", imgEscudo: "044.png", botones: genB(7,9,2,7) },
    45: { nombre: "TIAMAT", elemento: "AQUA", tipo: "BESTIA", imgEscudo: "045.png", botones: genB(9,6,7,12) },
    // Humanos
    46: { nombre: "HASTATUS", elemento: "AQUA", tipo: "HUMANO", imgEscudo: "046.png", botones: genB(2,7,2,3) },
    47: { nombre: "CORSARIUS", elemento: "AQUA", tipo: "HUMANO", imgEscudo: "047.png", botones: genB(4,5,3,4) },
    48: { nombre: "ORACULUM", elemento: "AQUA", tipo: "HUMANO", imgEscudo: "048.png", botones: genB(6,1,5,6) },
    49: { nombre: "ADMIRALIS", elemento: "AQUA", tipo: "HUMANO", imgEscudo: "049.png", botones: genB(8,5,6,6) },
    50: { nombre: "NEPTUNUS", elemento: "AQUA", tipo: "HUMANO", imgEscudo: "050.png", botones: genB(10,7,8,7) },
    // Armas Agua
    51: { nombre: "SICA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "051.png", botones: genB(1,5,4,3) },
    52: { nombre: "HASTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "052.png", botones: genB(2,6,5,5) },
    53: { nombre: "CLAVA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "053.png", botones: genB(3,6,2,3) },
    54: { nombre: "SECURIS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "054.png", botones: genB(4,6,2,4) },
    55: { nombre: "SCUTUM", elemento: "AQUA", tipo: "ARMA", imgEscudo: "055.png", botones: genB(5,1,5,9) },
    56: { nombre: "GLADIUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "056.png", botones: genB(6,6,4,4) },
    57: { nombre: "ARCUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "057.png", botones: genB(7,5,4,2) },
    58: { nombre: "MANUBALLISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "058.png", botones: genB(8,7,2,3) },
    59: { nombre: "BALISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "059.png", botones: genB(9,9,3,4) },
    60: { nombre: "ONIAGER", elemento: "AQUA", tipo: "ARMA", imgEscudo: "060.png", botones: genB(10,8,2,5) },

    // === MAGIA (061 - 080) ===
    // Bestias
    61: { nombre: "FAMILIARES", elemento: "MAGIA", tipo: "BESTIA", imgEscudo: "061.png", botones: genB(1,3,2,3) },
    62: { nombre: "ELEMENTUM", elemento: "MAGIA", tipo: "BESTIA", imgEscudo: "062.png", botones: genB(3,5,4,5) },
    63: { nombre: "PHANTASMA", elemento: "MAGIA", tipo: "BESTIA", imgEscudo: "063.png", botones: genB(5,8,1,1) },
    64: { nombre: "AVATARUS", elemento: "MAGIA", tipo: "BESTIA", imgEscudo: "064.png", botones: genB(7,2,9,5) },
    65: { nombre: "AETHERUS", elemento: "MAGIA", tipo: "BESTIA", imgEscudo: "065.png", botones: genB(9,5,7,5) },
    // Humanos
    66: { nombre: "TYRO", elemento: "MAGIA", tipo: "HUMANO", imgEscudo: "066.png", botones: genB(2,2,2,1) },
    67: { nombre: "QUAESITOR", elemento: "MAGIA", tipo: "HUMANO", imgEscudo: "067.png", botones: genB(4,5,1,4) },
    68: { nombre: "MIMUS", elemento: "MAGIA", tipo: "HUMANO", imgEscudo: "068.png", botones: genB(6,1,4,6) },
    69: { nombre: "ARCHIMAGUS", elemento: "MAGIA", tipo: "HUMANO", imgEscudo: "069.png", botones: genB(8,3,5,2) },
    70: { nombre: "MAGITER", elemento: "MAGIA", tipo: "HUMANO", imgEscudo: "070.png", botones: genB(10,5,7,4) },
    // Armas Magia
    71: { nombre: "SICA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "071.png", botones: genB(4,3,1,7) },
    72: { nombre: "HASTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "072.png", botones: genB(4,4,2,7) },
    73: { nombre: "CLAVA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "073.png", botones: genB(5,2,2,8) },
    74: { nombre: "SECURIS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "074.png", botones: genB(6,1,1,8) },
    75: { nombre: "SCUTUM", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "075.png", botones: genB(1,5,5,9) },
    76: { nombre: "GLADIUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "076.png", botones: genB(6,2,1,7) },
    77: { nombre: "ARCUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "077.png", botones: genB(4,4,1,8) },
    78: { nombre: "MANUBALLISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "078.png", botones: genB(2,4,2,10) },
    79: { nombre: "BALISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "079.png", botones: genB(7,2,2,10) },
    80: { nombre: "ONIAGER", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "080.png", botones: genB(7,3,2,11) },

    // === ARTEFACTOS (081 - 089) ===
    81: { nombre: "IGNIS FIALA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "081.png", botones: genB(6,0,-2,2) },
    82: { nombre: "SPECULUM", elemento: "TERRA", tipo: "ARTEFACTO", imgEscudo: "082.png", botones: genB(1,2,7,4) },
    83: { nombre: "MANICA", elemento: "TERRA", tipo: "ARTEFACTO", imgEscudo: "083.png", botones: genB(7,0,-2,2) },
    84: { nombre: "LUCERNA", elemento: "COELI", tipo: "ARTEFACTO", imgEscudo: "084.png", botones: genB(1,7,2,3) },
    85: { nombre: "APERTUM", elemento: "COELI", tipo: "ARTEFACTO", imgEscudo: "085.png", botones: genB(4,5,3,5) },
    86: { nombre: "AEGIS", elemento: "AQUA", tipo: "ARTEFACTO", imgEscudo: "086.png", botones: genB(1,5,10,4) },
    87: { nombre: "VEXILLUM", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "087.png", botones: genB(3,9,2,3) },
    88: { nombre: "OCULUS", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "088.png", botones: genB(2,9,2,10) },
    89: { nombre: "MONOLITH", elemento: "AQUA", tipo: "ARTEFACTO", imgEscudo: "089.png", botones: genB(0,0,12,6) },

    // === POCIONES (090 - 098) ===
    90: { nombre: "VITA", elemento: "COELI", tipo: "POCION", imgEscudo: "090.png", botones: genB(1,8,3,4) },
    91: { nombre: "AETHER", elemento: "COELI", tipo: "POCION", imgEscudo: "091.png", botones: genB(1,3,1,8) },
    92: { nombre: "PETRA", elemento: "TERRA", tipo: "POCION", imgEscudo: "092.png", botones: genB(2,1,8,1) },
    93: { nombre: "VENENUM", elemento: "TERRA", tipo: "POCION", imgEscudo: "093.png", botones: genB(6,0,2,4) },
    94: { nombre: "AMBROSIA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "094.png", botones: genB(10,5,5,5) },
    95: { nombre: "VELOCITAS", elemento: "AQUA", tipo: "POCION", imgEscudo: "095.png", botones: genB(12,6,2,1) },
    96: { nombre: "FUROR", elemento: "TERRA", tipo: "POCION", imgEscudo: "096.png", botones: genB(14,10,0,0) },
    97: { nombre: "OBLIVIO", elemento: "AQUA", tipo: "POCION", imgEscudo: "097.png", botones: genB(16,1,3,5) },
    98: { nombre: "FORTUNA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "098.png", botones: genB(18,4,4,4) },

    // === BÚHOS (099 - 108) ===
    99: { nombre: "JUDEX", elemento: "TERRA", tipo: "BUHO", imgEscudo: "099.png", botones: genB(4,4,4,4) },
    100: { nombre: "CARNIFEX", elemento: "COELI", tipo: "BUHO", imgEscudo: "100.png", botones: genB(7,1,2,2) },
    101: { nombre: "SCRIPTOR", elemento: "TERRA", tipo: "BUHO", imgEscudo: "101.png", botones: genB(1,3,3,7) },
    102: { nombre: "CUSTOS", elemento: "COELI", tipo: "BUHO", imgEscudo: "102.png", botones: genB(2,2,8,2) },
    103: { nombre: "TEMPUS", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "103.png", botones: genB(5,3,6,4) },
    104: { nombre: "UMBRA", elemento: "AQUA", tipo: "BUHO", imgEscudo: "104.png", botones: genB(6,6,4,4) },
    105: { nombre: "MACHINA", elemento: "AQUA", tipo: "BUHO", imgEscudo: "105.png", botones: genB(7,5,1,9) },
    106: { nombre: "AUGUR", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "106.png", botones: genB(8,1,5,2) },
    107: { nombre: "JUSTITIA", elemento: "NEUTRO", tipo: "BUHO", imgEscudo: "107.png", botones: genB(9,5,5,5) },
    108: { nombre: "IMPERATOR", elemento: "NEUTRO", tipo: "BUHO", imgEscudo: "108.png", botones: genB(10,6,4,6) }
};