'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, TrendingUp, Handshake, ArrowRight, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
} as const;

const values = [
  {
    icon: ShieldCheck,
    title: 'Segurança Técnica',
    desc: 'Projetos em conformidade estrita com as normas da ABNT e legislação urbana municipal.'
  },
  {
    icon: Award,
    title: 'Qualidade de Acabamento',
    desc: 'Supervisão constante do canteiro de obras para garantir detalhes refinados e acabamento de alto padrão.'
  },
  {
    icon: TrendingUp,
    title: 'Previsibilidade de Custos',
    desc: 'Planejamento financeiro prévio detalhado para evitar estouros de orçamento durante a execução.'
  },
  {
    icon: Handshake,
    title: 'Transparência nas Relações',
    desc: 'Comunicação próxima com relatórios físicos periódicos do canteiro para total tranquilidade do cliente.'
  }
];

export default function AboutPage() {
  return (
    <div className="w-full bg-brand-light pb-24 bg-noise-texture">
      {/* 1. Header Banner */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden bg-grid-technical border-b border-brand-concrete-dark/30">
        <div className="absolute inset-0 bg-brand-dark/50" />
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />
        <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 border border-brand-concrete/30 px-3 py-1 text-[9px] tracking-widest uppercase text-brand-concrete font-heading">
            Quem Somos
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight max-w-3xl leading-tight">
            Arquitetura e construção com planejamento, qualidade e confiança.
          </h1>
        </div>
      </section>

      {/* 2. Institutional Presentation */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Columns: Text Content */}
        <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6">
          <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest block">Nossa História</span>
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-dark tracking-tight leading-tight">
            Criando espaços contemporâneos sob a coordenação do arquiteto Matheus Amarante.
          </h2>
          <div className="space-y-4 text-xs md:text-sm text-brand-concrete leading-relaxed font-sans">
            <p>
              A **M.A. Projetos e Construções** nasceu do desejo de integrar o design sensível da arquitetura contemporânea à solidez e ao rigor técnico da construção civil. Sediada em São José do Rio Preto - SP, a empresa atua na criação de residências exclusivas, projetos de chácaras de lazer, ampliações e regularizações imobiliárias.
            </p>
            <p>
              Sob a coordenação direta do arquiteto **Matheus Amarante**, unimos técnica de ponta com um atendimento próximo e personalizado. Entendemos que o processo de projetar e construir vai muito além do concreto e das plantas baixas: trata-se da materialização do sonho de vida de cada cliente.
            </p>
            <p>
              Por isso, nos comprometemos a oferecer uma jornada tranquila. Nossos projetos executivos são extremamente detalhados, o que reduz drasticamente imprevistos no canteiro de obras. Gerenciamos cronogramas e compras com profissionalismo, assegurando a entrega da obra nos prazos contratados.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Visual Showcase */}
        <motion.div 
          {...fadeInUp} 
          className="lg:col-span-5 relative cad-corner-container border border-brand-concrete-light/50 p-2 bg-white"
        >
          {/* CAD Corners */}
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr" />
          <div className="cad-corner-bl" />
          <div className="cad-corner-br" />

          <div className="image-zoom-container relative w-full h-full aspect-[4/5] bg-brand-concrete-light/10">
            <Image
              src="/matheus/images/about/about_house.png"
              alt="Canteiro de obras sob acompanhamento técnico da M.A. Projetos e Construções"
              fill
              className="image-zoom-img object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* 3. Core Corporate Values */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest block">Nossos Pilares</span>
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-dark tracking-tight">
            Valores que guiam nosso trabalho.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, idx) => {
            const IconVal = v.icon;
            return (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-brand-concrete-light/40 p-8 hover:border-brand-dark transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.01)]"
              >
                <div className="inline-flex p-3 bg-brand-light text-brand-red mb-6">
                  <IconVal className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-brand-dark mb-2">
                  {v.title}
                </h3>
                <p className="text-[11px] text-brand-concrete leading-relaxed font-sans">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Special Statement Block (Dark Theme Callout) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <motion.div 
          {...fadeInUp}
          className="bg-brand-dark text-white p-12 md:p-16 relative overflow-hidden bg-grid-technical text-center space-y-8 border border-brand-concrete-dark/30"
        >
          <div className="absolute left-6 top-6 w-8 h-8 border-t border-l border-brand-concrete-dark/30 hidden md:block" />
          <div className="absolute right-6 bottom-6 w-8 h-8 border-b border-r border-brand-concrete-dark/30 hidden md:block" />
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-[9px] font-heading font-extrabold text-brand-red uppercase tracking-widest">Compromisso de Vida</span>
            <h3 className="text-2xl md:text-4xl font-heading font-extrabold tracking-tight">
              “Mais do que construir, realizamos projetos de vida.”
            </h3>
            <p className="text-xs text-brand-concrete leading-relaxed font-sans max-w-lg mx-auto">
              Cada tijolo assentado e cada linha traçada no papel é reflexo da confiança que nossos clientes depositam em nossa equipe. Cuidamos do seu patrimônio como se fosse o nosso.
            </p>
          </div>

          <div className="pt-2 relative z-10">
            <Link href="/contato">
              <Button variant="accent" className="group">
                Fale Conosco para Planejar seu Projeto
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
