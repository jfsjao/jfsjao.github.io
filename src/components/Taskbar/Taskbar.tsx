import { StartButton } from './StartButton'
import { Clock } from './Clock'
import { TaskbarItem } from './TaskbarItem'
import { useWindowStore } from '../../store/windowStore'

export function Taskbar() {
  const windows = useWindowStore((state) => state.windows)

  return (
    <footer className="absolute inset-x-0 bottom-0 z-[9999] flex h-10 items-center bg-xp-taskbar text-xp-text-inv shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
      <StartButton />
      <div className="flex min-w-0 flex-1 gap-1 px-2">
        {windows.map((windowState) => (
          <TaskbarItem key={windowState.id} windowState={windowState} />
        ))}
      </div>
      <Clock />
    </footer>
  )
}
