import React, { useState } from 'react'
import { Mail, MapPin, Instagram, Send } from 'lucide-react'
import { Phone } from 'lucide-react';

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
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tighter">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Send me a message and let's create something amazing together.
          </p>
        </div>

        {/* Option A: 2 kolom (info kiri + form kanan) */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-16">
          {/* Info Column */}
          <div className="space-y-8 max-w-2xl">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and design.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#C5D098]/10 rounded-lg">
                  <Mail className="h-5 w-5 text-[#C5D098]" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:evanarsap@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    evanarsap@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#C5D098]/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-[#C5D098]" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-400">Surabaya, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/vnnzas_" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-[#C5D098] hover:text-black transition-colors rounded-lg">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="tel:+6282143579191"
                   className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-[#C5D098] hover:text-black transition-colors rounded-lg">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="mailto:evanarsap@gmail.com"
                   className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-[#C5D098] hover:text-black transition-colors rounded-lg">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-sm">
            <form
              action="https://formsubmit.co/evanarsap@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New message from portfolio website" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C5D098] transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C5D098] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#C5D098] transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C5D098] transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-[#C5D098] hover:bg-[#B5C088] text-black font-medium rounded-lg transition-colors"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}