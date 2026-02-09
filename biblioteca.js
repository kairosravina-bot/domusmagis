export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
export const VIDEOS_BATALLA = ["Explosión_Elemental.mp4", "Invocaciones_Etéreas.mp4"];

const genB = (i, a, t, m) => ({
    "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: "ataque.mp4" },
    "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: "cura.mp4" },
    "btn-t": { texto: "T", label: "TUTELA", valor: t, video: "defensa.mp4" },
    "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: "magia.mp4" }
});

const genMp4s = (target) => ({
    mp4I: `${target}-I.mp4`,
    mp4A: `${target}-A.mp4`,
    mp4T: `${target}-T.mp4`,
    mp4M: `${target}-M.mp4`
});

export const CARTAS = {
    // TIERRA
    0: { id: 1, nombre: "APER", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(6,1,5,0), codTarget: "001-TI-BE-ID1", ...genMp4s("001-TI-BE-ID1") },
    1: { id: 3, nombre: "SAXUM", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(3,1,12,1), codTarget: "002-TI-BE-ID3", ...genMp4s("002-TI-BE-ID3") },
    2: { id: 5, nombre: "BESTIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(9,1,5,5), codTarget: "003-TI-BE-ID5", ...genMp4s("003-TI-BE-ID5") },
    3: { id: 7, nombre: "LEO", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(8,5,7,4), codTarget: "004-TI-BE-ID7", ...genMp4s("004-TI-BE-ID7") },
    4: { id: 9, nombre: "GAIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: genB(10,5,8,3), codTarget: "005-TI-BE-ID9", ...genMp4s("005-TI-BE-ID9") },
    5: { id: 2, nombre: "TIRONIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(5,2,4,1), codTarget: "006-TI-HU-ID2", ...genMp4s("006-TI-HU-ID2") },
    6: { id: 4, nombre: "EQUES", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(8,2,6,1), codTarget: "007-TI-HU-ID4", ...genMp4s("007-TI-HU-ID4") },
    7: { id: 6, nombre: "SAGITIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(10,2,5,3), codTarget: "008-TI-HU-ID6", ...genMp4s("008-TI-HU-ID6") },
    8: { id: 8, nombre: "ALCHEMIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(4,9,5,6), codTarget: "009-TI-HU-ID8", ...genMp4s("009-TI-HU-ID8") },
    9: { id: 10, nombre: "CAESAR", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: genB(9,8,6,4), codTarget: "010-TI-HU-ID10", ...genMp4s("010-TI-HU-ID10") },
    // CIELO
    10: { id: 1, nombre: "FENRIS", elemento: "CAELUM", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(7,1,2,2), codTarget: "021-CI-BE-ID1", ...genMp4s("021-CI-BE-ID1") },
    11: { id: 3, nombre: "THALGRIM", elemento: "CAELUM", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(4,3,8,3), codTarget: "022-CI-BE-ID3", ...genMp4s("022-CI-BE-ID3") },
    12: { id: 5, nombre: "AQUILON", elemento: "CAELUM", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(2,5,3,9), codTarget: "023-CI-BE-ID5", ...genMp4s("023-CI-BE-ID5") },
    13: { id: 7, nombre: "NIVIS", elemento: "CAELUM", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(6,2,5,9), codTarget: "024-CI-BE-ID7", ...genMp4s("024-CI-BE-ID7") },
    14: { id: 9, nombre: "AURORA", elemento: "CAELUM", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: genB(8,7,7,6), codTarget: "025-CI-BE-ID9", ...genMp4s("025-CI-BE-ID9") },
    15: { id: 2, nombre: "BOREAS", elemento: "CAELUM", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(5,2,3,1), codTarget: "026-CI-HU-ID2", ...genMp4s("026-CI-HU-ID2") },
    16: { id: 4, nombre: "VALKYR",  elemento: "CAELUM", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(9,1,2,1), codTarget: "027-CI-HU-ID4", ...genMp4s("027-CI-HU-ID4") },
    17: { id: 6, nombre: "EIDOLON", elemento: "CAELUM", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(3,4,9,2), codTarget: "028-CI-HU-ID6", ...genMp4s("028-CI-HU-ID6") },
    18: { id: 8, nombre: "KORIN", elemento: "CAELUM", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(2,7,2,7), codTarget: "029-CI-HU-ID8", ...genMp4s("029-CI-HU-ID8") },
    19: { id: 10, nombre: "TYRION", elemento: "CAELUM", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: genB(6,6,6,5), codTarget: "030-CI-HU-ID10", ...genMp4s("030-CI-HU-ID10") },
    // AGUA
    20: { id: 1, nombre: "SCORPIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "041-AG-BE-ID1.png", botones: genB(5,1,5,5), codTarget: "041-AG-BE-ID1", ...genMp4s("041-AG-BE-ID1") },
    21: { id: 3, nombre: "TRITONIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "042-AG-BE-ID3.png", botones: genB(6,4,6,4), codTarget: "042-AG-BE-ID3", ...genMp4s("042-AG-BE-ID3") },
    22: { id: 5, nombre: "HYDRUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "043-AG-BE-ID5.png", botones: genB(8,8,4,2), codTarget: "043-AG-BE-ID5", ...genMp4s("043-AG-BE-ID5") },
    23: { id: 7, nombre: "LEVIATHAN", elemento: "AQUA", tipo: "CASA", imgEscudo: "044-AG-BE-ID7.png", botones: genB(9,2,7,5), codTarget: "044-AG-BE-ID7", ...genMp4s("044-AG-BE-ID7") },
    24: { id: 9, nombre: "TIAMAT", elemento: "AQUA", tipo: "CASA", imgEscudo: "045-AG-BE-ID9.png", botones: genB(6,7,12,5), codTarget: "045-AG-BE-ID9", ...genMp4s("045-AG-BE-ID9") },
    25: { id: 2, nombre: "HASTATUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "046-AG-HU-ID2.png", botones: genB(7,2,3,1), codTarget: "046-AG-HU-ID2", ...genMp4s("046-AG-HU-ID2") },
    26: { id: 4, nombre: "CORSARIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "047-AG-HU-ID4.png", botones: genB(5,3,4,2), codTarget: "047-AG-HU-ID4", ...genMp4s("047-AG-HU-ID4") },
    27: { id: 6, nombre: "ORACULUM", elemento: "AQUA", tipo: "CASA", imgEscudo: "048-AG-HU-ID6.png", botones: genB(1,5,6,9), codTarget: "048-AG-HU-ID6", ...genMp4s("048-AG-HU-ID6") },
    28: { id: 8, nombre: "ADMIRALIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "049-AG-HU-ID8.png", botones: genB(5,6,6,5), codTarget: "049-AG-HU-ID8", ...genMp4s("049-AG-HU-ID8") },
    29: { id: 10, nombre: "NEPTUNUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "050-AG-HU-ID10.png", botones: genB(7,8,7,6), codTarget: "050-AG-HU-ID10", ...genMp4s("050-AG-HU-ID10") },
    // MAGIA
    30: { id: 1, nombre: "FAMILIARES", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "061-MA-BE-ID1.png", botones: genB(3,2,3,8), codTarget: "061-MA-BE-ID1", ...genMp4s("061-MA-BE-ID1") },
    31: { id: 3, nombre: "ELEMENTUM", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "062-MA-BE-ID3.png", botones: genB(5,4,5,9), codTarget: "062-MA-BE-ID3", ...genMp4s("062-MA-BE-ID3") },
    32: { id: 5, nombre: "PHANTASMA", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "063-MA-BE-ID5.png", botones: genB(8,1,1,11), codTarget: "063-MA-BE-ID5", ...genMp4s("063-MA-BE-ID5") },
    33: { id: 7, nombre: "AVATARUS", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "064-MA-BE-ID7.png", botones: genB(2,9,5,10), codTarget: "064-MA-BE-ID7", ...genMp4s("064-MA-BE-ID7") },
    34: { id: 9, nombre: "AETHERUS", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "065-MA-BE-ID9.png", botones: genB(5,7,5,13), codTarget: "065-MA-BE-ID9", ...genMp4s("065-MA-BE-ID9") },
    35: { id: 2, nombre: "TYRO", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "066-MA-HU-ID2.png", botones: genB(2,2,1,9), codTarget: "066-MA-HU-ID2", ...genMp4s("066-MA-HU-ID2") },
    36: { id: 4, nombre: "QUAESITOR", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "067-MA-HU-ID4.png", botones: genB(5,1,4,7), codTarget: "067-MA-HU-ID4", ...genMp4s("067-MA-HU-ID4") },
    37: { id: 6, nombre: "MIMUS", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "068-MA-HU-ID6.png", botones: genB(1,4,6,10), codTarget: "068-MA-HU-ID6", ...genMp4s("068-MA-HU-ID6") },
    38: { id: 8, nombre: "ARCHIMAGUS", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "069-MA-HU-ID8.png", botones: genB(3,5,2,12), codTarget: "069-MA-HU-ID8", ...genMp4s("069-MA-HU-ID8") },
    39: { id: 10, nombre: "MAGITER", elemento: "DIMENSIO", tipo: "CASA", imgEscudo: "070-MA-HU-ID10.png", botones: genB(5,7,4,10), codTarget: "070-MA-HU-ID10", ...genMp4s("070-MA-HU-ID10") },
    // ARTEFACTOS
    40: { id: 1, nombre: "IGNIS FIALA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "081-AR-ID1.png", botones: genB(6,0,-2,2), codTarget: "081-AR-ID1", ...genMp4s("081-AR-ID1") },
    41: { id: 3, nombre: "SPECULUM", elemento: "TERRA", tipo: "ARTEFACTO", imgEscudo: "082-AR-ID3.png", botones: genB(1,2,7,4), codTarget: "082-AR-ID3", ...genMp4s("082-AR-ID3") },
    42: { id: 5, nombre: "MANICA", elemento: "TERRA", tipo: "ARTEFACTO", imgEscudo: "083-AR-ID5.png", botones: genB(7,0,-2,2), codTarget: "083-AR-ID5", ...genMp4s("083-AR-ID5") },
    43: { id: 7, nombre: "LUCERNA", elemento: "CAELUM", tipo: "ARTEFACTO", imgEscudo: "084-AR-ID7.png", botones: genB(1,7,2,3), codTarget: "084-AR-ID7", ...genMp4s("084-AR-ID7") },
    44: { id: 9, nombre: "APERTUM", elemento: "CAELUM", tipo: "ARTEFACTO", imgEscudo: "085-AR-ID9.png", botones: genB(4,5,3,5), codTarget: "085-AR-ID9", ...genMp4s("085-AR-ID9") },
    45: { id: 11, nombre: "AEGIS", elemento: "AQUA", tipo: "ARTEFACTO", imgEscudo: "086-AR-ID11.png", botones: genB(1,5,10,4), codTarget: "086-AR-ID11", ...genMp4s("086-AR-ID11") },
    46: { id: 13, nombre: "VEXILLUM", elemento: "DIMENSIO", tipo: "ARTEFACTO", imgEscudo: "087-AR-ID13.png", botones: genB(3,9,2,3), codTarget: "087-AR-ID13", ...genMp4s("087-AR-ID13") },
    47: { id: 15, nombre: "OCULUS", elemento: "DIMENSIO", tipo: "ARTEFACTO", imgEscudo: "088-AR-ID15.png", botones: genB(2,9,2,10), codTarget: "088-AR-ID15", ...genMp4s("088-AR-ID15") },
    48: { id: 17, nombre: "MONOLITH", elemento: "AQUA", tipo: "ARTEFACTO", imgEscudo: "089-AR-ID17.png", botones: genB(0,0,12,6), codTarget: "089-AR-ID17", ...genMp4s("089-AR-ID17") },
    // POCIONES
    49: { id: 2, nombre: "VITA", elemento: "CAELUM", tipo: "BUHO", imgEscudo: "090-PO-ID2.png", botones: genB(1,8,3,4), codTarget: "090-PO-ID2", ...genMp4s("090-PO-ID2") },
    50: { id: 4, nombre: "AETHER", elemento: "CAELUM", tipo: "BUHO", imgEscudo: "091-PO-ID4.png", botones: genB(1,3,1,8), codTarget: "091-PO-ID4", ...genMp4s("091-PO-ID4") },
    51: { id: 6, nombre: "PETRA", elemento: "TERRA", tipo: "BUHO", imgEscudo: "092-PO-ID6.png", botones: genB(2,1,8,1), codTarget: "092-PO-ID6", ...genMp4s("092-PO-ID6") },
    52: { id: 8, nombre: "VENENUM", elemento: "TERRA", tipo: "BUHO", imgEscudo: "093-PO-ID8.png", botones: genB(6,0,2,4), codTarget: "093-PO-ID8", ...genMp4s("093-PO-ID8") },
    53: { id: 10, nombre: "AMBROSIA", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "094-PO-ID10.png", botones: genB(5,5,5,5), codTarget: "094-PO-ID10", ...genMp4s("094-PO-ID10") },
    54: { id: 12, nombre: "VELOCITAS", elemento: "AQUA", tipo: "BUHO", imgEscudo: "095-PO-ID12.png", botones: genB(6,2,1,4), codTarget: "095-PO-ID12", ...genMp4s("095-PO-ID12") },
    55: { id: 14, nombre: "FUROR", elemento: "TERRA", tipo: "BUHO", imgEscudo: "096-PO-ID14.png", botones: genB(10,0,0,0), codTarget: "096-PO-ID14", ...genMp4s("096-PO-ID14") },
    56: { id: 16, nombre: "OBLIVIO", elemento: "AQUA", tipo: "BUHO", imgEscudo: "097-PO-ID16.png", botones: genB(1,3,5,6), codTarget: "097-PO-ID16", ...genMp4s("097-PO-ID16") },
    57: { id: 18, nombre: "FORTUNA", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "098-PO-ID18.png", botones: genB(4,4,4,4), codTarget: "098-PO-ID18", ...genMp4s("098-PO-ID18") }
};