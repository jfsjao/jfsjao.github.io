import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Revela os elementos com `data-reveal` com um fade+subida curto ao entrarem
 * na viewport.
 *
 * Performance: em vez de um fromTo + ScrollTrigger por elemento (35 tweens
 * lendo estilo computado intercalado com escrita = layout thrashing no load),
 * usa um único `gsap.set` (lê tudo, depois escreve tudo) e `ScrollTrigger.batch`
 * com `once: true`, que anima em lote e descarta o trigger depois de revelar.
 * Nada volta a sumir ao rolar para cima.
 *
 * Com `prefers-reduced-motion: reduce` nada é escondido: o conteúdo já aparece.
 */
export function useSectionReveal<T extends HTMLElement>() {
  const scope = useRef<T>(null)

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]')
      if (targets.length === 0) return

      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', (context) => {
        gsap.set(targets, { autoAlpha: 0, y: 24 })

        // context.add: tweens criados depois (no callback) também entram no
        // revert do matchMedia/useGSAP.
        const reveal = context.add('reveal', (batch: Element[]) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.06,
            overwrite: true,
          }),
        ) as ScrollTrigger.BatchCallback

        ScrollTrigger.batch(targets, { start: 'top 92%', once: true, onEnter: reveal })
      })

      return () => mm.revert()
    },
    { scope },
  )

  return scope
}
