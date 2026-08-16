import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Instagram } from '@/components/ui/Icons';

const quickLinks = [
  { name: 'Início', path: '/' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Contato', path: '/contato' }
];

const servicesLinks = [
  { name: 'Projetos Arquitetônicos', path: '/servicos#projetos-arquitetonicos' },
  { name: 'Construção Civil', path: '/servicos#construcoes-residenciais' },
  { name: 'Regularização de Imóveis', path: '/servicos#regularizacao-de-imoveis' },
  { name: 'Reformas e Ampliações', path: '/servicos#ampliacoes-e-reformas' },
  { name: 'Acompanhamento de Obra', path: '/servicos#acompanhamento-de-obra' }
];

export function Footer() {
  return (
    <footer className="tech-footer-grid relative overflow-hidden bg-brand-dark text-white pt-8 pb-8 border-t border-brand-concrete-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-12 border-b border-brand-concrete-dark/30 font-heading text-[9px] uppercase tracking-[0.2em] text-brand-concrete">
          <div className="flex items-center gap-3">
            <span className="tech-status-dot" />
            <span>Base operacional ativa</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Votuporanga · SP</span>
            <span>DDD 17</span>
            <span>Seg–Sex · 08:00–18:00</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 relative z-10">
        {/* Brand Column */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image 
                src="/images/logo/logo-ma-badge.png"
                alt="M.A. Projetos e Construções" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-[15px] tracking-widest text-white leading-none">M.A.</span>
              <span className="font-heading text-[10px] uppercase tracking-wider text-brand-concrete leading-tight mt-0.5">Projetos & Construções</span>
            </div>
          </div>
          <p className="text-xs text-brand-concrete leading-relaxed font-sans">
            Transformando sonhos em realidade por meio da arquitetura contemporânea e da engenharia civil de alta qualidade.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://instagram.com/m.a.projetos_e_construcoes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-brand-concrete-dark hover:border-brand-red transition-colors duration-300 hover:text-brand-red text-brand-concrete"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/5517991417883" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-brand-concrete-dark hover:border-brand-red transition-colors duration-300 hover:text-brand-red text-brand-concrete"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-heading text-xs uppercase tracking-widest text-brand-concrete mb-6 font-semibold">
            Navegação
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className="text-xs text-brand-concrete hover:text-white transition-colors duration-300 flex items-center group font-sans"
                >
                  <span className="w-1.5 h-[1px] bg-brand-concrete-dark mr-2 group-hover:bg-brand-red group-hover:w-3 transition-all duration-300" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-heading text-xs uppercase tracking-widest text-brand-concrete mb-6 font-semibold">
            Serviços
          </h4>
          <ul className="space-y-3">
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path}
                  className="text-xs text-brand-concrete hover:text-white transition-colors duration-300 flex items-center group font-sans"
                >
                  <span className="w-1.5 h-[1px] bg-brand-concrete-dark mr-2 group-hover:bg-brand-red group-hover:w-3 transition-all duration-300" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="space-y-6">
          <h4 className="font-heading text-xs uppercase tracking-widest text-brand-concrete mb-2 font-semibold">
            Contato
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-brand-red shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs text-white font-sans font-medium">Votuporanga - SP</span>
                <span className="text-[11px] text-brand-concrete font-sans mt-0.5">Atendimento em toda a região do DDD 17</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-brand-red shrink-0" />
              <div className="flex flex-col">
                <a 
                  href="https://wa.me/5517991417883" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-white font-sans font-medium hover:text-brand-red transition-colors flex items-center gap-1"
                >
                  +55 17 99141-7883
                  <ArrowUpRight className="w-3 h-3 text-brand-concrete" />
                </a>
                <span className="text-[11px] text-brand-concrete font-sans mt-0.5">Clique para falar no WhatsApp</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-brand-red shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs text-white font-sans font-medium">Segunda a Sexta</span>
                <span className="text-[11px] text-brand-concrete font-sans mt-0.5">08:00 às 18:00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-brand-concrete-dark/15 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-[11px] text-brand-concrete font-sans">
          &copy; {new Date().getFullYear()} M.A. Projetos e Construções. Todos os direitos reservados.
        </p>
        <a
          href="https://avila.inc"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-[11px] text-brand-concrete hover:text-white font-sans flex items-center gap-1.5 transition-colors"
        >
          Desenvolvido pela <span className="text-white font-medium">Avila Ops Tecnologia</span>
          <ArrowUpRight className="w-3 h-3 text-brand-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </footer>
  );
}
