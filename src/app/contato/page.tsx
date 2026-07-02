'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Instagram } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { motion, AnimatePresence } from 'framer-motion';

// Form validation schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  phone: z.string().min(10, { message: 'Insira um número de telefone com DDD válido.' }),
  city: z.string().min(2, { message: 'A cidade deve ter pelo menos 2 caracteres.' }),
  serviceType: z.enum([
    'Projetos Arquitetônicos',
    'Construções Residenciais',
    'Regularização de Imóveis',
    'Ampliações e Reformas',
    'Acompanhamento de Obra',
    'Outros'
  ]),
  message: z.string().min(5, { message: 'A mensagem deve ter pelo menos 5 caracteres.' })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const servicesOptions = [
  'Projetos Arquitetônicos',
  'Construções Residenciais',
  'Regularização de Imóveis',
  'Ampliações e Reformas',
  'Acompanhamento de Obra',
  'Outros'
] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
} as const;

export default function ContactPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [targetWaLink, setTargetWaLink] = useState('');
  const [formDataSummary, setFormDataSummary] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      city: '',
      serviceType: 'Projetos Arquitetônicos',
      message: ''
    }
  });

  const selectedService = watch('serviceType');

  // Register the field manually so it validates
  useEffect(() => {
    register('serviceType');
  }, [register]);

  // Handle countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccessModal && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (showSuccessModal && countdown === 0) {
      // Trigger WhatsApp open
      window.open(targetWaLink, '_blank', 'noopener,noreferrer');
      setShowSuccessModal(false);
      reset();
    }
    return () => clearTimeout(timer);
  }, [showSuccessModal, countdown, targetWaLink, reset]);

  const onSubmit = (data: ContactFormData) => {
    // Format message
    const formattedMessage = `Olá, meu nome é ${data.name}.
Gostaria de solicitar um orçamento.

Cidade: ${data.city}
Serviço: ${data.serviceType}
Mensagem: ${data.message}`;

    const waLink = createWhatsAppLink(formattedMessage);
    setTargetWaLink(waLink);
    setFormDataSummary(data);
    setCountdown(3);
    setShowSuccessModal(true);
  };

  const handleManualGo = () => {
    window.open(targetWaLink, '_blank', 'noopener,noreferrer');
    setShowSuccessModal(false);
    reset();
  };

  return (
    <div className="w-full bg-brand-light pb-24 bg-noise-texture">
      {/* 1. Header Banner */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden bg-grid-technical border-b border-brand-concrete-dark/30">
        <div className="absolute inset-0 bg-brand-dark/50" />
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />
        <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-brand-concrete-dark/10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 border border-brand-concrete/30 px-3 py-1 text-[9px] tracking-widest uppercase text-brand-concrete font-heading">
            Canais de Atendimento
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
            Fale Conosco
          </h1>
          <p className="text-xs md:text-sm text-brand-concrete max-w-xl leading-relaxed font-sans">
            Preencha o formulário para enviar os dados do seu projeto direto no nosso WhatsApp ou use as informações de contato abaixo para tirar suas dúvidas.
          </p>
        </div>
      </section>

      {/* 2. Interactive Form & Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Side: Contact Information Cards */}
        <motion.div {...fadeInUp} className="lg:col-span-4 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest block">Informações</span>
            <h2 className="text-xl md:text-2xl font-heading font-extrabold text-brand-dark tracking-tight leading-tight">
              Canais diretos de contato M.A.
            </h2>
            <p className="text-xs text-brand-concrete leading-relaxed font-sans">
              Estamos prontos para atender você de forma rápida. Utilize nossos canais oficiais para falar diretamente com o arquiteto Matheus Amarante.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-4">
            {/* WhatsApp Phone Card */}
            <a 
              href="https://wa.me/5517991417883" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white border border-brand-concrete-light/50 p-6 flex items-start gap-4 hover:border-brand-dark transition-all duration-300 group"
            >
              <div className="p-3 bg-brand-light text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-concrete">WhatsApp</h4>
                <p className="text-sm font-heading font-extrabold text-brand-dark mt-1 group-hover:text-brand-red transition-colors">+55 17 99141-7883</p>
                <p className="text-[10px] text-brand-concrete font-sans mt-0.5">Clique para falar agora</p>
              </div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://instagram.com/m.a.projetos_e_construcoes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white border border-brand-concrete-light/50 p-6 flex items-start gap-4 hover:border-brand-dark transition-all duration-300 group"
            >
              <div className="p-3 bg-brand-light text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-concrete">Instagram</h4>
                <p className="text-sm font-heading font-extrabold text-brand-dark mt-1 group-hover:text-brand-red transition-colors">@m.a.projetos_e_construcoes</p>
                <p className="text-[10px] text-brand-concrete font-sans mt-0.5">Siga nosso perfil e portfólio</p>
              </div>
            </a>

            {/* Hours and Location */}
            <div className="bg-white border border-brand-concrete-light/50 p-6 flex items-start gap-4">
              <div className="p-3 bg-brand-light text-brand-concrete">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-concrete">Atendimento</h4>
                <p className="text-sm font-heading font-bold text-brand-dark mt-1">Segunda a Sexta</p>
                <p className="text-[11px] text-brand-concrete font-sans mt-0.5">Das 08h às 18h</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          {...fadeInUp} 
          className="lg:col-span-8 bg-white border border-brand-concrete-light/50 p-8 shadow-[0_4px_24px_rgba(0,0,0,0.01)]"
        >
          <div className="mb-8 space-y-2">
            <span className="text-[10px] font-heading font-extrabold text-brand-red uppercase tracking-widest">Orçamento Sem Compromisso</span>
            <h3 className="text-xl font-heading font-extrabold text-brand-dark">Enviar mensagem</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-concrete">Seu Nome completo</label>
                <Input
                  type="text"
                  placeholder="Ex: Carlos Silva"
                  error={errors.name?.message}
                  {...register('name')}
                />
              </div>

              {/* Phone field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-concrete">WhatsApp / Telefone</label>
                <Input
                  type="text"
                  placeholder="Ex: (17) 99123-4567"
                  error={errors.phone?.message}
                  {...register('phone')}
                />
              </div>
            </div>

            {/* City field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-concrete">Cidade / Estado</label>
              <Input
                type="text"
                placeholder="Ex: São José do Rio Preto - SP"
                error={errors.city?.message}
                {...register('city')}
              />
            </div>

            {/* Interactive Service Selector Cards */}
            <div className="space-y-3">
              <label className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-concrete block">Selecione o Tipo de Serviço</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {servicesOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setValue('serviceType', option)}
                    className={`p-4 border text-left cursor-pointer transition-all duration-300 rounded-none flex flex-col justify-between aspect-[16/10] ${
                      selectedService === option
                        ? 'border-brand-red bg-brand-red/5 text-brand-red'
                        : 'border-brand-concrete-light/70 bg-transparent text-brand-concrete hover:border-brand-concrete'
                    }`}
                  >
                    <span className="text-[9px] font-heading font-extrabold text-brand-concrete uppercase tracking-widest block mb-2">
                      {option === 'Projetos Arquitetônicos' && 'Fase 01'}
                      {option === 'Construções Residenciais' && 'Fase 02'}
                      {option === 'Regularização de Imóveis' && 'Fase 03'}
                      {option === 'Ampliações e Reformas' && 'Fase 04'}
                      {option === 'Acompanhamento de Obra' && 'Fase 05'}
                      {option === 'Outros' && 'Suporte'}
                    </span>
                    <span className="text-xs font-heading font-bold uppercase tracking-wide leading-tight">
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-concrete">Descreva brevemente sua necessidade</label>
              <Textarea
                placeholder="Conte-nos o que você planeja construir, o tamanho do terreno, se possui projeto pronto ou se precisa regularizar uma edificação..."
                error={errors.message?.message}
                {...register('message')}
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <Button type="submit" variant="accent" size="lg" className="w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4 shrink-0" />
                Gerar mensagem para o WhatsApp
              </Button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* 3. Styled Map Iframe Placeholder */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
        <motion.div 
          {...fadeInUp}
          className="border border-brand-concrete-light/50 p-2 bg-white"
        >
          {/* Map wrapper */}
          <div className="relative w-full aspect-[21/9] bg-brand-dark relative overflow-hidden bg-grid-technical flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-dark/90" />
            <div className="absolute left-[30%] top-0 bottom-0 w-[1px] bg-brand-concrete-dark/15" />
            <div className="absolute left-[70%] top-0 bottom-0 w-[1px] bg-brand-concrete-dark/15" />
            
            <div className="text-center relative z-10 max-w-sm space-y-4 px-6">
              <div className="inline-flex p-3.5 bg-brand-concrete-dark/45 text-brand-red border border-brand-concrete-dark/65 rounded-full mx-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-white text-lg">M.A. Escritório Técnico</h3>
              <p className="text-[10px] text-brand-concrete font-sans leading-relaxed">
                São José do Rio Preto - SP. <br />
                Atendimento presencial mediante agendamento prévio no canteiro ou escritório.
              </p>
              <div className="text-[8px] uppercase tracking-widest text-brand-concrete/40 font-heading">
                [Futura integração de Mapa do Google]
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. PREMIUM SUCCESS COUNTDOWN MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
              onClick={() => setShowSuccessModal(false)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white border border-brand-concrete-light w-full max-w-lg p-8 relative z-10 shadow-2xl rounded-none text-left space-y-6"
            >
              {/* CAD corners */}
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr" />
              <div className="cad-corner-bl" />
              <div className="cad-corner-br" />

              <div className="flex items-start space-x-4">
                <div className="text-brand-red mt-0.5">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl text-brand-dark">Orçamento Validado!</h3>
                  <p className="text-xs text-brand-concrete font-sans">
                    Os dados foram estruturados de acordo com as especificações técnicas da M.A.
                  </p>
                </div>
              </div>

              {/* Message Preview Box */}
              <div className="bg-brand-light border border-brand-concrete-light/50 p-5 space-y-3">
                <span className="text-[9px] font-heading font-extrabold text-brand-concrete uppercase tracking-widest block border-b border-brand-concrete-light/35 pb-2">
                  Pré-visualização da Mensagem
                </span>
                <p className="text-[11px] text-brand-concrete-dark font-sans whitespace-pre-line leading-relaxed italic">
                  {formDataSummary && `Olá, meu nome é ${formDataSummary.name}.
Gostaria de solicitar um orçamento.

Cidade: ${formDataSummary.city}
Serviço: ${formDataSummary.serviceType}
Mensagem: ${formDataSummary.message}`}
                </p>
              </div>

              {/* Countdown Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-brand-concrete-light/30">
                <div className="flex items-center space-x-2 text-xs font-sans text-brand-concrete">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
                  <span>Redirecionando para o WhatsApp em <strong>{countdown}s</strong>...</span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                    onClick={() => setShowSuccessModal(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="accent"
                    size="sm"
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5"
                    onClick={handleManualGo}
                  >
                    Ir Agora
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
