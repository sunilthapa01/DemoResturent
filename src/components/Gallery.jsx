import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, Maximize2, ExternalLink } from 'lucide-react'

const images = [
  { url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop", size: "large", category: "Food" },
  { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", size: "tall", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop", size: "small", category: "Food" },
  { url: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2070&auto=format&fit=crop", size: "small", category: "Food" },
  { url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2070&auto=format&fit=crop", size: "large", category: "Vibe" },
  { url: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2070&auto=format&fit=crop", size: "tall", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=2070&auto=format&fit=crop", size: "small", category: "Food" },
  { url: "https://images.unsplash.com/photo-1613534579204-633857329487?q=80&w=2070&auto=format&fit=crop", size: "large", category: "Vibe" },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const galleryRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 sm:mb-16 gap-6 sm:gap-8">
        <div className="max-w-2xl">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Visual Story</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">A Glimpse into <span className="text-primary italic">Kalsang</span></h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Every corner of our restaurant tells a story, and every dish is a masterpiece.
            Explore the vibrant culture and aesthetic vibes of Dehradun's favorite café.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {['All', 'Food', 'Interior', 'Vibe'].map((cat) => (
            <button key={cat} className="px-4 sm:px-6 py-2 rounded-full border border-border hover:bg-primary hover:text-white transition-all font-semibold text-xs sm:text-sm">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={galleryRef}
        className="columns-2 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
      >
        {images.map((item, index) => (
          <motion.div 
            key={index} 
            layoutId={`image-${index}`}
            className="gallery-item relative overflow-hidden rounded-3xl group cursor-pointer break-inside-avoid shadow-lg"
            onClick={() => setSelectedImage({ ...item, id: index })}
          >
            <img 
              src={item.url} 
              alt={`Gallery ${index + 1}`} 
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
              <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">
                  {item.category}
                </span>
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-xl">View Masterpiece</h4>
                  <Maximize2 className="text-white" size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />
            <motion.div 
              layoutId={`image-${selectedImage.id}`}
              className="relative max-w-6xl max-h-full overflow-hidden rounded-3xl shadow-2xl bg-muted"
            >
              <img 
                src={selectedImage.url} 
                alt="Selected" 
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="absolute top-6 right-6 flex gap-4">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="p-4 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 sm:p-8 bg-white/5 backdrop-blur-xl border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white">
                <div>
                  <p className="text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-1">{selectedImage.category}</p>
                  <h3 className="text-lg sm:text-2xl font-bold">Kalsang Authentic Moments</h3>
                </div>
                <button className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary rounded-full font-bold text-sm sm:text-base hover:bg-primary/90 transition-all shrink-0">
                  Book This Vibe <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
