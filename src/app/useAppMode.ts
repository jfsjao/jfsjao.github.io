import { useCallback, useEffect, useState } from 'react'

export type AppMode = 'formal' | 'windows'

function readMode(): AppMode {
  const params = new URLSearchParams(window.location.search)
  return params.get('mode') === 'windows' ? 'windows' : 'formal'
}

export function useAppMode() {
  const [mode, setCurrentMode] = useState<AppMode>(readMode)

  useEffect(() => {
    const handlePopState = () => setCurrentMode(readMode())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const setMode = useCallback((nextMode: AppMode) => {
    const url = new URL(window.location.href)

    if (nextMode === 'windows') {
      url.searchParams.set('mode', 'windows')
    } else {
      url.searchParams.delete('mode')
    }

    window.history.pushState({}, '', url)
    setCurrentMode(nextMode)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return { mode, setMode }
}
