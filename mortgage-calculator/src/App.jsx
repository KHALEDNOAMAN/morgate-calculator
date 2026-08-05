import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Calculator from './components/Calculator'
import Faq from './components/Faq'
import InquiryForm from './components/InquiryForm'
import Notification from './components/Notification'
import Footer from './components/Footer'
import LegalModal from './components/LegalModal'
import PhoneModal from './components/PhoneModal'
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from './data/legal'
import './App.css'

// TODO: replace every value here with the real contact details before launch.
const CONTACT_INFO = {
  email: 'sales@dprealestate.ae',
  phone: '+971 50 123 4567',
  whatsapp: '971501234567',
  websites: ['dprealestate.ae'],
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)
  const [phoneModalOpen, setPhoneModalOpen] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const dismissNotification = useCallback(() => setNotification(null), [])
  const closePhoneModal = useCallback(() => setPhoneModalOpen(false), [])
  const closePrivacy = useCallback(() => setShowPrivacy(false), [])
  const closeTerms = useCallback(() => setShowTerms(false), [])

  return (
    <div className="page" id="top">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <main className="page__main">
        <Calculator />
        <Faq />
        <InquiryForm
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          setNotification={setNotification}
          contactInfo={CONTACT_INFO}
        />
      </main>

      <Footer
        contactInfo={CONTACT_INFO}
        setPhoneModalOpen={setPhoneModalOpen}
        setShowPrivacy={setShowPrivacy}
        setShowTerms={setShowTerms}
      />

      <Notification
        notification={notification}
        onDismiss={dismissNotification}
      />
      <PhoneModal
        isOpen={phoneModalOpen}
        onClose={closePhoneModal}
        contactInfo={CONTACT_INFO}
      />
      <LegalModal
        isOpen={showPrivacy}
        onClose={closePrivacy}
        title="Privacy Policy"
      >
        {PRIVACY_POLICY}
      </LegalModal>
      <LegalModal
        isOpen={showTerms}
        onClose={closeTerms}
        title="Terms of Service"
      >
        {TERMS_OF_SERVICE}
      </LegalModal>
    </div>
  )
}
