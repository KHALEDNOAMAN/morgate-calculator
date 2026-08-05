import { useState } from 'react'
import SliderField from './SliderField'
import EditableNumber from './EditableNumber'
import EligibilityForm from './EligibilityForm'
import {
  clamp,
  formatAmount,
  formatCompact,
  formatRate,
  loanSummary,
} from '../lib/mortgage'
import './Calculator.css'

const PRICE = { min: 500_000, max: 10_000_000, step: 10_000 }
const YEARS = { min: 5, max: 25, step: 1 }
const RATE = { min: 1, max: 10, step: 0.01 }
const DOWN_MAX = 80

/**
 * Down-payment floors follow UAE lending practice: residents can borrow up to
 * 80% of the value, non-residents are usually capped lower.
 */
const RESIDENCY = [
  {
    id: 'resident',
    label: 'Resident',
    minDown: 20,
    note: 'Residents can typically finance up to 80% of the property value.',
  },
  {
    id: 'non-resident',
    label: 'Non-Resident',
    minDown: 25,
    note: 'Non-residents are typically capped at 75% financing and offered slightly higher rates.',
  },
]

export default function Calculator() {
  const [residencyIndex, setResidencyIndex] = useState(0)
  const [price, setPrice] = useState(2_500_000)
  const [downPct, setDownPct] = useState(20)
  const [years, setYears] = useState(25)
  const [rate, setRate] = useState(3.99)

  const residency = RESIDENCY[residencyIndex]
  const downMin = residency.minDown
  const effectiveDownPct = clamp(downPct, downMin, DOWN_MAX)

  const summary = loanSummary({
    price,
    downPaymentPct: effectiveDownPct,
    years,
    annualRate: rate,
  })

  const selectResidency = (index) => {
    setResidencyIndex(index)
    // A stricter floor must pull the current down payment up with it.
    setDownPct((prev) => clamp(prev, RESIDENCY[index].minDown, DOWN_MAX))
  }

  return (
    <section className="calculator" id="calculator">
      <div className="container">
        <div className="calculator__intro">
          <h1 className="t-display calculator__title">
            Calculate your mortgage in Dubai instantly
          </h1>
          <p className="t-body-lg muted">
            Use our advanced calculator to estimate your monthly payments. Adjust
            the parameters below to find a financing structure that aligns with
            your investment strategy.
          </p>
        </div>

        <div className="calculator__grid">
          <div className="calculator__inputs">
            {/* Residency status */}
            <div className="calc-field">
              <span className="t-label-caps muted" id="residency-label">
                Residency status
              </span>
              <div
                className="tabs"
                role="tablist"
                aria-labelledby="residency-label"
                style={{ '--tab-index': residencyIndex }}
              >
                <div className="tabs__indicator" aria-hidden="true" />
                {RESIDENCY.map((option, index) => (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={residencyIndex === index}
                    className={`tabs__btn t-button${
                      residencyIndex === index ? ' is-active' : ''
                    }`}
                    onClick={() => selectResidency(index)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase price */}
            <SliderField
              label="Purchase price (AED)"
              value={price}
              min={PRICE.min}
              max={PRICE.max}
              step={PRICE.step}
              onChange={setPrice}
              minLabel={formatCompact(PRICE.min)}
              maxLabel={`${formatCompact(PRICE.max)}+`}
            >
              <EditableNumber
                value={price}
                onChange={setPrice}
                format={formatAmount}
                min={PRICE.min}
                max={PRICE.max}
                label="Purchase price in AED"
                className="editable__input--wide"
              />
            </SliderField>

            {/* Down payment */}
            <SliderField
              label="Down payment"
              value={effectiveDownPct}
              min={downMin}
              max={DOWN_MAX}
              step={1}
              onChange={setDownPct}
              minLabel={`${downMin}%`}
              maxLabel={`${DOWN_MAX}%`}
            >
              <span className="calc-card__amount t-headline-lg tabular">
                {formatAmount(summary.downPayment)}
              </span>
              <span className="t-body-md muted tabular">
                ({effectiveDownPct}%)
              </span>
            </SliderField>

            {/* Loan period */}
            <SliderField
              label="Loan period (years)"
              value={years}
              min={YEARS.min}
              max={YEARS.max}
              step={YEARS.step}
              onChange={setYears}
              minLabel={`${YEARS.min} Yrs`}
              maxLabel={`${YEARS.max} Yrs`}
            >
              <EditableNumber
                value={years}
                onChange={(next) => setYears(Math.round(next))}
                format={String}
                min={YEARS.min}
                max={YEARS.max}
                label="Loan period in years"
                className="editable__input--narrow"
              />
            </SliderField>

            {/* Interest rate */}
            <SliderField
              label="Interest rate (%)"
              value={rate}
              min={RATE.min}
              max={RATE.max}
              step={RATE.step}
              onChange={setRate}
              minLabel={`${RATE.min}%`}
              maxLabel={`${RATE.max}%`}
            >
              <EditableNumber
                value={rate}
                onChange={setRate}
                format={formatRate}
                min={RATE.min}
                max={RATE.max}
                label="Interest rate percentage"
                className="editable__input--small"
              />
            </SliderField>

            <p className="calculator__disclaimer form-note">
              {residency.note} Figures are indicative estimates of principal and
              interest only, and exclude fees, insurance and service charges.
            </p>
          </div>

          {/* Results & lead capture */}
          <aside className="calculator__aside">
            <div className="results">
              <div className="results__headline">
                <h2 className="t-label-caps muted results__label">
                  Est. monthly payment
                </h2>
                <p className="t-display results__amount tabular">
                  {formatAmount(summary.monthly)}{' '}
                  <span className="t-headline-lg">AED</span>
                </p>
                <p className="t-body-md results__basis">
                  Loan of AED{' '}
                  <span className="tabular">{formatAmount(summary.principal)}</span>{' '}
                  at {formatRate(rate)}% over {years} years
                </p>

                <dl className="results__breakdown">
                  <div className="results__row">
                    <dt className="t-label-caps muted">Down payment</dt>
                    <dd className="t-body-md tabular">
                      {formatAmount(summary.downPayment)}
                    </dd>
                  </div>
                  <div className="results__row">
                    <dt className="t-label-caps muted">Total interest</dt>
                    <dd className="t-body-md tabular">
                      {formatAmount(summary.totalInterest)}
                    </dd>
                  </div>
                  <div className="results__row">
                    <dt className="t-label-caps muted">Total repayment</dt>
                    <dd className="t-body-md tabular">
                      {formatAmount(summary.totalRepayment)}
                    </dd>
                  </div>
                </dl>
              </div>

              <EligibilityForm summary={summary} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
