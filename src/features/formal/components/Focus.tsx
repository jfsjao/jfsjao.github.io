import { FOCUS_AREAS } from '../content'
import { SectionHeading } from './SectionHeading'

export function Focus() {
  return (
    <section id="focos" className="scroll-mt-16 border-t border-formal-border bg-formal-surface/50 md:scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="02" label="Focos" title="Focos de atuação" />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-formal-border bg-formal-border sm:grid-cols-3">
          {FOCUS_AREAS.map((area, index) => (
            <div key={area.title} data-reveal className="bg-formal-surface p-8">
              <span className="font-meta text-xs text-formal-muted">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.01em] text-formal-ink">
                {area.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-6 text-formal-muted">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
