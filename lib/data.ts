export interface PratoItem {
  id: string;
  nome: string;
  descricao?: string;
  preco?: string;
  categoria: 'sopa' | 'peixe' | 'carne' | 'vegetariano' | 'sobremesa' | 'grelhados';
  destaque?: boolean;
  imagem?: string;
}

export interface DiaEmenta {
  diaSemana: string;
  dataTexto?: string;
  sopas: PratoItem[];
  peixe: PratoItem[];
  carne: PratoItem[];
  vegetariano: PratoItem[];
  sobremesas: PratoItem[];
}

export const RESTAURANTE_INFO = {
  nome: "Restaurante Lusitano",
  slogan: "Cozinha Tradicional Portuguesa & Grelhados no Carvão",
  subtitulo: "O Seu Ponto de Encontro para Almoços em Leiria",
  telefone: "937 117 791",
  telefoneFormatado: "937 117 791",
  whatsappNumero: "351937117791",
  morada: "Estrada da Estação, Bloco 89 R/C",
  codigoPostal: "2415-409 Leiria",
  cidade: "Leiria, Portugal",
  horarioAlmoco: "Segunda a Sábado: 11h45 – 15h30",
  horarioTexto: "Aberto para Almoços de Segunda a Sábado",
  instagramUrl: "https://www.instagram.com/restaurante_lusitano_leiria/",
  instagramUser: "@restaurante_lusitano_leiria",
  googleMapsUrl: "https://maps.google.com/?q=Restaurante+Lusitano+Estrada+da+Estacao+89+Leiria",
  wazeUrl: "https://waze.com/ul?q=Restaurante+Lusitano+Leiria",
  precoMedioMenu: "8,50 € – 11,50 €",
};

