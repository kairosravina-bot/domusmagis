
export enum Elemento {
  TIERRA = 'TIERRA',
  CIELO = 'CIELO',
  AGUA = 'AGUA',
  MAGIA = 'MAGIA',
  NEUTRO = 'NEUTRO'
}

export enum TipoCarta {
  CASA = 'CASA',
  ARTEFACTO = 'ARTEFACTO',
  POCION = 'POCION'
}

export interface CartaBotones {
  [key: string]: {
    texto: string;
    label: string;
    valor: number;
    video: string;
  };
}

export interface Carta {
  id: number;
  qrCode: string;
  nombre: string;
  arma: string;
  elemento: Elemento;
  imgEscudo: string;
  tipo: TipoCarta;
  botones: CartaBotones;
}

export interface Slot {
  carta: Carta;
  accion: string;
  valor: number;
}

export interface Player {
  nombre: string;
  casa: string;
  color: string;
  escudo: string;
  slots: (Slot | null)[];
  dado: number;
  total?: number;
}

export enum GamePhase {
  MENU = 'MENU',
  SETUP = 'SETUP',
  PLAY = 'PLAY',
  DICE = 'DICE',
  BATTLE_PARODY = 'BATTLE_PARODY',
  RESULTS = 'RESULTS'
}
