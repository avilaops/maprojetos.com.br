'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  HardHat, 
  FileCheck, 
  Calculator, 
  ArrowRight, 
  Check, 
  Star,
  Maximize2,
  Hammer,
  ChevronRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { motion } from 'framer-motion';

// Icon Map for Services
const iconMap: Record<string, React.ComponentType<any>> = {
  Compass,
  Hammer,
  FileCheck,
  Maximize2,
  HardHat
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' }
} as const;

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08
    }
  },
  viewport: { once: true, margin: '-100px' }
};

const methodologySteps = [
  { title: 'Conversa Inicial', desc: 'Reunião preliminar para alinhar suas necessidades, estilo de vida, orçamento e avaliar o terreno.' },
  { title: 'Estudo & Desenvolvimento', desc: 'Criação dos esboços, plantas de layout, maquete 3D fotorealista e aprovação do projeto preliminar.' },
  { title: 'Projeto Executivo & Custos', desc: 'Elaboração das especificações técnicas detalhadas, cronograma físico e cotação de insumos.' },
  { title: 'Construção & Acompanhamento', desc: 'Início da construção civil ou início das vistorias técnicas periódicas para assegurar conformidade e qualidade.' },
  { title: 'Entrega da Obra', desc: 'Limpeza minuciosa pós-obra, inspeção técnica detalhada de acabamentos e entrega oficial das chaves.' }
] as const;

