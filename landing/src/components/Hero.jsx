import React from 'react';
import { ChevronDown, CheckCircle2, Building, Store } from 'lucide-react';

export default function Hero({ onStartQuoting }) {
  const scrollToBrands = (e) => {
    e.preventDefault();
    const brandsElement = document.getElementById('marcas');
    if (brandsElement) {
      brandsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[650px] w-full flex items-center justify-center bg-[#1F2937]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-out scale-105"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      />
      
      {/* Gradient continuity overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-vm-surface" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl mt-12 animate-fade-in-up">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] text-balance mb-6">
          Soluciones Clínicas e <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Insumos Médicos</span> para todo Chile
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
          Representantes oficiales y distribuidores autorizados de marcas líderes globales. Abastecemos de forma estratégica al sector de salud pública, clínicas privadas y cuidado clínico en el hogar a través de nuestros canales especializados.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-md mx-auto">
          <a
            href="#marcas"
            onClick={scrollToBrands}
            className="w-full bg-vm-brand hover:bg-vm-brand-hover text-white text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-xl transition-all duration-300 shadow-lg text-center transform active:scale-95 hover:shadow-vm-brand/20"
          >
            Ver Canales de Venta
          </a>
          <button
            onClick={onStartQuoting}
            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-xl transition-all duration-300 text-center transform active:scale-95"
          >
            Contacto Corporativo
          </button>
        </div>

        {/* Division markers with improved contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto border-t border-white/10 pt-8 text-left">
          <div className="flex items-start space-x-3 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700/60 shadow-xl">
            <Building className="h-6 w-6 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-sm font-black uppercase tracking-wider">Canal B2B (Clínico)</p>
              <p className="text-slate-200 text-xs mt-1">Abastecimiento por volumen y cotizaciones oficiales de insumos clínicos vía VidaMedica.cl</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700/60 shadow-xl">
            <Store className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-sm font-black uppercase tracking-wider">Canal B2C (Detalle)</p>
              <p className="text-slate-200 text-xs mt-1">Descuentos dinámicos por vencimiento y compra de unidades sueltas vía QueNoVenza.cl</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-vm-text-muted mb-2">
          Ver Canales
        </span>
        <a 
          href="#marcas"
          onClick={scrollToBrands}
          className="p-2 rounded-full border border-slate-300 text-vm-text-muted hover:text-vm-brand hover:border-vm-brand transition-colors duration-300"
          aria-label="Desplazar hacia marcas"
        >
          <ChevronDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
