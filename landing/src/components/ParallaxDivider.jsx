import React, { useEffect, useState, useRef } from 'react';

export default function ParallaxDivider() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const titleText = "Establecemos Alianzas Estratégicas de Confianza";
  const messageText = "Abastecimiento clínico garantizado con trazabilidad total para el sector público y privado de Chile.";

  const titleWords = titleText.split(" ");
  const messageWords = messageText.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden z-20"
      style={{ backgroundImage: "url('/alliance-bg.webp')" }}
    >
      <style>{`
        @keyframes wordPop {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-word-pop {
          animation: wordPop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px] z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 flex flex-wrap justify-center leading-tight">
          {titleWords.map((word, idx) => (
            <span
              key={idx}
              className={`inline-block mr-3 opacity-0 ${isVisible ? 'animate-word-pop' : ''}`}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              {word}
            </span>
          ))}
        </h2>

        <p className="text-sm md:text-lg text-teal-300 font-medium tracking-wide flex flex-wrap justify-center max-w-2xl mx-auto leading-relaxed">
          {messageWords.map((word, idx) => (
            <span
              key={idx}
              className={`inline-block mr-1.5 opacity-0 ${isVisible ? 'animate-word-pop' : ''}`}
              style={{ animationDelay: `${(titleWords.length * 0.12) + (idx * 0.06)}s` }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
