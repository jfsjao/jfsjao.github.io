import { AnimatePresence } from 'framer-motion'
import { StartButton } from './StartButton'
import { Clock } from './Clock'
import { TaskbarItem } from './TaskbarItem'
import { useWindowStore } from '../../store/windowStore'
import { useState } from 'react'
import { StartMenu } from './StartMenu'

interface TaskbarProps {
  onLogout: () => void
  onPower: () => void
  isNotificationOpen: boolean
  onNotificationToggle: () => void
}

export function Taskbar({
  onLogout,
  onPower,
  isNotificationOpen,
  onNotificationToggle,
}: TaskbarProps) {
  const windows = useWindowStore((state) => state.windows)
  const [isStartOpen, setIsStartOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isStartOpen && (
          <StartMenu
            onClose={() => setIsStartOpen(false)}
            onLogout={onLogout}
            onPower={onPower}
          />
        )}
      </AnimatePresence>
      <footer className="absolute inset-x-0 bottom-0 z-[9999] flex h-[30px] items-center bg-[linear-gradient(180deg,#3168d5_0%,#52a3ff_7%,#2b70dd_18%,#2f78e7_92%,#1b52a7_100%)] text-xp-text-inv shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
        <StartButton
          isActive={isStartOpen}
          onClick={() => setIsStartOpen((open) => !open)}
        />
        <div className="flex h-full min-w-0 flex-1 items-center gap-[2px] overflow-x-auto overflow-y-hidden px-1 py-[2px] [scrollbar-width:none] md:gap-[3px] [&::-webkit-scrollbar]:hidden">
          {windows.map((windowState) => (
            <TaskbarItem key={windowState.id} windowState={windowState} />
          ))}
        </div>
        <Clock
          isNotificationOpen={isNotificationOpen}
          onNotificationToggle={onNotificationToggle}
        />
      </footer>
    </>
  )
}
