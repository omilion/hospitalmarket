import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Hola, me gustaría coordinar una cotización de insumos médicos para mi institución.');

  const handleSend = () => {
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/56992767181?text=${encodedText}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Expanded chat window */}
      <div className={`absolute bottom-16 right-0 w-80 bg-white rounded-2xl border border-vm-border shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {/* Chat header */}
        <div className="bg-[#075e54] p-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/logofull-hospital-fondo-oscuro-market.png" 
                alt="Hospital Market Care Executive" 
                className="h-8 w-8 rounded-full bg-white/10 object-contain p-1 border border-white/20"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-[#075e54]"></span>
            </div>
            <div>
              <h4 className="text-xs font-bold">Hospital Market B2B</h4>
              <p className="text-[10px] text-teal-100">En línea • Especialista Técnico</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat body */}
        <div className="p-4 bg-[#ece5dd] max-h-48 overflow-y-auto space-y-3 min-h-[120px] flex flex-col justify-end">
          <div className="bg-white p-3 rounded-lg text-xs text-vm-text max-w-[85%] self-start shadow-sm border border-black/5">
            <p className="font-semibold text-[10px] text-teal-700 mb-0.5">Ejecutivo de Cuentas</p>
            <p className="leading-relaxed">Estimado cliente, ¿en qué podemos asesorarle hoy con respecto a su cotización?</p>
            <span className="text-[9px] text-vm-text-soft block text-right mt-1">11:15 AM</span>
          </div>
        </div>

        {/* Chat footer input */}
        <div className="p-3 bg-white border-t border-vm-border flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escriba su mensaje..."
            className="flex-1 bg-vm-surface text-xs p-2.5 rounded-xl border border-vm-border focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl shadow-md transition-colors"
            aria-label="Enviar por WhatsApp"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Pulsing trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-[#25D366] hover:bg-[#1ebd59] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform active:scale-90 group focus:outline-none"
        aria-label="Abrir chat de WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping group-hover:hidden"></span>
        <i className="fa-brands fa-whatsapp text-3xl relative z-10 transition-transform duration-300 group-hover:rotate-12"></i>
        
        {/* Availability tag */}
        <span className="absolute right-14 bg-white border border-vm-border text-vm-text shadow-md px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          ¿Necesitas ayuda?
        </span>
      </button>
    </div>
  );
}
