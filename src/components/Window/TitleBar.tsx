import { useWindowStore } from '../../store/windowStore'
import type { WindowState } from '../../types/window.types'
import type { PointerEvent as ReactPointerEvent } from 'react'

interface TitleBarProps {
  onDragStart: (event: ReactPointerEvent<HTMLElement>) => void
  windowState: WindowState
}

export function TitleBar({ onDragStart, windowState }: TitleBarProps) {
  const closeWindow = useWindowStore((state) => state.closeWindow)
  const minimizeWindow = useWindowStore((state) => state.minimizeWindow)
  const maximizeWindow = useWindowStore((state) => state.maximizeWindow)

  return (
    <header
      className={`mb-[2px] flex h-7 shrink-0 items-center gap-2 rounded-[4px_4px_1px_1px] px-1 text-xp-sm font-bold text-white ${
        windowState.isFocused ? 'xp-titlebar-active' : 'xp-titlebar-inactive'
      }`}
      onPointerDown={onDragStart}
    >
      <img src={windowState.icon} alt="" className="h-5 w-5 shrink-0" draggable={false} />
      <span className="truncate px-1 [text-shadow:1px_1px_1px_rgba(0,0,0,0.7)]">
        {windowState.title}
      </span>
      <div className="ml-auto flex gap-[2px]">
        <button
          type="button"
          className="xp-caption-button xp-caption-button-blue"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation()
            minimizeWindow(windowState.id)
          }}
          title="Minimizar"
        >
          <span className="absolute bottom-[5px] left-[5px] h-[2px] w-[9px] bg-white shadow-[1px_1px_0_rgba(0,0,0,0.35)]" />
        </button>
        <button
          type="button"
          className="xp-caption-button xp-caption-button-blue"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation()
            maximizeWindow(windowState.id)
          }}
          title="Maximizar"
        >
          <span className="absolute left-[5px] top-[5px] h-[10px] w-[10px] border-2 border-white shadow-[1px_1px_0_rgba(0,0,0,0.35)]" />
        </button>
        <button
          type="button"
          className="xp-caption-button xp-caption-button-close"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation()
            closeWindow(windowState.id)
          }}
          title="Fechar"
        >
          <span className="absolute left-[5px] top-[9px] h-[2px] w-[11px] rotate-45 bg-white shadow-[1px_1px_0_rgba(0,0,0,0.35)]" />
          <span className="absolute left-[5px] top-[9px] h-[2px] w-[11px] -rotate-45 bg-white shadow-[1px_1px_0_rgba(0,0,0,0.35)]" />
        </button>
      </div>
    </header>
  )
}
