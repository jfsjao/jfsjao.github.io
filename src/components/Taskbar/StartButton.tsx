import startButtonSprite from '../../assets/icons/startButton__spriteSheet.png'

interface StartButtonProps {
  isActive: boolean
  onClick: () => void
}

export function StartButton({ isActive, onClick }: StartButtonProps) {
  return (
    <button
      type="button"
      className="ml-0 h-[30px] w-[99px] shrink-0 self-center overflow-hidden border-0 bg-transparent bg-no-repeat p-0 text-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white [background-position:0_0] hover:[background-position:0_-30px] active:[background-position:0_-60px]"
      onClick={onClick}
      style={{
        backgroundImage: `url(${startButtonSprite})`,
        backgroundSize: '99px 90px',
        backgroundPosition: isActive ? '0 -60px' : undefined,
      }}
      aria-label="Iniciar"
    >
      iniciar
    </button>
  )
}
