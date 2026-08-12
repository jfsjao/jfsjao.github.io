import { useEffect, useState } from 'react'

// Mirrors Tailwind's default `md` breakpoint (768px). See docs/next-prompt.md
// "Mobile XP": below 768px the XP shell runs in single-window, no-drag mode;
// at or above it, the free desktop (drag, resize, multiple windows) applies.
const DESKTOP_QUERY = '(min-width: 768px)'

export function useIsDesktopViewport() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches)

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY)
    const handleChange = () => setIsDesktop(mql.matches)

    handleChange()
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  return isDesktop
}
