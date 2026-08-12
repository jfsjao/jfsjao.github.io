/**
 * Conteúdo editorial específico do portfólio formal que ainda não tem lugar em
 * `src/data/portfolio.data.ts` (fonte compartilhada com o modo Windows).
 * Nada aqui é inventado: cada item é uma reformulação direta de fatos já
 * presentes em `ABOUT.bio` — sem empresa, data ou métrica que não exista na
 * fonte original.
 */

export const FOCUS_AREAS = [
  {
    title: 'Sistemas financeiros',
    description: 'Sustentação de sistemas financeiros críticos e diagnóstico de dados com Oracle SQL.',
  },
  {
    title: 'Dados & IA',
    description: 'Pesquisa científica aplicando LLMs e visão computacional (YOLOv8) à classificação de imagens.',
  },
  {
    title: 'Educação',
    description: 'Professor voluntário de desenvolvimento web.',
  },
] as const

export const EXPERIENCE_ITEMS = [
  {
    title: 'Desenvolvedor de Software e Web Freelancer',
    context: 'Autônomo · mar. 2026–atual',
    description:
      'Desenvolve, implanta e mantém aplicações web de ponta a ponta, integrando interfaces, APIs e serviços externos. Automatiza deploys e acompanha ambientes de produção em colaboração direta com clientes.',
    tech: ['TypeScript', 'Node.js', 'React', 'Angular'],
  },
  {
    title: 'Trainee de Desenvolvimento de Software — Luz Soluções Engenharia',
    context: 'Atuação profissional · jul. 2025–mar. 2026',
    description:
      'Desenvolveu e manteve sistemas corporativos em Delphi e C# para aplicações financeiras, com extração e análise de dados em Oracle SQL. Corrigiu defeitos e apoiou testes, homologação e releases.',
    tech: ['Delphi', 'C#', 'Oracle SQL'],
  },
  {
    title: 'Estagiário de Tecnologia da Informação — Instituto Alfa e Beto',
    context: 'Estágio · jun. 2024–set. 2024',
    description:
      'Desenvolveu interfaces web com Angular, JavaScript, HTML e CSS, apoiou automações backend com Python e deu suporte a usuários e infraestrutura.',
    tech: ['Angular', 'JavaScript', 'Python', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Iniciação Científica — UFU',
    context: 'Pesquisa acadêmica · set. 2023–jun. 2024',
    description:
      'Avaliação de modelos de Inteligência Artificial para classificação automatizada de imagens de fauna em diferentes condições ambientais. Comparou o desempenho de GPT-4, YOLOv8 e Gemini com base em precisão, recall e F1-score, contribuindo para o uso de IA em conservação de biodiversidade.',
    tech: ['Python', 'YOLOv8', 'TensorFlow', 'GPT-4', 'Gemini API'],
  },
  {
    title: 'Professor voluntário de desenvolvimento web — UFU',
    context: 'Voluntariado · fev. 2025–mai. 2025',
    description: 'Ministrou aulas de lógica de programação, HTML, CSS e JavaScript, criou materiais e orientou projetos acadêmicos.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
] as const

/** Categoria editorial por projeto, inferida do stack declarado em cada item de PROJECTS. */
export const PROJECT_CATEGORIES: Record<number, string> = {
  1: 'IA & Dados',
  2: 'Front-end',
  3: 'Full Stack',
  4: 'Front-end',
  5: 'Front-end',
  6: 'Back-end',
}
