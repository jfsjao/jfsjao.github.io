import { ABOUT } from '../../../data/portfolio.data'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="sobre" className="scroll-mt-16 border-t border-formal-border md:scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="01" label="Sobre" title="Sobre mim" />

        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_280px] md:gap-16">
          <div data-reveal>
            <p className="max-w-[62ch] text-pretty font-display text-2xl font-normal leading-snug text-formal-ink sm:text-3xl">
              Sou <span className="italic text-formal-blue">{ABOUT.role}</span>.
            </p>
            <p className="mt-6 max-w-[62ch] whitespace-pre-line text-pretty font-body text-base leading-8 text-formal-muted">
              {ABOUT.bio}
            </p>
          </div>

          <dl data-reveal className="flex flex-col gap-6 border-t border-formal-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div>
              <dt className="font-meta text-xs uppercase tracking-wide text-formal-muted">Disponibilidade</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-display text-lg text-formal-ink">
                <span
                  className={`h-2 w-2 rounded-full ${ABOUT.available ? 'bg-formal-green' : 'bg-formal-muted'}`}
                  aria-hidden="true"
                />
                {ABOUT.available ? 'Disponível' : 'Indisponível'}
              </dd>
            </div>
            <div>
              <dt className="font-meta text-xs uppercase tracking-wide text-formal-muted">Formação</dt>
              <dd className="mt-1 font-display text-lg text-formal-ink">Sistemas de Informação · UFU (2022 a 2026)</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
