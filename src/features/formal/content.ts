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
    title: 'Iniciação Científica — UFU',
    context: 'Pesquisa acadêmica',
    description:
      'Comparativo entre LLMs (GPT-4, Gemini) e YOLOv8 para classificação de fauna em imagens, unindo IA generativa e visão computacional.',
    tech: ['Python', 'YOLOv8', 'TensorFlow', 'GPT-4', 'Gemini API'],
  },
  {
    title: 'Sustentação de sistemas financeiros',
    context: 'Atuação profissional',
    description: 'Manutenção e suporte a sistemas críticos, com diagnóstico e correção de dados em bases Oracle.',
    tech: ['SQL', 'Oracle'],
  },
  {
    title: 'Professor voluntário de desenvolvimento web',
    context: 'Voluntariado',
    description: 'Aulas voltadas à introdução ao desenvolvimento web.',
    tech: [],
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
