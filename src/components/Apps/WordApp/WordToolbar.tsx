export function WordToolbar() {
  return (
    <div className="flex h-14 flex-col border-b border-[#aca899] bg-xp-window-bg">
      <div className="flex h-6 items-center gap-4 px-2 text-xp-sm">
        <span>Arquivo</span>
        <span>Editar</span>
        <span>Exibir</span>
        <span>Inserir</span>
        <span>Formatar</span>
      </div>
      <div className="flex flex-1 items-center gap-1 border-t border-white px-2">
        {['B', 'I', 'U'].map((label) => (
          <button
            key={label}
            type="button"
            className="h-6 w-7 border border-[#aca899] bg-xp-btn font-bold shadow-btn-xp"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
