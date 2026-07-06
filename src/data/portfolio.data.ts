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