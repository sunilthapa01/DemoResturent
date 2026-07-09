import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Scroll Spy Logic
      const sections = ['home', 'about', 'menu', 'gallery', 'locations', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Locations', href: '#locations', id: 'locations' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)
    if (!elem) return
    setMobileMenuOpen(false)
    requestAnimationFrame(() => {
      const top = elem.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-background/80 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-3 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span
            className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold text-xl shadow-lg shadow-primary/30 border-2 border-white/40 group-hover:rotate-[360deg] transition-transform duration-700"
            aria-hidden="true"
          >
            K
          </span>
          <span className={cn(
            "text-2xl font-bold tracking-tighter",
            isScrolled ? "text-primary" : "text-white"
          )}>
            KALSANG
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "px-4 py-2 text-sm font-semibold transition-all rounded-full relative group",
                activeSection === link.id
                  ? (isScrolled ? "text-primary" : "text-white")
                  : (isScrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white")
              )}
            >
              <span className="relative z-10 uppercase tracking-widest text-[10px]">{link.name}</span>
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className={cn(
                    "absolute inset-0 rounded-full -z-0",
                    isScrolled ? "bg-primary/10" : "bg-white/20 backdrop-blur-md"
                  )}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          <div className="pl-4">
            <button 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
            >
              Book a Table
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            isScrolled || mobileMenuOpen
              ? "bg-primary/10 text-primary"
              : "bg-white/15 backdrop-blur-md text-white border border-white/20"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl shadow-2xl md:hidden overflow-hidden border-t border-border/50"
          >
            <div className="py-8 px-8 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-between group",
                    activeSection === link.id ? "bg-primary text-white" : "hover:bg-primary/5"
                  )}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                  <ChevronRight size={20} className={cn("transition-transform", activeSection === link.id ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} />
                </a>
              ))}
              <div className="pt-6">
                <button 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20"
                >
                  Book a Table Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
