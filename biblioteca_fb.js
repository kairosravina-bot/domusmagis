// biblioteca_fb.js - BASE DE DATOS FIRST BLOOD (56 CARTAS SOLO)
// Optimizada para AR con QR codes como nombrados: 001-TI-BE-ID1, etc.
export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";

export const VIDEOS_BATALLA = [
    "Explosión_Elemental.mp4", 
    "Invocaciones_Etéreas.mp4"
];

// VIDEOS GENÉRICOS
const V_ATAQUE = "ataque.mp4";
const V_CURA = "cura.mp4";
const V_DEFENSA = "defensa.mp4";
const V_MAGIA = "magia.mp4";

// ESCUDOS POR FACCIÓN
const IMG_TIERRA = "ESCUDO_LEON.png";
const IMG_CIELO = "ESCUDO_AGUILA.png";
const IMG_AGUA = "ESCUDO_JABALI.png";
const IMG_MAGIA = "ESCUDO_DRAGON.png";
const IMG_ITEM = "ESCUDO_LLAVE.png";

// ═══════════════════════════════════════════════════════
// MAPEO DE QR CODES A IDs (Según tus códigos)
// ═══════════════════════════════════════════════════════
export const QR_MAPPING = {
    // TIERRA BESTIAS (001-005)
    "001-TI-BE-ID1": 0,   // APER
    "002-TI-BE-ID3": 1,   // SAXUM
    "003-TI-BE-ID5": 2,   // MANTÍCORA
    "004-TI-BE-ID7": 3,   // LEO
    "005-TI-BE-ID9": 4,   // GAIA
    // TIERRA HUMANOS (006-010)
    "006-TI-HU-ID2": 5,   // TIRONIS
    "007-TI-HU-ID4": 6,   // EQUES
    "008-TI-HU-ID6": 7,   // SAGITIS
    "009-TI-HU-ID8": 8,   // ALCHEMIA
    "010-TI-HU-ID10": 9,  // CAESAR
    // CIELO BESTIAS (011-015)
    "021-CI-BE-ID1": 10,  // FENRIS
    "022-CI-BE-ID3": 11,  // THALGRIM
    "023-CI-BE-ID5": 12,  // AQUILON
    "024-CI-BE-ID7": 13,  // NIVIS
    "025-CI-BE-ID9": 14,  // AURORA
    // CIELO HUMANOS (016-020)
    "026-CI-HU-ID2": 15,  // BOREAS
    "027-CI-HU-ID4": 16,  // VALKYR
    "028-CI-HU-ID6": 17,  // EIDOLON
    "029-CI-HU-ID8": 18,  // KORIN
    "030-CI-HU-ID10": 19, // TYRION
    // AGUA BESTIAS (021-025)
    "041-AG-BE-ID1": 20,  // SCORPIUS
    "042-AG-BE-ID3": 21,  // TRITONIS
    "043-AG-BE-ID5": 22,  // HYDRUS
    "044-AG-BE-ID7": 23,  // LEVIATHAN
    "045-AG-BE-ID9": 24,  // TIAMAT
    // AGUA HUMANOS (026-030)
    "046-AG-HU-ID2": 25,  // HASTATUS
    "047-AG-HU-ID4": 26,  // CORSARIUS
    "048-AG-HU-ID6": 27,  // ORACULUM
    "049-AG-HU-ID8": 28,  // ADMIRALIS
    "050-AG-HU-ID10": 29, // NEPTUNUS
    // MAGIA BESTIAS (031-035)
    "061-MA-BE-ID1": 30,  // FAMILIARES
    "062-MA-BE-ID3": 31,  // ELEMENTUM
    "063-MA-BE-ID5": 32,  // PHANTASMA
    "064-MA-BE-ID7": 33,  // AVATARUS
    "065-MA-BE-ID9": 34,  // AETHERUS
    // MAGIA HUMANOS (036-040)
    "066-MA-HU-ID2": 35,  // TYRO
    "067-MA-HU-ID4": 36,  // QUAESITOR
    "068-MA-HU-ID6": 37,  // MIMUS
    "069-MA-HU-ID8": 38,  // ARCHIMAGUS
    "070-MA-HU-ID10": 39, // MAGITER
    // ARTEFACTOS (041-049)
    "081-AR-ID1": 40,     // IGNIS FIALA
    "082-AR-ID3": 41,     // SPECULUM
    "083-AR-ID5": 42,     // MANICA
    "084-AR-ID7": 43,     // LUCERNA
    "085-AR-ID9": 44,     // APERTUM
    "086-AR-ID11": 45,    // AEGIS
    "087-AR-ID13": 46,    // VEXILLUM
    "088-AR-ID15": 47,    // OCULUS
    "089-AR-ID17": 48,    // MONOLITH
    // POCIONES (050-056)
    "090-PO-ID2": 49,     // VITA
    "091-PO-ID4": 50,     // AETHER
    "092-PO-ID6": 51,     // PETRA
    "093-PO-ID8": 52,     // VENENUM
    "094-PO-ID10": 53,    // AMBROSIA
    "095-PO-ID12": 54,    // VELOCITAS
    "096-PO-ID14": 55,    // FUROR
    "097-PO-ID16": 56,    // OBLIVIO
    "098-PO-ID18": 57     // FORTUNA
};

