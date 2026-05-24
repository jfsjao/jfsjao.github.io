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
      className={`flex min-w-0 max-w-48 flex-1 items-center gap-2 truncate rounded-[2px] border px-2 py-1 text-left text-xp-sm shadow-btn-xp ${
        windowState.isFocused && !windowState.isMinimized
          ? 'border-[#0d2d89] bg-[linear-gradient(180deg,#1644aa,#0b2f8b)]'
          : 'border-xp-blue-light bg-[linear-gradient(180deg,#3a70d8,#1e3f9e)] hover:bg-xp-taskbar-btn-hov'
      }`}
      onClick={handleClick}
      title={windowState.title}
    >
      <img src={windowState.icon} alt="" className="h-5 w-5 shrink-0" draggable={false} />
      <span className="truncate">{windowState.title}</span>
    </button>
  )
}
