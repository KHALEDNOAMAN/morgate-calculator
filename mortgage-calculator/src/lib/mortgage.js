/**
 * Mortgage math and formatting helpers.
 *
 * UAE mortgages use a reducing-balance method, so the monthly instalment is the
 * standard amortising annuity payment: interest accrues only on the outstanding
 * balance and each instalment repays a growing slice of principal.
 */

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Monthly instalment (principal + interest) for an amortising loan.
 *
 * M = P · r / (1 − (1 + r)^−n), where r is the monthly rate and n the number of
 * instalments. Falls back to straight-line repayment at a 0% rate.
 */
export function monthlyPayment({ principal, annualRate, years }) {
  const months = Math.round(years * 12)
  if (principal <= 0 || months <= 0) return 0

  const monthlyRate = annualRate / 100 / 12
  if (monthlyRate === 0) return principal / months

  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
}

/** Payment plus the totals it implies over the full term. */
export function loanSummary({ price, downPaymentPct, years, annualRate }) {
  const downPayment = price * (downPaymentPct / 100)
  const principal = price - downPayment
  const months = Math.round(years * 12)
  const payment = monthlyPayment({ principal, annualRate, years })
  const totalRepayment = payment * months

  return {
    downPayment,
    principal,
    months,
    monthly: payment,
    totalRepayment,
    totalInterest: totalRepayment - principal,
  }
}

const aed = new Intl.NumberFormat('en-AE', { maximumFractionDigits: 0 })

/** 2,500,000 — no currency symbol; "AED" is set separately in the UI. */
export function formatAmount(value) {
  if (!Number.isFinite(value)) return '0'
  return aed.format(Math.round(value))
}

/** 1.2M / 750K — for slider end labels. */
export function formatCompact(value) {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000
    return `${Number.isInteger(millions) ? millions : millions.toFixed(1)}M`
  }
  if (value >= 1_000) return `${Math.round(value / 1_000)}K`
  return String(value)
}

/** Trims trailing zeros so 3.99 stays 3.99 but 4.00 shows as 4. */
export function formatRate(value) {
  return String(Number(value.toFixed(2)))
}

/** Reads a user-typed figure such as "2,500,000" or "AED 2 500 000". */
export function parseNumber(input) {
  const cleaned = String(input).replace(/[^0-9.-]/g, '')
  if (cleaned === '' || cleaned === '-' || cleaned === '.') return NaN
  return Number(cleaned)
}
