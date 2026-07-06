import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Building2 } from 'lucide-react';

export default function Navbar({ onOpenContactForm }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-navbar border-b border-vm-border py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src={isScrolled ? "/logofull-hospital-market.png" : "/logofull-hospital-fondo-oscuro-market.png"} 
            alt="Hospital Market Logo" 
            className="h-8 md:h-11 w-auto object-contain transition-all duration-500"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { label: 'Inicio', href: '#inicio' },
            { label: 'Nuestras Marcas', href: '#marcas' },
            { label: 'Calidad Técnica', href: '#calidad' },
            { label: 'Adquisiciones B2B', href: '#contacto' }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                isScrolled 
                  ? 'text-vm-text hover:text-vm-brand' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Main CTA */}
          <button 
            onClick={onOpenContactForm}
            className={`text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 transform active:scale-95 shadow-md flex items-center space-x-2 ${
              isScrolled 
                ? 'bg-vm-brand text-white hover:bg-vm-brand-hover hover:shadow-lg' 
                : 'bg-white text-vm-brand-dark hover:bg-white/95 hover:shadow-lg'
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>Contacto B2B</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled ? 'text-vm-text' : 'text-white'
            }`}
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`fixed inset-x-0 top-[60px] bottom-0 bg-white z-40 lg:hidden transition-all duration-300 border-t border-vm-border ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col p-6 space-y-6">
          {[
            { label: 'Inicio', href: '#inicio' },
            { label: 'Nuestras Marcas', href: '#marcas' },
            { label: 'Calidad Técnica', href: '#calidad' },
            { label: 'Adquisiciones B2B', href: '#contacto' }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-vm-text border-b border-vm-border pb-3 flex items-center justify-between"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactForm();
              }}
              className="w-full bg-vm-brand text-white text-center py-4 rounded-xl font-bold uppercase tracking-wider shadow-md hover:bg-vm-brand-hover flex items-center justify-center space-x-2"
            >
              <Building2 className="h-4 w-4" />
              <span>Contacto Corporativo</span>
            </button>
            <a 
              href="https://wa.me/56992767181" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 text-white text-center py-4 rounded-xl font-bold uppercase tracking-wider shadow-md flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>WhatsApp Ejecutivo</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
