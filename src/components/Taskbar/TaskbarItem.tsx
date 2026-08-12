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
      className={`flex h-full w-[clamp(8rem,18vw,14rem)] min-w-0 shrink-0 items-center gap-1.5 overflow-hidden rounded-[3px] border border-[#1a51c688] px-2 py-px text-left font-[Tahoma,'Segoe_UI',Arial,sans-serif] text-[13px] font-medium text-white ${
        windowState.isFocused && !windowState.isMinimized
          ? 'bg-xp-taskbar-btn-active shadow-[0.1rem_0.1rem_0.1rem_rgba(255,255,255,0.2),inset_0.1rem_0.1rem_0.1rem_rgba(0,0,0,0.267)] hover:bg-xp-taskbar-btn-active-hov'
          : 'bg-xp-taskbar-btn shadow-[0.1rem_0.1rem_0.1rem_rgba(0,0,0,0.267),inset_0.1rem_0.1rem_0.1rem_rgba(255,255,255,0.2)] hover:bg-xp-taskbar-btn-hov'
      }`}
      onClick={handleClick}
      title={windowState.title}
      aria-pressed={windowState.isFocused && !windowState.isMinimized}
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
        <img
          src={windowState.icon}
          alt=""
          width={18}
          height={18}
          className="max-h-[18px] max-w-[18px] object-contain"
          draggable={false}
        />
      </span>
      <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,black_80%,transparent_100%)]">
        {windowState.title}
      </span>
    </button>
  )
}
