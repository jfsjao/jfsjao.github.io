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
      className={`flex h-[27px] shrink-0 items-center gap-1 rounded-[4px_4px_0_0] px-[2px] font-[Tahoma] text-[14px] font-bold text-white ${
        windowState.isFocused ? 'xp-titlebar-active' : 'xp-titlebar-inactive'
      }`}
      onPointerDown={onDragStart}
      onDoubleClick={() => maximizeWindow(windowState.id)}
    >
      <img
        src={windowState.icon}
        alt=""
        width={16}
        height={16}
        className="h-4 w-4 shrink-0 object-contain"
        draggable={false}
      />
      <span className="truncate px-[2px] [text-shadow:1px_1px_1px_rgba(0,0,0,0.7)]">
        {windowState.title}
      </span>
      <div className="ml-auto flex gap-[2px]">
        <button
          type="button"
          className="xp-caption-button xp-caption-button-blue"
          data-glyph="minimize"
          aria-label="Minimizar"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation()
            minimizeWindow(windowState.id)
          }}
          title="Minimizar"
        />
        <button
          type="button"
          className="xp-caption-button xp-caption-button-blue"
          data-glyph={windowState.isMaximized ? 'restore' : 'maximize'}
          aria-label={windowState.isMaximized ? 'Restaurar' : 'Maximizar'}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation()
            maximizeWindow(windowState.id)
          }}
          title={windowState.isMaximized ? 'Restaurar' : 'Maximizar'}
        />
        <button
          type="button"
          className="xp-caption-button xp-caption-button-close"
          data-glyph="close"
          aria-label="Fechar"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation()
            closeWindow(windowState.id)
          }}
          title="Fechar"
        />
      </div>
    </header>
  )
}
