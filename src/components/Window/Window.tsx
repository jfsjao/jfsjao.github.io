import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useWindowStore } from '../../store/windowStore'
import type { WindowState } from '../../types/window.types'
import { TitleBar } from './TitleBar'
import { ResizeHandle } from './ResizeHandle'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { TASKBAR_HEIGHT_PX } from '../../config/layout.config'
import { renderApp } from '../../config/appRegistry'

interface WindowProps {
  windowState: WindowState
}

function WindowComponent({ windowState }: WindowProps) {
  const focusWindow = useWindowStore((state) => state.focusWindow)
  const moveWindow = useWindowStore((state) => state.moveWindow)
  const resizeWindow = useWindowStore((state) => state.resizeWindow)

  // Rendering the app body is expensive (canvas draws, lists, etc). Since the
  // appId of a window never changes after it's opened, memoize it so dragging
  // or resizing this window (or any other) never re-mounts/re-renders its content.
  const appContent = useMemo(() => renderApp(windowState.appId), [windowState.appId])

  if (windowState.isMinimized) {
    return null
  }

  const handleDragStart = (event: ReactPointerEvent<HTMLElement>) => {
    if (windowState.isMaximized) {
      return
    }

    event.preventDefault()
    focusWindow(windowState.id)

    const startPointerX = event.clientX
    const startPointerY = event.clientY
    const startWindowX = windowState.x
    const startWindowY = windowState.y

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const nextX = startWindowX + moveEvent.clientX - startPointerX
      const nextY = startWindowY + moveEvent.clientY - startPointerY
      const maxX = Math.max(0, window.innerWidth - windowState.width)
      const maxY = Math.max(0, window.innerHeight - TASKBAR_HEIGHT_PX - 28)

      moveWindow(
        windowState.id,
        Math.min(Math.max(0, nextX), maxX),
        Math.min(Math.max(0, nextY), maxY),
      )
    }

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp, { once: true })
  }

  const handleResizeStart = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (windowState.isMaximized) {
      return
    }

    event.preventDefault()
    event.stopPropagation()
    focusWindow(windowState.id)

    const startPointerX = event.clientX
    const startPointerY = event.clientY
    const startWidth = windowState.width
    const startHeight = windowState.height

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const maxWidth = Math.max(260, window.innerWidth - windowState.x)
      const maxHeight = Math.max(160, window.innerHeight - TASKBAR_HEIGHT_PX - windowState.y)
      const nextWidth = startWidth + moveEvent.clientX - startPointerX
      const nextHeight = startHeight + moveEvent.clientY - startPointerY

      resizeWindow(
        windowState.id,
        Math.min(Math.max(260, nextWidth), maxWidth),
        Math.min(Math.max(160, nextHeight), maxHeight),
      )
    }

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp, { once: true })
  }

  return (
    <motion.section
      onMouseDown={() => focusWindow(windowState.id)}
      className={`absolute flex flex-col overflow-hidden rounded-[7px_7px_2px_2px] border-[3px] bg-[#0054e3] shadow-[2px_3px_10px_rgba(0,0,0,0.45),inset_1px_1px_0_rgba(255,255,255,0.38)] ${
        windowState.isFocused ? 'border-[#0054e3]' : 'border-[#7697e7]'
      }`}
      style={{
        display: windowState.isMinimized ? 'none' : 'flex',
        height: windowState.isMaximized ? `calc(100svh - ${TASKBAR_HEIGHT_PX}px)` : windowState.height,
        left: windowState.isMaximized ? 0 : windowState.x,
        top: windowState.isMaximized ? 0 : windowState.y,
        width: windowState.isMaximized ? '100vw' : windowState.width,
        zIndex: windowState.zIndex,
      }}
    >
      <TitleBar onDragStart={handleDragStart} windowState={windowState} />
      <div className="mx-0 min-h-0 flex-1 overflow-auto border-x border-b border-[#00138c] bg-xp-window-inner text-xp-base">
        {appContent}
      </div>
      <ResizeHandle onResizeStart={handleResizeStart} windowState={windowState} />
    </motion.section>
  )
}

// windowStore keeps referential identity for windows untouched by a given
// update (see moveWindow/resizeWindow), so this memo means dragging/resizing
// one window doesn't re-render every other open window's app content.
export const Window = memo(WindowComponent, (prev, next) => prev.windowState === next.windowState)
