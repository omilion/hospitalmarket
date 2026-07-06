import React, { useState } from 'react';

export default function FaqSection() {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (idx) => {
    setOpenFaqs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const faqs = [
    {
      q: '¿Qué certificaciones respaldan los insumos de Hospital Market?',
      a: 'Todos los productos que distribuimos cuentan con registro sanitario vigente del Instituto de Salud Pública (ISP) de Chile y certificaciones internacionales como CE y FDA, garantizando máxima seguridad clínica.'
    },
    {
      q: '¿Cómo solicitar una cotización formal B2B?',
      a: 'Puede completar el formulario de contacto en el pie de página de este portal o escribirnos a través del widget de WhatsApp. Un ejecutivo de cuentas procesará su requerimiento y enviará una cotización en menos de 2 horas hábiles.'
    },
    {
      q: '¿Tienen cobertura de despacho a todas las regiones de Chile?',
      a: 'Sí. Hospital Market cuenta con convenios consolidados con las principales empresas de transporte logístico del país, despachando insumos médicos a cualquier clínica, hospital o domicilio del territorio nacional.'
    },
    {
      q: '¿Cuáles son los plazos de entrega en Santiago y regiones?',
      a: 'Las entregas en la Región Metropolitana demoran de 24 a 48 horas hábiles. Para regiones, el plazo de despacho fluctúa entre 3 y 7 días hábiles, de acuerdo al centro urbano de destino.'
    },
    {
      q: '¿Qué diferencia a VidaMedica.cl de QueNoVenza.cl?',
      a: 'VidaMedica.cl es nuestro portal B2B dedicado al abastecimiento clínico e institucional en cajas cerradas de alto volumen. QueNoVenza.cl es nuestra división minorista B2C que vende unidades sueltas o cajas abiertas con descuentos progresivos de hasta 40% según proximidad de vencimiento.'
    },
    {
      q: '¿Es posible comprar insumos médicos como persona natural?',
      a: 'Sí, las personas naturales, cuidadores u oficinas pueden realizar compras unitarias de menor escala de forma ágil y 100% online ingresando directamente a QueNoVenza.cl.'
    },
    {
      q: '¿Cómo funciona el sistema de descuentos por vencimiento?',
      a: 'En QueNoVenza.cl aplicamos descuentos decrecientes a insumos aptos conforme se aproxima su fecha límite de expiración. Esto permite a pacientes crónicos y familias ahorrar significativamente y evita la pérdida o desperdicio de materiales sanitarios.'
    },
    {
      q: '¿Son proveedores autorizados en Convenio Marco?',
      a: 'Sí, Hospital Market es un proveedor acreditado en el catálogo electrónico de Convenio Marco dentro de la plataforma ChileCompra (Mercado Público), facilitando la compra directa para organismos del Estado.'
    }
  ];

  // Split FAQs into two columns (4 per column)
  const leftColFaqs = faqs.slice(0, 4);
  const rightColFaqs = faqs.slice(4, 8);

  const renderFaqItem = (faq, originalIdx) => {
    const isOpen = !!openFaqs[originalIdx];
    return (
      <div 
        key={originalIdx} 
        className="bg-white border border-vm-border rounded-2xl p-5 shadow-sm transition-all duration-300 hover:border-vm-brand/30"
      >
        <button
          type="button"
          onClick={() => toggleFaq(originalIdx)}
          className="w-full flex items-center justify-between text-left focus:outline-none group/faq"
        >
          <span className="text-sm font-black text-vm-text group-hover/faq:text-vm-brand transition-colors duration-300 pr-4">
            {faq.q}
          </span>
          <span className={`text-vm-brand font-black text-base transition-transform duration-300 transform ${
            isOpen ? 'rotate-180 text-vm-brand-dark' : ''
          }`}>
            {isOpen ? '−' : '+'}
          </span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 mt-3 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <p className="text-xs text-vm-text-muted leading-relaxed font-medium pt-2 border-t border-vm-border/50">
            {faq.a}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="py-24 bg-vm-surface border-b border-vm-border relative z-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-vm-text mt-4 tracking-tight leading-tight">
            Preguntas Frecuentes (FAQ)
          </h2>
          <p className="text-vm-text-muted mt-3 text-xs md:text-sm">
            Toda la información técnica, logística y comercial necesaria para la adquisición de insumos clínicos en Chile.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColFaqs.map((faq, idx) => renderFaqItem(faq, idx))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColFaqs.map((faq, idx) => renderFaqItem(faq, idx + 4))}
          </div>
        </div>

      </div>
    </section>
  );
}
