import { useState } from 'react'
import { FAQS } from '../data/faqs'
import Icon from './Icon'
import './Faq.css'

export default function Faq() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="faq" id="faq">
      <div className="container container--narrow">
        <div className="faq__head">
          <h2 className="t-display faq__title">
            Frequently asked <span className="faq__title-light">questions</span>
          </h2>
        </div>

        <div className="faq__list">
          {FAQS.map(({ id, question, answer }) => {
            const isOpen = openId === id
            return (
              <div key={id} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${id}`}
                    id={`faq-trigger-${id}`}
                    onClick={() => setOpenId(isOpen ? null : id)}
                  >
                    <span className="faq__question">{question}</span>
                    <Icon name="expand_more" className="faq__icon" />
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-panel-${id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${id}`}
                  hidden={!isOpen}
                >
                  <div className="faq__answer t-body-md">{answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
