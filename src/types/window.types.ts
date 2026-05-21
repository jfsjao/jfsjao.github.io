export type AppId = 'word' | 'ares' | 'msn' | 'winamp' | 'paint' | 'mycomputer'

export interface WindowState {
  id: string
  appId: AppId
  title: string
  icon: string
  x: number
  y: number
  width: number
  height: number
  zIndex: number
  isMinimized: boolean
  isMaximized: boolean
  isFocused: boolean
}

export interface DesktopIconConfig {
  appId: AppId
  label: string
  icon: string
  defaultWidth: number
  defaultHeight: number
  defaultX: number
  defaultY: number
}
