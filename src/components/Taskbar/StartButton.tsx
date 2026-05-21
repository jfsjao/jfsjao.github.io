import { MonitorDot } from 'lucide-react'

export function StartButton() {
  return (
    <button
      type="button"
      className="ml-1 flex h-8 items-center gap-1 rounded-[8px_3px_3px_8px] bg-xp-start px-3 font-bold italic text-white shadow-start hover:bg-xp-start-hov"
    >
      <MonitorDot className="h-5 w-5" />
      iniciar
    </button>
  )
}
