import { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'projetos-arquitetonicos',
    title: 'Projetos Arquitetônicos',
    shortDescription: 'Criação de projetos residenciais e comerciais modernos, funcionais e totalmente personalizados.',
    description: 'Desenvolvemos projetos arquitetônicos exclusivos que unem estética contemporânea, funcionalidade e conforto. Cada projeto é pensado sob medida para as necessidades do cliente, respeitando as características do terreno, a incidência solar e o orçamento disponível.',
    iconName: 'Compass',
    image: '/matheus/images/projects/project1.png',
    benefits: [
      'Visualização em 3D realista antes do início da obra',
      'Aproveitamento máximo da iluminação e ventilação naturais',
      'Layouts integrados e otimizados para o dia a dia',
      'Detalhamento executivo completo para evitar erros de execução'
    ],
    indicatedFor: [
      'Quem quer construir a casa própria do zero',
      'Investidores que buscam valorizar imóveis para venda',
      'Empresas que necessitam de sedes ou escritórios funcionais e modernos'
    ],
    ctaText: 'Solicitar projeto personalizado'
  },
  {
    id: 'construcoes-residenciais',
    title: 'Construções Residenciais',
    shortDescription: 'Construção civil de alto padrão, do alicerce à entrega das chaves, com foco em qualidade e prazo.',
    description: 'Executamos sua obra com equipes experientes, materiais selecionados e um controle de qualidade rigoroso. Cuidamos de todo o processo de construção, garantindo que o que foi projetado seja fielmente executado na realidade, dentro do prazo e orçamento planejados.',
    iconName: 'Hammer',
    image: '/matheus/images/projects/project2.png',
    benefits: [
      'Cronograma físico-financeiro detalhado e transparente',
      'Mão de obra qualificada e especializada em acabamentos finos',
      'Gestão de compras e orçamentos otimizados de materiais',
      'Segurança jurídica com contratos claros e relatórios periódicos'
    ],
    indicatedFor: [
      'Quem quer construir sem dor de cabeça ou preocupações diárias',
      'Proprietários de terrenos em condomínios fechados ou chácaras',
      'Quem exige alto padrão de acabamento e fidelidade ao projeto'
    ],
    ctaText: 'Solicitar orçamento de construção'
  },
  {
    id: 'regularizacao-de-imoveis',
    title: 'Regularização de Imóveis',
    shortDescription: 'Adequação legal de imóveis junto à Prefeitura, Cartório de Imóveis e órgãos competentes.',
    description: 'Regularizamos sua situação imobiliária perante os órgãos públicos municipais e estaduais. Elaboramos projetos de regularização, laudos técnicos, habite-se, retificação de áreas e averbação de construções na matrícula do imóvel.',
    iconName: 'FileCheck',
    image: '/matheus/images/projects/project6.png',
    benefits: [
      'Valorização imediata do imóvel no mercado imobiliário',
      'Possibilidade de venda do imóvel através de financiamento bancário',
      'Evita multas e penalidades aplicadas pela fiscalização municipal',
      'Segurança patrimonial definitiva para transferência ou herança'
    ],
    indicatedFor: [
      'Proprietários com construções antigas não averbadas na matrícula',
      'Quem comprou ou herdou imóveis com pendências cadastrais',
      'Quem realizou ampliações na casa sem projeto aprovado na Prefeitura'
    ],
    ctaText: 'Regularizar meu imóvel'
  },
  {
    id: 'ampliacoes-e-reformas',
    title: 'Ampliações e Reformas',
    shortDescription: 'Modernização e expansão de espaços existentes para atender às novas necessidades da sua família.',
    description: 'Planejamos e executamos reformas e ampliações residenciais com sensibilidade e técnica. Integramos os novos espaços à estrutura existente de forma harmoniosa, melhorando a circulação, iluminação e agregando novas funcionalidades à edificação.',
    iconName: 'Maximize',
    image: '/matheus/images/projects/project4.png',
    benefits: [
      'Renovação total da estética e revestimentos do imóvel',
      'Integração de ambientes integrando cozinha, sala e área gourmet',
      'Análise estrutural prévia garantindo total segurança na obra',
      'Menor impacto e transtorno possível durante o andamento da reforma'
    ],
    indicatedFor: [
      'Famílias que cresceram e precisam de mais espaço (quartos, varandas)',
      'Proprietários de casas antigas que buscam modernização (retrofits)',
      'Quem deseja criar um novo espaço de lazer ou home office'
    ],
    ctaText: 'Planejar minha reforma'
  },
  {
    id: 'acompanhamento-de-obra',
    title: 'Acompanhamento de Obra',
    shortDescription: 'Visitas técnicas periódicas para fiscalização e controle de qualidade dos serviços executados.',
    description: 'Prestamos assessoria técnica direta na sua obra através de visitas periódicas. Supervisionamos o trabalho da equipe de construção, tiramos dúvidas de projetos, conferimos níveis, prumos, paginações de pisos e controlamos a qualidade de cada etapa da edificação.',
    iconName: 'HardHat',
    image: '/matheus/images/projects/project6.png',
    benefits: [
      'Garantia de fidelidade técnica ao projeto executivo aprovado',
      'Resolução ágil de dúvidas ou imprevistos técnicos diretamente no canteiro',
      'Evita desperdício de materiais por erros de execução ou retrabalhos',
      'Laudos e relatórios de acompanhamento assinados pelo arquiteto'
    ],
    indicatedFor: [
      'Quem já possui equipe de pedreiros mas quer fiscalização profissional',
      'Proprietários que moram em outra cidade e não podem visitar a obra',
      'Quem exige que cada etapa técnica atenda às normas vigentes de segurança'
    ],
    ctaText: 'Contratar acompanhamento técnico'
  }
];
