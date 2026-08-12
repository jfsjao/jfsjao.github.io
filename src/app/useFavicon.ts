import { useEffect } from 'react'
import type { AppMode } from './useAppMode'
import windowsFavicon from '../assets/icons/favicon.png'

// Mantém em sincronia com o favicon estático definido em `index.html`
// (usado antes do React montar, sempre no modo formal).
const FORMAL_FAVICON =
  'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>%F0%9F%A7%91%F0%9F%8F%BF%E2%80%8D%F0%9F%92%BB</text></svg>'

/** Favicon dinâmico: emoji no portfólio formal, logo do Windows no modo XP. */
export function useFavicon(mode: AppMode) {
  useEffect(() => {
    const link = document.getElementById('favicon')
    if (!(link instanceof HTMLLinkElement)) {
      return
    }

    link.href = mode === 'windows' ? windowsFavicon : FORMAL_FAVICON
  }, [mode])
}
