import { ABOUT } from '../../../data/portfolio.data'
import { WordToolbar } from './WordToolbar'

export function WordApp() {
  return (
    <article className="h-full bg-xp-window-bg">
      <WordToolbar />
      <div className="m-3 min-h-[360px] bg-white p-8 shadow-[0_0_0_1px_#b5b5b5,4px_4px_0_rgba(0,0,0,0.16)]">
        <h1 className="mb-2 font-serif text-2xl font-bold">{ABOUT.name}</h1>
        <p className="mb-4 text-xp-md">{ABOUT.role}</p>
        <p className="leading-relaxed">{ABOUT.bio}</p>
        <p className="mt-6 text-xp-sm text-xp-text-muted">{ABOUT.location}</p>
      </div>
    </article>
  )
}
