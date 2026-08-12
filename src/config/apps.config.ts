import type { DesktopIconConfig } from '../types/window.types'

const notepadIcon = new URL('../assets/icons/icon__notepad--large.png', import.meta.url).href
const wordIcon = new URL('../assets/icons/word.png', import.meta.url).href
const projectsIcon = new URL('../assets/icons/icon__ares--large.png', import.meta.url).href
const msnIcon = new URL('../assets/icons/icon__messenger--large.png', import.meta.url).href
const winampIcon = new URL('../assets/icons/icon__media_player--large.png', import.meta.url).href
const paintIcon = new URL('../assets/icons/icon__paint--large.png', import.meta.url).href
const myComputerIcon = new URL('../assets/icons/icon__computer--large.png', import.meta.url).href

export const DESKTOP_APPS: DesktopIconConfig[] = [
  {
    appId: 'notepad',
    label: 'Leia-me.txt',
    icon: notepadIcon,
    defaultWidth: 560,
    defaultHeight: 390,
    defaultX: 60,
    defaultY: 45,
  },
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
    appId: 'projects',
    label: 'Ares Galaxy',
    icon: projectsIcon,
    defaultWidth: 760,
    defaultHeight: 500,
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
    label: 'Paint',
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
