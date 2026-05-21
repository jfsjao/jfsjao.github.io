import { SKILLS } from '../../../data/portfolio.data'

export function PaintApp() {
  return (
    <section className="h-full bg-xp-window-bg p-2">
      <div className="mb-2 flex gap-1">
        {['Pincel', 'Balde', 'Texto', 'Zoom'].map((tool) => (
          <button
            key={tool}
            type="button"
            className="border border-[#aca899] bg-xp-btn px-2 py-1 shadow-btn-xp"
          >
            {tool}
          </button>
        ))}
      </div>
      <div className="h-[calc(100%-42px)] border border-[#808080] bg-white p-6">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="mb-3">
            <div className="mb-1 flex justify-between text-xp-sm">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-4 border border-black bg-white">
              <div className="h-full bg-xp-blue" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
