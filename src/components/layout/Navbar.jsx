import React, { useState, useEffect } from 'react'
import { Menu, X, Instagram, Mail } from 'lucide-react'
import { Phone } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/80 backdrop-blur-md border-b border-gray-800'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-xl font-mono font-bold tracking-widest">
            EAS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5D098] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
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
            <a href="#contact"
               className="border border-gray-600 hover:border-[#C5D098] text-gray-300 hover:text-white px-4 py-2 text-sm transition-colors">
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
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
              <a href="#contact"
                 className="border border-gray-600 hover:border-[#C5D098] text-gray-300 hover:text-white px-4 py-2 text-sm transition-colors">
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}