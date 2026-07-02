'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, Layers, ChevronRight, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Todos', 'Residencial', 'Chácara', 'Reforma', 'Ampliação', 'Comercial'] as const;
type CategoryFilter = typeof categories[number];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full min-h-screen bg-brand-light pb-24">
      {/* 1. Header Banner */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden bg-grid-technical border-b border-brand-concrete-dark/30">
        <div className="absolute inset-0 bg-brand-dark/50" />
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />
        <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 border border-brand-concrete/30 px-3 py-1 text-[9px] tracking-widest uppercase text-brand-concrete font-heading">
            Portfólio de Obras
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
            Nossos Projetos
          </h1>
          <p className="text-xs md:text-sm text-brand-concrete max-w-xl leading-relaxed font-sans">
            Explore nossa galeria de projetos residenciais, reformas estruturais e chácaras de lazer. Linhas contemporâneas integradas à excelência técnica.
          </p>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="bg-white border border-brand-concrete-light/50 p-6 md:p-8 flex flex-col lg:flex-row gap-6 justify-between items-center shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-[10px] font-heading font-bold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-brand-dark text-white border-brand-dark'
                    : 'bg-transparent text-brand-concrete border-brand-concrete-light/60 hover:text-brand-dark hover:border-brand-concrete'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-concrete/50" />
            <Input
              type="text"
              placeholder="Buscar por nome ou cidade..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-2.5"
            />
          </div>
        </div>
      </section>

      {/* 3. Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.slug}
                  className="group bg-white border border-brand-concrete-light/45 overflow-hidden flex flex-col hover:border-brand-dark transition-colors duration-300"
                >
                  <Link href={`/projetos/${project.slug}`} className="flex flex-col h-full">
                    {/* Visual Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-concrete-light/10">
                      <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-brand-dark/85 text-white text-[9px] font-heading tracking-widest px-2 py-0.5 uppercase backdrop-blur-sm">
                        {project.category}
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-brand-concrete">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span className="text-[10px] font-sans font-medium">{project.city}</span>
                        </div>
                        <h3 className="font-heading font-extrabold text-lg text-brand-dark group-hover:text-brand-red transition-colors duration-300 line-clamp-1 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-brand-concrete leading-relaxed font-sans line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Technical metrics */}
                      <div className="pt-4 border-t border-brand-concrete-light/30 flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-brand-concrete">
                          <Layers className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-heading uppercase tracking-wide font-bold">{project.area} m² construídos</span>
                        </div>
                        <span className="inline-flex items-center text-[10px] font-heading font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-red transition-colors">
                          Ver Detalhes
                          <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Empty State
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white border border-brand-concrete-light/50 p-8"
            >
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-concrete/60 mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-dark">Nenhum projeto encontrado</h3>
              <p className="text-xs text-brand-concrete max-w-sm mx-auto mt-2 font-sans">
                Não localizamos nenhum projeto correspondente aos filtros aplicados. Tente buscar por outros termos ou limpar os filtros.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-6"
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                }}
              >
                Limpar filtros e busca
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
