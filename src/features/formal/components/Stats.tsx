import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { PROJECTS, SKILLS } from '../../../data/portfolio.data'
import { FOCUS_AREAS } from '../content'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const STATS = [
  { value: PROJECTS.length, label: 'Projetos no portfólio' },
  { value: new Set(PROJECTS.flatMap((project) => project.tech)).size, label: 'Tecnologias aplicadas' },
  { value: SKILLS.length, label: 'Skills mapeadas' },
  { value: FOCUS_AREAS.length, label: 'Focos de atuação' },
]

export function Stats() {
  const scope = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        { fullMotion: '(prefers-reduced-motion: no-preference)', reduceMotion: '(prefers-reduced-motion: reduce)' },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean }
          const counters = gsap.utils.toArray<HTMLElement>('[data-counter]')

          counters.forEach((el) => {
            const target = Number(el.dataset.counter)

            if (reduceMotion) {
              el.textContent = String(target)
              return
            }

            const counter = { value: 0 }
            gsap.to(counter, {
              value: target,
              duration: 1.4,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = String(Math.round(counter.value))
              },
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            })
          })
        },
      )

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <div ref={scope} className="mx-auto max-w-7xl px-5 py-14 md:px-8">
      <dl className="grid grid-cols-2 gap-8 border-y border-formal-border py-10 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} data-reveal>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-4xl font-medium text-formal-ink sm:text-5xl">
              <span data-counter={stat.value}>0</span>
              <span aria-hidden="true">+</span>
            </dd>
            <p className="mt-2 font-meta text-xs uppercase tracking-wide text-formal-muted">{stat.label}</p>
          </div>
        ))}
      </dl>
    </div>
  )
}
