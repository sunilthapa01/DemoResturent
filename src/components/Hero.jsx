import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Play } from 'lucide-react'
import gsap from 'gsap'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      })
    })
    return () => ctx.revert()
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const elem = document.getElementById(id)
    window.scrollTo({
      top: elem.offsetTop - 80,
      behavior: 'smooth'
    })
  }

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white hero-content"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold mb-6 sm:mb-8 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
          <span>The Finest Tibetan Cuisine in Uttarakhand</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-8 tracking-tighter leading-[0.95] sm:leading-[0.9]">
          Savor the <br />
          <span className="text-primary italic font-serif">Himalayan</span> Soul
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Experience a legendary culinary tradition that blends ancient Tibetan spices with modern Asian flair.
          A journey of taste, culture, and warmth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <motion.button
            onClick={(e) => scrollToSection(e, 'menu')}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-primary text-white rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all hover:bg-primary/90 shadow-2xl shadow-primary/40 group"
          >
            Explore Menu
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={(e) => scrollToSection(e, 'contact')}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all hover:bg-white/20"
          >
            <Play size={20} className="fill-white" />
            Book a Table
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-12 hidden lg:block text-left border-l-2 border-primary/50 pl-6 z-10">
        <p className="text-white font-bold text-xl">15K+</p>
        <p className="text-white/50 text-xs uppercase tracking-widest">Happy Guests</p>
      </div>
      <div className="absolute bottom-12 right-12 hidden lg:block text-right border-r-2 border-primary/50 pr-6 z-10">
        <p className="text-white font-bold text-xl">4.8/5</p>
        <p className="text-white/50 text-xs uppercase tracking-widest">Customer Rating</p>
      </div>

      {/* Scroll Down */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
