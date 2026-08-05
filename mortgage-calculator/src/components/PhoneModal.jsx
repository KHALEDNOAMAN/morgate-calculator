import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageCircle } from 'lucide-react'

/**
 * Inferred to match LegalModal — no PhoneModal came across with the footer.
 * Swap it for the original if one exists.
 */
export default function PhoneModal({ isOpen, onClose, contactInfo }) {
  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  const telHref = `tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.3, ease: [0.17, 0.67, 0.3, 0.99] }}
            role="dialog"
            aria-modal="true"
            aria-label="Contact sales"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       z-[101] w-[96%] max-w-md bg-black border border-white/12
                       rounded-[32px] p-8 md:p-10
                       shadow-[0_0_120px_rgba(0,0,0,0.95)]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <X size={22} className="text-white/60" />
            </button>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/50 mb-2">
                  Contact
                </p>
                <h2 className="text-2xl font-light text-white tracking-tight">
                  Speak to our sales team
                </h2>
              </div>

              <a
                href={telHref}
                className="block text-2xl font-light tracking-wide text-white transition-colors hover:text-red-500"
              >
                {contactInfo.phone}
              </a>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={telHref}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-red-600"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-red-500/20 bg-white/5 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 transition-all hover:bg-red-500/10 hover:text-red-500"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
