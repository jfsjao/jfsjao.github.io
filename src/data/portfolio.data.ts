export const ABOUT = {
  name: 'João Felipe Silva',
  role: 'Desenvolvedor Full Stack',
  bio: `Desenvolvedor Full Stack com experiência em Angular, C#, Python e SQL. 
Formado em Sistemas de Informação pela UFU. Já trabalhei com sustentação 
de sistemas financeiros, dados com Oracle SQL, e pesquisa científica com IA 
e visão computacional. Professor voluntário de desenvolvimento web.`,
  photo: '/assets/foto.jpg',
  location: 'São Carlos, SP',
  available: true,
}

export const PROJECTS = [
  {
    id: 1,
    name: 'Classificação de Fauna com IA.zip',
    description: 'Comparativo entre LLMs e YOLOv8 para classificação de imagens — Iniciação Científica UFU',
    tech: ['Python', 'YOLOv8', 'TensorFlow', 'GPT-4', 'Gemini API'],
    size: '3.8 MB',
    seeds: 98,
    peers: 12,
    url: 'https://github.com/joaofelipe0143',
    demo: '',
    status: 'complete' as const,
  },
  {
    id: 2,
    name: 'Portfolio XP.exe',
    description: 'Portfólio temático Windows XP — React + TypeScript + Framer Motion',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    size: '1.2 MB',
    seeds: 256,
    peers: 41,
    url: 'https://github.com/joaofelipe0143',
    demo: '',
    status: 'complete' as const,
  },
  {
    id: 3,
    name: 'All In Creator.exe',
    description:
      'Plataforma full stack de venda de packs digitais — frontend Angular, API própria, pagamentos e autenticação',
    tech: ['Angular 20', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Firebase'],
    size: '24.6 MB',
    seeds: 34,
    peers: 7,
    url: 'https://allincreator.com/home',
    demo: 'https://github.com/jfsjao/All-In-Creator',
    status: 'progress' as const,
  },
  {
    id: 4,
    name: 'Mid Cardápio.exe',
    description:
      'Cardápio digital mobile-first da MID Conveniência — o cliente monta o pedido e envia direto pelo WhatsApp',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GSAP'],
    size: '4.1 MB',
    seeds: 19,
    peers: 3,
    url: 'https://mid-cardapio.onrender.com/',
    demo: 'https://github.com/jfsjao/Mid-Cardapio',
    status: 'progress' as const,
  },
  {
    id: 5,
    name: 'Diagnóstico Financeiro.exe',
    description:
      'Diagnóstico financeiro por QR Code, personalizado por parceiro — monorepo React + TypeScript + Vite',
    tech: ['React', 'TypeScript', 'Vite'],
    size: '3.5 MB',
    seeds: 11,
    peers: 2,
    url: 'https://polimata-diagnostico.onrender.com/',
    demo: 'https://github.com/jfsjao/finance-diagnostic',
    status: 'progress' as const,
  },
  {
    id: 6,
    name: 'Auth API.exe',
    description:
      'API de autenticação modular em NestJS — JWT, refresh tokens com rotação, roles e permissões, pronta para reuso',
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'JWT'],
    size: '6.8 MB',
    seeds: 27,
    peers: 5,
    url: 'https://github.com/jfsjao/auth-api',
    demo: '',
    status: 'progress' as const,
  },
]

export const SKILLS = [
  { name: 'Angular', level: 85 },
  { name: 'TypeScript / JavaScript', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'C# / .NET', level: 70 },
  { name: 'SQL (Oracle, MySQL, PostgreSQL)', level: 80 },
  { name: 'Git / CI-CD', level: 75 },
  { name: 'Docker / Linux', level: 65 },
  { name: 'React', level: 60 },
]

export const CONTACTS = [
  { label: 'GitHub', url: 'https://github.com/jfsjao', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joao-silva-jfs', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:joaofelipe0143@gmail.com', icon: 'mail' },
  { label: 'WhatsApp', url: 'https://wa.me/5516992950014', icon: 'phone' },
]

export const MSN_CONTACTS = [
  { name: 'Angular Expert 🟢', status: 'online', message: '4+ anos de experiência' },
  { name: 'Python Dev 🟢', status: 'online', message: 'dados, IA e backend' },
  { name: 'SQL Master 🟢', status: 'online', message: 'Oracle, MySQL, PostgreSQL' },
  { name: 'C# Developer 🟢', status: 'online', message: 'sistemas financeiros' },
  { name: 'React Learner 🟡', status: 'away', message: 'em evolução...' },
  { name: 'Docker 🟡', status: 'away', message: 'containerizando tudo' },
]