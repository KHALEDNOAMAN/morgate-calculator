import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, X } from 'lucide-react'

/**
 * Renders whatever InquiryForm passes to setNotification, and clears itself
 * after a few seconds.
 */
export default function Notification({ notification, onDismiss }) {
  useEffect(() => {
    if (!notification) return
    const timer = setTimeout(onDismiss, 6000)
    return () => clearTimeout(timer)
  }, [notification, onDismiss])

  const isError = notification?.type === 'error'

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 right-6 z-[60] flex max-w-sm items-start gap-3 rounded-2xl border px-5 py-4 backdrop-blur-xl ${
            isError
              ? 'border-red-500/30 bg-red-500/10 text-red-200'
              : 'border-white/15 bg-white/10 text-white'
          }`}
        >
          {isError ? (
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
          ) : (
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-white" />
          )}
          <p className="text-sm leading-snug">{notification.message}</p>
          <button
            onClick={onDismiss}
            aria-label="Dismiss notification"
            className="ml-2 shrink-0 text-white/50 transition-colors hover:text-white"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
