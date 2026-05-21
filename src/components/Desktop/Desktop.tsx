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
    <main className="xp-desktop-bg relative h-svh overflow-hidden font-xp text-xp-text">
      <div className="grid w-24 grid-flow-row auto-rows-[88px] gap-2 p-4">
        {DESKTOP_APPS.map((app: DesktopIconConfig) => (
          <DesktopIcon key={app.appId} app={app} />
        ))}
      </div>

      {windows.map((windowState) => (
        <Window key={windowState.id} windowState={windowState}>
          {renderApp(windowState.appId)}
        </Window>
      ))}

      <Taskbar />
    </main>
  )
}
