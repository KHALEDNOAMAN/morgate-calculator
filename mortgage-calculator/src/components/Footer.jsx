import { Mail, Phone, MessageCircle, Globe } from 'lucide-react'

export default function Footer({
  contactInfo,
  setPhoneModalOpen,
  setShowPrivacy,
  setShowTerms,
}) {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border border-red-500/20 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}logo.jpg`}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.35em] uppercase leading-none mb-1">
                DP REAL ESTATE
              </span>
              
            </div>
          </div>
         
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <div className="flex items-center gap-3">
              <Mail size={16} /> <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} /> <span>{contactInfo.phone}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setPhoneModalOpen(true)}
              aria-label="Call our sales team"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500/10 transition-colors text-white/60 hover:text-red-500"
            >
              <Phone size={18} />
            </button>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Message us on WhatsApp"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500/10 transition-colors text-white/60 hover:text-red-500"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="md:ml-auto">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/80 mb-6">
            Official Links
          </h4>
          <ul className="space-y-3 text-sm text-gray-500 font-light">
            {contactInfo.websites.map((site) => (
              <li key={site}>
                <a
                  href={`https://${site}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-500 flex items-center gap-2 transition-colors"
                >
                  <Globe size={14} /> {site}
                </a>
              </li>
            ))}
          </ul>
        </div>

       
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-600">
        <span>© {new Date().getFullYear()} DP Real Estate. All rights reserved.</span>
        <div className="flex gap-8">
          <button
            onClick={() => setShowPrivacy(true)}
            className="hover:text-red-500 cursor-pointer transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setShowTerms(true)}
            className="hover:text-red-500 cursor-pointer transition-colors"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  )
}