export const EMENTA_SEMANAL: Record<string, DiaEmenta> = {
  segunda: {
    diaSemana: "Segunda-feira",
    sopas: [
      { id: "s1", nome: "Creme de Cenoura Aveludado", categoria: "sopa" },
      { id: "s2", nome: "Sopa de Legumes da Horta", categoria: "sopa" }
    ],
    peixe: [
      { id: "p1", nome: "Dourada Grelhada no Carvão com Batata Cozida e Legumes", categoria: "peixe", destaque: true },
      { id: "p2", nome: "Bacalhau com Natas Tradicional Gratinado", categoria: "peixe" }
    ],
    carne: [
      { id: "c1", nome: "Maminha ou Picanha Grelhada com Arroz, Feijão Preto, Batata Frita e Abacaxi", categoria: "carne", destaque: true },
      { id: "c2", nome: "Bitoque de Porco à Lusitano com Ovo a Cavalo", categoria: "carne" },
      { id: "c3", nome: "Empadão de Carne à Antiga no Forno", categoria: "carne" },
      { id: "c4", nome: "Grelhados Mistos (Febras e Entremeada na Brasa)", categoria: "carne" },
      { id: "c5", nome: "Costeletas de Vaca Grelhadas com Arroz e Batata", categoria: "carne" }
    ],
    vegetariano: [
      { id: "v1", nome: "Tofu com Broa no Forno com Batata a Murro e Espinafres", categoria: "vegetariano" }
    ],
    sobremesas: [
      { id: "sb1", nome: "Mousse de Chocolate Caseira", categoria: "sobremesa" },
      { id: "sb2", nome: "Cheesecake de Frutos Vermelhos", categoria: "sobremesa" },
      { id: "sb3", nome: "Pudim Caseiro de Ovos", categoria: "sobremesa" },
      { id: "sb4", nome: "Fruta da Época Fatiada", categoria: "sobremesa" }
    ]
  },
  terca: {
    diaSemana: "Terça-feira",
    sopas: [
      { id: "ts1", nome: "Caldo Verde com Chouriço Tradicional", categoria: "sopa" },
      { id: "ts2", nome: "Creme de Alho Francês", categoria: "sopa" }
    ],
    peixe: [
      { id: "tp1", nome: "Salmão Grelhado com Molho de Manteiga e Batata a Murro", categoria: "peixe", destaque: true },
      { id: "tp2", nome: "Polvo à Lagareiro com Batatas a Murro", categoria: "peixe" }
    ],
    carne: [
      { id: "tc1", nome: "Cozido à Portuguesa Tradicional", categoria: "carne", destaque: true },
      { id: "tc2", nome: "Secretos de Porco Preto Grelhados", categoria: "carne" },
      { id: "tc3", nome: "Bitoque da Vazia com Molho de Alho e Louro", categoria: "carne" },
      { id: "tc4", nome: "Arroz de Pato à Antiga Tostado no Forno", categoria: "carne" }
    ],
    vegetariano: [
      { id: "tv1", nome: "Lasanha Vegetariana de Cogumelos e Espinafres", categoria: "vegetariano" }
    ],
    sobremesas: [
      { id: "tsb1", nome: "Doce da Casa Lusitano", categoria: "sobremesa" },
      { id: "tsb2", nome: "Baba de Camelo Aveludada", categoria: "sobremesa" },
      { id: "tsb3", nome: "Fruta Laminada", categoria: "sobremesa" }
    ]
  },
  quarta: {
    diaSemana: "Quarta-feira",
    sopas: [
      { id: "qs1", nome: "Canja de Galinha Caseira", categoria: "sopa" },
      { id: "qs2", nome: "Sopa de Grão com Espinafres", categoria: "sopa" }
    ],
    peixe: [
      { id: "qp1", nome: "Robalo Grelhado na Brasa com Legumes Salteados", categoria: "peixe", destaque: true },
      { id: "qp2", nome: "Arroz de Marisco Rico à Lusitano", categoria: "peixe" }
    ],
    carne: [
      { id: "qc1", nome: "Feijoada à Transmontana", categoria: "carne", destaque: true },
      { id: "qc2", nome: "Costelinha de Porco no Forno com Batata Assada", categoria: "carne" },
      { id: "qc3", nome: "Picanha na Chapa com Feijão Preto e Farofa", categoria: "carne" },
      { id: "qc4", nome: "Bifinhos de Frango com Cogumelos e Natas", categoria: "carne" }
    ],
    vegetariano: [
      { id: "qv1", nome: "Caril de Grão e Legumes com Arroz Basmati", categoria: "vegetariano" }
    ],
    sobremesas: [
      { id: "qsb1", nome: "Tarte de Maçã Quente com Canela", categoria: "sobremesa" },
      { id: "qsb2", nome: "Mousse de Lima Refrescante", categoria: "sobremesa" },
      { id: "qsb3", nome: "Pudim Francês", categoria: "sobremesa" }
    ]
  },
  quinta: {
    diaSemana: "Quinta-feira",
    sopas: [
      { id: "quis1", nome: "Creme de Abóbora com Sementes Tostadas", categoria: "sopa" },
      { id: "quis2", nome: "Sopa à Lavrador", categoria: "sopa" }
    ],
    peixe: [
      { id: "quip1", nome: "Bacalhau Assado com Batata a Murro e Azeite Virgem", categoria: "peixe", destaque: true },
      { id: "quip2", nome: "Chocos Grelhados com Tinta e Molho Verde", categoria: "peixe" }
    ],
    carne: [
      { id: "quic1", nome: "Carne de Porco à Alentejana com Ameijoas", categoria: "carne", destaque: true },
      { id: "quic2", nome: "Maminha Fatiada com Arroz e Batata Frita Estaladiça", categoria: "carne" },
      { id: "quic3", nome: "Vitela Assada no Forno de Lenha com Arroz de Miúdos", categoria: "carne" },
      { id: "quic4", nome: "Bitoques de Frango ou Porco", categoria: "carne" }
    ],
    vegetariano: [
      { id: "quiv1", nome: "Hamburguer de Feijão Preto e Beterraba com Batata Doce", categoria: "vegetariano" }
    ],
    sobremesas: [
      { id: "quisb1", nome: "Serradura Tradicional", categoria: "sobremesa" },
      { id: "quisb2", nome: "Mousse de Manga Tropical", categoria: "sobremesa" },
      { id: "quisb3", nome: "Fruta da Época", categoria: "sobremesa" }
    ]
  },
  sexta: {
    diaSemana: "Sexta-feira",
    sopas: [
      { id: "sexs1", nome: "Sopa da Pedra Rica", categoria: "sopa" },
      { id: "sexs2", nome: "Creme de Courgette e Coentros", categoria: "sopa" }
    ],
    peixe: [
      { id: "sexp1", nome: "Bacalhau à Gomes de Sá no Forno", categoria: "peixe", destaque: true },
      { id: "sexp2", nome: "Sardinhas ou Peixe Espada Grelhado", categoria: "peixe" }
    ],
    carne: [
      { id: "sexc1", nome: "Leitão Assado à Bairrada (Especial Sexta)", categoria: "carne", destaque: true },
      { id: "sexc2", nome: "Picanha & Maminha Premium na Brasa", categoria: "carne" },
      { id: "sexc3", nome: "Lombo de Porco Recheado com Farinheira", categoria: "carne" },
      { id: "sexc4", nome: "Bife à Lusitano com Molho Especial da Casa", categoria: "carne" }
    ],
    vegetariano: [
      { id: "sexv1", nome: "Empadão Vegetariano de Soja e Batata Doce", categoria: "vegetariano" }
    ],
    sobremesas: [
      { id: "sexsb1", nome: "Mousse de Chocolate com Raspas de Laranja", categoria: "sobremesa" },
      { id: "sexsb2", nome: "Cheesecake de Caramelo Salgado", categoria: "sobremesa" },
      { id: "sexsb3", nome: "Profiteroles com Chocolate Quente", categoria: "sobremesa" }
    ]
  },
  sabado: {
    diaSemana: "Sábado",
    sopas: [
      { id: "sabs1", nome: "Canja Rica de Aves", categoria: "sopa" },
      { id: "sabs2", nome: "Creme de Legumes com Croutons", categoria: "sopa" }
    ],
    peixe: [
      { id: "sabp1", nome: "Arroz de Tamboril com Gambas", categoria: "peixe", destaque: true },
      { id: "sabp2", nome: "Grelhada Mista de Peixe da Costa", categoria: "peixe" }
    ],
    carne: [
      { id: "sabc1", nome: "Cabrito Assado no Forno com Batatinha Corada", categoria: "carne", destaque: true },
      { id: "sabc2", nome: "Grelhados Mistos à Lusitano (Picanha, Maminha, Entrecosto)", categoria: "carne" },
      { id: "sabc3", nome: "Bife da Vazia Maturado na Brasa", categoria: "carne" }
    ],
    vegetariano: [
      { id: "sabv1", nome: "Risotto de Cogumelos Selvagens com Queijo Curado", categoria: "vegetariano" }
    ],
    sobremesas: [
      { id: "sabsb1", nome: "Pão de Ló Húmido Tradicional", categoria: "sobremesa" },
      { id: "sabsb2", nome: "Bolo de Bolacha Caseiro", categoria: "sobremesa" },
      { id: "sabsb3", nome: "Fruta Especial de Sábado", categoria: "sobremesa" }
    ]
  }
};

