/**
 * Eyebrow + title pair used above a section's content.
 * `light` renders the title in full white for use over dark imagery.
 */
export default function SectionHeading({ subtitle, title, light }) {
  return (
    <div className="mb-12 text-center">
      {subtitle ? (
        <p className="text-[10px] uppercase tracking-[0.4em] text-red-500 mb-4">
          {subtitle}
        </p>
      ) : null}
      <h2
        className={`text-3xl md:text-5xl font-light tracking-tight ${
          light ? 'text-white' : 'text-white/80'
        }`}
      >
        {title}
      </h2>
    </div>
  )
}
