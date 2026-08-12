import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Revela os filhos diretos com `data-reveal` de uma seção com um fade+subida
 * curto ao entrar na viewport. Respeita `prefers-reduced-motion` via
 * gsap.matchMedia. Usuários com a preferência ativa recebem apenas um fade
 * instantâneo, sem deslocamento.
 */
export function useSectionReveal<T extends HTMLElement>() {
  const scope = useRef<T>(null)

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]')
      if (targets.length === 0) return

      const mm = gsap.matchMedia()

      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
          fullMotion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean }

          targets.forEach((el) => {
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: reduceMotion ? 0 : 24 },
              {
                autoAlpha: 1,
                y: 0,
                duration: reduceMotion ? 0.01 : 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              },
            )
          })
        },
      )

      return () => mm.revert()
    },
    { scope },
  )

  return scope
}
