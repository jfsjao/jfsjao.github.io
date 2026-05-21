export function WinampApp() {
  return (
    <section className="h-full bg-[#1d1d2b] p-3 font-mono text-[#33ff66]">
      <div className="mb-2 flex justify-between text-xp-sm">
        <span>WINAMP</span>
        <span>00:00</span>
      </div>
      <div className="mb-3 border border-[#5d5d83] bg-black p-2">
        <p>Portfolio XP - track 01</p>
      </div>
      <div className="flex gap-1">
        {['<<', '>', '||', '[]', '>>'].map((label) => (
          <button
            key={label}
            type="button"
            className="h-6 flex-1 border border-[#5d5d83] bg-[#31314d] text-white"
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}
