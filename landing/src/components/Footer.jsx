import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUp, Building2, ShoppingBag, Send, CheckCircle2, User, FileSpreadsheet, Building } from 'lucide-react';

export default function Footer() {
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
    setTicketId('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dark glassmorphic form content integrated organically
  const formContent = (
    <div className="bg-black/35 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
      {submitted ? (
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-8">
          <div className="h-16 w-16 bg-emerald-500/10 text-[#04F79F] rounded-full flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(4,247,159,0.15)]">
            <CheckCircle2 className="h-8 w-8 animate-bounce" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">Solicitud Recibida</h3>
            <p className="text-xs text-slate-400 mt-2">
              Se ha generado un ticket formal de requerimiento comercial.
            </p>
          </div>
          
          <div className="bg-[#0F172A]/60 border border-slate-800/70 rounded-2xl p-6 w-full max-w-sm space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-500">Número de Ticket:</span>
              <span className="font-mono font-bold text-[#04F79F]">{ticketId}</span>
            </div>
            <div className="flex justify-between items-center text-xs border-t border-slate-800/50 pt-3">
              <span className="font-bold text-slate-500">Institución:</span>
              <span className="font-bold text-white">{formData.company}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-500">Solicitante:</span>
              <span className="font-bold text-white">{formData.name}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-500">Área de Interés:</span>
              <span className="font-bold text-teal-400 text-xs">{formData.interest}</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 px-4 leading-relaxed">
            Un ejecutivo de cuentas de Hospital Market se pondrá en contacto por correo electrónico ({formData.email}) o al teléfono ({formData.phone}) en menos de 2 horas hábiles.
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
          <div className="border-b border-slate-800/80 pb-4 mb-4">
            <h3 className="text-xl font-black text-white">Contacto Corporativo B2B</h3>
            <p className="text-xs text-slate-400 mt-1">
              Complete los datos de su institución de salud o empresa para canalizar su requerimiento comercial directamente con el área correspondiente.
            </p>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
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
                className="w-full bg-[#0F172A]/70 text-xs font-medium text-slate-200 p-3.5 rounded-xl border border-slate-800/80 focus:bg-[#090D1A] focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                <Building className="h-3.5 w-3.5 text-vm-brand" />
                <span>Institución / Empresa *</span>
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Ej. Clínica Alemana de Santiago"
                className="w-full bg-[#0F172A]/70 text-xs font-medium text-slate-200 p-3.5 rounded-xl border border-slate-800/80 focus:bg-[#090D1A] focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
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
                className="w-full bg-[#0F172A]/70 text-xs font-medium text-slate-200 p-3.5 rounded-xl border border-slate-800/80 focus:bg-[#090D1A] focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
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
                className="w-full bg-[#0F172A]/70 text-xs font-medium text-slate-200 p-3.5 rounded-xl border border-slate-800/80 focus:bg-[#090D1A] focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
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
                className="w-full bg-[#0F172A]/70 text-xs font-medium text-slate-200 p-3.5 rounded-xl border border-slate-800/80 focus:bg-[#090D1A] focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                <MapPin className="h-3.5 w-3.5 text-vm-brand" />
                <span>Región de Despacho *</span>
              </label>
              <div className="relative">
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full bg-[#0F172A]/70 text-xs font-medium text-slate-200 p-3.5 rounded-xl border border-slate-800/80 focus:bg-[#090D1A] focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  {REGIONS.map((region) => (
                    <option key={region} value={region} className="bg-[#0B0F19] text-slate-200">
                      {region}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-550">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
              <span>Área de Interés Principal *</span>
            </label>
            <div className="relative">
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-[#0F172A]/70 text-xs font-medium text-slate-200 p-3.5 rounded-xl border border-slate-800/80 focus:bg-[#090D1A] focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                {INTERESTS.map((interest) => (
                  <option key={interest} value={interest} className="bg-[#0B0F19] text-slate-200">
                    {interest}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-550">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Observaciones / Listado de Insumos Clínicos
            </label>
            <textarea
              name="notes"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Detalle los códigos, marcas o tipos de apósitos, jeringas, agujas o sistemas Vacutainer requeridos..."
              className="w-full bg-[#0F172A]/70 text-xs font-medium text-slate-200 p-3.5 rounded-xl border border-slate-800/80 focus:bg-[#090D1A] focus:outline-none focus:ring-2 focus:ring-vm-brand focus:border-transparent transition-all resize-none shadow-inner"
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
            <span className="text-[10px] text-slate-500 font-medium">
              * Campos obligatorios requeridos para validación B2B.
            </span>
            <button
              type="submit"
              className="bg-vm-brand hover:bg-vm-brand-hover text-white text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-xl shadow-lg transition-all active:scale-95 flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 shadow-[0_4px_20px_rgba(42,138,134,0.35)]"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Enviar Solicitud Corporativa</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );

  return (
    <footer id="contacto" className="bg-[#1e4b60] text-slate-200 pt-24 pb-16 relative border-t border-white/10 z-20 overflow-hidden">
      
      {/* Super Footer Layout with side-by-side grid */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Footer Directories & Info (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            {/* Logo & Info */}
            <div className="space-y-4">
              <img 
                src="/logofull-hospital-fondo-oscuro-market.png" 
                alt="Hospital Market Logo Footer" 
                className="h-[52px] w-auto object-contain mb-2"
              />
              <p className="text-xs md:text-sm text-slate-100 leading-relaxed text-balance">
                Grupo de logística y abastecimiento médico en Chile. Conectamos laboratorios globales con instituciones clínicas y pacientes de forma inteligente y sostenible.
              </p>
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-[#04F79F] px-3 py-1.5 rounded-lg border border-emerald-500/20 text-[10px] font-black uppercase tracking-wider shadow-sm">
                <ShieldCheck className="h-4 w-4" />
                <span>Distribución Regulada ISP</span>
              </div>
            </div>

            {/* Division Shortcuts */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-4">
                Nuestras Divisiones
              </h3>
              <ul className="space-y-4 text-xs md:text-sm">
                <li className="flex flex-col">
                  <a 
                    href="https://vidamedica.cl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-vm-brand transition-colors duration-300 font-bold flex items-center"
                  >
                    <Building2 className="h-4 w-4 mr-2 text-vm-brand" />
                    VidaMedica.cl B2B
                  </a>
                  <span className="text-[10px] text-slate-200/70 pl-6">Insumos Clínicos Mayoristas</span>
                </li>
                <li className="flex flex-col">
                  <a 
                    href="https://quenovenza.cl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#04F79F] transition-colors duration-300 font-bold flex items-center"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2 text-[#04F79F]" />
                    QueNoVenza.cl B2C
                  </a>
                  <span className="text-[10px] text-slate-200/70 pl-6">Descuentos por Expiración</span>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-4">
                Oficinas Centrales
              </h3>
              <ul className="space-y-3.5 text-xs md:text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-vm-brand shrink-0 mt-0.5" />
                  <span className="leading-snug">Av. Apoquindo 6410, Of. 1510, Las Condes, Santiago, Región Metropolitana, Chile</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-vm-brand shrink-0" />
                  <span>+56 2 2451 9800</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-vm-brand shrink-0" />
                  <span>contacto@hospitalmarket.cl</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: B2B Contact Form (7 columns) */}
          <div className="lg:col-span-7">
            {formContent}
          </div>

        </div>

        {/* Lower block: Copyright & Compliance */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-200/80">
          <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left space-y-2 md:space-y-0">
            <span>© 2026 Hospital Market Chile. Todos los derechos reservados.</span>
            <span className="text-teal-400 hidden md:inline">|</span>
            <span>Cumplimiento Ley 19.628 de Protección de Datos Personales</span>
            <span className="text-teal-400 hidden md:inline">|</span>
            <span>Insumos Médicos Certificados ISP</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl shadow-md transition-all active:scale-95 flex items-center space-x-2 border border-white/20"
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
