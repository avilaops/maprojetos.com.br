"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Início', path: '/' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Contato', path: '/contato' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    let cleanPath = pathname || '/';

    // Normalize trailing slashes
    if (cleanPath.endsWith('/') && cleanPath !== '/') {
      cleanPath = cleanPath.slice(0, -1);
    }
    
    const targetPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
    
    return cleanPath === targetPath;
  };

  return (
    <>
      <header
        className={cn(
          'tech-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
          scrolled 
            ? 'glass-header py-3 shadow-[0_4px_30px_rgba(0,0,0,0.02)]' 
            : 'glass-header py-5 border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Wordmark 2,4:1 — o slot é mais largo que alto para a marca não encolher */}
            <div className="relative w-16 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/logo/logo.png"
                alt="M.A. Projetos e Construções" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-[15px] tracking-widest text-brand-dark leading-none">M.A.</span>
              <span className="font-heading text-[10px] uppercase tracking-wider text-brand-concrete leading-tight mt-0.5">Projetos & Construções</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  'font-heading text-xs uppercase tracking-widest transition-all duration-300 hover:text-brand-red relative py-1.5',
                  isActive(item.path) 
                    ? 'text-brand-red font-semibold' 
                    : 'text-brand-dark/80'
                )}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div 
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <Link href="/contato">
              <Button variant="default" size="sm" className="group">
                Solicitar Orçamento
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Hamburger button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-dark hover:text-brand-red transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Sheet) Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-brand-light shadow-2xl z-50 p-8 flex flex-col justify-between md:hidden border-l border-brand-concrete-light/35"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-10">
                      <Image
                        src="/images/logo/logo.png"
                        alt="M.A." 
                        fill 
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm tracking-widest text-brand-dark">M.A.</span>
                      <p className="font-heading text-[8px] uppercase tracking-wider text-brand-concrete">Projetos & Construções</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-brand-dark hover:text-brand-red transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navItems.map((item, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={item.path}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'font-heading text-sm uppercase tracking-widest block py-2 border-b border-brand-concrete-light/20 transition-all duration-300',
                          isActive(item.path) 
                            ? 'text-brand-red font-bold pl-2 border-brand-red/50' 
                            : 'text-brand-dark/80 hover:pl-2 hover:text-brand-red'
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <Link href="/contato" className="w-full">
                  <Button variant="default" className="w-full text-center py-4">
                    Solicitar Orçamento
                  </Button>
                </Link>
                <a 
                  href="https://wa.me/5517991417883" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs font-sans text-brand-concrete hover:text-brand-red transition-colors"
                >
                  Falar no WhatsApp: +55 17 99141-7883
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
