import type { WindowState } from '../../types/window.types'

interface ResizeHandleProps {
  windowState: WindowState
}

export function ResizeHandle({ windowState }: ResizeHandleProps) {
  if (windowState.isMaximized) {
    return null
  }

  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 right-0 h-3 w-3 cursor-se-resize border-b-2 border-r-2 border-xp-blue-dark"
    />
  )
}
