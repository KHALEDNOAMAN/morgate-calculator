/** FAQ copy, verbatim from the design brief. */
export const FAQS = [
  {
    id: 'reducing-balance',
    question: 'How is interest calculated on a mortgage in the UAE?',
    answer: (
      <p>
        Most UAE mortgages use a reducing balance method. This means interest is
        charged only on the <strong>outstanding loan amount</strong>, not on the
        original principal amount.
      </p>
    ),
  },
  {
    id: 'fixed-rate',
    question: 'How is interest calculated on a fixed rate mortgage?',
    answer: (
      <>
        <p>Interest is calculated as a percentage of the outstanding amount.</p>
        <p>Consider the following scenario as example:</p>
        <ul>
          <li>Loan Amount: AED 1,000,000</li>
          <li>Fixed Interest Rate: 5% annually (~0.417% monthly)</li>
          <li>Tenure: 25 years</li>
          <li>Interest ≈ AED 4,170 per month (AED 1,000,000 × 0.417%)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'principal-and-interest',
    question: 'How to calculate principal and interest payments on a mortgage?',
    answer: (
      <>
        <p>A mortgage EMI has 2 parts:</p>
        <ul>
          <li>Interest Component: Outstanding Balance × Monthly Interest Rate</li>
          <li>Principal Repayment: EMI − interest</li>
        </ul>
        <p>Consider the following scenario as example:</p>
        <ul>
          <li>Loan Amount: AED 1,000,000</li>
          <li>Interest Rate: 5% annually (~0.417% monthly)</li>
          <li>Tenure: 25 years</li>
          <li>EMI: AED 6,000</li>
        </ul>
        <p className="faq__subhead">Month 1</p>
        <ul>
          <li>Interest Component ≈ AED 4,167 (1,000,000 × 0.417%)</li>
          <li>Principal Repayment ≈ 6,000 − 4,167 ≈ AED 1,833</li>
        </ul>
        <p className="faq__subhead">Month 2</p>
        <ul>
          <li>Interest Component ≈ AED 4,162 (998,167 × 0.417%)</li>
          <li>Principal Repayment ≈ 6,000 − 4,162 ≈ AED 1,838</li>
        </ul>
        <p>
          As the months proceed, the interest component reduces as the principal
          balance drops.
        </p>
      </>
    ),
  },
  {
    id: 'documents',
    question: 'What documents do I need to apply for a mortgage in Dubai?',
    answer: (
      <>
        <p className="faq__subhead">Basic identity documents</p>
        <ul>
          <li>
            Residents / UAE Nationals: Passport, Resident Visa (if resident), EID
          </li>
          <li>Non-residents: Passport, proof of address in home country</li>
        </ul>
        <p className="faq__subhead">Income and financial documents</p>
        <ul>
          <li>
            Salaried Individuals: Salary certificate (issued within 30 days), last
            3 to 6 months&rsquo; pay slips, last 6 months&rsquo; bank statements
          </li>
          <li>
            Self-employed Individuals: Trade license, MOA, Company bank statements
            (6–12 months), Personal bank statements, Audited financials (usually
            last 2 years)
          </li>
        </ul>
        <p className="faq__subhead">Property documents (for final approval)</p>
        <ul>
          <li>
            SPA / MOU, title deed (ready property) or Oqood (off-plan), No
            Objection Certificate (NOC) from developer (if applicable), property
            valuation report, bank mortgage offer letter.
          </li>
        </ul>
        <p className="faq__subhead">Application and supporting documents</p>
        <ul>
          <li>
            Completed mortgage application form, proof of address (utility bill /
            tenancy contract in some cases), Power of Attorney (if someone is
            applying on your behalf).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'foreigners',
    question: 'Can foreigners get a mortgage in Dubai?',
    answer: (
      <>
        <p>
          Yes – Foreigners (both UAE residents and non-residents) can get a
          mortgage in Dubai. In fact, the system is well-developed for
          international buyers, but the conditions are stricter compared to UAE
          nationals.
        </p>
        <p>
          Requirements/conditions are listed as, but not limited to the below:
        </p>
        <ul>
          <li>Minimum age: 21 years</li>
          <li>
            Maximum age (at loan maturity): 65 for salaried, and 70 for
            self-employed.
          </li>
          <li>Property must be in approved freehold areas.</li>
          <li>Stable employment or business income</li>
          <li>Clean credit history</li>
          <li>Debt Burden Ratio (DBR): Total EMIs ≤ 50% of monthly income</li>
        </ul>
      </>
    ),
  },
  {
    id: 'residency-rates',
    question: 'Is there any interest rate difference by residency?',
    answer: <p>Yes – UAE residents generally get better rates.</p>,
  },
  {
    id: 'how-to-use',
    question: 'How to use our mortgage calculator',
    answer: (
      <ul>
        <li>
          <strong>Enter Property Price:</strong> Based on your chosen property or
          custom input.
        </li>
        <li>
          <strong>Choose Down Payment Percentage:</strong> Adjust between 15% to
          30% depending on UAE guidelines.
        </li>
        <li>
          <strong>Select Loan Term (in Years):</strong> From 5 to 25 years
        </li>
        <li>
          <strong>Input Interest Rate:</strong> Average UAE mortgage rates range
          between 3% and 5%
        </li>
        <li>
          <strong>View Monthly Payment Instantly:</strong> Automatic calculation
          of principal + interest
        </li>
      </ul>
    ),
  },
]
