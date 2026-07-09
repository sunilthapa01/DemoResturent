import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageSquare } from 'lucide-react'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-[60] flex flex-col gap-3 sm:gap-4"
        >
          {/* Call Button */}
          <motion.a
            href="tel:+911352740244"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-all group relative"
          >
            <Phone size={24} />
            <span className="absolute right-full mr-4 bg-background border border-border text-foreground text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
              Call Now
            </span>
          </motion.a>

          {/* Visit Button */}
          <motion.a
            href="#locations"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl hover:bg-gray-50 transition-all group relative border border-border"
          >
            <MessageSquare size={24} />
            <span className="absolute right-full mr-4 bg-background border border-border text-foreground text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
              Visit Us
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA
