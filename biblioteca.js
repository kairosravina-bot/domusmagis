// biblioteca.js - V82
export const RUTA_BASE = "https://kairosravina-bot.github.io/domusmagis/";

export const VIDEOS_BATALLA = [
    "Explosión_Elemental.mp4", 
    "El_Búho_Juez.mp4", 
    "Invocaciones_Etéreas.mp4"
];

// He verificado que todos los botones del Dragón (ID 0) tengan sus valores y videos asignados.
export const CARTAS = {
    0: { 
        id: 0, 
        nombre: "DRAGÓN", 
        arma: "SICA", 
        elemento: "TERRA", 
        imgEscudo: "ESCUDO_DRAGON.png", 
        tipo: "CASA", 
        botones: { 
            "btn-i": { texto: "I", label: "IMPETUS", valor: 7, video: "CARTA_1_ataque.mp4" }, 
            "btn-a": { texto: "A", label: "AUXILIUM", valor: 2, video: "CARTA_1_cura.mp4" }, 
            "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: "CARTA_1_defensa.mp4" }, 
            "btn-m": { texto: "M", label: "MYSTERIUM", valor: 2, video: "CARTA_1_magia.mp4" } 
        } 
    },
    1: { id: 1, nombre: "ÁGUILA", arma: "SICA", elemento: "CAELUM", imgEscudo: "ESCUDO_AGUILA.png", tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 5, video: "ataque.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 4, video: "cura.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 2, video: "defensa.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 3, video: "magia.mp4" } } },
    2: { id: 2, nombre: "LEÓN", arma: "SICA", elemento: "TERRA", imgEscudo: "ESCUDO_LEON.png", tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 8, video: "ataque.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 1, video: "cura.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 4, video: "defensa.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 1, video: "magia.mp4" } } },
    3: { id: 3, nombre: "JABALÍ", arma: "SICA", elemento: "AQUA", imgEscudo: "ESCUDO_JABALI.png", tipo: "CASA", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: "ataque.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 3, video: "cura.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 3, video: "defensa.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 2, video: "magia.mp4" } } },
    4: { id: 4, nombre: "BÚHO MASTER", arma: "ACUTUM", elemento: "NEUTRO", imgEscudo: "ESCUDO_BUHO.png", tipo: "BUHO", botones: { "btn-i": { texto: "M", label: "MANDATUM", valor: 5, video: "owl_mandatum.mp4" }, "btn-a": { texto: "C", label: "CONSILIUM", valor: 5, video: "owl_consilium.mp4" }, "btn-t": { texto: "P", label: "PRAESAGIUM", valor: 5, video: "owl_praesagium.mp4" }, "btn-m": { texto: "A", label: "ARCANUM", valor: 5, video: "owl_arcanum.mp4" } } },
    5: { id: 5, nombre: "IGNIS PHIALA", arma: "IGNIS", elemento: "TERRA", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 10, video: "ARTEFACTO_1_IMPETUS.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 8, video: "ARTEFACTO_1_AUXILIUM.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 8, video: "ARTEFACTO_1_TUTELA.mp4" }, "btn-m": { texto: "M", label: "MYSTERIUM", valor: 12, video: "ARTEFACTO_1_MYSTERIUM.mp4" } } },
    6: { id: 6, nombre: "SPECULUM AEGIS", arma: "SPECULUM", elemento: "DIMENSIO", imgEscudo: "ESCUDO_LLAVE.png", tipo: "ARTEFACTO", botones: { "btn-i": { texto: "I", label: "IMPETUS", valor: 6, video: "ESPEJO_GOLPE.mp4" }, "btn-a": { texto: "A", label: "AUXILIUM", valor: 9, video: "ESPEJO_EQUIPAR.mp4" }, "btn-t": { texto: "T", label: "TUTELA", valor: 10, video: "ESPEJO_BLOQUEO.mp4" }, "btn-m": { texto: "M", label: "MYS