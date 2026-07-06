import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Building, FileSpreadsheet, User, Phone, MapPin } from 'lucide-react';

export default function CorporateContactForm({ isOpen, onClose }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    rut: '',
    email: '',
    phone: '',
    interest: 'Abastecimiento VidaMedica (B2B / Clínicas)',
    region: 'Metropolitana de Santiago',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const REGIONS = [
    'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo',
    'Valparaíso', 'Metropolitana de Santiago', 'O\'Higgins', 'Maule', 'Ñuble',
    'Biobío', 'Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes'
  ];

  const INTERESTS = [
    'Abastecimiento VidaMedica (B2B / Clínicas)',
    'Alianzas QueNoVenza (Liquidación y Ahorro)',
    'Registro de Nuevas Marcas / Proveedores',
    'Convenios Marcos y Licitaciones Públicas',
    'Otros Asuntos Corporativos'
  ];

  const faqs = [
    {
      q: '¿Qué certificaciones respaldan los insumos de Hospital Market?',
      a: 'Todos los productos que distribuimos cuentan con registro sanitario vigente del Instituto de Salud Pública (ISP) de Chile y certificaciones internacionales como CE y FDA, garantizando máxima seguridad clínica.'
    },
    {
      q: '¿Cómo solicitar una cotización formal B2B?',
      a: 'Puede completar el formulario adjunto en esta sección o escribirnos directamente a través de nuestro widget flotante de WhatsApp. Un ejecutivo comercial procesará su solicitud y emitirá una cotización formal en un plazo máximo de 2 horas hábiles.'
    },
    {
      q: '¿Tienen cobertura de despacho a todas las regiones de Chile?',
      a: 'Sí. Hospital Market cuenta con acuerdos y alianzas con los principales operadores logísticos del país para despachar insumos médicos a cualquier comuna o centro médico del territorio nacional.'
    },
    {
      q: '¿Cuáles son los plazos de entrega en Santiago y regiones?',
      a: 'Las entregas en la Región Metropolitana (Santiago) demoran entre 24 y 48 horas hábiles. Para regiones, el plazo estimado de distribución oscila entre 3 y 7 días hábiles, dependiendo del destino.'
    },
    {
      q: '¿Qué diferencia a VidaMedica.cl de QueNoVenza.cl?',
      a: 'VidaMedica.cl es nuestro canal B2B dedicado al abastecimiento clínico e institucional en cajas cerradas de alto volumen. QueNoVenza.cl es nuestra división minorista B2C que vende unidades sueltas o cajas abiertas con descuentos progresivos de hasta 40% según proximidad de vencimiento.'
    },
    {
      q: '¿Es posible comprar insumos médicos como persona natural?',
      a: 'Sí, las personas naturales, cuidadores u oficinas pueden realizar compras unitarias o de menor escala de forma ágil y 100% online ingresando directamente a QueNoVenza.cl.'
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setTicketId(`TKT-2026-${randomNum}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      rut: '',
      email: '',
      phone: '',
      interest: 'Abastecimiento VidaMedica (B2B / Clínicas)',
      region: 'Metropolitana de Santiago',
      notes: ''
    });
    setSubmitted(false);
    if (onClose) onClose();
  };

  const formContent = (
    <div className="bg-white p-8 rounded-3xl border border-vm-border shadow-card">
      {submitted ? (
        <div className="text-center py-8 space-y-6 animate-scale-in">
          <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-200">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-vm-text">Formulario de Contacto Recibido</h3>
            <p className="text-sm text-vm-text-muted">
              Su solicitud de contacto corporativo ha sido ingresada en nuestra base de datos.
            </p>
          </div>

          <div className="bg-vm-surface border border-vm-border rounded-2xl p-6 text-left max-w-md mx-auto space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-vm-text-muted">Código de Ticket:</span>
              <span className="font-black text-vm-brand-dark font-mono text-sm bg-vm-brand-soft px-2.5 py-1 rounded">
                {ticketId}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs border-t border-vm-border pt-3">
              <span className="font-bold text-vm-text-muted">Institución:</span>
              <span className="font-bold text-vm-text">{formData.company}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-vm-text-muted">Solicitante:</span>
              <span className="font-bold text-vm-text">{formData.name}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-vm-text-muted">Área de Interés:</span>
              <span className="font-bold text-vm-brand-dark text-xs">{formData.interest}</span>
            </div>
          </div>

          <p className="text-xs text-vm-text-muted px-4 leading-relaxed">
            Un ejecutivo de cuentas corporativas de Hospital Market se pondrá en contacto con usted por correo electrónico ({formData.email}) o al teléfono corporativo ({formData.phone}) en un plazo máximo de 2 horas hábiles.
          </p>

          <button
            onClick={handleReset}
            className="bg-vm-brand hover:bg-vm-brand-hover text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-md transition-all active:scale-95"
          >
            Aceptar
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-vm-border pb-4 mb-4">
            <h3 className="text-xl font-black text-vm-text">Contacto Corporativo Hospital Market</h3>
            <p className="text-xs text-vm-text-muted mt-1">
              Complete los datos de su institución de salud o empresa para canalizar su requerimiento comercial directamente con el área correspondiente.
            </p>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-vm-text-muted flex items-center space-x-1.5">
                <User className="h-3.5 w-3.5 text-vm-brand" />
                <span>Nombre Completo *</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Dra. Francisca Silva"
                className="w-full bg-vm-surface text-xs font-medium text-vm-text p-3.5 rounded-xl border border-vm-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-vm-text-muted flex items-center space-x-1.5">
                <Building className="h-3.5 w-3.5 text-vm-brand" />
                <span>Institución / Clínica / Laboratorio *</span>
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Ej. Clínica Alemana de Santiago"
                className="w-full bg-vm-surface text-xs font-medium text-vm-text p-3.5 rounded-xl border border-vm-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-vm-text-muted flex items-center space-x-1.5">
                <FileSpreadsheet className="h-3.5 w-3.5 text-vm-brand" />
                <span>RUT Institucional (Chile) *</span>
              </label>
              <input
                type="text"
                name="rut"
                required
                value={formData.rut}
                onChange={handleChange}
                placeholder="Ej. 76.452.123-K"
                className="w-full bg-vm-surface text-xs font-medium text-vm-text p-3.5 rounded-xl border border-vm-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-vm-text-muted flex items-center space-x-1.5">
                <Mail className="h-3.5 w-3.5 text-vm-brand" />
                <span>Correo Corporativo *</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Ej. f.silva@clinica.cl"
                className="w-full bg-vm-surface text-xs font-medium text-vm-text p-3.5 rounded-xl border border-vm-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-vm-text-muted flex items-center space-x-1.5">
                <Phone className="h-3.5 w-3.5 text-vm-brand" />
                <span>Teléfono de Contacto *</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ej. +56 9 1234 5678"
                className="w-full bg-vm-surface text-xs font-medium text-vm-text p-3.5 rounded-xl border border-vm-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-vm-text-muted flex items-center space-x-1.5">
                <MapPin className="h-3.5 w-3.5 text-vm-brand" />
                <span>Región de Entrega *</span>
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full bg-vm-surface text-xs font-medium text-vm-text p-3.5 rounded-xl border border-vm-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all"
              >
                {REGIONS.map(reg => (
                  <option key={reg} value={reg}>{reg}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-vm-text-muted">
              Área de Requerimiento Comercial *
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-vm-surface text-xs font-medium text-vm-text p-3.5 rounded-xl border border-vm-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all"
            >
              {INTERESTS.map(int => (
                <option key={int} value={int}>{int}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-vm-text-muted">
              Descripción de Requerimientos / Observaciones
            </label>
            <textarea
              name="notes"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Describa el volumen estimado de adquisición de insumos, marcas de preferencia, o detalles para acuerdos logísticos..."
              className="w-full bg-vm-surface text-xs font-medium text-vm-text p-3.5 rounded-xl border border-vm-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all resize-none"
            />
          </div>

          <div className="flex items-center space-x-2 text-[10px] text-vm-text-muted">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Datos protegidos bajo estrictos estándares de ciberseguridad corporativa. Hospital Market Chile.</span>
          </div>

          <div className="flex space-x-3 pt-2">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-white border border-vm-border text-vm-text text-xs font-black uppercase tracking-widest py-4 rounded-xl transition-all active:scale-95 hover:bg-vm-surface"
              >
                Cancelar
              </button>
            )}
            <button
              type="submit"
              className="flex-[2] bg-vm-brand hover:bg-vm-brand-hover text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 active:scale-95"
            >
              <Send className="h-4 w-4" />
              <span>Enviar Solicitud Corporativa</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );

  // Always return as Modal overlay since standalone was moved to Footer.jsx
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 transition-colors p-2 z-20"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>
        {formContent}
      </div>
    </div>
  );
}
