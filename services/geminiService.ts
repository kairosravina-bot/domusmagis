

import { GoogleGenAI } from "@google/genai";

// Inicializamos la IA con la clave de entorno
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getOracleAdvice = async (players: any[]) => {
  try {
    // Calculamos los totales para darle contexto a la IA
    const prompt = `Actúa como el Oráculo de Domus Magi. 
    Analiza este duelo: 
    ${players.map(p => {
      const total = p.slots.reduce((sum: number, s: any) => sum + (s?.valor || 0), 0) + p.dado;
      return `Mago ${p.nombre}: Cartas [${p.slots.map((s: any) => s?.carta.nombre || 'Vacío').join(', ')}], Dado: ${p.dado}, Total: ${total}.`;
    }).join('\n')}
    
    Predice el destino del ganador y lanza una advertencia épica al perdedor en español (máximo 50 palabras).`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Las brumas del tiempo ocultan el resultado...";
  } catch (error) {
    console.error("Error del Oráculo:", error);
    return "El Oráculo está meditando. La victoria se decidirá en el campo de batalla.";
  }
};
