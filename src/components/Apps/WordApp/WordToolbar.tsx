import folderIcon from '../../../assets/icons/icon__folders.png'
import pictureIcon from '../../../assets/icons/icon__pictures.png'
import printIcon from '../../../assets/icons/icon__print--large.png'
import styleIcon from '../../../assets/icons/icon_style_options--large.png'
import viewsIcon from '../../../assets/icons/icon__views.png'

const menuItems = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Table', 'Window', 'Help']

const iconButtons = [
  folderIcon,
  viewsIcon,
  printIcon,
  styleIcon,
  pictureIcon,
]

function ToolButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-7 min-w-7 items-center justify-center border border-transparent px-1 shadow-none hover:border-[#7f9db9] hover:bg-[#fff6cf]"
    >
      {children}
    </button>
  )
}

export function WordToolbar() {
  return (
    <div className="flex shrink-0 flex-col border-b border-[#8a8a8a] bg-[#d7e8ff] text-[13px]">
      <div className="flex h-8 items-center gap-1 border-b border-[#9fb5d7] bg-[linear-gradient(180deg,#eef6ff,#bcd8ff)] px-1">
        <span className="mr-1 h-5 w-1 border-l border-[#7f9db9]" />
        {menuItems.map((item) => (
          <button
            key={item}
            type="button"
            className={`px-2 py-[2px] underline-offset-2 hover:bg-[#ffe7a2] ${
              item === 'Format' ? 'border border-[#c98a00] bg-[#ffe2a0]' : ''
            }`}
          >
            {item}
          </button>
        ))}
        <div className="ml-auto flex h-6 w-56 items-center border border-[#9fb5d7] bg-white px-2 text-xp-text-muted">
          Type a question for help
        </div>
      </div>

      <div className="flex h-9 items-center gap-1 border-b border-[#9fb5d7] bg-[linear-gradient(180deg,#eff7ff,#c9dfff)] px-2">
        {iconButtons.map((icon) => (
          <ToolButton key={icon}>
            <img src={icon} alt="" className="h-5 w-5 object-contain" draggable={false} />
          </ToolButton>
        ))}
        <span className="mx-1 h-6 border-l border-[#9fb5d7]" />
        {['ABC', 'Cut', 'Paste', 'Undo', 'Redo'].map((label) => (
          <ToolButton key={label}>{label}</ToolButton>
        ))}
        <span className="mx-1 h-6 border-l border-[#9fb5d7]" />
        <ToolButton>P</ToolButton>
        <select className="h-7 border border-[#7f9db9] bg-white px-2">
          <option>75%</option>
          <option>100%</option>
        </select>
        <ToolButton>Read</ToolButton>
      </div>

      <div className="flex h-9 items-center gap-1 bg-[linear-gradient(180deg,#eef6ff,#c7dcfb)] px-2">
        <select className="h-7 w-36 border border-[#7f9db9] bg-white px-1">
          <option>Normal</option>
        </select>
        <select className="h-7 w-44 border border-[#7f9db9] bg-white px-1">
          <option>Times New Roman</option>
        </select>
        <select className="h-7 w-14 border border-[#7f9db9] bg-white px-1">
          <option>12</option>
        </select>
        {['B', 'I', 'U'].map((label) => (
          <ToolButton key={label}>
            <span className={label === 'I' ? 'italic' : label === 'U' ? 'underline' : 'font-bold'}>
              {label}
            </span>
          </ToolButton>
        ))}
        <span className="mx-1 h-6 border-l border-[#9fb5d7]" />
        {['Left', 'Center', 'Right', 'Bul', '1.'].map((label) => (
          <ToolButton key={label}>{label}</ToolButton>
        ))}
        <div className="ml-auto flex items-center gap-1">
          <span className="font-bold text-[#001f9f] underline decoration-[#001f9f]">A</span>
          <div className="h-1 w-8 bg-[#001f9f]" />
        </div>
      </div>
    </div>
  )
}
