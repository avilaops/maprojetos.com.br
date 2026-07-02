export interface Testimonial {
  id: string;
  name: string;
  projectType: string;
  city: string;
  comment: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'rodrigo-silva',
    name: 'Rodrigo Silva',
    projectType: 'Residência Contemporânea',
    city: 'São José do Rio Preto - SP',
    comment: 'O Matheus superou todas as nossas expectativas. Ele conseguiu captar exatamente o estilo de vida da nossa família e traduzir em um projeto moderno, integrado e extremamente funcional. O acompanhamento da obra nos deu total tranquilidade.',
    rating: 5
  },
  {
    id: 'patricia-andre',
    name: 'Patrícia & André',
    projectType: 'Chácara Alto Padrão',
    city: 'Mirassol - SP',
    comment: 'Construir nossa chácara de lazer parecia um desafio enorme, mas com a M.A. Projetos e Construções foi um processo suave. O cronograma foi seguido à risca e o acabamento final ficou impecável. Indicamos de olhos fechados!',
    rating: 5
  },
  {
    id: 'carlos-eduardo',
    name: 'Carlos Eduardo',
    projectType: 'Reforma de Espaço Gourmet',
    city: 'Catanduva - SP',
    comment: 'Precisava de uma reforma rápida e legalizada. O Matheus resolveu toda a papelada na prefeitura e executou a obra com maestria. Nosso espaço gourmet virou o ponto principal de encontros da casa. Excelente profissional.',
    rating: 5
  }
];
