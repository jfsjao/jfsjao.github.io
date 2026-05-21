import { useWindowStore } from '../../store/windowStore'
import type { WindowState } from '../../types/window.types'

interface TaskbarItemProps {
  windowState: WindowState
}

export function TaskbarItem({ windowState }: TaskbarItemProps) {
  const restoreWindow = useWindowStore((state) => state.restoreWindow)
  const minimizeWindow = useWindowStore((state) => state.minimizeWindow)

  const handleClick = () => {
    if (windowState.isFocused && !windowState.isMinimized) {
      minimizeWindow(windowState.id)
      return
    }

    restoreWindow(windowState.id)
  }

  return (
    <button
      type="button"
      className="min-w-0 max-w-48 flex-1 truncate rounded-[2px] border border-xp-blue-light bg-xp-taskbar-btn px-2 py-1 text-left text-xp-sm shadow-btn-xp hover:bg-xp-taskbar-btn-hov"
      onClick={handleClick}
      title={windowState.title}
    >
      {windowState.title}
    </button>
  )
}
