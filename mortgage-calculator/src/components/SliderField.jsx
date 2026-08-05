/**
 * A labelled card holding a value read-out and a range slider.
 *
 * The native range input is kept (invisible) on top of the custom track so the
 * control stays keyboard- and screen-reader-operable; the visible track, fill
 * and 20px handle are drawn beneath it.
 */
export default function SliderField({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  minLabel,
  maxLabel,
  children,
}) {
  const pct = max === min ? 0 : (value - min) / (max - min)

  return (
    <div className="calc-card">
      <div className="calc-card__head">
        <span className="t-label-caps muted">{label}</span>
        <div className="calc-card__value">{children}</div>
      </div>

      <div className="slider" style={{ '--pct': pct }}>
        <div className="slider__track">
          <div className="slider__fill" />
        </div>
        <input
          className="slider__input"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          aria-label={label}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        <div className="slider__thumb" />
      </div>

      <div className="calc-card__scale t-label-caps">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  )
}
