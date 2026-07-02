'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  Hammer, 
  FileCheck, 
  Maximize, 
  HardHat, 
  ArrowRight, 
  Star, 
  Check, 
  Phone,
  FileText,
  Calculator,
  UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
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
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' }
} as const;

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: '-100px' }
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3); // Take first 3 projects for featured grid
  const whatsappBudgetLink = createWhatsAppLink('Olá Matheus, gostaria de solicitar um orçamento para um projeto residencial.');

  return (
    <div className="w-full bg-noise-texture">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-light bg-grid-technical pt-10 overflow-hidden border-b border-brand-concrete-light/30">
        {/* Technical Layout Lines */}
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-concrete-light/20 hidden lg:block" />
        <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-brand-concrete-light/20 hidden lg:block" />
        <div className="absolute left-0 right-0 top-[20%] h-[1px] bg-brand-concrete-light/20 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 border border-brand-concrete/30 px-3 py-1 text-[10px] tracking-widest uppercase text-brand-concrete font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                Matheus Amarante Arquiteto
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-brand-dark leading-[1.1]">
                Projetos que transformam <br className="hidden md:inline" />
                <span className="text-brand-red">sonhos em realidade.</span>
              </h1>
              <p className="text-sm md:text-base text-brand-concrete max-w-xl leading-relaxed font-sans">
                Arquitetura, construção, regularização de imóveis e acompanhamento completo de obra para você planejar e construir seu patrimônio com total segurança, transparência e alta qualidade.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
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
            </motion.div>

            {/* Quick Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-concrete-light/50"
            >
              <div>
                <span className="font-heading font-extrabold text-lg text-brand-dark">100%</span>
                <p className="text-[10px] text-brand-concrete uppercase tracking-wider font-semibold font-heading mt-1">Projetos Exclusivos</p>
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-brand-dark">Obra</span>
                <p className="text-[10px] text-brand-concrete uppercase tracking-wider font-semibold font-heading mt-1">Acompanhada</p>
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-brand-dark">Suporte</span>
                <p className="text-[10px] text-brand-concrete uppercase tracking-wider font-semibold font-heading mt-1">Especializado</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative cad-corner-container border border-brand-concrete-light/50 p-2 bg-white"
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

      {/* 2. FAiXA DE CREDIBILIDADE */}
      <section className="bg-brand-dark text-white py-10 border-b border-brand-concrete-dark/30 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div {...fadeInUp} className="flex items-center space-x-4">
            <div className="p-3 bg-brand-concrete-dark/30 border border-brand-concrete-dark/50 text-brand-red">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider leading-none">Projetos Residenciais</h3>
              <p className="text-[10px] text-brand-concrete mt-1 font-sans">Arquitetura moderna e personalizada</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="flex items-center space-x-4">
            <div className="p-3 bg-brand-concrete-dark/30 border border-brand-concrete-dark/50 text-brand-red">
              <HardHat className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider leading-none">Obras Acompanhadas</h3>
              <p className="text-[10px] text-brand-concrete mt-1 font-sans">Fidelidade técnica ao projeto</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="flex items-center space-x-4">
            <div className="p-3 bg-brand-concrete-dark/30 border border-brand-concrete-dark/50 text-brand-red">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider leading-none">Regularização de Imóveis</h3>
              <p className="text-[10px] text-brand-concrete mt-1 font-sans">Habite-se e aprovação técnica</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="flex items-center space-x-4">
            <div className="p-3 bg-brand-concrete-dark/30 border border-brand-concrete-dark/50 text-brand-red">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider leading-none">Orçamentos Detalhados</h3>
              <p className="text-[10px] text-brand-concrete mt-1 font-sans">Transparência e planejamento físico</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVIÇOS SECTION */}
      <section className="py-24 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div {...fadeInUp} className="space-y-3">
              <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest">O que fazemos</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark tracking-tight">
                Do projeto à entrega da obra.
              </h2>
            </motion.div>
            <motion.div {...fadeInUp} className="max-w-md">
              <p className="text-xs text-brand-concrete leading-relaxed font-sans">
                Oferecemos soluções completas em construção civil e arquitetura, garantindo que você tenha um único parceiro técnico de confiança em todas as etapas do processo.
              </p>
            </motion.div>
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
                  className="group relative bg-white border border-brand-concrete-light/40 p-8 flex flex-col justify-between hover:border-brand-dark transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                >
                  {/* Decorative Number */}
                  <div className="absolute top-6 right-8 font-heading text-4xl font-extrabold text-brand-concrete-light/20 group-hover:text-brand-red/10 transition-colors">
                    0{index + 1}
                  </div>

                  <div className="space-y-6">
                    <div className="inline-flex p-3 bg-brand-light text-brand-dark group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-lg text-brand-dark group-hover:text-brand-red transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs text-brand-concrete leading-relaxed font-sans">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-brand-concrete-light/30">
                    <Link 
                      href={`/servicos#${service.id}`}
                      className="inline-flex items-center text-xs font-heading font-semibold uppercase tracking-widest text-brand-dark hover:text-brand-red transition-colors group-hover:translate-x-1 transition-transform"
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
            <motion.div {...fadeInUp} className="space-y-3">
              <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest">Portfólio em destaque</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark tracking-tight">
                Nossos últimos projetos.
              </h2>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Link href="/projetos">
                <Button variant="outline">Ver portfólio completo</Button>
              </Link>
            </motion.div>
          </div>

          {/* Editorial Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Big Card (Project 1) */}
            {featuredProjects[0] && (
              <motion.div 
                {...fadeInUp}
                className="lg:col-span-7 group relative overflow-hidden bg-brand-light border border-brand-concrete-light/50 flex flex-col justify-between"
              >
                <Link href={`/projetos/${featuredProjects[0].slug}`} className="block h-full relative">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image 
                      src={featuredProjects[0].mainImage} 
                      alt={featuredProjects[0].title}
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-heading uppercase tracking-widest text-brand-concrete">
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
                    <span className="inline-flex items-center text-xs font-heading font-semibold uppercase tracking-widest text-brand-dark group-hover:text-brand-red transition-colors pt-2">
                      Ver detalhes
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Right Stack (Project 2 and 3) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {featuredProjects.slice(1, 3).map((project) => (
                <motion.div
                  key={project.slug}
                  {...fadeInUp}
                  className="group bg-brand-light border border-brand-concrete-light/50 overflow-hidden flex flex-col md:flex-row h-full"
                >
                  <Link href={`/projetos/${project.slug}`} className="flex flex-col md:flex-row w-full">
                    <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto min-h-[160px] overflow-hidden shrink-0">
                      <Image 
                        src={project.mainImage} 
                        alt={project.title}
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-[9px] font-heading uppercase tracking-widest text-brand-concrete">
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO INSTITUCIONAL */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Institutional Left Visual */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 relative aspect-[5/6] w-full border border-brand-concrete-light/50 p-2 bg-white"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/matheus/images/about/about_house.png" 
                alt="Acompanhamento técnico de obra Matheus Amarante" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Technical Lines */}
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-brand-red" />
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-brand-red" />
          </motion.div>

          {/* Institutional Right Content */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7 space-y-6 lg:pl-6"
          >
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest">Sobre a empresa</span>
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
            
            <div className="pt-4 flex flex-col sm:flex-row gap-6">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-brand-red">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-dark">Qualidade de Materiais</h4>
                  <p className="text-xs text-brand-concrete mt-0.5 font-sans">Especificação técnica criteriosa de alto padrão.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-brand-red">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-dark">Controle Físico-Financeiro</h4>
                  <p className="text-xs text-brand-concrete mt-0.5 font-sans">Evite surpresas ou estouros de custos no orçamento.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/sobre">
                <Button variant="default">Conheça a empresa</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. PROCESSO DE TRABALHO */}
      <section className="py-24 bg-white border-t border-b border-brand-concrete-light/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="max-w-xl mb-16 space-y-3">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest">Nossa Metodologia</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark tracking-tight">
              Como trabalhamos.
            </h2>
            <p className="text-xs text-brand-concrete leading-relaxed font-sans">
              Um passo a passo organizado e transparente para que a jornada de construção seja agradável e segura.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { num: '01', title: 'Conversa inicial', desc: 'Reunião preliminar para alinhar suas necessidades, estilo de vida, orçamento e avaliar as características do terreno.' },
              { num: '02', title: 'Desenvolvimento', desc: 'Criação dos esboços, plantas de layout, maquete 3D fotorealista e aprovação do projeto preliminar com o cliente.' },
              { num: '03', title: 'Orçamento', desc: 'Elaboração do projeto executivo detalhado, cronograma de obra e cotações detalhadas de mão de obra e insumos.' },
              { num: '04', title: 'Execução', desc: 'Início da construção civil ou início do acompanhamento técnico, gerenciando prazos, compras e qualidade dos acabamentos.' },
              { num: '05', title: 'Entrega da obra', desc: 'Limpeza pós-obra, inspeção técnica minuciosa de cada detalhe e entrega oficial das chaves para você morar.' }
            ].map((step, idx) => (
              <motion.div 
                key={step.num}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 relative"
              >
                <div className="font-heading text-5xl font-extrabold text-brand-concrete-light/45">
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-base text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-[11px] text-brand-concrete leading-relaxed font-sans">
                  {step.desc}
                </p>
                {/* Horizontal line connector (desktop only) */}
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] right-[-60%] h-[1px] bg-brand-concrete-light/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS SECTION */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest">Opinião de quem construiu</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark tracking-tight">
              Depoimentos de clientes.
            </h2>
          </div>

          {/* Testimonials 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                {...fadeInUp}
                className="bg-white border border-brand-concrete-light/35 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-brand-concrete transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex space-x-1 text-brand-red">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-xs text-brand-concrete leading-relaxed font-sans italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-concrete-light/30 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-concrete-light flex items-center justify-center font-heading font-bold text-xs text-brand-concrete-dark">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-brand-dark leading-none">{t.name}</h4>
                    <span className="text-[10px] text-brand-concrete font-sans mt-1 block">
                      {t.projectType} &bull; {t.city.split(' - ')[0]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL (DARK WRAP) */}
      <section className="bg-brand-dark text-white py-24 relative overflow-hidden bg-grid-technical">
        {/* Absolute lines */}
        <div className="absolute inset-0 bg-brand-dark/45" />
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />
        <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest">Solicite seu contato</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
              Vamos transformar seu <br />
              projeto em realidade?
            </h2>
            <p className="text-xs md:text-sm text-brand-concrete max-w-xl mx-auto leading-relaxed font-sans">
              Entre em contato agora mesmo com a M.A. Projetos e Construções. Estamos prontos para entender seus planos e viabilizar sua construção com segurança jurídica e excelência técnica.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="flex justify-center pt-2">
            <a 
              href={whatsappBudgetLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="accent" size="lg" className="group font-bold px-8 py-4 gap-2 flex items-center">
                <Phone className="w-4 h-4 fill-current text-white shrink-0" />
                Falar pelo WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
