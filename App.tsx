
import React, { useState, useEffect } from 'react';
import { GamePhase, Player, Carta, Slot } from './types';
import { CARTAS_DB, RUTA_BASE } from './constants';
import { getOracleAdvice } from './services/geminiService';

// --- COMPONENTES DE FASES ---

const Menu: React.FC<{ onStart: (num: number) => void }> = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center h-full space-y-8 p-4 text-center">
    <div className="animate-pulse">
      <h1 className="text-6xl font-black text-yellow-500 tracking-tighter drop-shadow-[0_0_15px_gold]">DOMUS MAGI</h1>
      <p className="text-green-400 font-bold tracking-[0.4em] text-xs mt-2 uppercase opacity-90">Ver.001 iniciamos nueva</p>
    </div>
    <div className="flex flex-col gap-4 w-full max-w-xs">
      <button onClick={() => onStart(2)} className="bg-zinc-900 border-2 border-yellow-600 p-6 rounded font-black text-xl uppercase tracking-widest active:scale-95 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.5)]">2 Magos</button>
      <button onClick={() => onStart(4)} className="bg-zinc-900 border-2 border-yellow-600 p-6 rounded font-black text-xl uppercase tracking-widest active:scale-95 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.5)]">4 Magos</button>
    </div>
  </div>
);

const Setup: React.FC<{ total: number, onComplete: (players: Player[]) => void }> = ({ total, onComplete }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [name, setName] = useState('');
  const houses = [
    { id: 'TIERRA', name: '🪨 TERRA', color: '#522' }, { id: 'CIELO', name: '☁️ CAELUM', color: '#225' },
    { id: 'AGUA', name: '💧 AQUA', color: '#252' }, { id: 'MAGIA', name: '✨ MAGIA', color: '#525' }
  ];
  const register = (house: any) => {
    if (!name.trim()) return;
    const p: Player = { nombre: name.toUpperCase(), casa: house.id, color: house.color, escudo: "", slots: [null, null, null], dado: 0 };
    const updated = [...players, p];
    setPlayers(updated); setName('');
    if (updated.length === total) onComplete(updated);
  };
  return (
    <div className="p-6 h-full flex flex-col items-center bg-black/90">
      <h2 className="text-2xl font-black text-yellow-500 mb-8 uppercase">Registro de Magos</h2>
      <div className="w-full max-w-sm p-6 border-2 border-yellow-700 bg-zinc-900 rounded shadow-2xl">
        <p className="text-[10px] text-zinc-500 mb-2 uppercase font-bold">Inscribiendo Mago {players.length + 1} de {total}</p>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="ESCRIBE TU NOMBRE" className="w-full bg-black border-b border-yellow-500 p-4 text-white font-black mb-8 outline-none uppercase placeholder:opacity-30" />
        <div className="grid grid-cols-2 gap-4">
          {houses.map(h => <button key={h.id} onClick={() => register(h)} style={{backgroundColor: h.color}} className="p-4 rounded font-black text-[10px] border border-white/20 active:scale-90 transition-transform">ELEGIR {h.name}</button>)}
        </div>
      </div>
    </div>
  );
};

