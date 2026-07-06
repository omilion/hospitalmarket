import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsSection from './components/BrandsSection';
import CorporateCredentials from './components/CorporateCredentials';
import ParallaxDivider from './components/ParallaxDivider';
import ChileCompraSection from './components/ChileCompraSection';
import TrustBadges from './components/TrustBadges';
import FaqSection from './components/FaqSection';
import CorporateContactForm from './components/CorporateContactForm';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export default function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsContactFormOpen(false);
  };

  const handleStartQuoting = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsContactFormOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-vm-surface text-vm-text selection:bg-vm-brand/10 selection:text-vm-brand">
      {/* Navigation */}
      <Navbar onOpenContactForm={handleOpenForm} />

      {/* Hero Banner (100vh, full screen width background, with transition overlay) */}
      <Hero onStartQuoting={handleStartQuoting} />

      {/* Sub-Brands Division Split Presentation (B2B VidaMedica & B2C QueNoVenza) */}
      <BrandsSection />

      {/* Corporate Credentials (Distributed Brands) */}
      <CorporateCredentials />

      {/* Parallax Divider (Visual breather with word-by-word animation) */}
      <ParallaxDivider />

      {/* ChileCompra / Mercado Público Credentials Section */}
      <ChileCompraSection />

      {/* Trust Badges & Clinical Credentials */}
      <TrustBadges />

      {/* Standalone FAQ Accordion Section (Two-Column Grid for SEO) */}
      <FaqSection />

      {/* Modal/Overlay Contact Form (Triggered from Navbar and Hero CTA buttons) */}
      {isContactFormOpen && (
        <CorporateContactForm 
          isOpen={true} 
          onClose={handleCloseForm} 
        />
      )}

      {/* Floating WhatsApp chat executive support */}
      <WhatsAppWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
