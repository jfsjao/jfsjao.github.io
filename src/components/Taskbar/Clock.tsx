import { useEffect, useState } from 'react'

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
    <div className="flex h-full w-24 items-center justify-center border-l border-xp-blue-light bg-xp-blue-mid text-xp-sm">
      {time}
    </div>
  )
}
