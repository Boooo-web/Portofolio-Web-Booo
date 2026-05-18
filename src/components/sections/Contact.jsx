import React, { useState } from 'react'
import { Mail, MapPin, Instagram, Send, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Scroll Reveal) */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tighter">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Send me a message and let's create something amazing together.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-16">
          
          {/* Info Column (Slides from Left) */}
          <motion.div 
            className="space-y-8 max-w-2xl"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and design.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-[#C5D098]/10 rounded-lg border border-[#C5D098]/10 group-hover:border-[#C5D098]/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail className="h-5 w-5 text-[#C5D098]" />
                </motion.div>
                <div>
                  <p className="font-semibold text-sm text-gray-400">Email</p>
                  <a href="mailto:evanarsap@gmail.com" className="font-medium hover:text-[#C5D098] transition-colors">
                    evanarsap@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-[#C5D098]/10 rounded-lg border border-[#C5D098]/10 group-hover:border-[#C5D098]/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <MapPin className="h-5 w-5 text-[#C5D098]" />
                </motion.div>
                <div>
                  <p className="font-semibold text-sm text-gray-400">Location</p>
                  <p className="font-medium text-white">Surabaya, Indonesia</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect with me</h4>
              <div className="flex gap-4">
                <motion.a 
                  href="https://www.instagram.com/vnnzas_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:text-black transition-colors rounded-lg border border-white/5"
                  whileHover={{ 
                    y: -5,
                    scale: 1.1,
                    backgroundColor: '#C5D098',
                    borderColor: '#C5D098'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="https://wa.me/6282143579191"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:text-black transition-colors rounded-lg border border-white/5"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -5,
                    scale: 1.1,
                    backgroundColor: '#C5D098',
                    borderColor: '#C5D098'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="mailto:evanarsap@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:text-black transition-colors rounded-lg border border-white/5"
                  whileHover={{ 
                    y: -5,
                    scale: 1.1,
                    backgroundColor: '#C5D098',
                    borderColor: '#C5D098'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Form Column (Slides from Right) */}
          <motion.div 
            className="rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            whileHover={{ borderColor: 'rgba(197, 208, 152, 0.25)' }}
          >
            <form
              action="https://formsubmit.co/evanarsap@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New message from portfolio website" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C5D098] transition-all duration-300"
                  placeholder="Your full name"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C5D098] transition-all duration-300"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                  Subject *
                </label>
                <motion.select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#C5D098] transition-all duration-300"
                  whileFocus={{ scale: 1.01 }}
                >
                  <option value="">Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </motion.select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C5D098] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-[#C5D098] hover:bg-[#B5C088] text-black font-semibold rounded-xl transition-colors cursor-pointer shadow-lg shadow-[#C5D098]/10"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}