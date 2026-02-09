// biblioteca.js - BASE DE DATOS MAESTRA V101 (56 CARTAS)
export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";

export const VIDEOS_BATALLA = [
    "Explosión_Elemental.mp4", 
    "Invocaciones_Etéreas.mp4"
];

// Helper para generar la estructura de botones de combate
const genCombate = (i, a, t, m, prefijo = "CARTA") => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: `${prefijo}_ataque.mp4` },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: `${prefijo}_cura.mp4` },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: `${prefijo}_defensa.mp4` },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: `${prefijo}_magia.mp4` }
});

export const CARTAS = {
    // === REINO TIERRA (001 - 010) ===
    1: { id: 1, nombre: "APER", arma: "COLMILLOS", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(6, 1, 5, 0, "TERRA") },
    2: { id: 2, nombre: "SAXUM", arma: "PIEDRA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(3, 1, 12, 1, "TERRA") },
    3: { id: 3, nombre: "BESTIA", arma: "GARRAS", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(9, 1, 5, 5, "TERRA") },
    4: { id: 4, nombre: "LEO", arma: "RUGIDO", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(8, 5, 7, 4, "TERRA") },
    5: { id: 5, nombre: "GAIA", arma: "CORAZA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(10, 5, 8, 3, "TERRA") },
    6: { id: 6, nombre: "TIRONIS", arma: "ESPADA CORTA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(5, 2, 4, 1, "TERRA") },
    7: { id: 7, nombre: "EQUES", arma: "LANZA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(8, 2, 6, 1, "TERRA") },
    8: { id: 8, nombre: "SAGITIS", arma: "ARCO", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(10, 2, 5, 3, "TERRA") },
    9: { id: 9, nombre: "ALCHEMIA", arma: "BOCAL", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(4, 9, 5, 6, "TERRA") },
    10: { id: 10, nombre: "CAESAR", arma: "GLADIUS", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", tipo: "CASA", botones: genCombate(9, 8, 6, 4, "TERRA") },

    // === REINO CIELO (021 - 030) ===
    21: { id: 21, nombre: "FENRIS", arma: "MORDIDA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(7, 1, 2, 2, "CIELO") },
    22: { id: 22, nombre: "THALGRIM", arma: "MAZO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(4, 3, 8, 3, "CIELO") },
    23: { id: 23, nombre: "AQUILON", arma: "TORNADO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(2, 5, 3, 9, "CIELO") },
    24: { id: 24, nombre: "NIVIS", arma: "HIELO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(6, 2, 5, 9, "CIELO") },
    25: { id: 25, nombre: "AURORA", arma: "LLAMA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(8, 7, 7, 6, "CIELO") },
    26: { id: 26, nombre: "BOREAS", arma: "DAGA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(5, 2, 3, 1, "CIELO") },
    27: { id: 27, nombre: "VALKYR", arma: "LANZA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(9, 1, 2, 1, "CIELO") },
    28: { id: 28, nombre: "EIDOLON", arma: "ESCUDO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(3, 4, 9, 2, "CIELO") },
    29: { id: 29, nombre: "KORIN", arma: "BACULO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(2, 7, 2, 7, "CIELO") },
    30: { id: 30, nombre: "TYRION", arma: "MANDOBLE", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: genCombate(6, 6, 6, 5, "CIELO") },

    // === REINO AGUA (041 - 050) ===
    41: { id: 41, nombre: "SCORPIUS", arma: "AGUIJON", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(5, 1, 5, 5, "AGUA") },
    42: { id: 42, nombre: "TRITONIS", arma: "TRIDENTE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(6, 4, 6, 4, "AGUA") },
    43: { id: 43, nombre: "HYDRUS", arma: "CABEZAS", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(8, 8, 4, 2, "AGUA") },
    44: { id: 44, nombre: "LEVIATHAN", arma: "COLA", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(9, 2, 7, 5, "AGUA") },
    45: { id: 45, nombre: "TIAMAT", arma: "TENTACULOS", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(6, 7, 12, 5, "AGUA") },
    46: { id: 46, nombre: "HASTATUS", arma: "PICA", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(7, 2, 3, 1, "AGUA") },
    47: { id: 47, nombre: "CORSARIUS", arma: "SABLE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(5, 3, 4, 2, "AGUA") },
    48: { id: 48, nombre: "ORACULUM", arma: "ORBE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(1, 5, 6, 9, "AGUA") },
    49: { id: 49, nombre: "ADMIRALIS", arma: "ESTOQUE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(5, 6, 6, 5, "AGUA") },
    50: { id: 50, nombre: "NEPTUNUS", arma: "TRIDENTE REAL", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: genCombate(7, 8, 7, 6, "AGUA") },

    // === REINO MAGIA (061 - 070) ===
    61: { id: 61, nombre: "FAMILIARES", arma: "GARRAS", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(3, 2, 3, 8, "MAGIA") },
    62: { id: 62, nombre: "ELEMENTUM", arma: "ENERGIA", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(5, 4, 5, 9, "MAGIA") },
    63: { id: 63, nombre: "PHANTASMA", arma: "ESPECTRO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(8, 1, 1, 11, "MAGIA") },
    64: { id: 64, nombre: "AVATARUS", arma: "LUZ", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(2, 9, 5, 10, "MAGIA") },
    65: { id: 65, nombre: "AETHERUS", arma: "VACIO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(5, 7, 5, 13, "MAGIA") },
    66: { id: 66, nombre: "TYRO", arma: "VARITA", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(2, 2, 1, 9, "MAGIA") },
    67: { id: 67, nombre: "QUAESITOR", arma: "LIBRO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(5, 1, 4, 7, "MAGIA") },
    68: { id: 68, nombre: "MIMUS", arma: "ILUSION", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(1, 4, 6, 10, "MAGIA") },
    69: { id: 69, nombre: "ARCHIMAGUS", arma: "CETRO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(3, 5, 2, 12, "MAGIA") },
    70: { id: 70, nombre: "MAGITER", arma: "CONOCIMIENTO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", tipo: "CASA", botones: genCombate(5, 7, 4, 10, "MAGIA") },

    // === ARTEFACTOS (081 - 089) ===
    81: { id: 81, nombre: "IGNIS FIALA", arma: "FUEGO", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: genCombate(6, 0, -2, 2, "ART") },
    82: { id: 82, nombre: "SPECULUM", arma: "ESPEJO", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: genCombate(1, 2, 7, 4, "ART") },
    83: { id: 83, nombre: "MANICA", arma: "GUANTE", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: genCombate(7, 0, -2, 2, "ART") },
    84: { id: 84, nombre: "LUCERNA", arma: "LAMPARA", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: genCombate(1, 7, 2, 3, "ART") },
    85: { id: 85, nombre: "APERTUM", arma: "LLAVE", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: genCombate(4, 5, 3, 5, "ART") },
    86: { id: 86, nombre: "AEGIS", arma: "ESCUDO MÁGICO", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: genCombate(1, 5, 10, 4, "ART") },
    87: { id: 87, nombre: "VEXILLUM", arma: "ESTANDARTE", elemento: "DIMENSIO", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: genCombate(3, 9, 2, 3, "ART") },
    88: { id: 88, nombre: "OCULUS", arma: "OJO MÍSTICO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: genCombate(2, 9, 2, 10, "ART") },
    89: { id: 89, nombre: "MONOLITH", arma: "MURO", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: genCombate(0, 0, 12, 6, "ART") },

    // === POCIONES (090 - 098) ===
    90: { id: 90, nombre: "VITA", arma: "POCIÓN", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", tipo: "POCION", botones: genCombate(1, 8, 3, 4, "POT") },
    91: { id: 91, nombre: "AETHER", arma: "POCIÓN", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", tipo: "POCION", botones: genCombate(1, 3, 1, 8, "POT") },
    92: { id: 92, nombre: "PETRA", arma: "POCIÓN", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "POCION", botones: genCombate(2, 1, 8, 1, "POT") },
    93: { id: 93, nombre: "VENENUM", arma: "POCIÓN", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "POCION", botones: genCombate(6, 0, 2, 4, "POT") },
    94: { id: 94, nombre: "AMBROSIA", arma: "POCIÓN", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "POCION", botones: genCombate(5, 5, 5, 5, "POT") },
    95: { id: 95, nombre: "VELOCITAS", arma: "POCIÓN", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "POCION", botones: genCombate(6, 2, 1, 4, "POT") },
    96: { id: 96, nombre: "FUROR", arma: "POCIÓN", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "POCION", botones: genCombate(10, 0, 0, 0, "POT") },
    97: { id: 97, nombre: "OBLIVIO", arma: "POCIÓN", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "POCION", botones: genCombate(1, 3, 5, 6, "POT") },
    98: { id: 98, nombre: "FORTUNA", arma: "POCIÓN", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "POCION", botones: genCombate(4, 4, 4, 4, "POT") }
};