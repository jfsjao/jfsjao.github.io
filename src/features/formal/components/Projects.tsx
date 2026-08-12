import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { PROJECTS } from '../../../data/portfolio.data'
import { PROJECT_CATEGORIES } from '../content'
import { SectionHeading } from './SectionHeading'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const STATUS_LABEL: Record<string, string> = {
  complete: 'Concluído',
  progress: 'Em andamento',
}

/**
 * Em telas grandes e sem prefers-reduced-motion, a seção fixa a viewport e
 * transforma o scroll vertical em deslocamento horizontal dos cards (padrão
 * de galeria "scrollytelling"). Em qualquer outro caso — mobile, tablet ou
 * reduced motion — os cards ficam em um carrossel com scroll nativo e
 * scroll-snap, sem nenhum JS de pin envolvido.
 */
export function Projects() {
  const scope = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const wrap = wrapRef.current
      const track = trackRef.current
      if (!wrap || !track) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        wrap.classList.remove('overflow-x-auto', 'snap-x', 'snap-mandatory')
        wrap.classList.add('overflow-hidden')

        const getDistance = () => track.scrollWidth - wrap.clientWidth

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        })

        return () => {
          wrap.classList.add('overflow-x-auto', 'snap-x', 'snap-mandatory')
          wrap.classList.remove('overflow-hidden')
          gsap.set(track, { clearProps: 'transform' })
          tween.scrollTrigger?.kill()
          tween.kill()
        }
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <section id="projetos" ref={scope} className="scroll-mt-16 border-t border-formal-border bg-formal-surface/50 md:scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-8 md:pt-28">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index="04" label="Projetos" title="Projetos" />
          <p className="hidden font-meta text-xs uppercase tracking-wide text-formal-muted lg:mb-12 lg:block">
            Role para explorar →
          </p>
        </div>
      </div>

      <div ref={wrapRef} className="flex items-center overflow-x-auto snap-x snap-mandatory lg:min-h-[92dvh]">
        <div ref={trackRef} className="flex gap-6 px-5 pb-16 pt-2 md:px-8 lg:pb-0">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              data-reveal
              className="flex w-[82vw] shrink-0 snap-start flex-col justify-between rounded-2xl border border-formal-border bg-formal-surface p-7 sm:w-[420px]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-meta text-xs text-formal-muted">{String(index + 1).padStart(2, '0')}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-meta text-xs font-semibold ${
                      project.status === 'complete'
                        ? 'bg-formal-green/10 text-formal-green'
                        : 'bg-formal-blue/10 text-formal-blue'
                    }`}
                  >
                    {STATUS_LABEL[project.status] ?? project.status}
                  </span>
                </div>

                <p className="mt-5 font-meta text-xs uppercase tracking-wide text-formal-teal">
                  {PROJECT_CATEGORIES[project.id] ?? 'Projeto'}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.01em] text-formal-ink">
                  {project.name}
                </h3>
                <p className="mt-3 font-body text-sm leading-6 text-formal-muted">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-formal-border px-2.5 py-1 font-meta text-xs text-formal-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex gap-5 border-t border-formal-border pt-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-meta text-xs font-semibold uppercase tracking-wide text-formal-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-formal-blue"
                  >
                    Abrir projeto ↗
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-meta text-xs font-semibold uppercase tracking-wide text-formal-muted underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-formal-blue"
                  >
                    Ver código ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
