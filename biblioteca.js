// biblioteca.js - VER 101
export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";

export const VIDEOS_BATALLA = ["Explosión_Elemental.mp4", "Invocaciones_Etéreas.mp4"];

const generarBotones = (i, a, t, m) => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: "ataque.mp4" },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: "cura.mp4" },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: "defensa.mp4" },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: "magia.mp4" }
});

export const CARTAS = {
    // TIERRA (001-010)
    1: { id: 1, nombre: "APER", arma: "COLMILLOS", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(6,1,5,0) },
    2: { id: 2, nombre: "SAXUM", arma: "PIEDRA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(3,1,12,1) },
    3: { id: 3, nombre: "BESTIA", arma: "GARRAS", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(9,1,5,5) },
    4: { id: 4, nombre: "LEO", arma: "RUGIDO", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(8,5,7,4) },
    5: { id: 5, nombre: "GAIA", arma: "CORAZA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(10,5,8,3) },
    6: { id: 6, nombre: "TIRONIS", arma: "ESPADA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(5,2,4,1) },
    7: { id: 7, nombre: "EQUES", arma: "LANZA", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(8,2,6,1) },
    8: { id: 8, nombre: "SAGITIS", arma: "ARCO", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(10,2,5,3) },
    9: { id: 9, nombre: "ALCHEMIA", arma: "BOCAL", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(4,9,5,6) },
    10: { id: 10, nombre: "CAESAR", arma: "GLADIUS", elemento: "TERRA", imgEscudo: "ESCUDO_DRAGON.png", botones: generarBotones(9,8,6,4) },
    // CIELO (021-030)
    21: { id: 21, nombre: "FENRIS", arma: "MORDIDA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(7,1,2,2) },
    22: { id: 22, nombre: "THALGRIM", arma: "MAZO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(4,3,8,3) },
    23: { id: 23, nombre: "AQUILON", arma: "TORNADO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(2,5,3,9) },
    24: { id: 24, nombre: "NIVIS", arma: "HIELO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(6,2,5,9) },
    25: { id: 25, nombre: "AURORA", arma: "LLAMA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(8,7,7,6) },
    26: { id: 26, nombre: "BOREAS", arma: "DAGA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(5,2,3,1) },
    27: { id: 27, nombre: "VALKYR", arma: "LANZA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(9,1,2,1) },
    28: { id: 28, nombre: "EIDOLON", arma: "ESCUDO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(3,4,9,2) },
    29: { id: 29, nombre: "KORIN", arma: "BACULO", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(2,7,2,7) },
    30: { id: 30, nombre: "TYRION", arma: "MANDOBLE", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", botones: generarBotones(6,6,6,5) },
    // AGUA (041-050)
    41: { id: 41, nombre: "SCORPIUS", arma: "AGUIJON", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(5,1,5,5) },
    42: { id: 42, nombre: "TRITONIS", arma: "TRIDENTE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(6,4,6,4) },
    43: { id: 43, nombre: "HYDRUS", arma: "CABEZAS", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(8,8,4,2) },
    44: { id: 44, nombre: "LEVIATHAN", arma: "COLA", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(9,2,7,5) },
    45: { id: 45, nombre: "TIAMAT", arma: "TENTACULOS", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(6,7,12,5) },
    46: { id: 46, nombre: "HASTATUS", arma: "PICA", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(7,2,3,1) },
    47: { id: 47, nombre: "CORSARIUS", arma: "SABLE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(5,3,4,2) },
    48: { id: 48, nombre: "ORACULUM", arma: "ORBE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(1,5,6,9) },
    49: { id: 49, nombre: "ADMIRALIS", arma: "ESTOQUE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(5,6,6,5) },
    50: { id: 50, nombre: "NEPTUNUS", arma: "TRIDENTE", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", botones: generarBotones(7,8,7,6) },
    // MAGIA (061-070)
    61: { id: 61, nombre: "FAMILIARES", arma: "MAGIA", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(3,2,3,8) },
    62: { id: 62, nombre: "ELEMENTUM", arma: "ENERGIA", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(5,4,5,9) },
    63: { id: 63, nombre: "PHANTASMA", arma: "ESPECTRO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(8,1,1,11) },
    64: { id: 64, nombre: "AVATARUS", arma: "LUZ", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(2,9,5,10) },
    65: { id: 65, nombre: "AETHERUS", arma: "VACIO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(5,7,5,13) },
    66: { id: 66, nombre: "TYRO", arma: "VARITA", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(2,2,1,9) },
    67: { id: 67, nombre: "QUAESITOR", arma: "LIBRO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(5,1,4,7) },
    68: { id: 68, nombre: "MIMUS", arma: "ILUSION", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(1,4,6,10) },
    69: { id: 69, nombre: "ARCHIMAGUS", arma: "CETRO", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(3,5,2,12) },
    70: { id: 70, nombre: "MAGITER", arma: "LIDER", elemento: "DIMENSIO", imgEscudo: "ESCUDO_ESPEJO.png", botones: generarBotones(5,7,4,10) },
    // OBJETOS (081-098)
    81: { id: 81, nombre: "IGNIS FIALA", arma: "ARTEFACTO", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(6,0,-2,2) },
    82: { id: 82, nombre: "SPECULUM", arma: "ARTEFACTO", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(1,2,7,4) },
    83: { id: 83, nombre: "MANICA", arma: "ARTEFACTO", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(7,0,-2,2) },
    84: { id: 84, nombre: "LUCERNA", arma: "ARTEFACTO", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(1,7,2,3) },
    85: { id: 85, nombre: "APERTUM", arma: "ARTEFACTO", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(4,5,3,5) },
    86: { id: 86, nombre: "AEGIS", arma: "ARTEFACTO", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(1,5,10,4) },
    87: { id: 87, nombre: "VEXILLUM", arma: "ARTEFACTO", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(3,9,2,3) },
    88: { id: 88, nombre: "OCULUS", arma: "ARTEFACTO", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(2,9,2,10) },
    89: { id: 89, nombre: "MONOLITH", arma: "ARTEFACTO", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(0,0,12,6) },
    90: { id: 90, nombre: "VITA", arma: "POCION", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(1,8,3,4) },
    91: { id: 91, nombre: "AETHER", arma: "POCION", elemento: "CAELUM", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(1,3,1,8) },
    92: { id: 92, nombre: "PETRA", arma: "POCION", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(2,1,8,1) },
    93: { id: 93, nombre: "VENENUM", arma: "POCION", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(6,0,2,4) },
    94: { id: 94, nombre: "AMBROSIA", arma: "POCION", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(5,5,5,5) },
    95: { id: 95, nombre: "VELOCITAS", arma: "POCION", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(6,2,1,4) },
    96: { id: 96, nombre: "FUROR", arma: "POCION", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(10,0,0,0) },
    97: { id: 97, nombre: "OBLIVIO", arma: "POCION", elemento: "AQUA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(1,3,5,6) },
    98: { id: 98, nombre: "FORTUNA", arma: "POCION", elemento: "MAGIA", imgEscudo: "ESCUDO_LLAVE.png", botones: generarBotones(4,4,4,4) }
};