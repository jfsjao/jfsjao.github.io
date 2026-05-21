import {
  Brush,
  Computer,
  FileText,
  MessageCircle,
  Music2,
  Radio,
} from 'lucide-react'
import { APP_TITLES, useWindowStore } from '../../store/windowStore'
import type { AppId, DesktopIconConfig } from '../../types/window.types'
import { useDoubleClick } from '../../hooks/useDoubleClick'

const ICONS: Record<AppId, React.ComponentType<{ className?: string }>> = {
  word: FileText,
  ares: Radio,
  msn: MessageCircle,
  winamp: Music2,
  paint: Brush,
  mycomputer: Computer,
}

interface DesktopIconProps {
  app: DesktopIconConfig
}

export function DesktopIcon({ app }: DesktopIconProps) {
  const openWindow = useWindowStore((state) => state.openWindow)
  const Icon = ICONS[app.appId]
  const handleOpen = useDoubleClick(() =>
    openWindow({
      appId: app.appId,
      title: APP_TITLES[app.appId],
      icon: app.icon,
      x: app.defaultX,
      y: app.defaultY,
      width: app.defaultWidth,
      height: app.defaultHeight,
    }),
  )

  return (
    <button
      type="button"
      className="flex h-[82px] w-20 flex-col items-center justify-start gap-1 rounded-[1px] p-1 text-xp-text-inv outline-none hover:bg-xp-blue/35 focus:bg-xp-blue/45"
      onClick={handleOpen}
      onDoubleClick={handleOpen}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-xp-window-bg text-xp-blue-dark shadow-btn-xp">
        <Icon className="h-7 w-7" />
      </span>
      <span className="max-w-[76px] text-center text-xp-sm leading-tight [text-shadow:1px_1px_1px_rgba(0,0,0,0.75)]">
        {app.label}
      </span>
    </button>
  )
}
