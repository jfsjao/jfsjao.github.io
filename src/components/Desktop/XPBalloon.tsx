import type { ReactNode } from 'react'

interface XPBalloonProps {
  title: string
  icon: string
  children: ReactNode
  onClose: () => void
  className?: string
}

export function XPBalloon({
  title,
  icon,
  children,
  onClose,
  className = '',
}: XPBalloonProps) {
  return (
    <aside
      aria-live="polite"
      className={`absolute right-3 z-[9997] w-[min(330px,calc(100vw-24px))] rounded-[8px] border border-[#003c74] bg-[#ffffe1] px-3 pb-3 pt-2.5 font-[Tahoma,'Segoe_UI',Arial,sans-serif] text-[12px] leading-[1.4] text-black shadow-[2px_3px_5px_rgba(0,0,0,0.32)] ${className}`}
    >
      <div className="flex min-w-0 items-center gap-1.5 pr-6">
        <img src={icon} alt="" width={16} height={16} className="h-4 w-4 shrink-0" draggable={false} />
        <p className="truncate font-bold">{title}</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute right-1.5 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-[2px] border border-[#b6b39a] bg-[#ffffe1] text-[16px] leading-none text-[#77735f] hover:border-[#77735f] hover:bg-white active:translate-y-px focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#003c74]"
        aria-label="Fechar notificação"
      >
        ×
      </button>

      <div className="mt-1 pl-[22px] pr-1">{children}</div>

      <span
        aria-hidden="true"
        className="absolute -bottom-[18px] right-[52px] h-[19px] w-[27px] bg-[#003c74] [clip-path:polygon(0_0,100%_0,100%_100%)]"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-[15px] right-[53px] h-[16px] w-[23px] bg-[#ffffe1] [clip-path:polygon(0_0,100%_0,100%_100%)]"
      />
    </aside>
  )
}
