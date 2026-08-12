import { useEffect, useState } from 'react'
import { BootScreen } from '../../components/Boot/BootScreen'
import { Desktop } from '../../components/Desktop/Desktop'
import { useWindowStore } from '../../store/windowStore'
import { useSound } from '../../hooks/useSound'
import logOutIcon from '../../assets/icons/icon__log_out--large.png'
import restartIcon from '../../assets/icons/icon__restart--large.png'
import shutDownIcon from '../../assets/icons/icon__shut_down--large.png'
import startupSound from '../../assets/sounds/audio__startup.wav'
import shutdownSound from '../../assets/sounds/audio__shutdown.wav'
import windowsLogo from '../../assets/icons/logo__windows_xp.png'

interface WindowsPortfolioProps {
  onReturn: () => void
}

type StartupStage = 'bios' | 'login'
type ShutdownStage = 'loggingOff' | 'shuttingDown' | null

const BOOT_SESSION_KEY = 'xpBootSeen'

export function WindowsPortfolio({ onReturn }: WindowsPortfolioProps) {
  const [isBooting, setIsBooting] = useState(
    () => window.sessionStorage.getItem(BOOT_SESSION_KEY) !== 'true',
  )
  const [startupStage, setStartupStage] = useState<StartupStage>('bios')
  const [isPowerOpen, setIsPowerOpen] = useState(false)
  const [shutdownStage, setShutdownStage] = useState<ShutdownStage>(null)
  const resetWindows = useWindowStore((state) => state.resetWindows)
  const playStartupSound = useSound(startupSound)
  const playShutdownSound = useSound(shutdownSound)

  useEffect(() => {
    if (!shutdownStage) {
      return
    }

    const timer = window.setTimeout(() => {
      if (shutdownStage === 'loggingOff') {
        setShutdownStage('shuttingDown')
        return
      }

      onReturn()
    }, shutdownStage === 'loggingOff' ? 1000 : 2400)

    return () => window.clearTimeout(timer)
  }, [shutdownStage, onReturn])

  const finishBoot = () => {
    window.sessionStorage.setItem(BOOT_SESSION_KEY, 'true')
    setIsBooting(false)
    playStartupSound()
  }

  const handleLogout = () => {
    resetWindows()
    setStartupStage('login')
    setIsBooting(true)
  }

  const handleRestart = () => {
    resetWindows()
    window.sessionStorage.removeItem(BOOT_SESSION_KEY)
    setIsPowerOpen(false)
    setStartupStage('bios')
    setIsBooting(true)
  }

  const handleShutdown = () => {
    resetWindows()
    window.sessionStorage.removeItem(BOOT_SESSION_KEY)
    setIsPowerOpen(false)
    setShutdownStage('loggingOff')
    playShutdownSound()
  }

  if (shutdownStage) {
    return (
      <main className="grid min-h-[100dvh] grid-rows-[clamp(70px,18vh,160px)_1fr_clamp(70px,18vh,160px)] bg-[#5a7edc] font-[Tahoma,'Segoe_UI',Arial,sans-serif] text-white">
        <div className="border-b-[3px] border-[#94adf4] bg-[#28369f]" />
        <div className="flex items-center justify-center bg-[radial-gradient(circle_at_center,#7594df_0%,#6685d2_48%,#5a78c5_100%)] px-6 text-center">
          <div className="flex translate-x-4 flex-col items-center sm:translate-x-12">
            <img
              src={windowsLogo}
              alt="Microsoft Windows XP"
              width={272}
              height={164}
              className="h-auto w-[190px] sm:w-[220px]"
              draggable={false}
            />
            <p className="mt-2 text-xl font-normal [text-shadow:1px_1px_1px_rgba(0,0,0,0.22)] sm:text-2xl">
              {shutdownStage === 'loggingOff'
                ? 'Fazendo logoff...'
                : 'O Windows está sendo desligado...'}
            </p>
          </div>
        </div>
        <div className="border-t-[3px] border-[#e68a3c] bg-[#28369f]" />
      </main>
    )
  }

  if (isBooting) {
    return (
      <BootScreen
        initialStage={startupStage === 'login' ? 'login' : 'bios'}
        onStart={finishBoot}
        onShutdown={handleShutdown}
      />
    )
  }

  return (
    <div className="relative min-h-[100dvh]">
      <Desktop onLogout={handleLogout} onPower={() => setIsPowerOpen(true)} />
      {isPowerOpen && (
        <PowerDialog
          onCancel={() => setIsPowerOpen(false)}
          onLogout={handleLogout}
          onRestart={handleRestart}
          onShutdown={handleShutdown}
        />
      )}
    </div>
  )
}

interface PowerDialogProps {
  onCancel: () => void
  onLogout: () => void
  onRestart: () => void
  onShutdown: () => void
}

function PowerDialog({
  onCancel,
  onLogout,
  onRestart,
  onShutdown,
}: PowerDialogProps) {
  const actions = [
    { label: 'Logoff', icon: logOutIcon, action: onLogout },
    { label: 'Reiniciar', icon: restartIcon, action: onRestart },
    { label: 'Desligar', icon: shutDownIcon, action: onShutdown },
  ]

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[11000] flex items-center justify-center bg-[#001b64]/55 p-4 font-xp"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onCancel()
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="power-title"
        className="w-full max-w-md overflow-hidden rounded-[7px] border-2 border-white/60 bg-[#5a7edc] text-white shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
      >
        <header className="bg-[#00309c] px-5 py-3">
          <h2 id="power-title" className="text-lg font-bold">
            Desligar o computador
          </h2>
        </header>
        <div className="flex flex-wrap justify-center gap-5 px-5 py-8">
          {actions.map(({ label, icon, action }) => (
            <button
              key={label}
              type="button"
              onClick={action}
              className="flex min-w-24 flex-col items-center gap-2 rounded-[5px] p-3 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <img src={icon} alt="" width={48} height={48} draggable={false} />
              <span className="font-bold">{label}</span>
            </button>
          ))}
        </div>
        <footer className="flex justify-end bg-[#00309c] px-5 py-3">
          <button
            type="button"
            onClick={onCancel}
            className="border border-white/70 bg-[#245edc] px-5 py-2 font-bold hover:bg-[#356fe8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Cancelar
          </button>
        </footer>
      </section>
    </div>
  )
}
