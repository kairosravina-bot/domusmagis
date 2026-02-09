// biblioteca.js - VER 101 CORREGIDA
export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
export const VIDEOS_BATALLA = ["Explosión_Elemental.mp4", "Invocaciones_Etéreas.mp4"];

const genB = (i, a, t, m) => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: "ataque.mp4" },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: "cura.mp4" },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: "defensa.mp4" },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: "magia.mp4" }
});

export const CARTAS = {
    // === REINO TIERRA (001-010) ===
    0: { id: 1, nombre: "APER", arma: "COLMILLOS", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(6,1,5,0) },
    1: { id: 3, nombre: "SAXUM", arma: "PIEDRA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(3,1,12,1) },
    2: { id: 5, nombre: "BESTIA", arma: "GARRAS", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(9,1,5,5) },
    3: { id: 7, nombre: "LEO", arma: "RUGIDO", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(8,5,7,4) },
    4: { id: 9, nombre: "GAIA", arma: "CORAZA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(10,5,8,3) },
    5: { id: 2, nombre: "TIRONIS", arma: "ESPADA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(5,2,4,1) },
    6: { id: 4, nombre: "EQUES", arma: "LANZA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(8,2,6,1) },
    7: { id: 6, nombre: "SAGITIS", arma: "ARCO", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(10,2,5,3) },
    8: { id: 8, nombre: "ALCHEMIA", arma: "BOCAL", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(4,9,5,6) },
    9: { id: 10, nombre: "CAESAR", arma: "GLADIUS", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: genB(9,8,6,4) },

    // === REINO CIELO (021-030) ===
    10: { id: 1, nombre: "FENRIS", arma: "MORDIDA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(7,1,2,2) },
    11: { id: 3, nombre: "THALGRIM", arma: "MAZO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(4,3,8,3) },
    12: { id: 5, nombre: "AQUILON", arma: "TORNADO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(2,5,3,9) },
    13: { id: 7, nombre: "NIVIS", arma: "HIELO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(6,2,5,9) },
    14: { id: 9, nombre: "AURORA", arma: "LLAMA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(8,7,7,6) },
    15: { id: 2, nombre: "BOREAS", arma: "DAGA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(5,2,3,1) },
    16: { id: 4, nombre: "VALKYR", arma: "LANZA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(9,1,2,1) },
    17: { id: 6, nombre: "EIDOLON", arma: "ESCUDO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(3,4,9,2) },
    18: { id: 8, nombre: "KORIN", arma: "BACULO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(2,7,2,7) },
    19: { id: 10, nombre: "TYRION", arma: "MANDOBLE", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: genB(6,6,6,5) },

    // === REINO AGUA (041-050) ===
    20: { id: 1, nombre: "SCORPIUS", arma: "AGUIJON", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(5,1,5,5) },
    21: { id: 3, nombre: "TRITONIS", arma: "TRIDENTE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(6,4,6,4) },
    22: { id: 5, nombre: "HYDRUS", arma: "CABEZAS", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(8,8,4,2) },
    23: { id: 7, nombre: "LEVIATHAN", arma: "COLA", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(9,2,7,5) },
    24: { id: 9, nombre: "TIAMAT", arma: "TENTACULOS", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(6,7,12,5) },
    25: { id: 2, nombre: "HASTATUS", arma: "PICA", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(7,2,3,1) },
    26: { id: 4, nombre: "CORSARIUS", arma: "SABLE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(5,3,4,2) },
    27: { id: 6, nombre: "ORACULUM", arma: "ORBE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(1,5,6,9) },
    28: { id: 8, nombre: "ADMIRALIS", arma: "ESTOQUE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(5,6,6,5) },
    29: { id: 10, nombre: "NEPTUNUS", arma: "TRIDENTE REAL", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: genB(7,8,7,6) },

    // === REINO MAGIA (061-070) ===
    30: { id: 1, nombre: "FAMILIARES", arma: "MAGIA", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(3,2,3,8) },
    31: { id: 3, nombre: "ELEMENTUM", arma: "ENERGIA", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(5,4,5,9) },
    32: { id: 5, nombre: "PHANTASMA", arma: "ESPECTRO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(8,1,1,11) },
    33: { id: 7, nombre: "AVATARUS", arma: "LUZ", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(2,9,5,10) },
    34: { id: 9, nombre: "AETHERUS", arma: "VACIO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(5,7,5,13) },
    35: { id: 2, nombre: "TYRO", arma: "VARITA", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(2,2,1,9) },
    36: { id: 4, nombre: "QUAESITOR", arma: "LIBRO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(5,1,4,7) },
    37: { id: 6, nombre: "MIMUS", arma: "ILUSION", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(1,4,6,10) },
    38: { id: 8, nombre: "ARCHIMAGUS", arma: "CETRO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(3,5,2,12) },
    39: { id: 10, nombre: "MAGITER", arma: "CONOCIMIENTO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: genB(5,7,4,10) },

    // === ARTEFACTOS (081-089) ===
    40: { id: 1, nombre: "IGNIS FIALA", arma: "ART", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(6,0,-2,2) },
    41: { id: 3, nombre: "SPECULUM", arma: "ART", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(1,2,7,4) },
    42: { id: 5, nombre: "MANICA", arma: "ART", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(7,0,-2,2) },
    43: { id: 7, nombre: "LUCERNA", arma: "ART", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(1,7,2,3) },
    44: { id: 9, nombre: "APERTUM", arma: "ART", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(4,5,3,5) },
    45: { id: 11, nombre: "AEGIS", arma: "ART", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(1,5,10,4) },
    46: { id: 13, nombre: "VEXILLUM", arma: "ART", elemento: "DIMENSIO", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(3,9,2,3) },
    47: { id: 15, nombre: "OCULUS", arma: "ART", elemento: "DIMENSIO", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(2,9,2,10) },
    48: { id: 17, nombre: "MONOLITH", arma: "ART", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(0,0,12,6) },

    // === POCIONES (090-098) ===
    49: { id: 2, nombre: "VITA", arma: "POT", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(1,8,3,4) },
    50: { id: 4, nombre: "AETHER", arma: "POT", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(1,3,1,8) },
    51: { id: 6, nombre: "PETRA", arma: "POT", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(2,1,8,1) },
    52: { id: 8, nombre: "VENENUM", arma: "POT", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(6,0,2,4) },
    53: { id: 10, nombre: "AMBROSIA", arma: "POT", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(5,5,5,5) },
    54: { id: 12, nombre: "VELOCITAS", arma: "POT", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(6,2,1,4) },
    55: { id: 14, nombre: "FUROR", arma: "POT", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(10,0,0,0) },
    56: { id: 16, nombre: "OBLIVIO", arma: "POT", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(1,3,5,6) },
    57: { id: 18, nombre: "FORTUNA", arma: "POT", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", botones: genB(4,4,4,4) }
};