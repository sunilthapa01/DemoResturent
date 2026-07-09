import React from 'react'
import { motion } from 'framer-motion'
import { Utensils, Heart, Star, MapPin, Sparkles, ShieldCheck, Clock, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const highlights = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Authentic Recipes",
    desc: "Every dish is prepared using traditional Tibetan and Asian techniques passed down through generations.",
    color: "bg-orange-500"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Cozy Ambience",
    desc: "Warm lighting, wooden décor, and a relaxed atmosphere make us the perfect spot for any occasion.",
    color: "bg-red-500"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Top Rated",
    desc: "Consistently ranked as one of the best cafés in Dehradun by locals and travelers alike.",
    color: "bg-yellow-500"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Prime Locations",
    desc: "Find us across Dehradun, from Rajpur Road to Hathibarkala, bringing taste closer to you.",
    color: "bg-blue-500"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Hygiene First",
    desc: "We follow strict international standards for food safety and cleanliness in our kitchens.",
    color: "bg-green-500"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Fresh Ingredients",
    desc: "We source our vegetables and spices daily to ensure the most vibrant flavors in every bite.",
    color: "bg-teal-500"
  }
]

const SpecialHighlights = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 sm:mb-20">
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Why Choose Us</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">The Kalsang <span className="text-primary italic">Difference</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          We don't just serve food; we serve experiences. Discover the pillars that make us Dehradun's most beloved restaurant.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-6 sm:p-10 bg-white rounded-[2rem] sm:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 group relative overflow-hidden"
          >
            <div className={cn("mb-6 sm:mb-8 p-4 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] w-fit text-white transition-transform duration-500 group-hover:scale-110 shadow-lg", item.color)}>
              {item.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {item.desc}
            </p>
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-primary/10 group-hover:text-primary/30 transition-colors">
              <Sparkles size={28} className="sm:hidden" />
              <Sparkles size={32} className="hidden sm:block" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SpecialHighlights
