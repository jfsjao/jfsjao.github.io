import { motion, useReducedMotion } from 'framer-motion'
import { DESKTOP_APPS } from '../../config/apps.config'
import { APP_TITLES, useWindowStore } from '../../store/windowStore'
import controlPanelIcon from '../../assets/icons/icon__control_panel--large.png'
import documentsIcon from '../../assets/icons/icon__documents--large.png'
import homeIcon from '../../assets/icons/icon__home--large.png'
import logOutIcon from '../../assets/icons/icon__log_out--large.png'
import searchIcon from '../../assets/icons/icon__search--large.png'
import shutDownIcon from '../../assets/icons/icon__shut_down--large.png'
import supportIcon from '../../assets/icons/icon__support--large.png'
import { ABOUT } from '../../data/portfolio.data'
import avatar from '../../assets/icons/avatar__skateboard.png'

interface StartMenuProps {
  onClose: () => void
  onLogout: () => void
  onPower: () => void
  onReturn: () => void
}

export function StartMenu({ onClose, onLogout, onPower, onReturn }: StartMenuProps) {
  const openWindow = useWindowStore((state) => state.openWindow)
  const reduceMotion = useReducedMotion()

  return (
    <motion.aside
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.97 }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      style={{ transformOrigin: 'bottom left' }}
      className="absolute bottom-[30px] left-0 z-[9998] w-[min(420px,100vw)] overflow-hidden rounded-t-[7px] border border-[#0a246a] bg-xp-window-bg font-[Tahoma,'Segoe_UI',Arial,sans-serif] text-[12px] shadow-[3px_-3px_12px_rgba(0,0,0,0.35)]">
      <div className="flex h-16 items-center gap-3 bg-[linear-gradient(180deg,#2f83f5,#0a4fbd)] px-4 text-white">
        <div className="h-11 w-11 rounded-[4px] border border-white/70 bg-white p-1 shadow-btn-xp">
          <img
            src={avatar}
            alt=""
            className="h-full w-full object-contain"
            draggable={false}
          />
        </div>
        <div>
          <p className="text-[16px] font-bold [text-shadow:1px_1px_1px_rgba(0,0,0,0.6)]">
            {ABOUT.name}
          </p>
          <p className="text-[14px]">Portfólio XP</p>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_190px]">
        <div className="bg-white p-2">
          {DESKTOP_APPS.map((app) => (
            <button
              key={app.appId}
              type="button"
              className="flex w-full items-center gap-2.5 rounded-[2px] p-2 text-left text-[12px] font-medium hover:bg-[#316ac5] hover:text-white"
              onClick={() => {
                openWindow({
                  appId: app.appId,
                  title: APP_TITLES[app.appId],
                  icon: app.icon,
                  x: app.defaultX,
                  y: app.defaultY,
                  width: app.defaultWidth,
                  height: app.defaultHeight,
                })
                onClose()
              }}
            >
              <img src={app.icon} alt="" className="h-8 w-8" draggable={false} />
              <span>{app.label}</span>
            </button>
          ))}
        </div>

        <div className="border-l border-[#b6c7e5] bg-[#d3e5fa] p-2">
          {[
            { label: 'Meus documentos', icon: documentsIcon },
            { label: 'Painel de controle', icon: controlPanelIcon },
            { label: 'Pesquisar', icon: searchIcon },
            { label: 'Ajuda e suporte', icon: supportIcon },
          ].map(({ label, icon }) => (
            <button
              key={label}
              type="button"
              className="flex w-full items-center gap-2.5 rounded-[2px] p-2 text-left text-[12px] font-medium text-xp-blue-dark hover:bg-[#316ac5] hover:text-white"
            >
              <img src={icon} alt="" className="h-6 w-6 object-contain" draggable={false} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex h-11 items-center justify-end gap-3 bg-[linear-gradient(180deg,#1c65d7,#0a4fbd)] px-3 text-white">
        <button
          type="button"
          className="flex items-center gap-1 text-[12px] font-medium"
          onClick={() => {
            onClose()
            onLogout()
          }}
        >
          <img src={logOutIcon} alt="" className="h-6 w-6" draggable={false} />
          Logoff
        </button>
        <button
          type="button"
          className="flex items-center gap-1 text-[12px] font-medium"
          onClick={() => {
            onClose()
            onReturn()
          }}
        >
          <img src={homeIcon} alt="" className="h-6 w-6" draggable={false} />
          Portfólio
        </button>
        <button
          type="button"
          className="flex items-center gap-1 text-[12px] font-medium"
          onClick={() => {
            onClose()
            onPower()
          }}
        >
          <img src={shutDownIcon} alt="" className="h-6 w-6" draggable={false} />
          Desligar
        </button>
      </div>
    </motion.aside>
  )
}
