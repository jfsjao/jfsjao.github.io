import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ABOUT } from '../../../data/portfolio.data'

gsap.registerPlugin(useGSAP)

export function Hero() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Título e lead (o elemento de LCP) NUNCA ficam com opacity 0: só sobem
        // alguns px. Assim o nome aparece no primeiro paint e o LCP não espera
        // a animação. Elementos secundários têm um fade curto (< 0.8s no total).
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('[data-hero-title-line]', { y: 16, duration: 0.5, stagger: 0.06 })
          .from('[data-hero-lead]', { y: 10, duration: 0.5 }, '<0.05')
          .from('[data-hero-badge], [data-hero-meta]', { autoAlpha: 0, y: 8, duration: 0.4 }, 0)
          .from('[data-hero-cta]', { autoAlpha: 0, y: 10, duration: 0.4, stagger: 0.05 }, 0.15)
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <section id="hero" ref={scope} className="scroll-mt-16 md:scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <span
            data-hero-badge
            className="inline-flex items-center gap-1.5 rounded-full border border-formal-border bg-formal-surface px-3 py-1.5 font-meta text-xs text-formal-muted"
          >
            <span
              className={`h-2 w-2 rounded-full ${ABOUT.available ? 'bg-formal-green' : 'bg-formal-muted'}`}
              aria-hidden="true"
            />
            {ABOUT.available ? 'Disponível para novos projetos' : 'Indisponível no momento'}
          </span>

          <p data-hero-meta className="text-right font-meta text-xs uppercase tracking-wide text-formal-muted">
            {ABOUT.role} · Dados &amp; IA
            <br />
            Remoto
          </p>
        </div>

        <h1 className="max-w-5xl font-display text-[13vw] font-medium leading-[0.98] tracking-[-0.02em] text-formal-ink sm:text-6xl lg:text-[5.5rem]">
          <span data-hero-title-line className="block overflow-hidden">
            Desenvolvedor Fullstack
          </span>
          <span data-hero-title-line className="block overflow-hidden italic text-formal-blue">
            João Felipe
          </span>
        </h1>

        <p data-hero-lead className="mt-8 max-w-[56ch] text-pretty font-body text-lg leading-8 text-formal-muted">
          Experiência com TypeScript, Node.js, Angular, C# e SQL, de sistemas financeiros corporativos a
          produtos web em produção, hoje como freelancer full stack.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            data-hero-cta
            href="#projetos"
            className="rounded-full bg-formal-ink px-6 py-3.5 font-meta text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-formal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-formal-blue"
          >
            Ver projetos ↗
          </a>
          <a
            data-hero-cta
            href="#contato"
            className="rounded-full border border-formal-border bg-formal-surface px-6 py-3.5 font-meta text-xs font-semibold uppercase tracking-wide text-formal-ink transition-colors hover:border-formal-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-formal-blue"
          >
            Falar comigo
          </a>
        </div>
      </div>
    </section>
  )
}
