import { AresApp } from '../components/Apps/AresApp/AresApp'
import { NotepadApp } from '../components/Apps/NotepadApp/NotepadApp'
import { MSNApp } from '../components/Apps/MSNApp/MSNApp'
import { MyComputerApp } from '../components/Apps/MyComputerApp/MyComputerApp'
import { PaintApp } from '../components/Apps/PaintApp/PaintApp'
import { WinampApp } from '../components/Apps/WinampApp/WinampApp'
import { WordApp } from '../components/Apps/WordApp/WordApp'
import type { AppId } from '../types/window.types'

const APP_MAP: Record<AppId, JSX.Element> = {
  notepad: <NotepadApp />,
  word: <WordApp />,
  projects: <AresApp />,
  msn: <MSNApp />,
  winamp: <WinampApp />,
  paint: <PaintApp />,
  mycomputer: <MyComputerApp />,
}

export function renderApp(appId: AppId) {
  return APP_MAP[appId]
}
