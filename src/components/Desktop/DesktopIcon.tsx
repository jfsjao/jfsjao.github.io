import { APP_TITLES, useWindowStore } from '../../store/windowStore'
import type { DesktopIconConfig } from '../../types/window.types'
import { useDoubleClick } from '../../hooks/useDoubleClick'

interface DesktopIconProps {
  app: DesktopIconConfig
}

export function DesktopIcon({ app }: DesktopIconProps) {
  const openWindow = useWindowStore((state) => state.openWindow)
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
      className="group flex h-[86px] w-20 flex-col items-center justify-start gap-1 rounded-[1px] p-1 text-xp-text-inv outline-none hover:bg-xp-blue/25 focus:bg-xp-blue/45"
      onClick={handleOpen}
      onDoubleClick={handleOpen}
    >
      <img
        src={app.icon}
        alt=""
        className="h-11 w-11 object-contain drop-shadow-[1px_2px_1px_rgba(0,0,0,0.45)]"
        draggable={false}
      />
      <span className="max-w-[76px] px-[2px] text-center text-xp-sm leading-tight [text-shadow:1px_1px_1px_rgba(0,0,0,0.9)] group-focus:bg-xp-blue">
        {app.label}
      </span>
    </button>
  )
}
