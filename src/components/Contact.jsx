import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Contact = () => {
  const [formState, setFormState] = useState('idle') // idle, loading, success, error
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone) newErrors.phone = 'Phone is required'
    if (!formData.message) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setFormState('loading')
      // Simulate API call
      setTimeout(() => {
        setFormState('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setFormState('idle'), 5000)
      }, 1500)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-12"
        >
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">Reserved for <br /> <span className="text-primary italic">Great Conversations.</span></h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
              Whether it's a table booking, a catering inquiry, or just a hello, we'd love to hear from you.
              Our team usually responds within 2 hours.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              { icon: <Phone size={24} />, label: "Direct Call", value: "+91 135 274 0244", color: "bg-blue-500" },
              { icon: <Mail size={24} />, label: "Email Support", value: "hello@kalsang.com", color: "bg-purple-500" },
              { icon: <MapPin size={24} />, label: "Headquarters", value: "Rajpur Road, Dehradun", color: "bg-red-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-border/50 group cursor-pointer"
              >
                <div className={cn("p-3 sm:p-4 rounded-2xl text-white transition-all shadow-lg shrink-0", item.color)}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-base sm:text-xl font-bold text-gray-800 break-words">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative p-6 sm:p-10 bg-gray-900 rounded-[2rem] sm:rounded-[3rem] text-white overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Official Kalsang Club</h4>
              <p className="text-white/50 mb-6 sm:mb-8 text-sm">Join 10,000+ members getting exclusive dining offers every week.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="john@doe.com"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 sm:px-6 py-3 sm:py-4 flex-grow min-w-0 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20 text-sm sm:text-base"
                />
                <button className="bg-primary text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 shrink-0">
                  Join
                </button>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[3.5rem] shadow-2xl border border-border/50 relative"
        >
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="py-20 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-500 max-w-xs">We've received your request and will get back to you shortly.</p>
                <Button 
                  onClick={() => setFormState('idle')}
                  variant="outline" 
                  className="mt-10 rounded-full px-10"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 sm:space-y-8"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={cn("rounded-2xl border-gray-100 h-14 sm:h-16 px-5 sm:px-6 focus:border-primary transition-all", errors.name && "border-red-500 bg-red-50")}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-bold mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={cn("rounded-2xl border-gray-100 h-14 sm:h-16 px-5 sm:px-6 focus:border-primary transition-all", errors.phone && "border-red-500 bg-red-50")}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] font-bold mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    type="email"
                    className={cn("rounded-2xl border-gray-100 h-14 sm:h-16 px-5 sm:px-6 focus:border-primary transition-all", errors.email && "border-red-500 bg-red-50")}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    className={cn("rounded-3xl border-gray-100 min-h-[140px] sm:min-h-[160px] p-5 sm:p-6 resize-none focus:border-primary transition-all", errors.message && "border-red-500 bg-red-50")}
                  />
                  {errors.message && <p className="text-red-500 text-[10px] font-bold mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</p>}
                </div>
                <Button
                  disabled={formState === 'loading'}
                  className="w-full h-16 sm:h-20 rounded-[1.5rem] sm:rounded-[2rem] text-base sm:text-lg font-bold shadow-2xl shadow-primary/30 flex gap-3 group relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {formState === 'loading' ? (
                      <motion.div 
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3"
                      >
                        Submit Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
