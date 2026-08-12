interface SectionHeadingProps {
  index: string
  label: string
  title: string
  className?: string
}

export function SectionHeading({ index, label, title, className = '' }: SectionHeadingProps) {
  return (
    <div data-reveal className={`mb-12 ${className}`}>
      <p className="mb-3 font-meta text-xs font-semibold uppercase tracking-[0.2em] text-formal-blue">
        {index} / {label}
      </p>
      <h2 className="font-display text-4xl font-medium tracking-[-0.02em] text-formal-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  )
}
