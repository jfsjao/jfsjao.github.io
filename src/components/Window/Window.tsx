import { motion, useDragControls } from 'framer-motion'
import { useWindowStore } from '../../store/windowStore'
import type { WindowState } from '../../types/window.types'
import { TitleBar } from './TitleBar'
import { ResizeHandle } from './ResizeHandle'

interface WindowProps {
  windowState: WindowState
  children: React.ReactNode
}

export function Window({ windowState, children }: WindowProps) {
  const dragControls = useDragControls()
  const focusWindow = useWindowStore((state) => state.focusWindow)
  const moveWindow = useWindowStore((state) => state.moveWindow)

  if (windowState.isMinimized) {
    return null
  }

  return (
    <motion.section
      drag={!windowState.isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      onDragEnd={(_, info) => {
        moveWindow(
          windowState.id,
          windowState.x + info.offset.x,
          windowState.y + info.offset.y,
        )
      }}
      onMouseDown={() => focusWindow(windowState.id)}
      className="absolute flex flex-col overflow-hidden rounded-[4px] border-2 border-xp-window-border bg-xp-window-bg shadow-window"
      style={{
        display: windowState.isMinimized ? 'none' : 'flex',
        height: windowState.isMaximized ? 'calc(100svh - 40px)' : windowState.height,
        left: windowState.isMaximized ? 0 : windowState.x,
        top: windowState.isMaximized ? 0 : windowState.y,
        width: windowState.isMaximized ? '100vw' : windowState.width,
        zIndex: windowState.zIndex,
      }}
    >
      <TitleBar dragControls={dragControls} windowState={windowState} />
      <div className="min-h-0 flex-1 overflow-auto border border-white bg-xp-window-inner text-xp-base">
        {children}
      </div>
      <ResizeHandle windowState={windowState} />
    </motion.section>
  )
}
