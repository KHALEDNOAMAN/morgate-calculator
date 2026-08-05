import { useState } from 'react'
import { formatAmount } from '../lib/mortgage'

const EMPTY = { name: '', phone: '', email: '' }

function validate({ name, phone, email }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your full name.'
  if (!/^[+\d][\d\s()-]{6,}$/.test(phone.trim()))
    errors.phone = 'Please enter a valid phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
    errors.email = 'Please enter a valid email address.'
  return errors
}

/**
 * Lead capture inside the results card. There is no backend here — a valid
 * submission swaps the form for a confirmation.
 */
export default function EligibilityForm({ summary }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    // Where a real integration would post `values` alongside `summary`.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="results__done" role="status">
        <h3 className="t-headline-lg">Request received</h3>
        <p className="t-body-md muted">
          Thank you, {values.name.split(' ')[0]}. A mortgage advisor will review
          your estimate of{' '}
          <span className="tabular">AED {formatAmount(summary.monthly)}</span> per
          month and contact you on {values.phone} within 24 hours.
        </p>
        <button
          type="button"
          className="results__reset t-button"
          onClick={() => {
            setValues(EMPTY)
            setSubmitted(false)
          }}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <div className="results__lead">
      <h3 className="t-label-caps results__lead-title">Check your eligibility</h3>

      <form className="results__form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span className="t-label-caps muted">Full name</span>
          <input
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <span className="field-error">{errors.name}</span> : null}
        </label>

        <label className="field">
          <span className="t-label-caps muted">Phone number</span>
          <input
            type="tel"
            placeholder="+971 50 123 4567"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? (
            <span className="field-error">{errors.phone}</span>
          ) : null}
        </label>

        <label className="field">
          <span className="t-label-caps muted">Email address</span>
          <input
            type="email"
            placeholder="john@example.com"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <span className="field-error">{errors.email}</span>
          ) : null}
        </label>

        <button type="submit" className="btn-primary t-button">
          Submit request
        </button>

        <p className="form-note results__terms">
          By submitting, you agree to our Terms of Service and Privacy Policy. A
          representative will contact you within 24 hours.
        </p>
      </form>
    </div>
  )
}
