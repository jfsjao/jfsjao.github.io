import { useRef } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { APP_TITLES, useWindowStore } from '../../store/windowStore'
import {
  ICON_CELL_HEIGHT,
  ICON_CELL_WIDTH,
  ICON_GRID_PADDING,
  useDesktopIconStore,
} from '../../store/desktopIconStore'
import type { DesktopIconConfig } from '../../types/window.types'
import { useDoubleClick } from '../../hooks/useDoubleClick'
import { TASKBAR_HEIGHT_PX } from '../../config/layout.config'

const ICON_WIDTH = 80
const ICON_HEIGHT = 86
const DRAG_THRESHOLD_PX = 4

function snapToGrid(value: number, cell: number) {
  return ICON_GRID_PADDING + Math.round((value - ICON_GRID_PADDING) / cell) * cell
}

interface DesktopIconProps {
  app: DesktopIconConfig
  isDesktop: boolean
}

export function DesktopIcon({ app, isDesktop }: DesktopIconProps) {
  const openWindow = useWindowStore((state) => state.openWindow)
  const position = useDesktopIconStore((state) => state.positions[app.appId])
  const setPosition = useDesktopIconStore((state) => state.setPosition)
  const hasDraggedRef = useRef(false)

  const handleOpen = useDoubleClick(() =>
    openWindow({
      appId: app.appId,
      title: APP_TITLES[app.appId],
      icon: app.icon,
      x: app.defaultX,
      y: app.defaultY,
      width: app.defaultWidth,
      height: app.defaultHeight,
    }),
  )

  const handlePointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) {
      return
    }

    const startPointerX = event.clientX
    const startPointerY = event.clientY
    const startX = position.x
    const startY = position.y
    hasDraggedRef.current = false

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startPointerX
      const deltaY = moveEvent.clientY - startPointerY

      if (!hasDraggedRef.current && Math.hypot(deltaX, deltaY) < DRAG_THRESHOLD_PX) {
        return
      }

      hasDraggedRef.current = true

      const maxX = Math.max(ICON_GRID_PADDING, window.innerWidth - ICON_WIDTH - ICON_GRID_PADDING)
      const maxY = Math.max(
        ICON_GRID_PADDING,
        window.innerHeight - TASKBAR_HEIGHT_PX - ICON_HEIGHT - ICON_GRID_PADDING,
      )
      const nextX = Math.min(Math.max(ICON_GRID_PADDING, startX + deltaX), maxX)
      const nextY = Math.min(Math.max(ICON_GRID_PADDING, startY + deltaY), maxY)

      setPosition(app.appId, nextX, nextY)
    }

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)

      if (hasDraggedRef.current) {
        const current = useDesktopIconStore.getState().positions[app.appId]
        setPosition(
          app.appId,
          snapToGrid(current.x, ICON_CELL_WIDTH),
          snapToGrid(current.y, ICON_CELL_HEIGHT),
        )
      }
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp, { once: true })
  }

  const handleClick = () => {
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false
      return
    }

    handleOpen()
  }

  // Mobile XP (docs/next-prompt.md): launcher em grade, sem posição livre,
  // sem drag, um toque abre direto (nada de esperar um segundo toque).
  if (!isDesktop) {
    return (
      <button
        type="button"
        className="flex flex-col items-center justify-start gap-1 rounded-[4px] p-2 text-xp-text-inv outline-none active:bg-xp-blue/25"
        onClick={() =>
          openWindow({
            appId: app.appId,
            title: APP_TITLES[app.appId],
            icon: app.icon,
            x: app.defaultX,
            y: app.defaultY,
            width: app.defaultWidth,
            height: app.defaultHeight,
          })
        }
      >
        <img
          src={app.icon}
          alt=""
          className="h-11 w-11 object-contain drop-shadow-[1px_2px_1px_rgba(0,0,0,0.45)]"
          draggable={false}
        />
        <span className="max-w-[88px] px-[2px] text-center font-[Tahoma,'Segoe_UI',Arial,sans-serif] text-[12px] font-medium leading-[1.2] [text-shadow:1px_1px_2px_rgba(0,0,0,1)]">
          {app.label}
        </span>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="group absolute flex h-[94px] w-[92px] flex-col items-center justify-start gap-1 rounded-[1px] p-1 text-xp-text-inv outline-none hover:bg-xp-blue/25 focus:bg-xp-blue/45"
      style={{ left: position.x, top: position.y }}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      onDoubleClick={handleClick}
    >
      <img
        src={app.icon}
        alt=""
        className="h-11 w-11 object-contain drop-shadow-[1px_2px_1px_rgba(0,0,0,0.45)]"
        draggable={false}
      />
      <span className="max-w-[88px] px-[2px] text-center font-[Tahoma,'Segoe_UI',Arial,sans-serif] text-[12px] font-medium leading-[1.2] [text-shadow:1px_1px_2px_rgba(0,0,0,1)] group-focus:bg-xp-blue">
        {app.label}
      </span>
    </button>
  )
}
