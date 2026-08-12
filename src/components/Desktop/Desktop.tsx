import { Taskbar } from '../Taskbar/Taskbar'
import { Window } from '../Window/Window'
import { DESKTOP_APPS } from '../../config/apps.config'
import { useWindowStore } from '../../store/windowStore'
import type { DesktopIconConfig } from '../../types/window.types'
import { AresHintNotification } from './AresHintNotification'
import { DesktopIcon } from './DesktopIcon'
import { XPNotification } from './XPNotification'
import wallpaperUrl from '../../assets/wallpaper/wallpaper__bliss.jpg'
import { useEffect, useRef, useState } from 'react'
import { TASKBAR_HEIGHT_PX } from '../../config/layout.config'
import { useIsDesktopViewport } from '../../hooks/useIsDesktopViewport'

interface DesktopProps {
  onLogout: () => void
  onPower: () => void
}

export function Desktop({ onLogout, onPower }: DesktopProps) {
  const windows = useWindowStore((state) => state.windows)
  const openWindow = useWindowStore((state) => state.openWindow)
  // Mobile XP (docs/next-prompt.md): launcher em grade abaixo de 768px, em vez
  // dos ícones soltos e arrastáveis do desktop livre.
  const isDesktop = useIsDesktopViewport()
  const didOpenReadme = useRef(false)
  const isAresOpen = windows.some((window) => window.appId === 'projects')
  const [showXPNotification, setShowXPNotification] = useState(true)
  const [showAresHint, setShowAresHint] = useState(false)

  useEffect(() => {
    if (didOpenReadme.current) {
      return
    }

    didOpenReadme.current = true
    const readme = DESKTOP_APPS.find((app) => app.appId === 'notepad')
    if (!readme) {
      return
    }

    openWindow({
      appId: readme.appId,
      title: 'Leia-me.txt - Bloco de Notas',
      icon: readme.icon,
      x: readme.defaultX,
      y: readme.defaultY,
      width: readme.defaultWidth,
      height: readme.defaultHeight,
    })
  }, [openWindow])

  // Balão de boas-vindas some sozinho depois de ~1 minuto se ninguém mexer nele.
  useEffect(() => {
    if (!showXPNotification) {
      return
    }

    const timer = window.setTimeout(() => setShowXPNotification(false), 60_000)
    return () => window.clearTimeout(timer)
  }, [showXPNotification])

  // A dica do Ares acompanha a janela: aparece ao abrir, some ao fechar. Só um
  // balão fica visível por vez — abrir o Ares antes do de boas-vindas sumir
  // sozinho já fecha esse na hora.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowAresHint(isAresOpen)
      if (isAresOpen) {
        setShowXPNotification(false)
      }
    }, 0)

    return () => window.clearTimeout(timer)
  }, [isAresOpen])

  return (
    <main
      className="relative h-svh overflow-hidden bg-cover bg-center font-xp text-xp-text"
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.02)_45%,rgba(0,0,0,0.18))]" />
      <div className="xp-screen-lines pointer-events-none absolute inset-0" />
      <div
        className={
          isDesktop
            ? 'absolute inset-x-0 top-0'
            : 'absolute inset-x-0 top-0 grid grid-cols-3 gap-1 p-2 content-start'
        }
        style={{ bottom: TASKBAR_HEIGHT_PX }}
      >
        {DESKTOP_APPS.map((app: DesktopIconConfig) => (
          <DesktopIcon key={app.appId} app={app} isDesktop={isDesktop} />
        ))}
      </div>

      {windows.map((windowState) => (
        <Window key={windowState.id} windowState={windowState} />
      ))}

      <XPNotification
        visible={showXPNotification && !isAresOpen}
        onClose={() => setShowXPNotification(false)}
      />
      <AresHintNotification visible={showAresHint} onClose={() => setShowAresHint(false)} />
      <Taskbar
        onLogout={onLogout}
        onPower={onPower}
        isNotificationOpen={showXPNotification && !isAresOpen}
        onNotificationToggle={() => setShowXPNotification((visible) => !visible)}
      />
    </main>
  )
}
