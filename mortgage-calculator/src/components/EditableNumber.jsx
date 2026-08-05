import { useState } from 'react'
import { clamp, parseNumber } from '../lib/mortgage'

/**
 * A text input that displays a formatted figure but stays comfortable to type
 * in: while focused it holds the raw draft, commits any valid in-range value as
 * you type, and clamps + reformats on blur.
 */
export default function EditableNumber({
  value,
  onChange,
  format,
  min,
  max,
  label,
  suffix,
  className,
}) {
  const [draft, setDraft] = useState(null)

  const handleChange = (event) => {
    const next = event.target.value
    setDraft(next)

    const parsed = parseNumber(next)
    if (Number.isFinite(parsed) && parsed >= min && parsed <= max) {
      onChange(parsed)
    }
  }

  const handleBlur = () => {
    const parsed = parseNumber(draft ?? '')
    if (Number.isFinite(parsed)) onChange(clamp(parsed, min, max))
    setDraft(null)
  }

  return (
    <span className="editable">
      <input
        className={`editable__input tabular${className ? ` ${className}` : ''}`}
        type="text"
        inputMode="decimal"
        aria-label={label}
        value={draft ?? format(value)}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={(event) => event.target.select()}
      />
      {suffix ? <span className="editable__suffix">{suffix}</span> : null}
    </span>
  )
}
