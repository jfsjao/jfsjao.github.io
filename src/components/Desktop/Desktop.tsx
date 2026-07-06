import { AresApp } from '../Apps/AresApp/AresApp'
import { MSNApp } from '../Apps/MSNApp/MSNApp'
import { MyComputerApp } from '../Apps/MyComputerApp/MyComputerApp'
import { PaintApp } from '../Apps/PaintApp/PaintApp'
import { WinampApp } from '../Apps/WinampApp/WinampApp'
import { WordApp } from '../Apps/WordApp/WordApp'
import { Taskbar } from '../Taskbar/Taskbar'
import { Window } from '../Window/Window'
import { DESKTOP_APPS } from '../../config/apps.config'
import { useWindowStore } from '../../store/windowStore'
import type { AppId, DesktopIconConfig } from '../../types/window.types'
import { DesktopIcon } from './DesktopIcon'
import { XPNotification } from './XPNotification'
import wallpaperUrl from '../../assets/wallpaper/wallpaper__bliss.jpg'

function renderApp(appId: AppId) {
  const appMap: Record<AppId, JSX.Element> = {
    word: <WordApp />,
    ares: <AresApp />,
    msn: <MSNApp />,
    winamp: <WinampApp />,
    paint: <PaintApp />,
    mycomputer: <MyComputerApp />,
  }

  return appMap[appId]
}

export function Desktop() {
  const windows = useWindowStore((state) => state.windows)

  return (
    <main
      className="relative h-svh overflow-hidden bg-cover bg-center font-xp text-xp-text"
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.02)_45%,rgba(0,0,0,0.18))]" />
      <div className="xp-screen-lines pointer-events-none absolute inset-0" />
      <div className="relative grid w-24 grid-flow-row auto-rows-[91px] gap-1 p-3">
        {DESKTOP_APPS.map((app: DesktopIconConfig) => (
          <DesktopIcon key={app.appId} app={app} />
        ))}
      </div>

      {windows.map((windowState) => (
        <Window key={windowState.id} windowState={windowState}>
          {renderApp(windowState.appId)}
        </Window>
      ))}

      <XPNotification />
      <Taskbar />
    </main>
  )
}
