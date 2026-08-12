import { create } from 'zustand'
import { v4 as uuid } from 'uuid'
import type { AppId, WindowState } from '../types/window.types'

interface WindowStore {
  windows: WindowState[]
  topZ: number
  openWindow: (
    config: Omit<
      WindowState,
      'id' | 'zIndex' | 'isMinimized' | 'isMaximized' | 'isFocused'
    >,
  ) => void
  closeWindow: (id: string) => void
  focusWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  restoreWindow: (id: string) => void
  maximizeWindow: (id: string) => void
  moveWindow: (id: string, x: number, y: number) => void
  resizeWindow: (id: string, width: number, height: number) => void
  resetWindows: () => void
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  topZ: 10,

  openWindow: (config) => {
    const { windows, topZ } = get()
    const existing = windows.find((window) => window.appId === config.appId)

    if (existing) {
      get().focusWindow(existing.id)
      return
    }

    const newZ = topZ + 1

    set({
      topZ: newZ,
      windows: [
        ...windows.map((window) => ({ ...window, isFocused: false })),
        {
          ...config,
          id: uuid(),
          zIndex: newZ,
          isMinimized: false,
          isMaximized: false,
          isFocused: true,
        },
      ],
    })
  },

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== id),
    })),

  focusWindow: (id) => {
    const newZ = get().topZ + 1

    set((state) => ({
      topZ: newZ,
      windows: state.windows.map((window) => ({
        ...window,
        isFocused: window.id === id,
        isMinimized: window.id === id ? false : window.isMinimized,
        zIndex: window.id === id ? newZ : window.zIndex,
      })),
    }))
  },

  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id
          ? { ...window, isMinimized: true, isFocused: false }
          : window,
      ),
    })),

  restoreWindow: (id) => get().focusWindow(id),

  maximizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id
          ? { ...window, isMaximized: !window.isMaximized }
          : window,
      ),
    })),

  moveWindow: (id, x, y) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id ? { ...window, x, y } : window,
      ),
    })),

  resizeWindow: (id, width, height) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id ? { ...window, width, height } : window,
      ),
    })),

  resetWindows: () => set({ windows: [], topZ: 10 }),
}))

export const APP_TITLES: Record<AppId, string> = {
  notepad: 'Leia-me.txt - Bloco de Notas',
  word: 'Sobre Mim.doc - Word 2003',
  projects: 'Ares Galaxy - Projetos',
  msn: 'MSN Messenger',
  winamp: 'Winamp',
  paint: 'Skills.bmp - Paint',
  mycomputer: 'Meu Computador',
}
