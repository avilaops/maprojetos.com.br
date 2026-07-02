import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Layers, 
  Bookmark, 
  Phone, 
  Check,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const statusSteps = [
  { key: 'estudo', label: 'Estudo Preliminar' },
  { key: 'anteprojeto', label: 'Anteprojeto' },
  { key: 'executivo', label: 'Projeto Executivo' },
  { key: 'construcao', label: 'Construção Civil' },
  { key: 'concluido', label: 'Concluído' }
] as const;

// Generate static params for GitHub Pages static export
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  // Find status step index
  const activeStepIdx = statusSteps.findIndex(step => step.key === project.status);

  // Generate WhatsApp message and link
  const waMessage = `Olá, conheci o projeto "${project.title}" no seu site e gostaria de solicitar um orçamento para um projeto parecido.`;
  const waLink = createWhatsAppLink(waMessage);

  // Get related projects
  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="w-full bg-brand-light min-h-screen pb-24 bg-noise-texture">
      {/* 1. Header Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-4 flex justify-between items-center">
        <Link 
          href="/projetos" 
          className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-widest text-brand-concrete hover:text-brand-dark transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Voltar para Projetos
        </Link>
        <span className="text-[10px] font-heading text-brand-concrete-light/80 hidden sm:block tracking-widest">
          PROSPEC / RIO PRETO / SP
        </span>
      </div>

      {/* 2. Project Main Showcase & Metadata Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Large Hero Image & Gallery */}
        <div className="lg:col-span-8 space-y-6">
          <div className="cad-corner-container border border-brand-concrete-light/50 p-2 bg-white shadow-sm">
            {/* CAD corners */}
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div className="image-zoom-container relative aspect-[16/10] w-full bg-brand-concrete-light/10">
              <Image 
                src={project.mainImage} 
                alt={project.title} 
                fill 
                className="image-zoom-img object-cover"
                priority
              />
            </div>
            {/* Technical HUD Overlay */}
            <div className="absolute top-4 left-4 bg-brand-dark/85 text-white text-[9px] font-heading tracking-widest px-2.5 py-1 uppercase backdrop-blur-sm">
              M.A. PROJETOS - RENDER COMERCIAL
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-3 gap-4">
            {project.images.map((imgUrl, idx) => (
              <div 
                key={idx} 
                className="relative aspect-[4/3] w-full border border-brand-concrete-light/50 p-1 bg-white hover:border-brand-dark transition-colors duration-300"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src={imgUrl} 
                    alt={`${project.title} - Vista ${idx + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Quick Specs Sidebar */}
        <div className="lg:col-span-4 bg-white border border-brand-concrete-light/50 p-8 space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] relative">
          <div className="space-y-2">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest">Ficha Técnica</span>
            <h1 className="text-2xl font-heading font-extrabold text-brand-dark leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Quick Metrics */}
          <div className="border-t border-b border-brand-concrete-light/40 py-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-sans">
              <span className="text-brand-concrete flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-brand-red shrink-0" />
                Categoria
              </span>
              <span className="font-heading font-bold text-brand-dark">{project.category}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-sans">
              <span className="text-brand-concrete flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                Cidade
              </span>
              <span className="font-heading font-bold text-brand-dark text-right">{project.city}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-sans">
              <span className="text-brand-concrete flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-red shrink-0" />
                Área Construída
              </span>
              <span className="font-heading font-bold text-brand-dark">{project.area} m²</span>
            </div>
            <div className="flex items-center justify-between text-xs font-sans">
              <span className="text-brand-concrete flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-red shrink-0" />
                Ano do Projeto
              </span>
              <span className="font-heading font-bold text-brand-dark">{project.year}</span>
            </div>
          </div>

          {/* Materials Section */}
          <div className="space-y-2.5 pb-2">
            <h4 className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-brand-concrete">
              Materiais Predominantes
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.materials.map((material, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 bg-brand-light text-[10px] font-sans font-medium text-brand-concrete-dark border border-brand-concrete-light/45"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="pt-2">
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full block"
            >
              <Button variant="accent" className="w-full flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-current shrink-0" />
                Solicitar orçamento
              </Button>
            </a>
            <p className="text-[10px] text-center text-brand-concrete font-sans mt-3">
              Fale diretamente com Matheus Amarante pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* 3. Project Phase Timeline (Status Tracker) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="bg-white border border-brand-concrete-light/50 p-8 shadow-[0_4px_24px_rgba(0,0,0,0.01)] space-y-6">
          <div className="flex items-center gap-2 text-brand-red">
            <TrendingUp className="w-4 h-4" />
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest leading-none">Status / Etapa do Projeto</h3>
          </div>
          
          {/* Progress Timeline Row */}
          <div className="relative pt-4 pb-2">
            {/* Background Line */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-brand-concrete-light/50 -translate-y-1/2" />
            
            {/* Highlight Line */}
            <div 
              className="absolute top-[28px] left-[5%] h-[2px] bg-brand-red -translate-y-1/2 transition-all duration-500"
              style={{ width: `${(activeStepIdx / (statusSteps.length - 1)) * 90}%` }}
            />

            {/* Nodes */}
            <div className="relative flex justify-between items-center w-full">
              {statusSteps.map((step, idx) => {
                const isCompleted = idx < activeStepIdx;
                const isActive = idx === activeStepIdx;
                
                return (
                  <div key={step.key} className="flex flex-col items-center z-10 shrink-0 w-24">
                    {/* Circle Indicator */}
                    <div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                        isActive 
                          ? 'bg-brand-red border-brand-red text-white scale-110 shadow-sm'
                          : isCompleted
                            ? 'bg-brand-dark border-brand-dark text-white'
                            : 'bg-white border-brand-concrete-light text-brand-concrete'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <span className="text-[9px] font-heading font-bold">{idx + 1}</span>
                      )}
                    </div>
                    {/* Label */}
                    <span 
                      className={`text-[9px] font-heading uppercase tracking-wider text-center mt-3 font-semibold ${
                        isActive 
                          ? 'text-brand-red font-bold' 
                          : isCompleted 
                            ? 'text-brand-dark' 
                            : 'text-brand-concrete'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detail Content Sections */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left main text details */}
        <div className="lg:col-span-8 space-y-10">
          {/* General Description */}
          <div className="space-y-4 bg-white border border-brand-concrete-light/35 p-8">
            <h2 className="font-heading font-bold text-xl text-brand-dark">Sobre o Projeto</h2>
            <p className="text-xs md:text-sm text-brand-concrete leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 bg-white border border-brand-concrete-light/35 p-8">
              <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-wider block">O Problema</span>
              <h3 className="font-heading font-bold text-lg text-brand-dark">O Desafio</h3>
              <p className="text-xs text-brand-concrete leading-relaxed font-sans">
                {project.challenge}
              </p>
            </div>
            <div className="space-y-3 bg-white border border-brand-concrete-light/35 p-8">
              <span className="text-[10px] font-heading font-extrabold text-[#25D366] uppercase tracking-wider block">Nossa Proposta</span>
              <h3 className="font-heading font-bold text-lg text-brand-dark">A Solução</h3>
              <p className="text-xs text-brand-concrete leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Right side highlights */}
        <div className="lg:col-span-4 bg-white border border-brand-concrete-light/35 p-8 space-y-4">
          <h3 className="font-heading font-bold text-lg text-brand-dark mb-4">Destaques do Projeto</h3>
          <ul className="space-y-4">
            {project.highlights.map((h, index) => (
              <li key={index} className="flex items-start space-x-3 text-xs text-brand-concrete font-sans">
                <span className="mt-0.5 p-0.5 bg-brand-red/10 text-brand-red shrink-0 rounded-full">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Related Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 border-t border-brand-concrete-light/30 pt-16">
        <h2 className="font-heading font-extrabold text-2xl text-brand-dark mb-10 text-center md:text-left">
          Outros Projetos Recentes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((rp) => (
            <div 
              key={rp.slug}
              className="group bg-white border border-brand-concrete-light/45 overflow-hidden flex flex-col hover:border-brand-dark transition-colors duration-300"
            >
              <Link href={`/projetos/${rp.slug}`} className="flex flex-col h-full">
                <div className="image-zoom-container relative aspect-[4/3] w-full overflow-hidden">
                  <Image 
                    src={rp.mainImage} 
                    alt={rp.title} 
                    fill 
                    className="image-zoom-img object-cover"
                  />
                </div>
                <div className="p-6 flex flex-grow flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[9px] font-heading uppercase tracking-widest text-brand-concrete block">{rp.category}</span>
                    <h3 className="font-heading font-bold text-base text-brand-dark group-hover:text-brand-red transition-colors leading-tight line-clamp-1">
                      {rp.title}
                    </h3>
                    <p className="text-[11px] text-brand-concrete line-clamp-2 leading-relaxed font-sans">
                      {rp.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center text-[10px] font-heading font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-red transition-colors pt-4">
                    Ver Detalhes
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
