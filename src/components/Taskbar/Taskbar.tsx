import { StartButton } from './StartButton'
import { Clock } from './Clock'
import { TaskbarItem } from './TaskbarItem'
import { useWindowStore } from '../../store/windowStore'
import { useState } from 'react'
import { StartMenu } from './StartMenu'

export function Taskbar() {
  const windows = useWindowStore((state) => state.windows)
  const [isStartOpen, setIsStartOpen] = useState(false)

  return (
    <>
      {isStartOpen && <StartMenu onClose={() => setIsStartOpen(false)} />}
      <footer className="absolute inset-x-0 bottom-0 z-[9999] flex h-10 items-center bg-[linear-gradient(180deg,#2d7ef7_0%,#0b4dc2_10%,#0a246a_55%,#123f9f_100%)] text-xp-text-inv shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
        <StartButton
          isActive={isStartOpen}
          onClick={() => setIsStartOpen((open) => !open)}
        />
        <div className="flex min-w-0 flex-1 gap-1 px-2">
          {windows.map((windowState) => (
            <TaskbarItem key={windowState.id} windowState={windowState} />
          ))}
        </div>
        <Clock />
      </footer>
    </>
  )
}