const GamePlay: React.FC<{ players: Player[], currentPlayerIdx: number, currentSlot: number, onAction: (slot: Slot) => void }> = ({ players, currentPlayerIdx, currentSlot, onAction }) => {
  const [selected, setSelected] = useState<Carta | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const [hud, setHud] = useState<any>(null);
  const player = players[currentPlayerIdx];

  const handleAction = (key: string) => {
    if (!selected) return;
    const btn = selected.botones[key];
    setHud({ label: btn.label, valor: btn.valor });
    setVideo(`${RUTA_BASE}${btn.video}`);
    setTimeout(() => {
      onAction({ carta: selected, accion: btn.label, valor: btn.valor });
      setSelected(null); setVideo(null); setHud(null);
    }, 2800);
  };

  return (
    <div className="h-full relative flex flex-col bg-black">
      {video && <video autoPlay playsInline src={video} className="absolute inset-0 w-full h-full object-contain z-10 bg-black" />}
      <div className="relative z-20 p-4 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
        <div className="bg-black/60 border border-yellow-600 p-2 rounded backdrop-blur-sm">
          <p className="text-[8px] text-zinc-400 uppercase tracking-widest font-bold">Mago: {player.nombre}</p>
          <div className="flex gap-1 mt-1">
            {[0,1,2].map(i => <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i < currentSlot ? 'bg-yellow-500 shadow-[0_0_8px_yellow]' : 'bg-zinc-800'}`} />)}
          </div>
        </div>
        {hud && selected && (
          <div className="text-right flex flex-col items-end animate-in fade-in slide-in-from-top-4">
            <img src={`${RUTA_BASE}${selected.imgEscudo}`} className="w-12 h-12 drop-shadow-[0_0_10px_white]" alt="escudo" />
            <span className="text-yellow-500 font-black text-[10px] mt-1">{hud.label}</span>
            <span className="text-white font-black text-5xl drop-shadow-md">{hud.valor}</span>
          </div>
        )}
      </div>
      <div className="flex-grow"></div>
      <div className="relative z-20 p-4 bg-zinc-950/95 border-t border-yellow-900/50 backdrop-blur-md">
        {!selected ? (
          <div className="grid grid-cols-4 gap-2 h-44 overflow-y-auto p-1 scrollbar-hide">
            {Object.values(CARTAS_DB).map(c => (
              <button key={c.id} onClick={() => setSelected(c)} className="bg-zinc-900 border border-zinc-700 p-2 rounded text-[7px] flex flex-col items-center active:bg-yellow-900/20 active:border-yellow-500 transition-colors">
                <span className="truncate w-full text-center uppercase font-bold">{c.nombre}</span>
                <span className="text-lg mt-1">🎴</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center py-2 animate-in slide-in-from-bottom-4">
            <h3 className="text-lg font-black text-yellow-500 mb-6 uppercase tracking-tighter">{selected.nombre}</h3>
            <div className="flex gap-4">
              {['btn-i', 'btn-a', 'btn-t', 'btn-m'].map(k => (
                <button key={k} onClick={() => handleAction(k)} className="w-16 h-16 rounded-full border-2 border-yellow-600 bg-zinc-900 font-black text-2xl flex items-center justify-center active:scale-90 active:bg-yellow-600 active:text-black transition-all shadow-lg">
                  {selected.botones[k].texto}
                </button>
              ))}
            </div>
            <button onClick={() => setSelected(null)} className="mt-6 text-[8px] text-zinc-500 font-bold uppercase tracking-widest underline">Elegir otra carta</button>
          </div>
        )}
      </div>
    </div>
  );
};

const DicePhase: React.FC<{ player: Player, onComplete: (roll: number) => void }> = ({ player, onComplete }) => {
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const roll = () => {
    setRolling(true);
    setTimeout(() => {
      const v = Math.floor(Math.random() * 10) + 2;
      setResult(v); setRolling(false);
      setTimeout(() => onComplete(v), 2500);
    }, 2000);
  };
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 bg-black">
      <h2 className="text-yellow-500 font-black text-4xl mb-12 uppercase italic tracking-widest">{player.nombre}</h2>
      <div className="w-56 h-56 border-4 border-yellow-600 rounded-full flex items-center justify-center relative overflow-hidden bg-zinc-900 shadow-[0_0_40px_rgba(255,215,0,0.3)]">
        {rolling && <video autoPlay loop muted playsInline src="https://kairosravina-bot.github.io/domusmagis/Dados.mp4" className="w-full h-full object-cover" />}
        {result && <span className="text-9xl font-black text-white z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-in zoom-in">{result}</span>}
      </div>
      {!rolling && !result && <button onClick={roll} className="mt-16 bg-yellow-600 text-black px-12 py-5 font-black text-xl rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] active:scale-95 uppercase">Lanzar Dados</button>}
    </div>
  );
};

const BattleParody: React.FC<{ players: Player[], onComplete: () => void }> = ({ players, onComplete }) => {
  const scorers = players.map(p => ({ ...p, score: p.slots.reduce((sum, s) => sum + (s?.valor || 0), 0) + p.dado }))
    .sort((a, b) => b.score - a.score);
  const champ = scorers[0];
  const rival = scorers[1];

  useEffect(() => { const t = setTimeout(onComplete, 8000); return () => clearTimeout(t); }, []);

  return (
    <div className="h-full w-full bg-black flex relative overflow-hidden">
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-violet-900/10 z-10" />
        <div className="z-20 text-white font-black text-4xl italic uppercase -rotate-90 tracking-tighter opacity-80">{champ.nombre}</div>
      </div>
      {/* EL RAYO VIOLETA FOSFORESCENTE */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 z-30 flex justify-center">
        <div className="h-full w-[4px] bg-white shadow-[0_0_20px_#a855f7,0_0_40px_#7c3aed,0_0_60px_#a855f7] lightning-effect" />
        <svg className="absolute h-full w-24 overflow-visible" viewBox="0 0 40 1000">
           <path d="M20,0 L35,150 L5,300 L30,450 L10,600 L35,750 L5,900 L20,1000" fill="none" stroke="#d8b4fe" strokeWidth="4" className="lightning-effect" strokeDasharray="100" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-zinc-950 border-4 border-violet-500 rounded-full w-24 h-24 flex items-center justify-center text-white font-black italic text-4xl shadow-[0_0_50px_#a855f7] animate-pulse">VS</div>
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/10 z-10" />
        <div className="z-20 text-white font-black text-4xl italic uppercase rotate-90 tracking-tighter opacity-80">{rival.nombre}</div>
      </div>
    </div>
  );
};

const Results: React.FC<{ players: Player[], onReset: () => void }> = ({ players, onReset }) => {
  const [oracle, setOracle] = useState("ESCUCHANDO EL SUSURRO DE LAS ESTRELLAS...");
  const sorted = [...players].map(p => ({ ...p, total: p.slots.reduce((sum, s) => sum + (s?.valor || 0), 0) + p.dado }))
    .sort((a, b) => (b.total || 0) - (a.total || 0));

  useEffect(() => { getOracleAdvice(players).then(setOracle); }, [players]);

  return (
    <div className="h-full overflow-y-auto p-6 bg-black flex flex-col scrollbar-hide">
      <h2 className="text-yellow-500 text-center text-4xl font-black mb-10 border-b-4 border-yellow-900 pb-4 italic tracking-widest uppercase">Destino Final</h2>
      <div className="space-y-6 flex-grow">
        {sorted.map((p, i) => (
          <div key={i} className={`p-6 rounded-lg border-2 transition-all duration-1000 ${i === 0 ? 'border-yellow-500 bg-yellow-500/10 shadow-[0_0_25px_rgba(255,215,0,0.4)] scale-105' : 'border-zinc-800 bg-zinc-900/40 opacity-70'}`}>
             <div className="flex justify-between items-center font-black text-3xl uppercase italic tracking-tighter">
               <span className="flex items-center gap-2">{i === 0 ? '🏆 ' : ''}{p.nombre}</span>
               <span className="text-red-600 text-5xl font-black drop-shadow-sm">{p.total}</span>
             </div>
          </div>
        ))}
      </div>
      <div className="mt-12 p-6 bg-zinc-950 border-2 border-yellow-800 rounded-xl italic text-zinc-300 text-sm text-center leading-relaxed shadow-inner">
        <span className="block text-yellow-600 font-black mb-3 text-xs uppercase tracking-[0.3em]">Revelación del Oráculo:</span>
        <p className="animate-in fade-in duration-1000">"{oracle}"</p>
      </div>
      <button onClick={onReset} className="mt-12 w-full bg-yellow-600 text-black py-5 font-black uppercase text-xl rounded-full shadow-[0_10px_30px_rgba(202,138,4,0.3)] active:scale-95 transition-transform mb-4">Nueva Batalla</button>
    </div>
  );
};

// --- APP PRINCIPAL ---

export default function App() {
  const [phase, setPhase] = useState<GamePhase>(GamePhase.MENU);
  const [numPlayers, setNumPlayers] = useState(2);
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [currentSlot, setCurrentSlot] = useState(0);
  const [turnOverlay, setTurnOverlay] = useState(false);

  const handleAction = (slot: Slot) => {
    const updated = [...players];
    updated[currentPlayerIdx].slots[currentSlot] = slot;
    setPlayers(updated);
    let nP = currentPlayerIdx + 1;
    let nS = currentSlot;
    if (nP >= numPlayers) { nP = 0; nS++; }
    if (nS >= 3) { setCurrentPlayerIdx(0); setPhase(GamePhase.DICE); setTurnOverlay(true); }
    else { setCurrentPlayerIdx(nP); setCurrentSlot(nS); setTurnOverlay(true); }
  };

  const handleDice = (roll: number) => {
    const updated = [...players];
    updated[currentPlayerIdx].dado = roll;
    setPlayers(updated);
    const nP = currentPlayerIdx + 1;
    if (nP >= numPlayers) setPhase(GamePhase.BATTLE_PARODY);
    else { setCurrentPlayerIdx(nP); setTurnOverlay(true); }
  };

  const reset = () => { setPlayers([]); setCurrentPlayerIdx(0); setCurrentSlot(0); setPhase(GamePhase.MENU); };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative selection:bg-yellow-500 text-zinc-200">
      {phase === GamePhase.MENU && <Menu onStart={(n) => { setNumPlayers(n); setPhase(GamePhase.SETUP); }} />}
      {phase === GamePhase.SETUP && <Setup total={numPlayers} onComplete={(ps) => { setPlayers(ps); setPhase(GamePhase.PLAY); }} />}
      {phase === GamePhase.PLAY && !turnOverlay && <GamePlay players={players} currentPlayerIdx={currentPlayerIdx} currentSlot={currentSlot} onAction={handleAction} />}
      {phase === GamePhase.DICE && !turnOverlay && <DicePhase key={currentPlayerIdx} player={players[currentPlayerIdx]} onComplete={handleDice} />}
      {phase === GamePhase.BATTLE_PARODY && <BattleParody players={players} onComplete={() => setPhase(GamePhase.RESULTS)} />}
      {phase === GamePhase.RESULTS && <Results players={players} onReset={reset} />}

      {turnOverlay && (
        <div className="absolute inset-0 z-[100] bg-black/98 flex items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300 backdrop-blur-sm">
          <div className="border-4 border-yellow-600 p-10 bg-zinc-900 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,1)]">
            <h1 className="text-red-600 text-5xl font-black mb-6 italic tracking-tighter uppercase drop-shadow-lg">¡ATENCIÓN!</h1>
            <p className="text-zinc-500 text-[10px] uppercase font-bold mb-2 tracking-widest">Entrega el dispositivo al Mago:</p>
            <h2 className="text-yellow-500 text-6xl font-black mb-12 underline decoration-red-600 underline-offset-8 uppercase italic tracking-tighter">{players[currentPlayerIdx]?.nombre}</h2>
            <button onClick={() => setTurnOverlay(false)} className="w-full bg-yellow-600 text-black py-6 font-black text-2xl rounded-full active:scale-90 shadow-[0_0_25px_gold] transition-all uppercase">Estoy Listo</button>
          </div>
        </div>
      )}
    </div>
  );
}