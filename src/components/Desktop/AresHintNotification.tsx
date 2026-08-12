import searchIcon from '../../assets/icons/icon__search--large.png'
import { XPBalloon } from './XPBalloon'

interface AresHintNotificationProps {
  visible: boolean
  onClose: () => void
}

export function AresHintNotification({ visible, onClose }: AresHintNotificationProps) {
  if (!visible) {
    return null
  }

  return (
    <XPBalloon
      title="Dica de busca"
      icon={searchIcon}
      onClose={onClose}
      className="bottom-[144px]"
    >
      <p>Pesquise uma tecnologia, como React, Angular ou NestJS, para encontrar projetos relacionados.</p>
    </XPBalloon>
  )
}
