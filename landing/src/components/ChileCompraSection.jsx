import React from 'react';

export default function ChileCompraSection() {
  return (
    <section id="chilecompra" className="py-20 bg-white relative z-20 border-b border-vm-border">
      <div className="container mx-auto px-6">
        
        {/* Convenio Marco / Mercado Público Section without visible container */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Text description */}
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-vm-brand bg-vm-brand-soft px-3 py-1.5 rounded-full inline-block">
                ChileCompra / Mercado Público
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-vm-text tracking-tight leading-tight text-balance">
                Proveedores del Estado de Chile en Convenio Marco
              </h3>
              <p className="text-xs md:text-sm text-vm-text-muted leading-relaxed text-balance">
                Facilitamos y agilizamos los procesos de adquisición para hospitales públicos, consultorios, municipalidades y corporaciones estatales. Hospital Market cuenta con acreditación vigente en la plataforma de Mercado Público.
              </p>
              
              <ul className="text-xs space-y-2 text-vm-text font-medium pl-5 list-disc">
                <li>Compra directa simplificada a través de catálogo electrónico.</li>
                <li>Garantía de cumplimiento de estándares sanitarios de licitación.</li>
                <li>Despachos prioritarios y facturación fiscal a 30 días.</li>
              </ul>

              <a 
                href="#contacto" 
                className="inline-block bg-vm-brand hover:bg-vm-brand-hover text-white text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl shadow-md transition-all active:scale-95"
              >
                Solicitar Ficha de Proveedor
              </a>
            </div>

            {/* Banner image display - flat layout */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-full">
                <img 
                  src="/convenio-marco.png" 
                  alt="Somos Proveedores del Estado - Convenio Marco Mercado Publico" 
                  className="max-h-48 w-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
