import { create } from 'zustand'
import { DESKTOP_APPS } from '../config/apps.config'
import type { AppId } from '../types/window.types'

export const ICON_CELL_WIDTH = 96
export const ICON_CELL_HEIGHT = 95
export const ICON_GRID_PADDING = 12

interface IconPosition {
  x: number
  y: number
}

function defaultPosition(index: number): IconPosition {
  return {
    x: ICON_GRID_PADDING,
    y: ICON_GRID_PADDING + index * ICON_CELL_HEIGHT,
  }
}

const initialPositions = DESKTOP_APPS.reduce<Record<AppId, IconPosition>>((acc, app, index) => {
  acc[app.appId] = defaultPosition(index)
  return acc
}, {} as Record<AppId, IconPosition>)

interface DesktopIconStore {
  positions: Record<AppId, IconPosition>
  setPosition: (appId: AppId, x: number, y: number) => void
}

export const useDesktopIconStore = create<DesktopIconStore>((set) => ({
  positions: initialPositions,
  setPosition: (appId, x, y) =>
    set((state) => ({
      positions: { ...state.positions, [appId]: { x, y } },
    })),
}))
