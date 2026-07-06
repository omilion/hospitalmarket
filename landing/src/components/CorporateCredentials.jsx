import React from 'react';

export default function CorporateCredentials() {
  const brands = [
    { name: 'Becton Dickinson (BD)', logo: '/brand-bd.png', desc: 'Líder global en tecnología médica, jeringas de seguridad y tubos de recolección de muestras Vacutainer.' },
    { name: 'Essity / Cutimed / Leukoplast', logo: '/brand-essity.png', desc: 'Especialistas en cuidado avanzado de heridas, apósitos hidrofílicos y soluciones de fijación médica crítica.' },
    { name: 'Embecta', logo: '/brand-embecta.png', desc: 'Referente mundial en dispositivos y agujas de inyección segura para pacientes con diabetes.' }
  ];

  return (
    <section id="credenciales" className="py-20 bg-white relative z-20 border-b border-vm-border">
      <div className="container mx-auto px-6">
        
        {/* Distributed Brands Grid */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-vm-brand bg-vm-brand-soft px-3 py-1.5 rounded-full">
              Distribución y Respaldo Técnico
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-vm-text mt-4 tracking-tight leading-tight">
              Marcas Globales con Distribución Oficial
            </h2>
            <p className="text-vm-text-muted mt-3 text-sm">
              Hospital Market importa y distribuye directamente el portafolio de los fabricantes más prestigiosos de la industria de la salud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {brands.map((brand, idx) => (
              <div 
                key={idx} 
                className="bg-vm-surface border border-vm-border rounded-2xl p-8 text-center flex flex-col items-center justify-between hover:border-vm-brand/35 transition-all duration-300 group"
              >
                <div className="h-20 w-full flex items-center justify-center mb-6">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="w-4/5 max-w-[200px] h-20 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-vm-text mb-2 uppercase tracking-wide">
                    {brand.name}
                  </h4>
                  <p className="text-xs text-vm-text-muted leading-relaxed text-balance">
                    {brand.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Removed Convenio Marco Section (now in ChileCompraSection.jsx) */}

      </div>
    </section>
  );
}
