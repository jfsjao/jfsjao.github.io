import type { DragControls } from 'framer-motion'
import { Maximize2, Minus, X } from 'lucide-react'
import { useWindowStore } from '../../store/windowStore'
import type { WindowState } from '../../types/window.types'

interface TitleBarProps {
  dragControls: DragControls
  windowState: WindowState
}

export function TitleBar({ dragControls, windowState }: TitleBarProps) {
  const closeWindow = useWindowStore((state) => state.closeWindow)
  const minimizeWindow = useWindowStore((state) => state.minimizeWindow)
  const maximizeWindow = useWindowStore((state) => state.maximizeWindow)

  return (
    <header
      className={`flex h-7 shrink-0 items-center gap-2 px-1 text-xp-sm font-bold text-white ${
        windowState.isFocused ? 'xp-titlebar-active' : 'xp-titlebar-inactive'
      }`}
      onPointerDown={(event) => dragControls.start(event)}
    >
      <span className="truncate px-1">{windowState.title}</span>
      <div className="ml-auto flex gap-1">
        <button
          type="button"
          className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-xp-minmax text-white shadow-btn-xp hover:bg-xp-minmax-hov"
          onClick={(event) => {
            event.stopPropagation()
            minimizeWindow(windowState.id)
          }}
          title="Minimizar"
        >
          <Minus className="h-3 w-3" />
        </button>
        <button
          type="button"
          className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-xp-minmax text-white shadow-btn-xp hover:bg-xp-minmax-hov"
          onClick={(event) => {
            event.stopPropagation()
            maximizeWindow(windowState.id)
          }}
          title="Maximizar"
        >
          <Maximize2 className="h-3 w-3" />
        </button>
        <button
          type="button"
          className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-xp-close text-white shadow-btn-xp hover:bg-xp-close-hov"
          onClick={(event) => {
            event.stopPropagation()
            closeWindow(windowState.id)
          }}
          title="Fechar"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </header>
  )
}
