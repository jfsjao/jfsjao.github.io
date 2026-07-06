import { useEffect, useState } from 'react'
import infoIcon from '../../assets/icons/icon__info.png'

function formatClock(date: Date) {
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function Clock() {
  const [time, setTime] = useState(() => formatClock(new Date()))

  useEffect(() => {
    const timer = window.setInterval(() => setTime(formatClock(new Date())), 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="flex h-full w-[118px] items-center justify-center gap-2 border-l border-[#6eb4ff] bg-[linear-gradient(180deg,#22a6ef,#0d7ed2)] text-xp-sm shadow-[inset_1px_0_0_rgba(255,255,255,0.4)]">
      <button
        type="button"
        className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-[#0b69b7] text-[10px] shadow-[inset_1px_1px_0_rgba(255,255,255,0.45)]"
        aria-label="Mostrar icones ocultos"
      >
        {'<'}
      </button>
      <img src={infoIcon} alt="" className="h-4 w-4" draggable={false} />
      <span>{time}</span>
    </div>
  )
}
