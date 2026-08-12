import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="formacao" className="scroll-mt-16 border-t border-formal-border bg-formal-surface/50 md:scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="06" label="Formação" title="Formação e voluntariado" />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-formal-border bg-formal-border sm:grid-cols-3">
          <div data-reveal className="bg-formal-surface p-8">
            <p className="font-meta text-xs uppercase tracking-wide text-formal-muted">Graduação · 2022 a 2026</p>
            <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-formal-ink">
              Sistemas de Informação
            </h3>
            <p className="mt-1 font-body text-sm text-formal-muted">
              Universidade Federal de Uberlândia (UFU), com ênfase em Engenharia de Software, Bancos de Dados e IA.
            </p>
          </div>
          <div data-reveal className="bg-formal-surface p-8">
            <p className="font-meta text-xs uppercase tracking-wide text-formal-muted">Técnico · 2018 a 2021</p>
            <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-formal-ink">
              Eletroeletrônica e Usinagem
            </h3>
            <p className="mt-1 font-body text-sm text-formal-muted">SENAI</p>
          </div>
          <div data-reveal className="bg-formal-surface p-8">
            <p className="font-meta text-xs uppercase tracking-wide text-formal-muted">Voluntariado · 2025</p>
            <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-formal-ink">
              Professor de desenvolvimento web
            </h3>
            <p className="mt-1 font-body text-sm text-formal-muted">
              UFU, com aulas de lógica de programação, HTML, CSS e JavaScript.
            </p>
          </div>
        </div>

        <div data-reveal className="mt-10">
          <p className="font-meta text-xs uppercase tracking-wide text-formal-muted">Certificações selecionadas</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {[
              'Aplicações Escaláveis com Angular · Alura',
              'Inteligência Artificial Aplicada a Dados com Copilot · Heineken/DIO',
              'Lógica de Programação · SENAI',
            ].map((cert) => (
              <li
                key={cert}
                className="rounded-full border border-formal-border bg-formal-surface px-3 py-1.5 font-meta text-xs text-formal-muted"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
