import React from 'react'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2021/10/cropped-Kalsang-Logo.jpg?resize=100%2C100&ssl=1" 
                alt="Kalsang Logo" 
                className="w-14 h-14 rounded-full border-2 border-primary"
              />
              <h2 className="text-3xl font-bold text-primary tracking-tight">KALSANG</h2>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Bringing the authentic flavors of Tibet and Asia to Dehradun since 2008. 
              Our passion for food and culture is reflected in every dish we serve.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#menu" className="text-gray-500 hover:text-primary transition-colors">The Menu</a></li>
              <li><a href="#gallery" className="text-gray-500 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#locations" className="text-gray-500 hover:text-primary transition-colors">Locations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Feedback</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Working Hours</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="font-bold text-foreground">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun:</span>
                <span className="font-bold text-foreground">10:00 - 00:00</span>
              </li>
              <li className="pt-4">
                <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">Customer Care</p>
                <p className="text-xl font-bold text-foreground">+91 135 274 0244</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kalsang Restaurant. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-400">
            <p>Designed with ❤️ for Dehradun</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
