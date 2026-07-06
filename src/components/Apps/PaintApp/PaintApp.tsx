import { SKILLS } from '../../../data/portfolio.data'

export function PaintApp() {
  return (
    <section className="flex h-full flex-col bg-xp-window-bg">
      <div className="flex h-7 items-center gap-4 border-b border-[#aca899] px-2 text-xp-sm">
        <span>Arquivo</span>
        <span>Editar</span>
        <span>Imagem</span>
        <span>Cores</span>
        <span>Ajuda</span>
      </div>
      <div className="flex min-h-0 flex-1">
        <div className="grid w-16 shrink-0 grid-cols-2 content-start gap-[2px] border-r border-[#aca899] p-1">
          {['Lapis', 'Balde', 'Texto', 'Zoom', 'Linha', 'Forma', 'Pincel', 'Conta'].map(
            (tool) => (
              <button
                key={tool}
                type="button"
                className="h-7 border border-[#aca899] bg-xp-btn text-[9px] shadow-btn-xp"
                title={tool}
              >
                {tool.slice(0, 2)}
              </button>
            ),
          )}
        </div>
        <div className="min-w-0 flex-1 overflow-auto bg-[#808080] p-4">
          <div className="min-h-[360px] border border-[#404040] bg-white p-6 shadow-[4px_4px_0_rgba(0,0,0,0.25)]">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="mb-3">
                <div className="mb-1 flex justify-between text-xp-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-4 border border-black bg-white">
                  <div
                    className="h-full bg-[repeating-linear-gradient(90deg,#245edc_0_8px,#6ca0f6_8px_10px)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-10 border-t border-[#aca899] bg-xp-window-bg p-1">
        {['#000000', '#ffffff', '#245edc', '#00a651', '#ffb300', '#c75050'].map(
          (color) => (
            <button
              key={color}
              type="button"
              className="h-6 w-6 border border-[#404040]"
              style={{ backgroundColor: color }}
              title={color}
            />
          ),
        )}
      </div>
    </section>
  )
}
