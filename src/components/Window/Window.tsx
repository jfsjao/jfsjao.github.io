import { motion } from 'framer-motion'
import { useWindowStore } from '../../store/windowStore'
import type { WindowState } from '../../types/window.types'
import { TitleBar } from './TitleBar'
import { ResizeHandle } from './ResizeHandle'
import type { PointerEvent as ReactPointerEvent } from 'react'

interface WindowProps {
  windowState: WindowState
  children: React.ReactNode
}

export function Window({ windowState, children }: WindowProps) {
  const focusWindow = useWindowStore((state) => state.focusWindow)
  const moveWindow = useWindowStore((state) => state.moveWindow)
  const resizeWindow = useWindowStore((state) => state.resizeWindow)

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
      const maxY = Math.max(0, window.innerHeight - 40 - 28)

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
      const maxHeight = Math.max(160, window.innerHeight - 40 - windowState.y)
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
      className="absolute flex flex-col overflow-hidden rounded-[6px_6px_3px_3px] border border-[#0831d9] bg-xp-window-bg p-[2px] shadow-window"
      style={{
        display: windowState.isMinimized ? 'none' : 'flex',
        height: windowState.isMaximized ? 'calc(100svh - 40px)' : windowState.height,
        left: windowState.isMaximized ? 0 : windowState.x,
        top: windowState.isMaximized ? 0 : windowState.y,
        width: windowState.isMaximized ? '100vw' : windowState.width,
        zIndex: windowState.zIndex,
      }}
    >
      <TitleBar onDragStart={handleDragStart} windowState={windowState} />
      <div className="min-h-0 flex-1 overflow-auto border border-[#00138c] bg-xp-window-inner text-xp-base shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#aca899]">
        {children}
      </div>
      <ResizeHandle onResizeStart={handleResizeStart} windowState={windowState} />
    </motion.section>
  )
}
