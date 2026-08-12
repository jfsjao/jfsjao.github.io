import { useEffect, useState } from 'react'
import infoIcon from '../../assets/icons/icon__info.png'

function formatClock(date: Date) {
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

interface ClockProps {
  isNotificationOpen: boolean
  onNotificationToggle: () => void
}

export function Clock({ isNotificationOpen, onNotificationToggle }: ClockProps) {
  const [time, setTime] = useState(() => formatClock(new Date()))

  useEffect(() => {
    const timer = window.setInterval(() => setTime(formatClock(new Date())), 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="flex h-full w-[122px] items-center justify-center gap-1.5 border-l border-[#0a2e52] bg-[linear-gradient(180deg,#16aef0_3%,#168de8_16%,#0d8dea_90%,#095bc9_100%)] font-xp text-[15px] shadow-[inset_1px_0_1px_#22c4f4]">
      <button
        type="button"
        className="flex h-full w-4 items-center justify-center text-xp-text-inv/80 transition-colors hover:bg-white/10 active:bg-black/10"
        aria-label="Mostrar icones ocultos"
      >
        <svg width="6" height="9" viewBox="0 0 6 9" fill="none" aria-hidden="true">
          <path d="M5.5 0.5L1 4.5L5.5 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onNotificationToggle}
        aria-label={isNotificationOpen ? 'Fechar notificação' : 'Abrir notificação'}
        aria-expanded={isNotificationOpen}
        className="flex h-6 w-5 items-center justify-center rounded-[2px] hover:bg-white/15 active:translate-y-px active:bg-black/10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
      >
        <img src={infoIcon} alt="" className="h-4 w-4" draggable={false} />
      </button>
      <span>{time}</span>
    </div>
  )
}