// ═══════════════════════════════════════════════════════
// BASE DE DATOS DE 56 CARTAS (SOLO HUMANOS, BESTIAS, ARTEFACTOS, POCIONES)
// ═══════════════════════════════════════════════════════

export const CARTAS = {
    // --- TIERRA (0-9) ---
    // Bestias TIERRA
    0: { id: 0, qrCode: "001-TI-BE-ID1", nombre: "APER (JABALÍ)", arma: "BESTIA", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 0, video: V_MAGIA } } },
    1: { id: 1, qrCode: "002-TI-BE-ID3", nombre: "SAXUM (GOLEM)", arma: "BESTIA", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 3, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 12, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: V_MAGIA } } },
    2: { id: 2, qrCode: "003-TI-BE-ID5", nombre: "MANTÍCORA", arma: "BESTIA", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 9, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 5, video: V_MAGIA } } },
    3: { id: 3, qrCode: "004-TI-BE-ID7", nombre: "LEO (LEÓN)", arma: "BESTIA", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 7, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: V_MAGIA } } },
    4: { id: 4, qrCode: "005-TI-BE-ID9", nombre: "GAIA (TORTUGA)", arma: "BESTIA", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 10, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 8, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 3, video: V_MAGIA } } },
    // Humanos TIERRA
    5: { id: 5, qrCode: "006-TI-HU-ID2", nombre: "TIRONIS", arma: "HUMANO", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 4, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: V_MAGIA } } },
    6: { id: 6, qrCode: "007-TI-HU-ID4", nombre: "EQUES", arma: "HUMANO", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 6, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: V_MAGIA } } },
    7: { id: 7, qrCode: "008-TI-HU-ID6", nombre: "SAGITIS", arma: "HUMANO", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 10, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 3, video: V_MAGIA } } },
    8: { id: 8, qrCode: "009-TI-HU-ID8", nombre: "ALCHEMIA", arma: "HUMANO", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 4, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 9, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 6, video: V_MAGIA } } },
    9: { id: 9, qrCode: "010-TI-HU-ID10", nombre: "CAESAR (LÍDER)", arma: "HUMANO", elemento: "TIERRA", imgEscudo: IMG_TIERRA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 9, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 8, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 6, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: V_MAGIA } } },

    // --- CIELO (10-19) ---
    // Bestias CIELO
    10: { id: 10, qrCode: "021-CI-BE-ID1", nombre: "FENRIS (LOBO)", arma: "BESTIA", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 7, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 2, video: V_MAGIA } } },
    11: { id: 11, qrCode: "022-CI-BE-ID3", nombre: "THALGRIM (YETI)", arma: "BESTIA", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 4, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 3, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 8, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 3, video: V_MAGIA } } },
    12: { id: 12, qrCode: "023-CI-BE-ID5", nombre: "AQUILON (ESPÍRITU)", arma: "BESTIA", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 2, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 9, video: V_MAGIA } } },
    13: { id: 13, qrCode: "024-CI-BE-ID7", nombre: "NIVIS (SERPIENTE)", arma: "BESTIA", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 9, video: V_MAGIA } } },
    14: { id: 14, qrCode: "025-CI-BE-ID9", nombre: "AURORA (FÉNIX)", arma: "BESTIA", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 7, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 7, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 6, video: V_MAGIA } } },
    // Humanos CIELO
    15: { id: 15, qrCode: "026-CI-HU-ID2", nombre: "BOREAS", arma: "HUMANO", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: V_MAGIA } } },
    16: { id: 16, qrCode: "027-CI-HU-ID4", nombre: "VALKYR", arma: "HUMANO", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 9, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: V_MAGIA } } },
    17: { id: 17, qrCode: "028-CI-HU-ID6", nombre: "EIDOLON", arma: "HUMANO", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 3, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 4, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 9, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 2, video: V_MAGIA } } },
    18: { id: 18, qrCode: "029-CI-HU-ID8", nombre: "KORIN", arma: "HUMANO", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 2, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 7, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 7, video: V_MAGIA } } },
    19: { id: 19, qrCode: "030-CI-HU-ID10", nombre: "TYRION (LÍDER)", arma: "HUMANO", elemento: "CIELO", imgEscudo: IMG_CIELO, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 6, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 6, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 5, video: V_MAGIA } } },

    // --- AGUA (20-29) ---
    // Bestias AGUA
    20: { id: 20, qrCode: "041-AG-BE-ID1", nombre: "SCORPIUS", arma: "BESTIA", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 5, video: V_MAGIA } } },
    21: { id: 21, qrCode: "042-AG-BE-ID3", nombre: "TRITONIS", arma: "BESTIA", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 4, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 6, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: V_MAGIA } } },
    22: { id: 22, qrCode: "043-AG-BE-ID5", nombre: "HYDRUS (HIDRA)", arma: "BESTIA", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 8, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 4, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 2, video: V_MAGIA } } },
    23: { id: 23, qrCode: "044-AG-BE-ID7", nombre: "LEVIATHAN", arma: "BESTIA", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 9, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 7, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 5, video: V_MAGIA } } },
    24: { id: 24, qrCode: "045-AG-BE-ID9", nombre: "TIAMAT", arma: "BESTIA", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 7, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 12, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 5, video: V_MAGIA } } },
    // Humanos AGUA
    25: { id: 25, qrCode: "046-AG-HU-ID2", nombre: "HASTATUS", arma: "HUMANO", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 7, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: V_MAGIA } } },
    26: { id: 26, qrCode: "047-AG-HU-ID4", nombre: "CORSARIUS", arma: "HUMANO", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 3, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 4, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 2, video: V_MAGIA } } },
    27: { id: 27, qrCode: "048-AG-HU-ID6", nombre: "ORACULUM", arma: "HUMANO", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 1, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 6, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 9, video: V_MAGIA } } },
    28: { id: 28, qrCode: "049-AG-HU-ID8", nombre: "ADMIRALIS", arma: "HUMANO", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 6, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 6, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 5, video: V_MAGIA } } },
    29: { id: 29, qrCode: "050-AG-HU-ID10", nombre: "NEPTUNUS (LÍDER)", arma: "HUMANO", elemento: "AGUA", imgEscudo: IMG_AGUA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 7, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 8, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 7, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 6, video: V_MAGIA } } },

    // --- MAGIA (30-39) ---
    // Bestias MAGIA
    30: { id: 30, qrCode: "061-MA-BE-ID1", nombre: "FAMILIARES", arma: "BESTIA", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 3, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 8, video: V_MAGIA } } },
    31: { id: 31, qrCode: "062-MA-BE-ID3", nombre: "ELEMENTUM", arma: "BESTIA", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 4, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 9, video: V_MAGIA } } },
    32: { id: 32, qrCode: "063-MA-BE-ID5", nombre: "PHANTASMA", arma: "BESTIA", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 1, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 11, video: V_MAGIA } } },
    33: { id: 33, qrCode: "064-MA-BE-ID7", nombre: "AVATARUS", arma: "BESTIA", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 2, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 9, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 10, video: V_MAGIA } } },
    34: { id: 34, qrCode: "065-MA-BE-ID9", nombre: "AETHERUS", arma: "BESTIA", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 7, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 13, video: V_MAGIA } } },
    // Humanos MAGIA
    35: { id: 35, qrCode: "066-MA-HU-ID2", nombre: "TYRO", arma: "HUMANO", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 2, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 1, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 9, video: V_MAGIA } } },
    36: { id: 36, qrCode: "067-MA-HU-ID4", nombre: "QUAESITOR", arma: "HUMANO", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 4, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 7, video: V_MAGIA } } },
    37: { id: 37, qrCode: "068-MA-HU-ID6", nombre: "MIMUS", arma: "HUMANO", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 1, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 4, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 6, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 10, video: V_MAGIA } } },
    38: { id: 38, qrCode: "069-MA-HU-ID8", nombre: "ARCHIMAGUS", arma: "HUMANO", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 3, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 12, video: V_MAGIA } } },
    39: { id: 39, qrCode: "070-MA-HU-ID10", nombre: "MAGITER (LÍDER)", arma: "HUMANO", elemento: "MAGIA", imgEscudo: IMG_MAGIA, tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 7, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 4, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 10, video: V_MAGIA } } },

    // --- ARTEFACTOS (40-48) ---
    40: { id: 40, qrCode: "081-AR-ID1", nombre: "IGNIS FIALA", arma: "ARTEFACTO", elemento: "MAGIA", imgEscudo: IMG_ITEM, tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 0, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: -2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 2, video: V_MAGIA } } },
    41: { id: 41, qrCode: "082-AR-ID3", nombre: "SPECULUM", arma: "ARTEFACTO", elemento: "TIERRA", imgEscudo: IMG_ITEM, tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 1, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 7, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: V_MAGIA } } },
    42: { id: 42, qrCode: "083-AR-ID5", nombre: "MANICA", arma: "ARTEFACTO", elemento: "TIERRA", imgEscudo: IMG_ITEM, tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 7, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 0, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: -2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 2, video: V_MAGIA } } },
    43: { id: 43, qrCode: "084-AR-ID7", nombre: "LUCERNA", arma: "ARTEFACTO", elemento: "CIELO", imgEscudo: IMG_ITEM, tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 1, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 7, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 3, video: V_MAGIA } } },
    44: { id: 44, qrCode: "085-AR-ID9", nombre: "APERTUM", arma: "ARTEFACTO", elemento: "CIELO", imgEscudo: IMG_ITEM, tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 4, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 5, video: V_MAGIA } } },
    45: { id: 45, qrCode: "086-AR-ID11", nombre: "AEGIS", arma: "ARTEFACTO", elemento: "AGUA", imgEscudo: IMG_ITEM, tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 1, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 10, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: V_MAGIA } } },
    46: { id: 46, qrCode: "087-AR-ID13", nombre: "VEXILLUM", arma: "ARTEFACTO", elemento: "MAGIA", imgEscudo: IMG_ITEM, tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 3, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 9, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 3, video: V_MAGIA } } },
    47: { id: 47, qrCode: "088-AR-ID15", nombre: "OCULUS", arma: "ARTEFACTO", elemento: "MAGIA", imgEscudo: IMG_ITEM, tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 2, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 9, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 10, video: V_MAGIA } } },
    48: { id: 48, qrCode: "089-AR-ID17", nombre: "MONOLITH", arma: "ARTEFACTO", elemento: "AGUA", imgEscudo: IMG_ITEM, tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 0, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 0, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 12, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 6, video: V_MAGIA } } },

    // --- POCIONES (49-56) ---
    49: { id: 49, qrCode: "090-PO-ID2", nombre: "VITA", arma: "POCIÓN", elemento: "CIELO", imgEscudo: IMG_ITEM, tipo: "POCION", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 1, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 8, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: V_MAGIA } } },
    50: { id: 50, qrCode: "091-PO-ID4", nombre: "AETHER", arma: "POCIÓN", elemento: "CIELO", imgEscudo: IMG_ITEM, tipo: "POCION", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 1, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 3, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 1, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 8, video: V_MAGIA } } },
    51: { id: 51, qrCode: "092-PO-ID6", nombre: "PETRA", arma: "POCIÓN", elemento: "TIERRA", imgEscudo: IMG_ITEM, tipo: "POCION", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 2, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 8, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: V_MAGIA } } },
    52: { id: 52, qrCode: "093-PO-ID8", nombre: "VENENUM", arma: "POCIÓN", elemento: "TIERRA", imgEscudo: IMG_ITEM, tipo: "POCION", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 0, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: V_MAGIA } } },
    53: { id: 53, qrCode: "094-PO-ID10", nombre: "AMBROSIA", arma: "POCIÓN", elemento: "MAGIA", imgEscudo: IMG_ITEM, tipo: "POCION", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 5, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 5, video: V_MAGIA } } },
    54: { id: 54, qrCode: "095-PO-ID12", nombre: "VELOCITAS", arma: "POCIÓN", elemento: "AGUA", imgEscudo: IMG_ITEM, tipo: "POCION", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 1, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: V_MAGIA } } },
    55: { id: 55, qrCode: "096-PO-ID14", nombre: "FUROR", arma: "POCIÓN", elemento: "NEUTRO", imgEscudo: IMG_ITEM, tipo: "POCION", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 10, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 0, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 0, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 0, video: V_MAGIA } } },
    56: { id: 56, qrCode: "097-PO-ID16", nombre: "OBLIVIO", arma: "POCIÓN", elemento: "AGUA", imgEscudo: IMG_ITEM, tipo: "POCION", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 1, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 3, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 5, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 6, video: V_MAGIA } } },
    57: { id: 57, qrCode: "098-PO-ID18", nombre: "FORTUNA", arma: "POCIÓN", elemento: "NEUTRO", imgEscudo: IMG_ITEM, tipo: "POCION", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 4, video: V_ATAQUE }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 4, video: V_CURA }, "btn-t": { texto: "T", label: "TUTELA", valor: 4, video: V_DEFENSA }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 4, video: V_MAGIA } } }
};
