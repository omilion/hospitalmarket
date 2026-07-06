import React from 'react';
import { ShieldCheck, Award, Truck, HeartHandshake } from 'lucide-react';

export default function TrustBadges() {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-vm-brand" />,
      title: 'Dispositivos Certificados ISP',
      description: 'Todos nuestros insumos cuentan con registro sanitario del Instituto de Salud Pública (ISP), garantizando altos estándares clínicos y seguridad absoluta para pacientes.'
    },
    {
      icon: <Award className="h-8 w-8 text-vm-brand" />,
      title: 'Distribución Oficial Autorizada',
      description: 'Garantizamos la procedencia directa y respaldo oficial de marcas líderes globales en salud, incluyendo Becton Dickinson (BD), Essity, Cutimed y Bard.'
    },
    {
      icon: <Truck className="h-8 w-8 text-vm-brand" />,
      title: 'Logística de Despacho Nacional',
      description: 'Contamos con convenios logísticos para entregas rápidas: de 24 a 48 horas hábiles en la Región Metropolitana, y de 3 a 7 días hábiles en regiones de Chile.'
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-vm-brand" />,
      title: 'Asesoría y Soporte Especializado',
      description: 'Un equipo técnico de profesionales médicos le asesora en la elección del catálogo idóneo para sus pabellones, clínicas, laboratorios o cuidado particular.'
    }
  ];

  return (
    <section id="calidad" className="py-20 bg-white border-y border-vm-border relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-vm-text mt-4 tracking-tight leading-tight">
            Compromiso Absoluto con la Calidad Sanitaria
          </h2>
          <p className="text-vm-text-muted mt-4 text-sm md:text-base">
            Proveemos insumos médicos a instituciones públicas y privadas bajo rigurosos controles de trazabilidad y almacenamiento para asegurar la eficiencia del cuidado clínico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-vm-border bg-vm-surface hover:bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 group flex flex-col items-start"
            >
              <div className="p-3 bg-white rounded-xl border border-vm-border shadow-sm group-hover:border-vm-brand/30 group-hover:bg-vm-brand-soft/50 transition-colors duration-500 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-vm-text mb-3 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-vm-text-muted text-xs md:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
