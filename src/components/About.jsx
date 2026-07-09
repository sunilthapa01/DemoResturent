import { motion } from 'framer-motion'
import { Award, Users, Coffee, Flame, ChevronRight } from 'lucide-react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Image Column */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative z-10"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -z-10 blur-2xl" />
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Kalsang Interior" 
              className="rounded-[3.5rem] shadow-2xl w-full h-[650px] object-cover"
            />
            
            {/* Floating Info Cards */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -left-10 bottom-20 bg-white p-8 rounded-[2rem] shadow-2xl max-w-[240px] hidden xl:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <Award size={24} />
                </div>
                <h5 className="font-bold">Best Tibetan Food 2023</h5>
              </div>
              <p className="text-gray-400 text-xs">Awarded by Dehradun Foodies Association for consistency and taste.</p>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute -right-10 top-20 bg-gray-900 p-8 rounded-[2rem] shadow-2xl max-w-[240px] hidden xl:block text-white border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 text-white rounded-xl">
                  <Flame size={24} className="text-orange-500" />
                </div>
                <h5 className="font-bold">Legendary Taste</h5>
              </div>
              <p className="text-white/40 text-xs">Our Momos are voted "Most Addictive" for 5 years in a row.</p>
            </motion.div>
          </motion.div>

          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/50 rounded-full blur-3xl -z-0" />
        </div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Heritage</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Crafting Stories <br />
              Since <span className="text-primary italic">2008.</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Kalsang is more than just a restaurant; it's a piece of Tibetan heritage nestled in the hills of Uttarakhand. 
              Started as a small cozy corner, we've grown into a beloved destination for foodies seeking the real taste of Lhasa and beyond.
            </p>
          </div>

          <p className="text-gray-500 leading-relaxed">
            Our wooden interiors, prayer flags, and warm lighting create an atmosphere where stories are shared over steaming pots of thukpa. 
            Every dish is prepared using recipes passed down through generations, ensuring that the soul of our cuisine remains untouched.
          </p>
          
          <div className="grid grid-cols-2 gap-10 pt-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-muted rounded-2xl text-primary shrink-0">
                <Users size={28} />
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-1 tracking-tighter">500K+</h4>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Visitors</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-muted rounded-2xl text-primary shrink-0">
                <Coffee size={28} />
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-1 tracking-tighter">150+</h4>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Recipes</p>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <button className="px-12 py-5 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-primary transition-all shadow-xl shadow-gray-900/20 flex items-center gap-3 group">
              Read Our Full Story
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
