import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { TechStrip } from './components/TechStrip'
import { About } from './components/About'
import { Focus } from './components/Focus'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { GradientField } from './components/GradientField'
import { useSectionReveal } from './hooks/useSectionReveal'

interface FormalPortfolioProps {
  onOpenWindows: () => void
}

export function FormalPortfolio({ onOpenWindows }: FormalPortfolioProps) {
  const mainRef = useSectionReveal<HTMLElement>()

  return (
    <div className="min-h-[100dvh] text-formal-ink">
      <GradientField />

      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-formal-ink px-4 py-3 font-meta text-sm font-semibold text-white transition-transform focus:translate-y-0"
      >
        Ir para conteúdo
      </a>

      <Navbar onOpenWindows={onOpenWindows} />

      <main id="conteudo" ref={mainRef}>
        <Hero />
        <Stats />
        <TechStrip />
        <About />
        <Focus />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer onOpenWindows={onOpenWindows} />
    </div>
  )
}
