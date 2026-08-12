import infoIcon from '../../assets/icons/icon__info.png'
import { XPBalloon } from './XPBalloon'

interface XPNotificationProps {
  visible: boolean
  onClose: () => void
}

export function XPNotification({ visible, onClose }: XPNotificationProps) {
  if (!visible) {
    return null
  }

  return (
    <XPBalloon
      title="Portfólio Windows XP"
      icon={infoIcon}
      onClose={onClose}
      className="bottom-[42px]"
    >
      <p>Abra Leia-me.txt para conhecer a história deste portfólio.</p>
    </XPBalloon>
  )
}
