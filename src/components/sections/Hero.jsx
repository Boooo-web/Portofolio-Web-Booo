import React from 'react'
import { ArrowRight, Instagram, Mail } from 'lucide-react'
import { Phone } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:justify-items-center">
          {/* Left Content */}
          <div className="max-w-3xl space-y-10 text-center lg:text-center">
            {/* Badge */}
            <div>
              <span className="inline-flex items-center rounded-full border border-[#C5D098]/20 bg-[#C5D098]/10 px-3 py-1 text-xs font-medium text-[#C5D098]">
                <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-[#C5D098]" />
                Available for work
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tighter">
              UI/UX Designer
              <br />
              Based in
              <br />
              <span className="text-[#C5D098]">Surabaya, Indonesia</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
              {`Bridging ideas through technology and secure networks. Specialist in Mikrotik configurations and digital system management.`}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-black/60 px-6 py-3 text-sm text-gray-300 transition hover:border-[#C5D098] hover:text-white"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6">
              <a href="https://www.instagram.com/vnnzas_" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-[#C5D098] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="tel:+6282143579191"
                 className="text-gray-400 hover:text-[#C5D098] transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:evanarsap@gmail.com"
                 className="text-gray-400 hover:text-[#C5D098] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gray-900 h-full flex items-center justify-center min-h-[550px]">
              <img 
                src="/asset_images/avatar.jpeg" 
                alt="Evan Arya Saputra" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}