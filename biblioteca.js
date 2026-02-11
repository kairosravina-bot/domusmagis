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
    // TIERRA (001-020)
    1: { id: 1, nombre: "APER", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(6,1,5,0), codTarget: "001", ...genMp4s("001") },
    2: { id: 2, nombre: "SAXUM", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(3,1,12,1), codTarget: "002", ...genMp4s("002") },
    3: { id: 3, nombre: "BESTIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(9,1,5,5), codTarget: "003", ...genMp4s("003") },
    4: { id: 4, nombre: "LEO", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(8,5,7,4), codTarget: "004", ...genMp4s("004") },
    5: { id: 5, nombre: "GAIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(10,5,8,3), codTarget: "005", ...genMp4s("005") },
    6: { id: 6, nombre: "TIRONIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(5,2,4,1), codTarget: "006", ...genMp4s("006") },
    7: { id: 7, nombre: "EQUES", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(8,2,6,1), codTarget: "007", ...genMp4s("007") },
    8: { id: 8, nombre: "SAGITIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(10,2,5,3), codTarget: "008", ...genMp4s("008") },
    9: { id: 9, nombre: "ALCHEMIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(4,9,5,6), codTarget: "009", ...genMp4s("009") },
    10: { id: 10, nombre: "CAESAR", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(9,8,6,4), codTarget: "010", ...genMp4s("010") },
    // ARMAS TIERRA (011-020)
    11: { id: 11, nombre: "SICA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "011.png", botones: genB(7,1,2,0), codTarget: "011", ...genMp4s("011") },
    12: { id: 12, nombre: "CLAVA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "012.png", botones: genB(8,1,2,0), codTarget: "012", ...genMp4s("012") },
    13: { id: 13, nombre: "HASTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "013.png", botones: genB(6,4,3,0), codTarget: "013", ...genMp4s("013") },
    14: { id: 14, nombre: "SECURIS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "014.png", botones: genB(8,5,3,1), codTarget: "014", ...genMp4s("014") },
    15: { id: 15, nombre: "SCUTUM", elemento: "TERRA", tipo: "ARMA", imgEscudo: "015.png", botones: genB(1,2,8,0), codTarget: "015", ...genMp4s("015") },
    16: { id: 16, nombre: "GLADIUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "016.png", botones: genB(6,2,4,1), codTarget: "016", ...genMp4s("016") },
    17: { id: 17, nombre: "ARCUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "017.png", botones: genB(9,5,1,0), codTarget: "017", ...genMp4s("017") },
    18: { id: 18, nombre: "MANUBALLISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "018.png", botones: genB(8,1,2,2), codTarget: "018", ...genMp4s("018") },
    19: { id: 19, nombre: "BALISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "019.png", botones: genB(10,0,2,0), codTarget: "019", ...genMp4s("019") },
    20: { id: 20, nombre: "ONIAGER", elemento: "TERRA", tipo: "ARMA", imgEscudo: "020.png", botones: genB(9,1,3,1), codTarget: "020", ...genMp4s("020") },
    // CIELO (021-030)
    21: { id: 21, nombre: "FENRIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(7,1,2,2), codTarget: "021", ...genMp4s("021") },
    // ... completar el resto de la lista hasta 108 siguiendo los stats del PDF ...
    108: { id: 108, nombre: "IMPERATOR", elemento: "NEUTRO", tipo: "BUHO", imgEscudo: "108.png", botones: genB(10,6,4,6), codTarget: "108", ...genMp4s("108") }
};