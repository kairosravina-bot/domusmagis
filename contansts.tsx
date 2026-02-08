import { Elemento, TipoCarta, Carta } from './types';

export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";

const SHIELD_TI_BE = "1001-TI-BE.png";
const SHIELD_TI_HU = "1002-TI-HU.png";
const SHIELD_CI_BE = "1021-CI-BE.png";
const SHIELD_CI_HU = "1022-CI-HU.png";
const SHIELD_AG_BE = "1041-AG-BE.png";
const SHIELD_AG_HU = "1042-AG-HU.png";
const SHIELD_MA_BE = "1061-MA-BE.png";
const SHIELD_MA_HU = "1062-MA-HU.png";
const SHIELD_PO_AR = "1081-PO-AR.png";

const generateButtons = (qr: string, i: number, a: number, t: number, m: number) => ({
  "btn-i": { texto: "I", label: "IMPETUS", valor: i, video: `${qr}-I.mp4` },
  "btn-a": { texto: "A", label: "AUXILIUM", valor: a, video: `${qr}-A.mp4` },
  "btn-t": { texto: "T", label: "TUTELA", valor: t, video: `${qr}-T.mp4` },
  "btn-m": { texto: "M", label: "MYSTERIUM", valor: m, video: `${qr}-M.mp4` }
});

export const CARTAS_DB: Record<number, Carta> = {
  // TIERRA
  0: { id: 0, qrCode: "001-TI-BE-ID1", nombre: "APER (JABALÍ)", arma: "BESTIA", elemento: Elemento.TIERRA, imgEscudo: SHIELD_TI_BE, tipo: TipoCarta.CASA, botones: generateButtons("001-TI-BE-ID1", 6, 1, 5, 0) },
  1: { id: 1, qrCode: "002-TI-BE-ID3", nombre: "SAXUM (GOLEM)", arma: "BESTIA", elemento: Elemento.TIERRA, imgEscudo: SHIELD_TI_BE, tipo: TipoCarta.CASA, botones: generateButtons("002-TI-BE-ID3", 3, 1, 12, 1) },
  5: { id: 5, qrCode: "006-TI-HU-ID2", nombre: "TIRONIS", arma: "HUMANO", elemento: Elemento.TIERRA, imgEscudo: SHIELD_TI_HU, tipo: TipoCarta.CASA, botones: generateButtons("006-TI-HU-ID2", 5, 2, 4, 1) },
  // CIELO
  10: { id: 10, qrCode: "021-CI-BE-ID1", nombre: "FENRIS (LOBO)", arma: "BESTIA", elemento: Elemento.CIELO, imgEscudo: SHIELD_CI_BE, tipo: TipoCarta.CASA, botones: generateButtons("021-CI-BE-ID1", 7, 1, 2, 2) },
  15: { id: 15, qrCode: "026-CI-HU-ID2", nombre: "BOREAS", arma: "HUMANO", elemento: Elemento.CIELO, imgEscudo: SHIELD_CI_HU, tipo: TipoCarta.CASA, botones: generateButtons("026-CI-HU-ID2", 5, 2, 3, 1) },
  // AGUA
  20: { id: 20, qrCode: "041-AG-BE-ID1", nombre: "SCORPIUS", arma: "BESTIA", elemento: Elemento.AGUA, imgEscudo: SHIELD_AG_BE, tipo: TipoCarta.CASA, botones: generateButtons("041-AG-BE-ID1", 5, 1, 5, 5) },
  25: { id: 25, qrCode: "046-AG-HU-ID2", nombre: "HASTATUS", arma: "HUMANO", elemento: Elemento.AGUA, imgEscudo: SHIELD_AG_HU, tipo: TipoCarta.CASA, botones: generateButtons("046-AG-HU-ID2", 7, 2, 3, 1) },
  // MAGIA
  30: { id: 30, qrCode: "061-MA-BE-ID1", nombre: "FAMILIARES", arma: "BESTIA", elemento: Elemento.MAGIA, imgEscudo: SHIELD_MA_BE, tipo: TipoCarta.CASA, botones: generateButtons("061-MA-BE-ID1", 3, 2, 3, 8) },
  35: { id: 35, qrCode: "066-MA-HU-ID2", nombre: "TYRO", arma: "HUMANO", elemento: Elemento.MAGIA, imgEscudo: SHIELD_MA_HU, tipo: TipoCarta.CASA, botones: generateButtons("066-MA-HU-ID2", 2, 2, 1, 9) },
  // ITEMS
  40: { id: 40, qrCode: "081-AR-ID1", nombre: "IGNIS FIALA", arma: "ARTEFACTO", elemento: Elemento.MAGIA, imgEscudo: SHIELD_PO_AR, tipo: TipoCarta.ARTEFACTO, botones: generateButtons("081-AR-ID1", 6, 0, -2, 2) },
  49: { id: 49, qrCode: "090-PO-ID2", nombre: "VITA", arma: "POCIÓN", elemento: Elemento.CIELO, imgEscudo: SHIELD_PO_AR, tipo: TipoCarta.POCION, botones: generateButtons("090-PO-ID2", 1, 8, 3, 4) }
};
