import { ABOUT } from '../../../data/portfolio.data'
import pictureIcon from '../../../assets/icons/background__pictures.png'
import { WordToolbar } from './WordToolbar'

function HorizontalRuler() {
  return (
    <div className="flex h-7 items-end border-b border-[#9fb5d7] bg-[#dbeafe] pl-9 text-[11px]">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="relative h-full w-24 border-l border-[#6b6b6b]">
          <span className="absolute left-1 top-1">{index + 1}</span>
          <div className="absolute bottom-0 left-0 right-0 flex justify-around">
            {Array.from({ length: 5 }, (_, tick) => (
              <span key={tick} className="h-2 border-l border-[#6b6b6b]" />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function VerticalRuler() {
  return (
    <div className="w-8 border-r border-[#9fb5d7] bg-[#dbeafe] pt-4 text-center text-[11px]">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="h-20 border-b border-dotted border-[#6b6b6b]">
          {index + 1}
        </div>
      ))}
    </div>
  )
}

export function WordApp() {
  return (
    <article className="flex h-full flex-col bg-xp-window-bg">
      <WordToolbar />
      <HorizontalRuler />

      <div className="flex min-h-0 flex-1 bg-[#b7d5f7]">
        <VerticalRuler />
        <div className="min-w-0 flex-1 overflow-auto bg-[#8ca8c8] p-5">
          <div className="relative mx-auto min-h-[720px] w-[640px] bg-white px-16 py-12 shadow-[0_0_0_1px_#777,8px_8px_0_rgba(0,0,0,0.2)]">
            <h1 className="mb-4 font-serif text-[42px] leading-tight">
              {ABOUT.name}
            </h1>
            <p className="mb-6 font-serif text-[28px] leading-snug">{ABOUT.role}</p>
            <p className="w-[340px] text-[16px] leading-relaxed">{ABOUT.bio}</p>

            <div className="absolute right-16 top-44 h-36 w-36 border border-[#555] bg-white p-1">
              <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#00a651]" />
              {['-left-2 -top-2', '-right-2 -top-2', '-bottom-2 -left-2', '-bottom-2 -right-2'].map(
                (position) => (
                  <span
                    key={position}
                    className={`absolute h-3 w-3 border border-[#555] bg-white ${position}`}
                  />
                ),
              )}
              <img
                src={pictureIcon}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <div className="absolute bottom-28 left-28 flex h-11 items-center gap-1 border border-[#0a4fbd] bg-[#d7e8ff] px-2 shadow-window">
              <div className="absolute -top-6 left-0 right-0 flex h-6 items-center justify-between bg-[linear-gradient(180deg,#4b92ff,#0a4fbd)] px-2 text-white">
                <span className="font-bold">Picture</span>
                <span>x</span>
              </div>
              {['C1', 'C2', 'Sun', 'Cut', 'Txt', 'Pen', 'FX'].map((tool) => (
                <button key={tool} type="button" className="h-7 w-7 border border-[#7f9db9] bg-white">
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-7 shrink-0 items-center gap-5 border-t border-[#9fb5d7] bg-xp-window-bg px-3 text-xp-sm">
        <span>Page 1</span>
        <span>Sec 1</span>
        <span>1/1</span>
        <span>At 1"</span>
        <span>Ln 1</span>
        <span>Col 1</span>
      </div>
      <div className="flex h-8 shrink-0 items-center gap-2 border-t border-[#9fb5d7] bg-[#d7e8ff] px-2 text-xp-sm">
        <span>Draw</span>
        <select className="h-6 border border-[#7f9db9] bg-white">
          <option>AutoShapes</option>
        </select>
        {['Line', 'Arr', 'Box', 'Oval', 'A', 'Fill'].map((tool) => (
          <button key={tool} type="button" className="h-6 w-8 border border-[#7f9db9] bg-white">
            {tool}
          </button>
        ))}
      </div>
    </article>
  )
}
