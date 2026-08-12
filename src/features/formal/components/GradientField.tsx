import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Camada de fundo fixa com blobs de gradiente suave (azul → verde-água) que
 * derivam lentamente conforme o scroll da página, dando a sensação de um
 * "mesh gradient" vivo sem custo de reprocessar layout. Puramente decorativo
 * (aria-hidden) e desativado sob prefers-reduced-motion.
 */
export function GradientField() {
  const scope = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
        const blobs = gsap.utils.toArray<HTMLElement>('[data-blob]')

        gsap.to(blobs[0], {
          yPercent: 24,
          xPercent: -6,
          ease: 'none',
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
        })
        gsap.to(blobs[1], {
          yPercent: -18,
          xPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
        })
        gsap.to(blobs[2], {
          yPercent: 14,
          xPercent: 10,
          ease: 'none',
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
        })

        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <div ref={scope} aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-formal-bg">
      <div
        data-blob
        className="absolute left-[-10%] top-[-15%] h-[min(55vw,640px)] w-[min(55vw,640px)] rounded-full opacity-[0.55] blur-[60px]"
        style={{
          background: 'radial-gradient(circle, #6CA0F6 0%, transparent 70%)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
      <div
        data-blob
        className="absolute right-[-15%] top-[20%] h-[min(50vw,580px)] w-[min(50vw,580px)] rounded-full opacity-[0.45] blur-[60px]"
        style={{
          background: 'radial-gradient(circle, #79D6C4 0%, transparent 70%)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
      <div
        data-blob
        className="absolute bottom-[-20%] left-[10%] h-[min(60vw,700px)] w-[min(60vw,700px)] rounded-full opacity-[0.4] blur-[60px]"
        style={{
          background: 'radial-gradient(circle, #9CD68A 0%, transparent 70%)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  )
}
