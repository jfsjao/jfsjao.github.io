import { EXPERIENCE_ITEMS } from '../content'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-16 border-t border-formal-border md:scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="03" label="Experiência" title="Experiência" />

        <ol className="flex flex-col border-t border-formal-border">
          {EXPERIENCE_ITEMS.map((item) => (
            <li
              key={item.title}
              data-reveal
              className="grid gap-2 border-b border-formal-border py-7 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8"
            >
              <p className="font-meta text-xs uppercase tracking-wide text-formal-muted">{item.context}</p>
              <div>
                <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-formal-ink">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[64ch] font-body text-sm leading-6 text-formal-muted">
                  {item.description}
                </p>
                {item.tech.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-formal-border px-2.5 py-1 font-meta text-xs text-formal-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
