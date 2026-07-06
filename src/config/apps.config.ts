import type { DesktopIconConfig } from '../types/window.types'

const wordIcon = new URL('../assets/icons/docword.png', import.meta.url).href
const aresIcon = new URL('../assets/icons/icon__file_explorer--large.png', import.meta.url).href
const msnIcon = new URL('../assets/icons/icon__messenger--large.png', import.meta.url).href
const winampIcon = new URL('../assets/icons/icon__media_player--large.png', import.meta.url).href
const paintIcon = new URL('../assets/icons/icon_style_options--large.png', import.meta.url).href
const myComputerIcon = new URL('../assets/icons/icon__computer--large.png', import.meta.url).href

export const DESKTOP_APPS: DesktopIconConfig[] = [
  {
    appId: 'word',
    label: 'Sobre Mim.docx',
    icon: wordIcon, 
    defaultWidth: 700,
    defaultHeight: 500,
    defaultX: 80,
    defaultY: 60,
  },
  {
    appId: 'ares',
    label: 'Projetos',
    icon: aresIcon,
    defaultWidth: 680,
    defaultHeight: 480,
    defaultX: 120,
    defaultY: 80,
  },
  {
    appId: 'msn',
    label: 'MSN Messenger',
    icon: msnIcon,
    defaultWidth: 320,
    defaultHeight: 520,
    defaultX: 600,
    defaultY: 60,
  },
  {
    appId: 'winamp',
    label: 'Winamp',
    icon: winampIcon,
    defaultWidth: 275,
    defaultHeight: 136,
    defaultX: 900,
    defaultY: 60,
  },
  {
    appId: 'paint',
    label: 'Skills.bmp',
    icon: paintIcon,
    defaultWidth: 750,
    defaultHeight: 520,
    defaultX: 100,
    defaultY: 100,
  },
  {
    appId: 'mycomputer',
    label: 'Meu Computador',
    icon: myComputerIcon,
    defaultWidth: 500,
    defaultHeight: 380,
    defaultX: 150,
    defaultY: 80,
  },
]
