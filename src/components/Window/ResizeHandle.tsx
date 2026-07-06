import type { WindowState } from '../../types/window.types'
import type { PointerEvent as ReactPointerEvent } from 'react'

interface ResizeHandleProps {
  onResizeStart: (event: ReactPointerEvent<HTMLDivElement>) => void
  windowState: WindowState
}

export function ResizeHandle({ onResizeStart, windowState }: ResizeHandleProps) {
  if (windowState.isMaximized) {
    return null
  }

  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 right-0 h-4 w-4 cursor-se-resize border-b-2 border-r-2 border-xp-blue-dark bg-[linear-gradient(135deg,transparent_0_45%,#7f9db9_46%_55%,transparent_56%)]"
      onPointerDown={onResizeStart}
    />
  )
}