export const ESPECIALIDADES_DESTAQUE = [
  {
    titulo: "Picanha & Maminha à Lusitano",
    subtitulo: "Grelhados no Ponto",
    descricao: "Carnes nobres fatiadas, servidas com o clássico arroz branco soltinho, feijão preto temperado com carinho, batata frita caseira estaladiça e abacaxi grelhado.",
    tag: "Favorito dos Almoços",
    preco: "11,50 € (Menu Almoço)",
    imagem: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    titulo: "Peixe Fresco Grelhado no Carvão",
    subtitulo: "Douradas, Robalos e Salmão",
    descricao: "Peixe selecionado todos os dias, temperado apenas com sal grosso e grelhado na brasa ao momento, acompanhado de batatas cozidas com casca e legumes frescos.",
    tag: "Fresco do Dia",
    preco: "10,50 € (Menu Almoço)",
    imagem: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    titulo: "Bacalhau com Natas Gratinado",
    subtitulo: "Receita Tradicional Portuguesa",
    descricao: "Lascado e envolvido em refogado aromático com azeite virgem, batata palha fina e natas frescas, gratinado no forno até obter uma crosta dourada irresistível.",
    tag: "Conforto Tradicional",
    preco: "9,50 € (Menu Almoço)",
    imagem: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    titulo: "Bitoques Generosos da Casa",
    subtitulo: "Porco ou Vaca",
    descricao: "Bife tenro passado com alho e louro, ovo estrelado a cavalo, montanha de batatas fritas e salada fresca mista.",
    tag: "Rápido & Farto",
    preco: "9,00 € (Menu Almoço)",
    imagem: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTEMUNHOS = [
  {
    nome: "Carlos Ferreira",
    cargo: "Empresário em Leiria",
    texto: "Almoço aqui pelo menos 3 vezes por semana. A comida é excelente, o atendimento é rápido (essencial para quem tem 1 hora de almoço) e a picanha é do melhor que há na zona da estação.",
    estrelas: 5,
  },
  {
    nome: "Marta Simões",
    cargo: "Cliente Habitual",
    texto: "Ambiente muito acolhedor e comida que sabe verdadeiramente a casa da mãe. Peço muitas vezes em take-away pelo WhatsApp e quando chego está prontinho e quente.",
    estrelas: 5,
  },
  {
    nome: "João Pedro Mendes",
    cargo: "Trabalhador Zona Industrial",
    texto: "Preço super justo, doses muito bem servidas e simpatia de toda a equipa. Recomendo a quem passa por Leiria e quer um almoço honesto e saboroso.",
    estrelas: 5,
  }
];
