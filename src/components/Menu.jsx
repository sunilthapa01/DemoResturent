import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { ShoppingBag, Star, Zap } from 'lucide-react'

const menuData = {
  'tibetan-specials': [
    { id: 1, name: 'Kalsang Special Momos', price: '₹240', desc: 'Hand-crafted dumplings with our secret spice blend.', image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop', tags: ['Signature', 'Spicy'], rating: 4.9 },
    { id: 2, name: 'Traditional Thukpa', price: '₹280', desc: 'Hearty Tibetan noodle soup with seasonal veggies/meat.', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2070&auto=format&fit=crop', tags: ['Healthy'], rating: 4.8 },
    { id: 3, name: 'Spicy Laphing', price: '₹180', desc: 'Cold mung bean noodles with garlic and chili oil.', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2070&auto=format&fit=crop', tags: ['Street Food'], rating: 4.7 },
    { id: 4, name: 'Shaphalay', price: '₹320', desc: 'Deep-fried bread stuffed with seasoned meat or veggies.', image: 'https://images.unsplash.com/photo-1601050690597-df056fb04791?q=80&w=2070&auto=format&fit=crop', tags: ['Crispy'], rating: 4.8 },
  ],
  'chinese-favorites': [
    { id: 5, name: 'Schezwan Fried Rice', price: '₹260', desc: 'Wok-tossed rice with bold Schezwan flavors.', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2070&auto=format&fit=crop', tags: ['Hot'], rating: 4.6 },
    { id: 6, name: 'Chili Garlic Noodles', price: '₹220', desc: 'Classic hakka noodles with a pungent garlic kick.', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2070&auto=format&fit=crop', tags: ['Classic'], rating: 4.7 },
    { id: 7, name: 'Manchurian Gravy', price: '₹280', desc: 'Crispy veggie balls in a thick, tangy soy-based sauce.', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=2070&auto=format&fit=crop', tags: ['Popular'], rating: 4.8 },
    { id: 8, name: 'Spring Rolls', price: '₹190', desc: 'Crispy rolls filled with julienned vegetables.', image: 'https://images.unsplash.com/photo-1613534579204-633857329487?q=80&w=2070&auto=format&fit=crop', tags: ['Crunchy'], rating: 4.5 },
  ],
  'soups-noodles': [
    { id: 9, name: 'Manchow Soup', price: '₹150', desc: 'Spicy soup served with crispy noodles.', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop', tags: ['Appetizer'], rating: 4.7 },
    { id: 10, name: 'Thenthuk', price: '₹260', desc: 'Hand-pulled flat noodles in a clear, flavorful broth.', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2070&auto=format&fit=crop', tags: ['Traditional'], rating: 4.9 },
  ],
  'beverages': [
    { id: 12, name: 'Butter Tea', price: '₹120', desc: 'Traditional Tibetan salty tea with butter and milk.', image: 'https://images.unsplash.com/photo-1544787210-2213d4b2938c?q=80&w=2070&auto=format&fit=crop', tags: ['Must Try'], rating: 5.0 },
    { id: 13, name: 'Virgin Mojito', price: '₹180', desc: 'Refreshing lime and mint cooler.', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop', tags: ['Fresh'], rating: 4.8 },
  ],
}

const Menu = () => {
  const [activeTab, setActiveTab] = useState('tibetan-specials')

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
        >
          <Zap size={12} className="fill-primary" />
          Freshly Prepared Every Day
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Culinary <span className="text-primary italic">Legacy</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Embark on a gastronomic journey through the Himalayas. Each dish is a testament to our 15 years of culinary expertise.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <TabsList className="bg-white/40 backdrop-blur-md p-1.5 rounded-full border border-border/50 h-auto gap-2">
            {Object.keys(menuData).map((cat) => (
              <TabsTrigger 
                key={cat}
                value={cat} 
                className="rounded-full px-8 py-3 transition-all data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg text-xs font-bold uppercase tracking-widest"
              >
                {cat.replace('-', ' ')}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 outline-none"
          >
            {menuData[activeTab].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[2.5rem] bg-white h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden p-3">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="px-8 pb-8 pt-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 mb-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                              • {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <span className="text-primary font-bold text-xl bg-primary/5 px-4 py-1 rounded-2xl">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {item.desc}
                    </p>
                    <button className="w-full py-4 bg-muted hover:bg-primary hover:text-white transition-all rounded-2xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 group/btn">
                      <ShoppingBag size={16} className="group-hover/btn:scale-110 transition-transform" />
                      Order Now
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Tabs>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-10 bg-primary rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
      >
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-2">Craving something specific?</h3>
          <p className="text-white/70 text-lg">Download our full digital menu for the complete selection.</p>
        </div>
        <button className="relative z-10 px-10 py-5 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all">
          View Full Menu (PDF)
        </button>
        {/* Background Decor */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
      </motion.div>
    </div>
  )
}

export default Menu
