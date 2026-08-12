import { lazy, Suspense, useEffect } from 'react'
import { FormalPortfolio } from './features/formal/FormalPortfolio'
import { useAppMode } from './app/useAppMode'
import { useFavicon } from './app/useFavicon'

const WindowsPortfolio = lazy(() =>
  import('./features/windows/WindowsPortfolio').then((module) => ({
    default: module.WindowsPortfolio,
  })),
)

function App() {
  const { mode, setMode } = useAppMode()
  useFavicon(mode)

  useEffect(() => {
    document.documentElement.dataset.mode = mode
  }, [mode])

  if (mode === 'windows') {
    return (
      <Suspense
        fallback={
          <main className="flex min-h-[100dvh] items-center justify-center bg-[#111419] text-white">
            Carregando modo Windows…
          </main>
        }
      >
        <WindowsPortfolio onReturn={() => setMode('formal')} />
      </Suspense>
    )
  }

  return <FormalPortfolio onOpenWindows={() => setMode('windows')} />
}

export default App
