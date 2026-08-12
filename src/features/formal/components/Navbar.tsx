import { ABOUT } from '../../../data/portfolio.data'

interface NavbarProps {
  onOpenWindows: () => void
}

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#focos', label: 'Focos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar({ onOpenWindows }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-formal-border/70 bg-formal-bg/95 backdrop-blur-sm">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-end gap-4 px-5 md:h-[76px] md:px-8 lg:justify-between"
      >
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 font-meta text-xs uppercase tracking-wide text-formal-muted transition-colors hover:bg-black/5 hover:text-formal-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-formal-blue"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-formal-border bg-formal-surface px-3 py-1.5 font-meta text-xs text-formal-muted sm:flex">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              {ABOUT.available && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-formal-green opacity-60" />
              )}
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${ABOUT.available ? 'bg-formal-green' : 'bg-formal-muted'}`}
              />
            </span>
            {ABOUT.available ? 'Disponível' : 'Indisponível'}
          </span>

          <a
            href="/?mode=windows"
            onClick={(event) => {
              event.preventDefault()
              onOpenWindows()
            }}
            className="whitespace-nowrap rounded-lg border border-formal-dark bg-formal-ink px-4 py-2.5 font-meta text-xs font-semibold uppercase tracking-wide text-white shadow-[0_4px_14px_rgba(18,35,24,0.18)] transition-[background-color,transform] hover:bg-formal-dark active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-formal-blue"
          >
            Modo Windows XP
          </a>
        </div>
      </nav>

      <div
        className="flex gap-1 overflow-x-auto border-t border-formal-border/70 px-5 py-2 lg:hidden"
        aria-label="Seções da página"
        role="navigation"
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap rounded-md px-2.5 py-1 font-meta text-xs uppercase tracking-wide text-formal-muted hover:bg-black/5 hover:text-formal-ink"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
