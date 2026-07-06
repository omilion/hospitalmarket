import React from 'react';
import { ArrowUpRight, ShieldCheck, Tag, HeartHandshake, Sparkles } from 'lucide-react';

export default function BrandsSection() {
  return (
    <section id="marcas" className="py-24 bg-vm-surface relative z-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-vm-text mt-4 tracking-tight leading-tight">
            Dos Marcas Especializadas, Un Solo Compromiso
          </h2>
          <p className="text-vm-text-muted mt-4 text-sm md:text-base">
            Hospital Market canaliza la comercialización y entrega de dispositivos médicos a través de dos portales líderes en Chile, adaptándose tanto a necesidades institucionales de gran volumen como al cuidado particular diario.
          </p>
        </div>

        {/* Dual Brand Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Card 1: VidaMedica (B2B Clinical) */}
          {/* Transparent and borderless by default. Turns white with shadow on hover. */}
          <div className="bg-transparent border border-transparent rounded-3xl transition-all duration-500 overflow-hidden flex flex-col justify-between group transform hover:bg-white hover:border-vm-border hover:shadow-card-hover hover:-translate-y-1">
            
            {/* Top Branding & Content Section */}
            <div className="p-8 md:p-10 flex flex-col items-center text-center">
              
              {/* Centered Logo at 80% width */}
              <div className="w-full flex justify-center items-center mb-10 border-b border-transparent group-hover:border-vm-border pb-6 transition-all duration-500">
                <img 
                  src="/logo-vidamedica.jpg" 
                  alt="Logo VidaMedica" 
                  className="w-4/5 max-w-[280px] h-20 object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-black text-vm-text mb-4 group-hover:text-vm-brand transition-colors duration-300">
                Abastecimiento Clínico Mayorista
              </h3>
              
              <p className="text-sm text-vm-text-muted leading-relaxed mb-8 max-w-md">
                El portal de referencia para clínicas, hospitales, laboratorios y convenios de salud en Chile. VidaMedica se centra en la provisión de insumos clínicos de alta rotación en formato de caja cerrada, garantizando trazabilidad total e importación directa.
              </p>

              {/* Centered Features List */}
              <div className="space-y-8 w-full flex flex-col items-center">
                <div className="flex flex-col items-center text-center max-w-sm">
                  <div className="p-2.5 bg-vm-brand-soft rounded-xl text-vm-brand mb-3">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-vm-text text-sm">Distribución Oficial BD & Essity</span>
                  <p className="text-vm-text-muted text-xs mt-1 leading-relaxed">
                    Acceso al catálogo oficial de apósitos especializados Cutimed, agujas hipodérmicas y tubos Vacutainer.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center max-w-sm">
                  <div className="p-2.5 bg-vm-brand-soft rounded-xl text-vm-brand mb-3">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-vm-text text-sm">Convenios Institucionales</span>
                  <p className="text-vm-text-muted text-xs mt-1 leading-relaxed">
                    Soporte comercial para órdenes de gran volumen, plazos de facturación diferida y licitaciones del sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Card CTA Footer (reveals background on card hover) */}
            <div className="p-8 bg-transparent border-t border-transparent group-hover:bg-vm-surface group-hover:border-vm-border transition-all duration-500 w-full flex justify-center">
              <a 
                href="https://vidamedica.cl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-vm-brand hover:bg-vm-brand-hover text-white text-xs font-black uppercase tracking-widest py-4.5 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95 group/btn"
              >
                <span>Visitar VidaMedica.cl B2B</span>
                <ArrowUpRight className="h-4 w-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: QueNoVenza (B2C Retail & Expiry Discounts) */}
          {/* Transparent and borderless by default. Turns white with shadow on hover. */}
          <div className="bg-transparent border border-transparent rounded-3xl transition-all duration-500 overflow-hidden flex flex-col justify-between group transform hover:bg-white hover:border-vm-border hover:shadow-card-hover hover:-translate-y-1 text-vm-text">
            
            {/* Top Branding & Content Section */}
            <div className="p-8 md:p-10 flex flex-col items-center text-center">
              
              {/* Centered Logo at 80% width */}
              <div className="w-full flex justify-center items-center mb-10 border-b border-transparent group-hover:border-vm-border pb-6 transition-all duration-500">
                <img 
                  src="/logo-quenovenza.png" 
                  alt="Logo QueNoVenza" 
                  className="w-4/5 max-w-[280px] h-20 object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-black text-vm-text mb-4 group-hover:text-vm-brand transition-colors duration-300">
                Insumos Médicos con Descuento
              </h3>
              
              <p className="text-sm text-vm-text-muted leading-relaxed mb-8 max-w-md">
                El canal de venta al detalle orientado a pacientes, familias y cuidado particular en el hogar. Bajo el lema <strong className="text-vm-brand-dark">"el tiempo pasa, los precios bajan"</strong>, ofrece insumos médicos certificados con descuentos progresivos de hasta 40% según su fecha de vencimiento.
              </p>

              {/* Centered Features List */}
              <div className="space-y-8 w-full flex flex-col items-center">
                <div className="flex flex-col items-center text-center max-w-sm">
                  <div className="p-2.5 bg-vm-brand-soft rounded-xl text-vm-brand mb-3">
                    <Tag className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-vm-text text-sm">Descuentos por Vencimiento</span>
                  <p className="text-vm-text-muted text-xs mt-1 leading-relaxed">
                    Precios decrecientes conforme se acerca la fecha tope de uso, ofreciendo una compra inteligente y sostenible.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center max-w-sm">
                  <div className="p-2.5 bg-vm-brand-soft rounded-xl text-vm-brand mb-3">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-vm-text text-sm">Caja Abierta y Unidades Sueltas</span>
                  <p className="text-vm-text-muted text-xs mt-1 leading-relaxed">
                    Permite comprar solo los apósitos o jeringas requeridos sin necesidad de pagar por la caja completa, optimizando el presupuesto.
                  </p>
                </div>
              </div>
            </div>

            {/* Card CTA Footer (reveals background on card hover) */}
            <div className="p-8 bg-transparent border-t border-transparent group-hover:bg-vm-surface group-hover:border-vm-border transition-all duration-500 w-full flex justify-center">
              <a 
                href="https://quenovenza.cl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-vm-brand hover:bg-vm-brand-hover text-white text-xs font-black uppercase tracking-widest py-4.5 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95 group/btn"
              >
                <span>Visitar QueNoVenza.cl B2C</span>
                <ArrowUpRight className="h-4 w-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
