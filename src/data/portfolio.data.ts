import faunaCow from '../assets/img-project-facul/Imagem-gado(yolov8).jpeg'
import faunaBird from '../assets/img-project-facul/Imagem-passaro(yolov8).jpeg'

interface Project {
  id: number
  name: string
  description: string
  tech: string[]
  size: string
  seeds: number
  peers: number
  url: string
  demo: string
  status: 'complete' | 'progress'
  images?: string[]
  /** true = `url` aponta pro código-fonte (sem deploy ao vivo), muda o label do link pra "Abrir código". */
  codeOnly?: boolean
  /** Conceitos/paradigmas de fundamentação usados no projeto (ex.: POO), à parte do stack técnico. */
  fundamentals?: string[]
  /** true = oculto das listagens (formal e Ares Galaxy) sem remover os dados. */
  hidden?: boolean
}

export const ABOUT = {
  name: 'João Felipe Silva',
  role: 'Desenvolvedor Full Stack',
  // Quebra de linha só entre parágrafos: o "Sobre mim" usa whitespace-pre-line,
  // então cada \n vira quebra visível na tela.
  bio: [
    'Desenvolvedor Full Stack formado em Sistemas de Informação pela UFU, com experiência em TypeScript, Node.js, Angular, C#, Python e SQL. Atua como freelancer desenvolvendo e mantendo aplicações web de ponta a ponta, com passagem profissional por sistemas corporativos nas áreas de educação e financeira.',
    'Também tem pesquisa científica em IA e visão computacional, e foi professor voluntário de desenvolvimento web.',
  ].join('\n\n'),
  photo: '/assets/foto.jpg',
  location: 'São Carlos, SP',
  available: true,
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Classificação de Fauna com IA.zip',
    description:
      'Avaliação de modelos de IA (GPT-4, YOLOv8, Gemini) para classificação automatizada de fauna em imagens, comparando precisão, recall e F1-score. Iniciação Científica UFU',
    tech: ['Python', 'YOLOv8', 'TensorFlow', 'GPT-4', 'Gemini API'],
    size: '3.8 MB',
    seeds: 98,
    peers: 12,
    url: '',
    demo: '',
    status: 'complete',
    images: [faunaCow, faunaBird],
    fundamentals: ['Aprendizado de Máquina'],
  },
  {
    id: 2,
    name: 'Portfolio XP.exe',
    description: 'Portfólio temático Windows XP com React, TypeScript e Framer Motion',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    size: '1.2 MB',
    seeds: 256,
    peers: 41,
    url: 'https://github.com/jfsjao/jfsjao.github.io',
    demo: '',
    status: 'complete' as const,
    codeOnly: true,
    fundamentals: ['Componentização'],
  },
  {
    id: 3,
    name: 'All In Creator.exe',
    description:
      'Plataforma full stack de venda de packs digitais com frontend Angular, API própria, pagamentos e autenticação',
    tech: ['Angular 20', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Firebase'],
    size: '24.6 MB',
    seeds: 34,
    peers: 7,
    url: 'https://allincreator.com/home',
    demo: '',
    status: 'complete' as const,
    fundamentals: ['POO'],
  },
  {
    id: 4,
    name: 'Mid Cardápio.exe',
    description:
      'Cardápio digital mobile-first da MID Conveniência. O cliente monta o pedido e envia direto pelo WhatsApp',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GSAP'],
    size: '4.1 MB',
    seeds: 19,
    peers: 3,
    url: 'https://mid-cardapio.onrender.com/',
    demo: '',
    status: 'progress' as const,
    fundamentals: ['Mobile-first'],
    hidden: true,
  },
  {
    id: 5,
    name: 'Diagnóstico Financeiro.exe',
    description:
      'Diagnóstico financeiro por QR Code, personalizado por parceiro, em monorepo React + TypeScript + Vite',
    tech: ['React', 'TypeScript', 'Vite'],
    size: '3.5 MB',
    seeds: 11,
    peers: 2,
    url: 'https://polimata-diagnostico.onrender.com/',
    demo: '',
    status: 'progress' as const,
    fundamentals: ['Monorepo'],
  },
  {
    id: 6,
    name: 'Auth API.exe',
    description:
      'API de autenticação modular em NestJS com JWT, refresh tokens com rotação, roles e permissões, pronta para reuso',
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'JWT'],
    size: '6.8 MB',
    seeds: 27,
    peers: 5,
    url: 'https://github.com/jfsjao/auth-api',
    demo: '',
    status: 'progress' as const,
    codeOnly: true,
    fundamentals: ['POO'],
  },
]

export const SKILLS = [
  { name: 'Angular', level: 85 },
  { name: 'TypeScript / JavaScript', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'C# / .NET', level: 70 },
  { name: 'Node.js', level: 35 },
  { name: 'SQL (Oracle, MySQL, PostgreSQL)', level: 80 },
  { name: 'Git / CI-CD', level: 75 },
  { name: 'Docker', level: 65 },
  { name: 'Linux', level: 65 },
  { name: 'React', level: 60 },
]

export const CONTACTS = [
  { label: 'GitHub', url: 'https://github.com/jfsjao', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joao-silva-jfs', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:joaofelipe0143@gmail.com', icon: 'mail' },
]

export const MSN_CONTACTS = [
  { name: 'Angular Expert 🟢', status: 'online', message: '4+ anos de experiência' },
  { name: 'Python Dev 🟢', status: 'online', message: 'dados, IA e backend' },
  { name: 'SQL Master 🟢', status: 'online', message: 'Oracle, MySQL, PostgreSQL' },
  { name: 'C# Developer 🟢', status: 'online', message: 'sistemas financeiros' },
  { name: 'React Learner 🟡', status: 'away', message: 'em evolução...' },
  { name: 'Node.js Newbie 🟡', status: 'away', message: 'aprendendo backend...' },
  { name: 'Docker 🟡', status: 'away', message: 'containerizando tudo' },
  { name: 'Linux User 🟢', status: 'online', message: 'terminal é vida' },
]
