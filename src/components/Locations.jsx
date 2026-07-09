import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const locations = [
  {
    name: "Kalsang Café (Main Branch)",
    address: "88-A, Rajpur Rd, opp. O.N.G.C, Hathibarkala Salwala, Dehradun, Uttarakhand 248001",
    phone: "+91 135 274 0244",
    hours: "11:00 AM - 11:00 PM",
    map: "https://maps.google.com/maps?q=Kalsang%20Restaurant%20Rajpur%20Road%20Dehradun&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Kalsang Friends Corner",
    address: "Near Pacific Mall, Rajpur Road, Dehradun, Uttarakhand 248001",
    phone: "+91 135 273 4567",
    hours: "12:00 PM - 11:30 PM",
    map: "https://maps.google.com/maps?q=Pacific%20Mall%20Rajpur%20Road%20Dehradun&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Kalsang AMA Café",
    address: "Mussorie Diversion, Dehradun, Uttarakhand 248001",
    phone: "+91 135 275 9876",
    hours: "10:00 AM - 10:00 PM",
    map: "https://maps.google.com/maps?q=Mussoorie%20Diversion%20Dehradun&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
]

const Locations = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 block">Visit Us</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
          We are spread across the beautiful city of Dehradun. Find the one nearest to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden border-none shadow-2xl rounded-3xl flex flex-col">
              <div className="h-56 sm:h-64 w-full">
                <iframe
                  src={loc.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={loc.name}
                  className="filter grayscale contrast-125"
                ></iframe>
              </div>
              <CardContent className="p-6 sm:p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-6 text-primary">{loc.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1 shrink-0" size={20} />
                    <p className="text-gray-600 text-sm leading-relaxed">{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-primary shrink-0" size={20} />
                    <p className="text-gray-600 text-sm">{loc.phone}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-primary shrink-0" size={20} />
                    <p className="text-gray-600 text-sm">{loc.hours}</p>
                  </div>
                </div>
                <button className="mt-8 w-full py-3 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                  Get Directions
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Locations
