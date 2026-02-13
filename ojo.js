// --- BIBLIOTECA DE 108 CARTAS INTEGRADA (SIN DEFAULT) ---
export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
export const VIDEOS_BATALLA = ["Explosion_Elemental.mp4", "Invocaciones_Etereas.mp4"];

const CARTAS = {
    // TIERRA (1-20)
    1: { idar: 1, id: 1, nombre: "APER", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: "1I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: "1A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: "1T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 0, video: "1M.mp4" } }, codTarget: "1" },
    2: { idar: 2, id: 2, nombre: "SAXUM", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 3, video: "2I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: "2A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 12, video: "2T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: "2M.mp4" } }, codTarget: "2" },
    3: { idar: 3, id: 3, nombre: "BESTIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 9, video: "3I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: "3A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: "3T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 5, video: "3M.mp4" } }, codTarget: "3" },
    4: { idar: 4, id: 4, nombre: "LEO", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: "4I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: "4A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 7, video: "4T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: "4M.mp4" } }, codTarget: "4" },
    5: { idar: 5, id: 5, nombre: "GAIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1001-TI-BE.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 10, video: "5I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: "5A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 8, video: "5T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 3, video: "5M.mp4" } }, codTarget: "5" },
    6: { idar: 6, id: 6, nombre: "TIRONIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: "6I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: "6A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 4, video: "6T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: "6M.mp4" } }, codTarget: "6" },
    7: { idar: 7, id: 7, nombre: "EQUES", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: "7I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: "7A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 6, video: "7T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: "7M.mp4" } }, codTarget: "7" },
    8: { idar: 8, id: 8, nombre: "SAGITIS", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 10, video: "8I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: "8A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: "8T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 3, video: "8M.mp4" } }, codTarget: "8" },
    9: { idar: 9, id: 9, nombre: "ALCHEMIA", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 4, video: "9I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 9, video: "9A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: "9T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 6, video: "9M.mp4" } }, codTarget: "9" },
    10: { idar: 10, id: 10, nombre: "CAESAR", elemento: "TERRA", tipo: "CASA", imgEscudo: "1002-TI-HU.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 9, video: "10I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 8, video: "10A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 6, video: "10T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: "10M.mp4" } }, codTarget: "10" },
    11: { idar: 11, id: 1, nombre: "SICA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1003-TI-AR1.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 7, video: "11I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: "11A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: "11T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 0, video: "11M.mp4" } }, codTarget: "11" },
    12: { idar: 12, id: 2, nombre: "HASTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1004-TI-AR2.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: "12I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 4, video: "12A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: "12T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 0, video: "12M.mp4" } }, codTarget: "12" },
    13: { idar: 13, id: 3, nombre: "CLAVA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1003-TI-AR1.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: "13I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: "13A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: "13T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 0, video: "13M.mp4" } }, codTarget: "13" },
    14: { idar: 14, id: 4, nombre: "SECURIS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1004-TI-AR2.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: "14I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: "14A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: "14T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: "14M.mp4" } }, codTarget: "14" },
    15: { idar: 15, id: 5, nombre: "SCUTUM", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1003-TI-AR1.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 1, video: "15I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: "15A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 8, video: "15T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 0, video: "15M.mp4" } }, codTarget: "15" },
    16: { idar: 16, id: 6, nombre: "GLADIUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1004-TI-AR2.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: "16I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: "16A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 4, video: "16T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: "16M.mp4" } }, codTarget: "16" },
    17: { idar: 17, id: 7, nombre: "ARCUS", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1003-TI-AR1.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 9, video: "17I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: "17A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 1, video: "17T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 0, video: "17M.mp4" } }, codTarget: "17" },
    18: { idar: 18, id: 8, nombre: "MANUBALLISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1004-TI-AR2.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: "18I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: "18A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: "18T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 2, video: "18M.mp4" } }, codTarget: "18" },
    19: { idar: 19, id: 9, nombre: "BALISTA", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1003-TI-AR1.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 10, video: "19I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 0, video: "19A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: "19T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 0, video: "19M.mp4" } }, codTarget: "19" },
    20: { idar: 20, id: 10, nombre: "ONIAGER", elemento: "TERRA", tipo: "ARMA", imgEscudo: "1004-TI-AR2.png", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 9, video: "20I.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: "20A.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: "20T.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: "20M.mp4" } }, codTarget: "20" },

    // COELI (21-40)
    21: { idar: 21, id: 1, nombre: "FENRIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: { "btn-i": { texto: "I", valor: 7, video: "21I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "21A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "21T.mp4" }, "btn-m": { texto: "M", valor: 2, video: "21M.mp4" } }, codTarget: "21" },
    22: { idar: 22, id: 2, nombre: "THALGRIM", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: { "btn-i": { texto: "I", valor: 4, video: "22I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "22A.mp4" }, "btn-t": { texto: "T", valor: 8, video: "22T.mp4" }, "btn-m": { texto: "M", valor: 3, video: "22M.mp4" } }, codTarget: "22" },
    23: { idar: 23, id: 3, nombre: "AQUILON", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: { "btn-i": { texto: "I", valor: 2, video: "23I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "23A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "23T.mp4" }, "btn-m": { texto: "M", valor: 9, video: "23M.mp4" } }, codTarget: "23" },
    24: { idar: 24, id: 4, nombre: "NIVIS", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: { "btn-i": { texto: "I", valor: 6, video: "24I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "24A.mp4" }, "btn-t": { texto: "T", valor: 5, video: "24T.mp4" }, "btn-m": { texto: "M", valor: 9, video: "24M.mp4" } }, codTarget: "24" },
    25: { idar: 25, id: 5, nombre: "AURORA", elemento: "COELI", tipo: "CASA", imgEscudo: "1021-CI-BE.png", botones: { "btn-i": { texto: "I", valor: 8, video: "25I.mp4" }, "btn-a": { texto: "A", valor: 7, video: "25A.mp4" }, "btn-t": { texto: "T", valor: 7, video: "25T.mp4" }, "btn-m": { texto: "M", valor: 6, video: "25M.mp4" } }, codTarget: "25" },
    26: { idar: 26, id: 6, nombre: "BOREAS", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: { "btn-i": { texto: "I", valor: 5, video: "26I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "26A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "26T.mp4" }, "btn-m": { texto: "M", valor: 1, video: "26M.mp4" } }, codTarget: "26" },
    27: { idar: 27, id: 7, nombre: "VALKYR", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: { "btn-i": { texto: "I", valor: 9, video: "27I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "27A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "27T.mp4" }, "btn-m": { texto: "M", valor: 1, video: "27M.mp4" } }, codTarget: "27" },
    28: { idar: 28, id: 8, nombre: "EIDOLON", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: { "btn-i": { texto: "I", valor: 3, video: "28I.mp4" }, "btn-a": { texto: "A", valor: 4, video: "28A.mp4" }, "btn-t": { texto: "T", valor: 9, video: "28T.mp4" }, "btn-m": { texto: "M", valor: 2, video: "28M.mp4" } }, codTarget: "28" },
    29: { idar: 29, id: 9, nombre: "KORIN", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: { "btn-i": { texto: "I", valor: 2, video: "29I.mp4" }, "btn-a": { texto: "A", valor: 7, video: "29A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "29T.mp4" }, "btn-m": { texto: "M", valor: 7, video: "29M.mp4" } }, codTarget: "29" },
    30: { idar: 30, id: 10, nombre: "TYRION", elemento: "COELI", tipo: "CASA", imgEscudo: "1022-CI-HU.png", botones: { "btn-i": { texto: "I", valor: 6, video: "30I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "30A.mp4" }, "btn-t": { texto: "T", valor: 6, video: "30T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "30M.mp4" } }, codTarget: "30" },
    31: { idar: 31, id: 1, nombre: "SICA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1023-CI-AR1.png", botones: { "btn-i": { texto: "I", valor: 5, video: "31I.mp4" }, "btn-a": { texto: "A", valor: 4, video: "31A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "31T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "31M.mp4" } }, codTarget: "31" },
    32: { idar: 32, id: 2, nombre: "HASTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1024-CI-AR2.png", botones: { "btn-i": { texto: "I", valor: 6, video: "32I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "32A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "32T.mp4" }, "btn-m": { texto: "M", valor: 3, video: "32M.mp4" } }, codTarget: "32" },
    33: { idar: 33, id: 3, nombre: "CLAVA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1023-CI-AR1.png", botones: { "btn-i": { texto: "I", valor: 7, video: "33I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "33A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "33T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "33M.mp4" } }, codTarget: "33" },
    34: { idar: 34, id: 4, nombre: "SECURIS", elemento: "COELI", tipo: "ARMA", imgEscudo: "1024-CI-AR2.png", botones: { "btn-i": { texto: "I", valor: 7, video: "34I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "34A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "34T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "34M.mp4" } }, codTarget: "34" },
    35: { idar: 35, id: 5, nombre: "SCUTUM", elemento: "COELI", tipo: "ARMA", imgEscudo: "1023-CI-AR1.png", botones: { "btn-i": { texto: "I", valor: 1, video: "35I.mp4" }, "btn-a": { texto: "A", valor: 4, video: "35A.mp4" }, "btn-t": { texto: "T", valor: 7, video: "35T.mp4" }, "btn-m": { texto: "M", valor: 6, video: "35M.mp4" } }, codTarget: "35" },
    36: { idar: 36, id: 6, nombre: "GLADIUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "1024-CI-AR2.png", botones: { "btn-i": { texto: "I", valor: 6, video: "36I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "36A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "36T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "36M.mp4" } }, codTarget: "36" },
    37: { idar: 37, id: 7, nombre: "ARCUS", elemento: "COELI", tipo: "ARMA", imgEscudo: "1023-CI-AR1.png", botones: { "btn-i": { texto: "I", valor: 6, video: "37I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "37A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "37T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "37M.mp4" } }, codTarget: "37" },
    38: { idar: 38, id: 8, nombre: "MANUBALLISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1024-CI-AR2.png", botones: { "btn-i": { texto: "I", valor: 7, video: "38I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "38A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "38T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "38M.mp4" } }, codTarget: "38" },
    39: { idar: 39, id: 9, nombre: "BALISTA", elemento: "COELI", tipo: "ARMA", imgEscudo: "1023-CI-AR1.png", botones: { "btn-i": { texto: "I", valor: 9, video: "39I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "39A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "39T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "39M.mp4" } }, codTarget: "39" },
    40: { idar: 40, id: 10, nombre: "ONIAGER", elemento: "COELI", tipo: "ARMA", imgEscudo: "1024-CI-AR2.png", botones: { "btn-i": { texto: "I", valor: 8, video: "40I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "40A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "40T.mp4" }, "btn-m": { texto: "M", valor: 7, video: "40M.mp4" } }, codTarget: "40" },

    // AQUA (41-60)
    41: { idar: 41, id: 1, nombre: "SCORPIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: { "btn-i": { texto: "I", valor: 5, video: "41I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "41A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "41T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "41M.mp4" } }, codTarget: "41" },
    42: { idar: 42, id: 2, nombre: "TRITONIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: { "btn-i": { texto: "I", valor: 3, video: "42I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "42A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "42T.mp4" }, "btn-m": { texto: "M", valor: 6, video: "42M.mp4" } }, codTarget: "42" },
    43: { idar: 43, id: 3, nombre: "HYDRUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: { "btn-i": { texto: "I", valor: 5, video: "43I.mp4" }, "btn-a": { texto: "A", valor: 8, video: "43A.mp4" }, "btn-t": { texto: "T", valor: 8, video: "43T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "43M.mp4" } }, codTarget: "43" },
    44: { idar: 44, id: 4, nombre: "LEVIATHAN", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: { "btn-i": { texto: "I", valor: 7, video: "44I.mp4" }, "btn-a": { texto: "A", valor: 9, video: "44A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "44T.mp4" }, "btn-m": { texto: "M", valor: 7, video: "44M.mp4" } }, codTarget: "44" },
    45: { idar: 45, id: 5, nombre: "TIAMAT", elemento: "AQUA", tipo: "CASA", imgEscudo: "1041-AG-BE.png", botones: { "btn-i": { texto: "I", valor: 9, video: "45I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "45A.mp4" }, "btn-t": { texto: "T", valor: 7, video: "45T.mp4" }, "btn-m": { texto: "M", valor: 12, video: "45M.mp4" } }, codTarget: "45" },
    46: { idar: 46, id: 6, nombre: "HASTATUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: { "btn-i": { texto: "I", valor: 2, video: "46I.mp4" }, "btn-a": { texto: "A", valor: 7, video: "46A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "46T.mp4" }, "btn-m": { texto: "M", valor: 3, video: "46M.mp4" } }, codTarget: "46" },
    47: { idar: 47, id: 7, nombre: "CORSARIUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: { "btn-i": { texto: "I", valor: 4, video: "47I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "47A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "47T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "47M.mp4" } }, codTarget: "47" },
    48: { idar: 48, id: 8, nombre: "ORACULUM", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: { "btn-i": { texto: "I", valor: 6, video: "48I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "48A.mp4" }, "btn-t": { texto: "T", valor: 5, video: "48T.mp4" }, "btn-m": { texto: "M", valor: 6, video: "48M.mp4" } }, codTarget: "48" },
    49: { idar: 49, id: 9, nombre: "ADMIRALIS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: { "btn-i": { texto: "I", valor: 8, video: "49I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "49A.mp4" }, "btn-t": { texto: "T", valor: 6, video: "49T.mp4" }, "btn-m": { texto: "M", valor: 6, video: "49M.mp4" } }, codTarget: "49" },
    50: { idar: 50, id: 10, nombre: "NEPTUNUS", elemento: "AQUA", tipo: "CASA", imgEscudo: "1042-AG-HU.png", botones: { "btn-i": { texto: "I", valor: 10, video: "50I.mp4" }, "btn-a": { texto: "A", valor: 7, video: "50A.mp4" }, "btn-t": { texto: "T", valor: 8, video: "50T.mp4" }, "btn-m": { texto: "M", valor: 7, video: "50M.mp4" } }, codTarget: "50" },
    51: { idar: 51, id: 1, nombre: "SICA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1043-AG-AR1.png", botones: { "btn-i": { texto: "I", valor: 1, video: "51I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "51A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "51T.mp4" }, "btn-m": { texto: "M", valor: 3, video: "51M.mp4" } }, codTarget: "51" },
    52: { idar: 52, id: 2, nombre: "HASTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1044-AG-AR2.png", botones: { "btn-i": { texto: "I", valor: 2, video: "52I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "52A.mp4" }, "btn-t": { texto: "T", valor: 5, video: "52T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "52M.mp4" } }, codTarget: "52" },
    53: { idar: 53, id: 3, nombre: "CLAVA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1043-AG-AR1.png", botones: { "btn-i": { texto: "I", valor: 3, video: "53I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "53A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "53T.mp4" }, "btn-m": { texto: "M", valor: 3, video: "53M.mp4" } }, codTarget: "53" },
    54: { idar: 54, id: 4, nombre: "SECURIS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1044-AG-AR2.png", botones: { "btn-i": { texto: "I", valor: 4, video: "54I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "54A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "54T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "54M.mp4" } }, codTarget: "54" },
    55: { idar: 55, id: 5, nombre: "SCUTUM", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1043-AG-AR1.png", botones: { "btn-i": { texto: "I", valor: 5, video: "55I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "55A.mp4" }, "btn-t": { texto: "T", valor: 5, video: "55T.mp4" }, "btn-m": { texto: "M", valor: 9, video: "55M.mp4" } }, codTarget: "55" },
    56: { idar: 56, id: 6, nombre: "GLADIUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1044-AG-AR2.png", botones: { "btn-i": { texto: "I", valor: 6, video: "56I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "56A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "56T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "56M.mp4" } }, codTarget: "56" },
    57: { idar: 57, id: 7, nombre: "ARCUS", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1043-AG-AR1.png", botones: { "btn-i": { texto: "I", valor: 7, video: "57I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "57A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "57T.mp4" }, "btn-m": { texto: "M", valor: 2, video: "57M.mp4" } }, codTarget: "57" },
    58: { idar: 58, id: 8, nombre: "MANUBALLISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1044-AG-AR2.png", botones: { "btn-i": { texto: "I", valor: 8, video: "58I.mp4" }, "btn-a": { texto: "A", valor: 7, video: "58A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "58T.mp4" }, "btn-m": { texto: "M", valor: 3, video: "58M.mp4" } }, codTarget: "58" },
    59: { idar: 59, id: 9, nombre: "BALISTA", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1043-AG-AR1.png", botones: { "btn-i": { texto: "I", valor: 9, video: "59I.mp4" }, "btn-a": { texto: "A", valor: 9, video: "59A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "59T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "59M.mp4" } }, codTarget: "59" },
    60: { idar: 60, id: 10, nombre: "ONIAGER", elemento: "AQUA", tipo: "ARMA", imgEscudo: "1044-AG-AR2.png", botones: { "btn-i": { texto: "I", valor: 10, video: "60I.mp4" }, "btn-a": { texto: "A", valor: 8, video: "60A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "60T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "60M.mp4" } }, codTarget: "60" },

    // MAGIA (61-80)
    61: { idar: 61, id: 1, nombre: "FAMILIARES", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: { "btn-i": { texto: "I", valor: 1, video: "61I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "61A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "61T.mp4" }, "btn-m": { texto: "M", valor: 3, video: "61M.mp4" } }, codTarget: "61" },
    62: { idar: 62, id: 2, nombre: "ELEMENTUM", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: { "btn-i": { texto: "I", valor: 3, video: "62I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "62A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "62T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "62M.mp4" } }, codTarget: "62" },
    63: { idar: 63, id: 3, nombre: "PHANTASMA", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: { "btn-i": { texto: "I", valor: 5, video: "63I.mp4" }, "btn-a": { texto: "A", valor: 8, video: "63A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "63T.mp4" }, "btn-m": { texto: "M", valor: 1, video: "63M.mp4" } }, codTarget: "63" },
    64: { idar: 64, id: 4, nombre: "AVATARUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: { "btn-i": { texto: "I", valor: 7, video: "64I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "64A.mp4" }, "btn-t": { texto: "T", valor: 9, video: "64T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "64M.mp4" } }, codTarget: "64" },
    65: { idar: 65, id: 5, nombre: "AETHERUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1061-MA-BE.png", botones: { "btn-i": { texto: "I", valor: 9, video: "65I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "65A.mp4" }, "btn-t": { texto: "T", valor: 7, video: "65T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "65M.mp4" } }, codTarget: "65" },
    66: { idar: 66, id: 6, nombre: "TYRO", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: { "btn-i": { texto: "I", valor: 2, video: "66I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "66A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "66T.mp4" }, "btn-m": { texto: "M", valor: 1, video: "66M.mp4" } }, codTarget: "66" },
    67: { idar: 67, id: 7, nombre: "QUAESITOR", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: { "btn-i": { texto: "I", valor: 4, video: "67I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "67A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "67T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "67M.mp4" } }, codTarget: "67" },
    68: { idar: 68, id: 8, nombre: "MIMUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: { "btn-i": { texto: "I", valor: 6, video: "68I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "68A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "68T.mp4" }, "btn-m": { texto: "M", valor: 6, video: "68M.mp4" } }, codTarget: "68" },
    69: { idar: 69, id: 9, nombre: "ARCHIMAGUS", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: { "btn-i": { texto: "I", valor: 8, video: "69I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "69A.mp4" }, "btn-t": { texto: "T", valor: 5, video: "69T.mp4" }, "btn-m": { texto: "M", valor: 2, video: "69M.mp4" } }, codTarget: "69" },
    70: { idar: 70, id: 10, nombre: "MAGITER", elemento: "MAGIA", tipo: "CASA", imgEscudo: "1062-MA-HU.png", botones: { "btn-i": { texto: "I", valor: 10, video: "70I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "70A.mp4" }, "btn-t": { texto: "T", valor: 7, video: "70T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "70M.mp4" } }, codTarget: "70" },
    71: { idar: 71, id: 1, nombre: "SICA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1063-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 4, video: "71I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "71A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "71T.mp4" }, "btn-m": { texto: "M", valor: 7, video: "71M.mp4" } }, codTarget: "71" },
    72: { idar: 72, id: 2, nombre: "HASTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1064-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 4, video: "72I.mp4" }, "btn-a": { texto: "A", valor: 4, video: "72A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "72T.mp4" }, "btn-m": { texto: "M", valor: 7, video: "72M.mp4" } }, codTarget: "72" },
    73: { idar: 73, id: 3, nombre: "CLAVA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1063-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 5, video: "73I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "73A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "73T.mp4" }, "btn-m": { texto: "M", valor: 8, video: "73M.mp4" } }, codTarget: "73" },
    74: { idar: 74, id: 4, nombre: "SECURIS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1064-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 6, video: "74I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "74A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "74T.mp4" }, "btn-m": { texto: "M", valor: 8, video: "74M.mp4" } }, codTarget: "74" },
    75: { idar: 75, id: 5, nombre: "SCUTUM", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1063-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 1, video: "75I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "75A.mp4" }, "btn-t": { texto: "T", valor: 5, video: "75T.mp4" }, "btn-m": { texto: "M", valor: 9, video: "75M.mp4" } }, codTarget: "75" },
    76: { idar: 76, id: 6, nombre: "GLADIUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1064-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 6, video: "76I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "76A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "76T.mp4" }, "btn-m": { texto: "M", valor: 7, video: "76M.mp4" } }, codTarget: "76" },
    77: { idar: 77, id: 7, nombre: "ARCUS", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1063-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 4, video: "77I.mp4" }, "btn-a": { texto: "A", valor: 4, video: "77A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "77T.mp4" }, "btn-m": { texto: "M", valor: 8, video: "77M.mp4" } }, codTarget: "77" },
    78: { idar: 78, id: 8, nombre: "MANUBALLISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1064-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 2, video: "78I.mp4" }, "btn-a": { texto: "A", valor: 4, video: "78A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "78T.mp4" }, "btn-m": { texto: "M", valor: 10, video: "78M.mp4" } }, codTarget: "78" },
    79: { idar: 79, id: 9, nombre: "BALISTA", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1063-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 7, video: "79I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "79A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "79T.mp4" }, "btn-m": { texto: "M", valor: 10, video: "79M.mp4" } }, codTarget: "79" },
    80: { idar: 80, id: 10, nombre: "ONIAGER", elemento: "MAGIA", tipo: "ARMA", imgEscudo: "1064-MA-AR1.png", botones: { "btn-i": { texto: "I", valor: 7, video: "80I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "80A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "80T.mp4" }, "btn-m": { texto: "M", valor: 11, video: "80M.mp4" } }, codTarget: "80" },

    // ARTEFACTOS Y POCIONES (81-98)
    81: { idar: 81, id: 1, nombre: "IGNIS FIALA", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 6, video: "81I.mp4" }, "btn-a": { texto: "A", valor: 0, video: "81A.mp4" }, "btn-t": { texto: "T", valor: -2, video: "81T.mp4" }, "btn-m": { texto: "M", valor: 2, video: "81M.mp4" } }, codTarget: "81" },
    82: { idar: 82, id: 2, nombre: "SPECULUM", elemento: "TERRA", tipo: "ARTEFACTO", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 1, video: "82I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "82A.mp4" }, "btn-t": { texto: "T", valor: 7, video: "82T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "82M.mp4" } }, codTarget: "82" },
    83: { idar: 83, id: 3, nombre: "MANICA", elemento: "TERRA", tipo: "ARTEFACTO", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 7, video: "83I.mp4" }, "btn-a": { texto: "A", valor: 0, video: "83A.mp4" }, "btn-t": { texto: "T", valor: -2, video: "83T.mp4" }, "btn-m": { texto: "M", valor: 2, video: "83M.mp4" } }, codTarget: "83" },
    84: { idar: 84, id: 4, nombre: "LUCERNA", elemento: "COELI", tipo: "ARTEFACTO", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 1, video: "84I.mp4" }, "btn-a": { texto: "A", valor: 7, video: "84A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "84T.mp4" }, "btn-m": { texto: "M", valor: 3, video: "84M.mp4" } }, codTarget: "84" },
    85: { idar: 85, id: 5, nombre: "APERTUM", elemento: "COELI", tipo: "ARTEFACTO", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 4, video: "85I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "85A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "85T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "85M.mp4" } }, codTarget: "85" },
    86: { idar: 86, id: 6, nombre: "AEGIS", elemento: "AQUA", tipo: "ARTEFACTO", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 1, video: "86I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "86A.mp4" }, "btn-t": { texto: "T", valor: 10, video: "86T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "86M.mp4" } }, codTarget: "86" },
    87: { idar: 87, id: 7, nombre: "VEXILLUM", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 3, video: "87I.mp4" }, "btn-a": { texto: "A", valor: 9, video: "87A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "87T.mp4" }, "btn-m": { texto: "M", valor: 3, video: "87M.mp4" } }, codTarget: "87" },
    88: { idar: 88, id: 8, nombre: "OCULUS", elemento: "MAGIA", tipo: "ARTEFACTO", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 2, video: "88I.mp4" }, "btn-a": { texto: "A", valor: 9, video: "88A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "88T.mp4" }, "btn-m": { valor: 10, video: "88M.mp4" } }, codTarget: "88" },
    89: { idar: 89, id: 9, nombre: "MONOLITH", elemento: "AQUA", tipo: "ARTEFACTO", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 0, video: "89I.mp4" }, "btn-a": { texto: "A", valor: 0, video: "89A.mp4" }, "btn-t": { texto: "T", valor: 12, video: "89T.mp4" }, "btn-m": { texto: "M", valor: 6, video: "89M.mp4" } }, codTarget: "89" },
    90: { idar: 90, id: 10, nombre: "VITA", elemento: "COELI", tipo: "POCION", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 1, video: "90I.mp4" }, "btn-a": { texto: "A", valor: 8, video: "90A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "90T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "90M.mp4" } }, codTarget: "90" },
    91: { idar: 91, id: 11, nombre: "AETHER", elemento: "COELI", tipo: "POCION", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 1, video: "91I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "91A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "91T.mp4" }, "btn-m": { texto: "M", valor: 8, video: "91M.mp4" } }, codTarget: "91" },
    92: { idar: 92, id: 12, nombre: "PETRA", elemento: "TERRA", tipo: "POCION", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 2, video: "92I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "92A.mp4" }, "btn-t": { texto: "T", valor: 8, video: "92T.mp4" }, "btn-m": { texto: "M", valor: 1, video: "92M.mp4" } }, codTarget: "92" },
    93: { idar: 93, id: 13, nombre: "VENENUM", elemento: "TERRA", tipo: "POCION", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 6, video: "93I.mp4" }, "btn-a": { texto: "A", valor: 0, video: "93A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "93T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "93M.mp4" } }, codTarget: "93" },
    94: { idar: 94, id: 14, nombre: "AMBROSIA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 10, video: "94I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "94A.mp4" }, "btn-t": { texto: "T", valor: 5, video: "94T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "94M.mp4" } }, codTarget: "94" },
    95: { idar: 95, id: 15, nombre: "VELOCITAS", elemento: "AQUA", tipo: "POCION", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 12, video: "95I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "95A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "95T.mp4" }, "btn-m": { texto: "M", valor: 1, video: "95M.mp4" } }, codTarget: "95" },
    96: { idar: 96, id: 16, nombre: "FUROR", elemento: "TERRA", tipo: "POCION", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 14, video: "96I.mp4" }, "btn-a": { texto: "A", valor: 10, video: "96A.mp4" }, "btn-t": { texto: "T", valor: 0, video: "96T.mp4" }, "btn-m": { texto: "M", valor: 0, video: "96M.mp4" } }, codTarget: "96" },
    97: { idar: 97, id: 17, nombre: "OBLIVIO", elemento: "AQUA", tipo: "POCION", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 16, video: "97I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "97A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "97T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "97M.mp4" } }, codTarget: "97" },
    98: { idar: 98, id: 18, nombre: "FORTUNA", elemento: "MAGIA", tipo: "POCION", imgEscudo: "1081-PO-AR.png", botones: { "btn-i": { texto: "I", valor: 18, video: "98I.mp4" }, "btn-a": { texto: "A", valor: 4, video: "98A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "98T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "98M.mp4" } }, codTarget: "98" },

    // BUHOS (99-108)
    99: { idar: 99, id: 1, nombre: "JUDEX", elemento: "TERRA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 4, video: "99I.mp4" }, "btn-a": { texto: "A", valor: 4, video: "99A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "99T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "99M.mp4" } }, codTarget: "99" },
    100: { idar: 100, id: 2, nombre: "CARNIFEX", elemento: "COELI", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 7, video: "100I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "100A.mp4" }, "btn-t": { texto: "T", valor: 2, video: "100T.mp4" }, "btn-m": { texto: "M", valor: 2, video: "100M.mp4" } }, codTarget: "100" },
    101: { idar: 101, id: 3, nombre: "SCRIPTOR", elemento: "TERRA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 1, video: "101I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "101A.mp4" }, "btn-t": { texto: "T", valor: 3, video: "101T.mp4" }, "btn-m": { texto: "M", valor: 7, video: "101M.mp4" } }, codTarget: "101" },
    102: { idar: 102, id: 4, nombre: "CUSTOS", elemento: "COELI", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 2, video: "102I.mp4" }, "btn-a": { texto: "A", valor: 2, video: "102A.mp4" }, "btn-t": { texto: "T", valor: 8, video: "102T.mp4" }, "btn-m": { texto: "M", valor: 2, video: "102M.mp4" } }, codTarget: "102" },
    103: { idar: 103, id: 5, nombre: "TEMPUS", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 5, video: "103I.mp4" }, "btn-a": { texto: "A", valor: 3, video: "103A.mp4" }, "btn-t": { texto: "T", valor: 6, video: "103T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "103M.mp4" } }, codTarget: "103" },
    104: { idar: 104, id: 6, nombre: "UMBRA", elemento: "AQUA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 6, video: "104I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "104A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "104T.mp4" }, "btn-m": { texto: "M", valor: 4, video: "104M.mp4" } }, codTarget: "104" },
    105: { idar: 105, id: 7, nombre: "MACHINA", elemento: "AQUA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 7, video: "105I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "105A.mp4" }, "btn-t": { texto: "T", valor: 1, video: "105T.mp4" }, "btn-m": { texto: "M", valor: 9, video: "105M.mp4" } }, codTarget: "105" },
    106: { idar: 106, id: 8, nombre: "AUGUR", elemento: "MAGIA", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 8, video: "106I.mp4" }, "btn-a": { texto: "A", valor: 1, video: "106A.mp4" }, "btn-t": { texto: "T", valor: 5, video: "106T.mp4" }, "btn-m": { texto: "M", valor: 2, video: "106M.mp4" } }, codTarget: "106" },
    107: { idar: 107, id: 9, nombre: "JUSTITIA", elemento: "NEUTRO", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 9, video: "107I.mp4" }, "btn-a": { texto: "A", valor: 5, video: "107A.mp4" }, "btn-t": { texto: "T", valor: 5, video: "107T.mp4" }, "btn-m": { texto: "M", valor: 5, video: "107M.mp4" } }, codTarget: "107" },
    108: { idar: 108, id: 10, nombre: "IMPERATOR", elemento: "NEUTRO", tipo: "BUHO", imgEscudo: "1100-BU.png", botones: { "btn-i": { texto: "I", valor: 10, video: "108I.mp4" }, "btn-a": { texto: "A", valor: 6, video: "108A.mp4" }, "btn-t": { texto: "T", valor: 4, video: "108T.mp4" }, "btn-m": { texto: "M", valor: 6, video: "108M.mp4" } }, codTarget: "108" }
};

// --- LOGICA DE PODER Y VIDEOS REPARADA ---

export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";
export const VIDEOS_BATALLA = ["Explosion_Elemental.mp4", "Invocaciones_Etereas.mp4"];

let scanning = false;
let lastConfirmedId = null;

/**
 * REPARACIÓN CRÍTICA: Calcula el poder total sumando (Valor Carta + Valor Dado)
 * @param {Object} carta - El objeto de la carta detectada
 * @param {string} btnKey - La clave del botón presionado ('btn-i', 'btn-a', 'btn-t', 'btn-m')
 * @param {number} valorDado - El resultado aleatorio del dado (1-6 o el que uses)
 */
export function obtenerResultadoTotal(carta, btnKey, valorDado) {
    if (!carta || !carta.botones || !carta.botones[btnKey]) {
        console.error("Error: Carta o botón no válido");
        return valorDado; // Retorna solo dado si hay error
    }

    // Extrae el valor numérico de la carta (el que antes daba 0)
    const valorCarta = parseInt(carta.botones[btnKey].valor) || 0;
    const resultadoF = valorCarta + valorDado;

    console.log(`Suma Real: Carta ${valorCarta} + Dado ${valorDado} = ${resultadoF}`);
    return resultadoF;
}

/**
 * REPARACIÓN VIDEO: Sin default y con aviso "NO VIDEO"
 */
export function reproducirVideoAccion(videoElement, rutaVideo) {
    if (!videoElement) return;

    // Manejo de error si el video no existe
    videoElement.onerror = () => {
        console.error("Video inexistente:", rutaVideo);
        videoElement.style.display = "none"; // Oculta video fallido
        
        // Crear o mostrar aviso en pantalla
        let aviso = document.getElementById("error-video-display");
        if (!aviso) {
            aviso = document.createElement("div");
            aviso.id = "error-video-display";
            aviso.style = "color:red; font-size:20px; font-weight:bold; text-align:center; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:black; padding:10px; border:2px solid red;";
            videoElement.parentElement.appendChild(aviso);
        }
        aviso.innerText = "NO VIDEO";
        aviso.style.display = "block";
    };

    // Reset de estado visual
    const aviso = document.getElementById("error-video-display");
    if (aviso) aviso.style.display = "none";
    videoElement.style.display = "block";

    // Carga directa del video de la carta
    videoElement.src = RUTA_BASE + "videos/" + rutaVideo;
    videoElement.load();
    videoElement.play().catch(e => console.warn("Esperando interacción para video"));
}

/**
 * ESCÁNER QR INTEGRADO
 */
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
            
            // Asume que jsQR está cargado globalmente
            const code = window.jsQR ? window.jsQR(imageData.data, imageData.width, imageData.height) : null;

            if(code && code.data.trim() !== lastConfirmedId) {
                const detectId = code.data.trim();
                const carta = CARTAS[detectId] || Object.values(CARTAS).find(c => c.codTarget == detectId);
                
                if(carta) {
                    lastConfirmedId = detectId;
                    onEncontrado(JSON.parse(JSON.stringify(carta)));
                }
            }
        }, 250);
    } catch(e) { console.error("Error cámara:", e); }
}

export function resetUltimoId() { lastConfirmedId = null; }