export default function Home() {
  const featuredProjects = projects.slice(0, 3); // Take first 3 projects for featured grid
  const whatsappBudgetLink = createWhatsAppLink('Olá Matheus, gostaria de solicitar um orçamento para um projeto residencial.');

  return (
    <div className="w-full bg-noise-texture">
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-light bg-grid-technical pt-16 pb-24 overflow-hidden border-b border-brand-concrete-light/35">
        {/* Technical Layout Lines */}
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-concrete-light/20 hidden lg:block" />
        <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-brand-concrete-light/20 hidden lg:block" />
        <div className="absolute left-0 right-0 top-[20%] h-[1px] bg-brand-concrete-light/20 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="space-y-5">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 border border-brand-concrete-light/75 px-3 py-1 bg-white shadow-sm text-[9px] tracking-widest uppercase text-brand-concrete font-heading font-extrabold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                Matheus Amarante Arquiteto
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-brand-dark leading-[1.15]">
                Projetos que transformam <br className="hidden md:inline" />
                <span className="text-brand-red">sonhos em realidade.</span>
              </h1>
              
              <p className="text-xs md:text-sm text-brand-concrete/95 max-w-xl leading-relaxed font-sans">
                Arquitetura, construção, regularização de imóveis e acompanhamento completo de obra para você planejar e construir seu patrimônio com total segurança, transparência e alta qualidade.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contato">
                <Button variant="accent" size="lg" className="group">
                  Solicitar orçamento
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/projetos">
                <Button variant="outline" size="lg">
                  Conhecer projetos
                </Button>
              </Link>
            </div>

            {/* Quick Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-concrete-light/60">
              <div>
                <span className="font-heading font-extrabold text-xl text-brand-dark block">100%</span>
                <p className="text-[9px] text-brand-concrete uppercase tracking-wider font-extrabold font-heading mt-1">Projetos Exclusivos</p>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-brand-dark block">Obra</span>
                <p className="text-[9px] text-brand-concrete uppercase tracking-wider font-extrabold font-heading mt-1">Acompanhada</p>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-brand-dark block">Suporte</span>
                <p className="text-[9px] text-brand-concrete uppercase tracking-wider font-extrabold font-heading mt-1">Especializado</p>
              </div>
            </div>
          </div>

          {/* Hero Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative cad-corner-container border border-brand-concrete-light/50 p-2 bg-white shadow-sm"
          >
            {/* CAD Corner Ticks */}
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div className="image-zoom-container relative aspect-[4/3] w-full bg-brand-concrete-light/10">
              <Image 
                src="/matheus/images/hero/house.png" 
                alt="Fachada Contemporânea M.A. Projetos e Construções" 
                fill 
                className="image-zoom-img object-cover"
                priority
              />
              {/* Technical HUD Overlay */}
              <div className="absolute top-4 left-4 bg-brand-dark/85 text-white text-[9px] font-heading tracking-widest px-2.5 py-1 uppercase backdrop-blur-sm">
                Escala 1 : 50
              </div>
              <div className="absolute bottom-4 right-4 bg-brand-dark/85 text-white text-[9px] font-heading tracking-widest px-2.5 py-1 uppercase backdrop-blur-sm">
                LAT: 20° 49' 11" S | LONG: 49° 22' 46" W
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FAIXA DE CREDIBILIDADE */}
      <section className="bg-brand-dark text-white py-12 border-b border-brand-concrete-dark/30 relative overflow-hidden bg-grid-technical">
        <div className="absolute inset-0 bg-brand-dark/45" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="flex items-center space-x-4 border border-brand-concrete-dark/30 p-4 bg-brand-dark/30 backdrop-blur-sm">
            <div className="p-3 bg-brand-concrete-dark/45 border border-brand-concrete-dark/70 text-brand-red">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider leading-none">Projetos Residenciais</h3>
              <p className="text-[10px] text-brand-concrete mt-1 font-sans">Arquitetura moderna e sob medida</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 border border-brand-concrete-dark/30 p-4 bg-brand-dark/30 backdrop-blur-sm">
            <div className="p-3 bg-brand-concrete-dark/45 border border-brand-concrete-dark/70 text-brand-red">
              <HardHat className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider leading-none">Obras Acompanhadas</h3>
              <p className="text-[10px] text-brand-concrete mt-1 font-sans">Fidelidade técnica ao projeto</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 border border-brand-concrete-dark/30 p-4 bg-brand-dark/30 backdrop-blur-sm">
            <div className="p-3 bg-brand-concrete-dark/45 border border-brand-concrete-dark/70 text-brand-red">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider leading-none">Regularizações</h3>
              <p className="text-[10px] text-brand-concrete mt-1 font-sans">Habite-se e aprovação municipal</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 border border-brand-concrete-dark/30 p-4 bg-brand-dark/30 backdrop-blur-sm">
            <div className="p-3 bg-brand-concrete-dark/45 border border-brand-concrete-dark/70 text-brand-red">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider leading-none">Custos Controlados</h3>
              <p className="text-[10px] text-brand-concrete mt-1 font-sans">Transparência e orçamento realista</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS SECTION */}
      <section className="py-24 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest block">O que fazemos</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark tracking-tight">
                Do projeto à entrega da obra.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-xs text-brand-concrete leading-relaxed font-sans">
                Oferecemos soluções completas em construção civil e arquitetura, garantindo que você tenha um único parceiro técnico de confiança em todas as etapas do processo.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComp = iconMap[service.iconName] || Compass;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="group relative bg-white border border-brand-concrete-light/45 p-8 flex flex-col justify-between hover:border-brand-dark transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] cad-corner-container"
                >
                  {/* CAD Corners */}
                  <div className="cad-corner-tl" />
                  <div className="cad-corner-tr" />
                  <div className="cad-corner-bl" />
                  <div className="cad-corner-br" />

                  {/* Decorative Number */}
                  <div className="absolute top-6 right-8 font-heading text-4xl font-extrabold text-brand-concrete-light/20 group-hover:text-brand-red/10 transition-colors">
                    0{index + 1}
                  </div>

                  <div className="space-y-6">
                    <div className="inline-flex p-3.5 bg-brand-light text-brand-dark group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-2.5">
                      <h3 className="font-heading font-bold text-lg text-brand-dark group-hover:text-brand-red transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs text-brand-concrete leading-relaxed font-sans">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-concrete-light/30">
                    <Link 
                      href={`/servicos#${service.id}`}
                      className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-widest text-brand-dark hover:text-brand-red transition-colors group-hover:translate-x-1 transition-transform"
                    >
                      Saiba Mais
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. PROJETOS EM DESTAQUE (EDITORIAL GRID) */}
      <section className="py-24 bg-white border-t border-b border-brand-concrete-light/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest block">Portfólio em destaque</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark tracking-tight">
                Nossos últimos projetos.
              </h2>
            </div>
            <div>
              <Link href="/projetos">
                <Button variant="outline">Ver portfólio completo</Button>
              </Link>
            </div>
          </div>

          {/* Editorial Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Big Card (Project 1) */}
            {featuredProjects[0] && (
              <div 
                className="lg:col-span-7 group relative overflow-hidden bg-brand-light border border-brand-concrete-light/45 flex flex-col justify-between cad-corner-container p-2 bg-white"
              >
                <div className="cad-corner-tl" />
                <div className="cad-corner-tr" />
                <div className="cad-corner-bl" />
                <div className="cad-corner-br" />

                <Link href={`/projetos/${featuredProjects[0].slug}`} className="block h-full relative">
                  <div className="image-zoom-container relative aspect-[16/10] w-full">
                    <Image 
                      src={featuredProjects[0].mainImage} 
                      alt={featuredProjects[0].title}
                      fill 
                      className="image-zoom-img object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 text-[9px] font-heading uppercase tracking-widest text-brand-concrete font-bold">
                      <span>{featuredProjects[0].category}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      <span>{featuredProjects[0].area} m²</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl text-brand-dark group-hover:text-brand-red transition-colors">
                      {featuredProjects[0].title}
                    </h3>
                    <p className="text-xs text-brand-concrete leading-relaxed font-sans max-w-xl">
                      {featuredProjects[0].description}
                    </p>
                    <span className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-red transition-colors pt-2">
                      Ver detalhes
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </span>
                  </div>
                </Link>
              </div>
            )}

            {/* Right Stack (Project 2 and 3) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {featuredProjects.slice(1, 3).map((project) => (
                <div
                  key={project.slug}
                  className="group bg-brand-light border border-brand-concrete-light/45 overflow-hidden flex flex-col md:flex-row h-full cad-corner-container p-1.5 bg-white"
                >
                  <div className="cad-corner-tl" />
                  <div className="cad-corner-tr" />
                  <div className="cad-corner-bl" />
                  <div className="cad-corner-br" />

                  <Link href={`/projetos/${project.slug}`} className="flex flex-col md:flex-row w-full h-full">
                    <div className="image-zoom-container relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto min-h-[160px]">
                      <Image 
                        src={project.mainImage} 
                        alt={project.title}
                        fill 
                        className="image-zoom-img object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-[9px] font-heading uppercase tracking-widest text-brand-concrete font-bold">
                          <span>{project.category}</span>
                          <span className="w-1 h-1 rounded-full bg-brand-red" />
                          <span>{project.area} m²</span>
                        </div>
                        <h4 className="font-heading font-bold text-base text-brand-dark group-hover:text-brand-red transition-colors leading-tight">
                          {project.title}
                        </h4>
                        <p className="text-[11px] text-brand-concrete leading-relaxed line-clamp-2 font-sans">
                          {project.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center text-[10px] font-heading font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-red transition-colors pt-4">
                        Ver detalhes
                        <ArrowRight className="w-3 h-3 ml-1.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO INSTITUCIONAL */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Institutional Left Visual */}
          <div 
            className="lg:col-span-5 relative cad-corner-container border border-brand-concrete-light/50 p-2 bg-white"
          >
            {/* CAD Corners */}
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div className="image-zoom-container relative aspect-[5/6] w-full bg-brand-concrete-light/10">
              <Image 
                src="/matheus/images/about/about_house.png" 
                alt="Acompanhamento técnico de obra Matheus Amarante" 
                fill 
                className="image-zoom-img object-cover"
              />
            </div>
          </div>

          {/* Institutional Right Content */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest block">Sobre a empresa</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark tracking-tight leading-tight">
              Construir bem começa <br className="hidden md:inline" />
              com um bom projeto.
            </h2>
            <p className="text-sm text-brand-concrete leading-relaxed font-sans">
              A **M.A. Projetos e Construções**, liderada pelo arquiteto Matheus Amarante, une planejamento minucioso, soluções estéticas arrojadas e execução impecável. Acreditamos que a boa arquitetura não apenas embeleza a cidade, mas melhora significativamente a qualidade de vida de seus moradores.
            </p>
            <p className="text-sm text-brand-concrete leading-relaxed font-sans">
              Nosso compromisso é com o rigor técnico, cumprimento de prazos, controle de custos e total fidelidade aos desejos de nossos clientes. Atuamos desde a concepção do primeiro rascunho em planta até a colocação do último revestimento no canteiro de obras.
            </p>
            
            {/* Specifications highlights */}
            <div className="pt-4 flex flex-col sm:flex-row gap-6">
              <div className="flex items-start space-x-3 border border-brand-concrete-light/40 p-4 bg-white/50 w-full">
                <div className="mt-1 text-brand-red">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-dark">Qualidade de Materiais</h4>
                  <p className="text-[11px] text-brand-concrete mt-0.5 font-sans leading-snug">Especificação técnica criteriosa de alto padrão.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 border border-brand-concrete-light/40 p-4 bg-white/50 w-full">
                <div className="mt-1 text-brand-red">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-dark">Controle Financeiro</h4>
                  <p className="text-[11px] text-brand-concrete mt-0.5 font-sans leading-snug">Previsibilidade física de custos sem surpresas.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/sobre">
                <Button variant="default">Conheça a empresa</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROCESSO DE TRABALHO (FLOWCHART TIMELINE) */}
      <section className="py-24 bg-white border-t border-b border-brand-concrete-light/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="max-w-xl mb-16 space-y-3">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest block">Nossa Metodologia</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark tracking-tight">
              Como trabalhamos.
            </h2>
            <p className="text-xs text-brand-concrete leading-relaxed font-sans">
              Um passo a passo organizado e transparente para que a jornada de construção seja agradável e segura.
            </p>
          </div>

          {/* Flowchart Timeline */}
          <div className="relative pt-6">
            {/* Horizontal Line on Desktop */}
            <div className="absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-brand-concrete-light/40 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
              {methodologySteps.map((step, idx) => (
                <div key={idx} className="space-y-4 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Circle Step indicator */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-concrete-light flex items-center justify-center font-heading text-base font-extrabold text-brand-concrete shadow-sm transition-all duration-300 group-hover:border-brand-red group-hover:text-brand-red relative">
                    0{idx + 1}
                    <div className="absolute bottom-[-4px] left-[50%] -translate-x-1/2 w-2 h-2 rounded-full bg-brand-red/70 hidden lg:block" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-sm text-brand-dark">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-brand-concrete leading-relaxed font-sans max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS DE CLIENTES */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest block">Opinião de quem construiu</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark tracking-tight">
              Depoimentos de clientes.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white border border-brand-concrete-light/45 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-brand-concrete transition-all duration-500 cad-corner-container"
              >
                {/* CAD Corners */}
                <div className="cad-corner-tl" />
                <div className="cad-corner-tr" />
                <div className="cad-corner-bl" />
                <div className="cad-corner-br" />

                <div className="space-y-6">
                  {/* Stars block */}
                  <div className="flex space-x-1 text-brand-red">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xs text-brand-concrete leading-relaxed font-sans italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-concrete-light/30 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-concrete-light flex items-center justify-center font-heading font-bold text-xs text-brand-concrete-dark">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-brand-dark leading-none">
                      {t.name}
                    </h4>
                    <span className="text-[9px] text-brand-concrete font-sans mt-1.5 block">
                      {t.projectType} • {t.city}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CALL TO ACTION (DARK BLUEPRINT VIEW) */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden bg-grid-technical border-t border-brand-concrete-dark/30">
        <div className="absolute inset-0 bg-brand-dark/90" />
        
        {/* CAD Layout margins */}
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/15 hidden lg:block" />
        <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/15 hidden lg:block" />

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 space-y-8 cad-corner-container p-12 border border-brand-concrete-dark/45 bg-brand-dark/40 backdrop-blur-sm">
          {/* Ticks */}
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr" />
          <div className="cad-corner-bl" />
          <div className="cad-corner-br" />

          <div className="space-y-4">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest block">Solicite seu contato</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
              Vamos transformar seu <br className="hidden md:inline" />
              projeto em realidade?
            </h2>
            <p className="text-xs md:text-sm text-brand-concrete max-w-xl mx-auto leading-relaxed font-sans">
              Entre em contato agora mesmo com a M.A. Projetos e Construções. Estamos prontos para entender seus planos e viabilizar sua construção com segurança jurídica e excelência técnica.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contato">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Fale Conosco
              </Button>
            </Link>
            <a 
              href="https://wa.me/5517991417883" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="lg" className="w-full text-white border-white/30 hover:bg-white hover:text-brand-dark">
                WhatsApp Direto
              </Button>
            </a>
          </div>

          <div className="text-[8px] uppercase tracking-widest text-brand-concrete/30 font-heading">
            M.A. PROJETOS E CONSTRUÇÕES © RIO PRETO / SP
          </div>
        </div>
      </section>
    </div>
  );
}
