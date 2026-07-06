import startButtonSprite from '../../assets/icons/startButton__spriteSheet.png'

interface StartButtonProps {
  isActive: boolean
  onClick: () => void
}

export function StartButton({ isActive, onClick }: StartButtonProps) {
  return (
    <button
      type="button"
      className="ml-0 h-[30px] w-[99px] shrink-0 overflow-hidden border-0 bg-transparent p-0 text-transparent outline-none [background-position:0_0] hover:[background-position:0_-30px] active:[background-position:0_-60px]"
      onClick={onClick}
      style={{
        backgroundImage: `url(${startButtonSprite})`,
        backgroundPosition: isActive ? '0 -60px' : undefined,
      }}
      aria-label="Iniciar"
    >
      iniciar
    </button>
  )
}
