'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Compass, 
  Hammer, 
  FileCheck, 
  Maximize, 
  HardHat, 
  Check, 
  ArrowRight, 
  HelpCircle,
  Phone
} from 'lucide-react';
import { services } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { motion } from 'framer-motion';

// Map icon names from services data to Lucide Components
const iconMap: Record<string, React.ComponentType<any>> = {
  Compass: Compass,
  Hammer: Hammer,
  FileCheck: FileCheck,
  Maximize: Maximize,
  HardHat: HardHat
};

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
} as const;

export default function ServicesPage() {
  return (
    <div className="w-full bg-brand-light pb-24 bg-noise-texture">
      {/* 1. Header Banner */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden bg-grid-technical border-b border-brand-concrete-dark/30">
        <div className="absolute inset-0 bg-brand-dark/50" />
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />
        <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 border border-brand-concrete/30 px-3 py-1 text-[9px] tracking-widest uppercase text-brand-concrete font-heading">
            O que oferecemos
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
            Nossos Serviços
          </h1>
          <p className="text-xs md:text-sm text-brand-concrete max-w-xl leading-relaxed font-sans">
            Do planejamento e projeto inicial no computador até o canteiro de obras e regularização jurídica final. Soluções sob medida para construir sem dor de cabeça.
          </p>
        </div>
      </section>

      {/* 2. Services Detailed List (Alternating Rows) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 space-y-28">
        {services.map((service, index) => {
          const IconComp = iconMap[service.iconName] || Compass;
          const isEven = index % 2 === 0;
          const waServiceLink = createWhatsAppLink(`Olá Matheus, acessei o site e gostaria de saber mais informações / solicitar um orçamento para o serviço de: "${service.title}".`);

          return (
            <div 
              key={service.id} 
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-brand-concrete-light/30 first:border-t-0 first:pt-0"
            >
              {/* Image Block */}
              <motion.div 
                {...fadeInUp}
                className={`lg:col-span-5 relative cad-corner-container border border-brand-concrete-light/50 p-2 bg-white ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* CAD Corners */}
                <div className="cad-corner-tl" />
                <div className="cad-corner-tr" />
                <div className="cad-corner-bl" />
                <div className="cad-corner-br" />

                <div className="image-zoom-container relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] bg-brand-concrete-light/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="image-zoom-img object-cover"
                  />
                  {/* Technical CAD Corner Lines inside image */}
                  <div className="absolute top-2 left-2 bg-brand-dark/85 text-white text-[8px] font-heading tracking-widest px-2 py-0.5 uppercase backdrop-blur-sm">
                    Fase {index + 1}
                  </div>
                </div>
              </motion.div>

              {/* Text Info Block */}
              <motion.div 
                {...fadeInUp}
                className={`lg:col-span-7 space-y-6 ${
                  isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'
                }`}
              >
                {/* Header info */}
                <div className="space-y-3">
                  <div className="inline-flex p-3.5 bg-white border border-brand-concrete-light/60 text-brand-red shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-dark tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-sm text-brand-concrete leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Benefits & Indications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-concrete-light/35">
                  {/* Benefits */}
                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-dark">Vantagens & Benefícios</h4>
                    <ul className="space-y-2.5">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2 text-[11px] text-brand-concrete font-sans">
                          <span className="mt-0.5 p-0.5 bg-brand-red/10 text-brand-red shrink-0 rounded-full">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Indications */}
                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-dark">Indicado Para</h4>
                    <ul className="space-y-2.5">
                      {service.indicatedFor.map((ind, iIdx) => (
                        <li key={iIdx} className="flex items-start space-x-2 text-[11px] text-brand-concrete font-sans">
                          <span className="mt-1 w-1.5 h-1.5 bg-brand-concrete shrink-0 rounded-full" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service CTA */}
                <div className="pt-6">
                  <a 
                    href={waServiceLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="accent" size="md" className="group">
                      {service.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* 3. General Help Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <motion.div 
          {...fadeInUp}
          className="bg-brand-dark text-white p-8 md:p-12 relative overflow-hidden bg-grid-technical flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-concrete-dark/30"
        >
          <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
            <div className="inline-flex p-3 bg-brand-concrete-dark/45 border border-brand-concrete-dark/65 text-brand-red mx-auto md:mx-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl md:text-2xl">
              Ainda com dúvidas de qual serviço contratar?
            </h3>
            <p className="text-[11px] md:text-xs text-brand-concrete leading-relaxed font-sans">
              Cada terreno e situação jurídica possui suas particularidades. Fale diretamente com Matheus Amarante para receber uma orientação prévia e alinhar a melhor estratégia de construção ou regularização.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a 
              href={createWhatsAppLink('Olá Matheus, acessei seu site e gostaria de tirar uma dúvida geral sobre os serviços prestados.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" size="lg" className="w-full flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-current shrink-0" />
                Falar Conosco
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
