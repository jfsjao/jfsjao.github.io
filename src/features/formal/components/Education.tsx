import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="formacao" className="scroll-mt-16 border-t border-formal-border bg-formal-surface/50 md:scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="06" label="Formação" title="Formação e voluntariado" />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-formal-border bg-formal-border sm:grid-cols-2">
          <div data-reveal className="bg-formal-surface p-8">
            <p className="font-meta text-xs uppercase tracking-wide text-formal-muted">Graduação</p>
            <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-formal-ink">
              Sistemas de Informação
            </h3>
            <p className="mt-1 font-body text-sm text-formal-muted">Universidade Federal de Uberlândia (UFU)</p>
          </div>
          <div data-reveal className="bg-formal-surface p-8">
            <p className="font-meta text-xs uppercase tracking-wide text-formal-muted">Voluntariado</p>
            <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-formal-ink">
              Professor de desenvolvimento web
            </h3>
            <p className="mt-1 font-body text-sm text-formal-muted">Aulas voluntárias de introdução ao desenvolvimento web.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
