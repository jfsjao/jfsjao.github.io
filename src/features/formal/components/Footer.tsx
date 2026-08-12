import { ABOUT } from '../../../data/portfolio.data'

interface FooterProps {
  onOpenWindows: () => void
}

export function Footer({ onOpenWindows }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-formal-border bg-formal-surface/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 font-meta text-xs uppercase tracking-wide text-formal-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          {ABOUT.name} · © {year}
        </p>
        <div className="flex items-center gap-6">
          <a href="#hero" className="transition-colors hover:text-formal-ink">
            Voltar ao topo
          </a>
          <a
            href="/?mode=windows"
            onClick={(event) => {
              event.preventDefault()
              onOpenWindows()
            }}
            className="transition-colors hover:text-formal-ink"
          >
            Modo Windows XP
          </a>
        </div>
        <p>{ABOUT.location}</p>
      </div>
    </footer>
  )
}
