import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import SpecialHighlights from './components/SpecialHighlights'
import Gallery from './components/Gallery'
import Locations from './components/Locations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // GSAP Scroll Animations for Section Headings
    const headings = document.querySelectorAll('section h2');
    headings.forEach((heading) => {
      gsap.fromTo(heading, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20 md:py-32">
          <About />
        </section>
        <section id="menu" className="py-20 md:py-32 bg-muted/50">
          <Menu />
        </section>
        <section className="py-20 md:py-32">
          <SpecialHighlights />
        </section>
        <section id="gallery" className="py-20 md:py-32 bg-muted/50">
          <Gallery />
        </section>
        <section id="locations" className="py-20 md:py-32">
          <Locations />
        </section>
        <section id="contact" className="py-20 md:py-32 bg-muted/50">
          <Contact />
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
