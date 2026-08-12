import { SKILLS } from '../../../data/portfolio.data'
import { SectionHeading } from './SectionHeading'

function levelLabel(level: number): string {
  if (level >= 80) return 'Avançado'
  if (level >= 65) return 'Intermediário'
  if (level >= 40) return 'Em evolução'
  return 'Aprendendo'
}

const CATEGORIES: Array<{ label: string; match: (name: string) => boolean }> = [
  { label: 'Front-end', match: (name) => /Angular|TypeScript|React/.test(name) },
  { label: 'Back-end', match: (name) => /Python|C#|Node\.js/.test(name) },
  { label: 'Dados', match: (name) => /SQL/.test(name) },
  { label: 'DevOps & Ferramentas', match: (name) => /Git|Docker|Linux/.test(name) },
]

export function Skills() {
  const grouped = CATEGORIES.map((category) => ({
    label: category.label,
    items: SKILLS.filter((skill) => category.match(skill.name)),
  })).filter((group) => group.items.length > 0)

  return (
    <section id="skills" className="scroll-mt-16 border-t border-formal-border md:scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="05" label="Skills" title="Skills" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {grouped.map((group) => (
            <div key={group.label} data-reveal>
              <h3 className="mb-4 font-meta text-xs font-semibold uppercase tracking-wide text-formal-teal">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.items.map((skill) => (
                  <li key={skill.name} className="border-l-2 border-formal-border pl-3">
                    <p className="font-display text-base text-formal-ink">{skill.name}</p>
                    <p className="font-meta text-xs text-formal-muted">{levelLabel(skill.level)}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
