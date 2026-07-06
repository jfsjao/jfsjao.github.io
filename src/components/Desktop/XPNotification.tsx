import infoIcon from '../../assets/icons/icon__info.png'

export function XPNotification() {
  return (
    <aside className="absolute bottom-12 right-4 z-[9997] w-[300px] rounded-[7px] border border-[#7c7c66] bg-[#fffcd6] p-3 pr-8 text-xp-sm shadow-[2px_2px_8px_rgba(0,0,0,0.28)]">
      <button
        type="button"
        className="absolute right-2 top-2 h-4 w-4 rounded-[2px] border border-[#b9b78d] bg-[#fff8b8] leading-[12px] text-[#7a784b]"
        aria-label="Fechar notificacao"
      >
        x
      </button>
      <div className="flex gap-2">
        <img src={infoIcon} alt="" className="mt-[1px] h-5 w-5" draggable={false} />
        <div>
          <p className="mb-1 font-bold">Portfolio XP React Edition</p>
          <p>
            Ainda em progresso, mas o desktop ja aceita janelas, taskbar e apps
            estilo XP.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-[9px] right-9 h-4 w-4 rotate-45 border-b border-r border-[#7c7c66] bg-[#fffcd6]" />
    </aside>
  )
}
