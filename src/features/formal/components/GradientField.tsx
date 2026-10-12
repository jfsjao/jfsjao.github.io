import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Gradiente radial que imita o antigo `radial-gradient(...) + filter: blur(60px)`
 * sem usar filter. Blur de 60px em três camadas grandes que se movem com o
 * scroll obrigava a GPU a refazer o desfoque a cada frame (jank no desktop).
 * Os stops abaixo aproximam a curva cone ⊛ gaussiana do visual original.
 */
function softGlow(hex: string): string {
  const n = parseInt(hex.slice(1), 16)
  const rgb = `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`
  const stops: Array<[number, number]> = [
    [0.78, 0],
    [0.68, 13],
    [0.48, 27],
    [0.26, 41],
    [0.1, 54],
    [0.03, 65],
    [0, 85],
  ]
  return `radial-gradient(closest-side, ${stops.map(([a, at]) => `rgba(${rgb}, ${a}) ${at}%`).join(', ')})`
}

const BLOBS = [
  { color: '#6CA0F6', className: 'left-[-10%] top-[-15%] h-[min(55vw,640px)] w-[min(55vw,640px)] opacity-[0.55]' },
  { color: '#79D6C4', className: 'right-[-15%] top-[20%] h-[min(50vw,580px)] w-[min(50vw,580px)] opacity-[0.45]' },
  { color: '#9CD68A', className: 'bottom-[-20%] left-[10%] h-[min(60vw,700px)] w-[min(60vw,700px)] opacity-[0.4]' },
]

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

        // Uma timeline com um único ScrollTrigger em vez de três triggers iguais.
        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
          })
          .to(blobs[0], { yPercent: 24, xPercent: -6 }, 0)
          .to(blobs[1], { yPercent: -18, xPercent: 8 }, 0)
          .to(blobs[2], { yPercent: 14, xPercent: 10 }, 0)
        // Sem cleanup manual: o mm.revert() abaixo mata só os triggers daqui.
        // (O antigo ScrollTrigger.getAll().kill() matava os da página inteira.)
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <div ref={scope} aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-formal-bg">
      {BLOBS.map((blob) => (
        <div key={blob.color} data-blob className={`absolute ${blob.className}`} style={{ willChange: 'transform' }}>
          {/* inset negativo ≈ alcance do antigo blur(60px) além da borda */}
          <div className="absolute inset-[-28%]" style={{ background: softGlow(blob.color) }} />
        </div>
      ))}
    </div>
  )
}
