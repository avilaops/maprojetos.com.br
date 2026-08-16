import { Project } from '../types/project';

export const projects: Project[] = [
  {
    slug: 'residencia-contemporanea',
    title: 'Residência Contemporânea M.A.',
    category: 'Residencial',
    city: 'São José do Rio Preto - SP',
    area: 380,
    year: '2024',
    mainImage: '/images/projects/casa-concreto-pedra.webp',
    images: [
      '/images/projects/casa-concreto-pedra.webp',
      '/images/projects/casa-grafite-259.webp',
      '/images/projects/casa-madeira-palmeiras.webp'
    ],
    description: 'Projeto residencial contemporâneo projetado para integrar a área social com a área externa de lazer. Utiliza uma linguagem sofisticada com uso de concreto aparente, grandes vãos de vidro e painéis deslizantes de madeira.',
    challenge: 'O cliente desejava uma casa com privacidade em relação à rua, mas totalmente integrada internamente. O lote possuía um declive acentuado que precisava ser aproveitado para evitar movimentações de terra excessivas.',
    solution: 'Criamos uma fachada cega com volumes puros em concreto e detalhes metálicos. A casa foi projetada em níveis integrados, aproveitando o declive para dispor a área íntima no nível superior e a área de lazer no pavimento inferior, integrada ao jardim e piscina.',
    highlights: [
      'Integração total do living com o deck externo',
      'Fachada minimalista em concreto ripado',
      'Uso inteligente de iluminação natural zenital',
      'Suítes com varanda privativa voltada para a mata'
    ],
    materials: ['Concreto Ripado', 'Madeira Freijó', 'Esquadrias Minimalistas', 'Vidro Duplo Laminado'],
    status: 'concluido'
  },
  {
    slug: 'chacara-alto-padrao',
    title: 'Chácara Lago Azul',
    category: 'Chácara',
    city: 'Mirassol - SP',
    area: 450,
    year: '2023',
    mainImage: '/images/projects/aerea-piscina.webp',
    images: [
      '/images/projects/aerea-piscina.webp',
      '/images/projects/area-lazer-superior.webp',
      '/images/projects/sobrado-5186-01.webp'
    ],
    description: 'Residência de lazer de alto padrão pensada para fins de semana em família. O projeto priorizou o conforto térmico, o contato direto com a vegetação local e uma área gourmet completa integrada à piscina de borda infinita.',
    challenge: 'Criar uma edificação ampla que mantivesse o aspecto rústico de chácara, mas sem perder o requinte e a tecnologia das residências modernas urbanas.',
    solution: 'Fizemos um projeto em estrutura mista: pilares e vigas de madeira engenheirada combinados com paredes de concreto e acabamentos de alto padrão. O pavilhão gourmet possui pé-direito duplo e esquadrias que se recolhem totalmente dentro das paredes.',
    highlights: [
      'Piscina com borda infinita e deck de madeira cumaru',
      'Área gourmet com churrasqueira suspensa e forno de pizza',
      'Paisagismo integrado com espécies nativas',
      'Sustentabilidade com captação de água da chuva'
    ],
    materials: ['Madeira Engenheirada', 'Concreto Aparente', 'Pedra Moledo', 'Deck Cumaru'],
    status: 'concluido'
  },
  {
    slug: 'fachada-moderna-concreto',
    title: 'Fachada Concreto e Madeira',
    category: 'Residencial',
    city: 'São José do Rio Preto - SP',
    area: 320,
    year: '2024',
    mainImage: '/images/projects/porta-pivotante-madeira.webp',
    images: [
      '/images/projects/porta-pivotante-madeira.webp',
      '/images/projects/concreto-madeira-entardecer.webp',
      '/images/projects/casa-concreto-pedra.webp'
    ],
    description: 'Projeto focado na renovação visual e estrutural da fachada de uma residência de condomínio fechado, trazendo modernidade através da combinação de materiais nobres.',
    challenge: 'A antiga fachada possuía elementos datados dos anos 90, com telhado colonial aparente e muitos recortes visuais que poluíam a estética frontal da casa.',
    solution: 'Propusemos a elevação da platibanda para ocultar o telhado, aplicação de concreto ripado no volume principal e instalação de um grande painel em madeira freijó que funciona como porta de entrada pivotante e camufla as janelas do piso superior.',
    highlights: [
      'Painel em madeira freijó ripada com porta pivotante de 5m',
      'Iluminação linear em LED embutida nas sancas e degraus',
      'Volume imponente em concreto aparente texturizado',
      'Novo paisagismo frontal minimalista com iluminação focada'
    ],
    materials: ['Concreto Aparente Ripado', 'Madeira Freijó Ripada', 'Sancas Lineares LED', 'Vidro Temperado Bronze'],
    status: 'concluido'
  },
  {
    slug: 'reforma-gourmet',
    title: 'Espaço Gourmet Integrado',
    category: 'Reforma',
    city: 'Catanduva - SP',
    area: 85,
    year: '2025',
    mainImage: '/images/projects/area-lazer-superior.webp',
    images: [
      '/images/projects/area-lazer-superior.webp',
      '/images/projects/aerea-piscina.webp',
      '/images/projects/sobrado-5186-02.webp'
    ],
    description: 'Reforma completa da antiga edícula de uma residência urbana para a criação de um moderno espaço gourmet, adega climatizada e spa integrado.',
    challenge: 'O espaço disponível era estreito e pouco iluminado, cercado por muros altos nos fundos do lote, necessitando de uma intervenção que ampliasse a sensação de espaço.',
    solution: 'Derrubamos as paredes divisórias antigas e criamos uma cobertura em estrutura metálica leve com aberturas zenitais. O uso de espelhos estrategicamente posicionados e revestimentos claros aumentou significativamente a luminosidade e amplitude.',
    highlights: [
      'Iluminação natural zenital sobre a bancada principal',
      'Spa com hidromassagem integrado ao deck e jardim vertical',
      'Bancada em quartzito com calha úmida integrada',
      'Adega sob medida com controle de temperatura e umidade'
    ],
    materials: ['Estrutura Metálica Leve', 'Quartzito Taj Mahal', 'Porcelanato Satin', 'Forro Ripado Integrado'],
    status: 'concluido'
  },
  {
    slug: 'casa-terrea-piscina',
    title: 'Residência Térrea Jardins',
    category: 'Residencial',
    city: 'Olímpia - SP',
    area: 210,
    year: '2024',
    mainImage: '/images/projects/terrea-2586-01.webp',
    images: [
      '/images/projects/terrea-2586-01.webp',
      '/images/projects/terrea-2586-02.webp',
      '/images/projects/aerea-piscina.webp'
    ],
    description: 'Casa térrea prática e sofisticada, projetada para um casal jovem. O foco do projeto foi a otimização dos fluxos de circulação e a ventilação cruzada para garantir conforto térmico na quente região de Olímpia.',
    challenge: 'Criar uma residência compacta mas que mantivesse a sensação de amplitude dos projetos de alto padrão, sem ultrapassar o limite orçamentário pré-definido.',
    solution: 'Integramos toda a área social (sala de estar, jantar e cozinha) em um único ambiente com pé-direito elevado de 4,5m. Grandes portas de correr conectam este espaço diretamente à varanda e à piscina.',
    highlights: [
      'Pé-direito duplo no living social',
      'Ventilação cruzada que dispensa o uso constante de ar-condicionado',
      'Piscina pastilhada com prainha para crianças',
      'Excelente aproveitamento do terreno com recuos otimizados'
    ],
    materials: ['Piso Porcelanato 120x120', 'Pintura Toque de Seda', 'Pastilha de Vidro Jatobá', 'Esquadrias Linha Gold'],
    status: 'construcao'
  },
  {
    slug: 'ampliacao-varanda',
    title: 'Ampliação Varanda e Home Office',
    category: 'Ampliação',
    city: 'Cedral - SP',
    area: 110,
    year: '2025',
    mainImage: '/images/projects/casa-pedra-palmeiras-01.webp',
    images: [
      '/images/projects/casa-pedra-palmeiras-01.webp',
      '/images/projects/casa-pedra-palmeiras-02.webp',
      '/images/projects/casa-madeira-palmeiras.webp'
    ],
    description: 'Ampliação de uma residência existente para incluir uma varanda gourmet de apoio ao jardim e um anexo independente destinado a um home office silencioso.',
    challenge: 'A ampliação precisava se conectar perfeitamente à arquitetura original da casa sem parecer um "puxadinho" ou um elemento desajustado no lote.',
    solution: 'Utilizamos uma junta de dilatação elegante e vigas metálicas que criam uma transição suave entre a estrutura existente e o novo pavilhão. O acabamento em concreto e madeira seguiu fielmente a paleta de materiais original.',
    highlights: [
      'Home office com isolamento acústico e vista para o jardim',
      'Varanda gourmet equipada e integrada ao paisagismo',
      'Estrutura metálica aparente com pintura eletrostática preta',
      'Pergolado com cobertura de vidro e controle solar'
    ],
    materials: ['Vigas de Aço ASTM A36', 'Forro de Cedro Rosa', 'Esquadrias Minimalistas Alcoa', 'Piso Atérmico Solarium'],
    status: 'executivo'
  }
];
