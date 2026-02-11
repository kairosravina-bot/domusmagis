export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
export const VIDEOS_BATALLA = ["Explosión_Elemental.mp4", "Invocaciones_Etéreas.mp4"];

const genB = (i, a, t, m) => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: "ataque.mp4" },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: "cura.mp4" },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: "defensa.mp4" },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: "magia.mp4" }
});

const genMp4s = (target) => ({
    mp4I: `${target}-I.mp4`, mp4A: `${target}-A.mp4`, mp4T: `${target}-T.mp4`, mp4M: `${target}-M.mp4`
});

export const CARTAS = {
    // TIERRA (1-20)
    1: { id: 1, nombre: "APER", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(6,1,5,0), ...genMp4s("001") },
    2: { id: 2, nombre: "SAXUM", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(3,1,12,1), ...genMp4s("002") },
    3: { id: 3, nombre: "BESTIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(9,1,5,5), ...genMp4s("003") },
    4: { id: 4, nombre: "LEO", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(8,5,7,4), ...genMp4s("004") },
    5: { id: 5, nombre: "GAIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(10,5,8,3), ...genMp4s("005") },
    6: { id: 6, nombre: "TIRONIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(5,2,4,1), ...genMp4s("006") },
    7: { id: 7, nombre: "EQUES", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(8,2,6,1), ...genMp4s("007") },
    8: { id: 8, nombre: "SAGITIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(10,2,5,3), ...genMp4s("008") },
    9: { id: 9, nombre: "ALCHEMIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(4,9,5,6), ...genMp4s("009") },
    10: { id: 10, nombre: "CAESAR", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(9,8,6,4), ...genMp4s("010") },
    // ARMAS TIERRA
    11: { id: 11, nombre: "SICA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "011.png", botones: genB(7,1,2,0), ...genMp4s("011") },
    12: { id: 12, nombre: "CLAVA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "012.png", botones: genB(8,1,2,0), ...genMp4s("012") },
    13: { id: 13, nombre: "HASTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "013.png", botones: genB(6,4,3,0), ...genMp4s("013") },
    14: { id: 14, nombre: "SECURIS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "014.png", botones: genB(8,5,3,1), ...genMp4s("014") },
    15: { id: 15, nombre: "SCUTUM", elemento: "TERRA", tipo: "ARMA", imgEscudo: "015.png", botones: genB(1,2,8,0), ...genMp4s("015") },
    16: { id: 16, nombre: "GLADIUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "016.png", botones: genB(6,2,4,1), ...genMp4s("016") },
    17: { id: 17, nombre: "ARCUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "017.png", botones: genB(9,5,1,0), ...genMp4s("017") },
    18: { id: 18, nombre: "MANUBALLISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "018.png", botones: genB(8,1,2,2), ...genMp4s("018") },
    19: { id: 19, nombre: "BALISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "019.png", botones: genB(10,0,2,0), ...genMp4s("019") },
    20: { id: 20, nombre: "ONAGER", elemento: "TERRA", tipo: "ARMA", imgEscudo: "020.png", botones: genB(9,1,3,1), ...genMp4s("020") },
    // CIELO (21-40)
    21: { id: 21, nombre: "FENRIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(7,1,2,2), ...genMp4s("021") },
    25: { id: 25, nombre: "AURORA", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(8,7,7,6), ...genMp4s("025") },
    // ARTEFACTOS (81-89)
    81: { id: 81, nombre: "IGNIS FIALA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "081-AR-ID1.png", botones: genB(6,0,-2,2), ...genMp4s("081") },
    // POCIONES (90-98)
    90: { id: 90, nombre: "VITA", elemento: "COELI", tipo: "POCION", imgEscudo: "090-PO-ID2.png", botones: genB(1,8,3,4), ...genMp4s("090") },
    // BÚHOS (99-108)
    99: { id: 99, nombre: "JUDEX", elemento: "TERRA", tipo: "BUHO", imgEscudo: "099.png", botones: genB(4,4,4,4), ...genMp4s("099") },
    108: { id: 108, nombre: "IMPERATOR", elemento: "NEUTRO", tipo: "BUHO", imgEscudo: "108.png", botones: genB(10,6,4,6), ...genMp4s("108") }
};