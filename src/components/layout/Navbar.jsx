import React, { useState, useEffect } from 'react'
import { Menu, X, Instagram, Mail, Sun, Moon, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if page has scrolled past a threshold
      setIsScrolled(currentScrollY > 50)
      
      // Navbar scroll behavior (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Scrolling down
      } else {
        setIsVisible(true) // Scrolling up
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-100%', opacity: 0 },
      }}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'border-b shadow-lg shadow-black/5' : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(var(--surface-rgb), 0.75)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderColor: isScrolled ? 'var(--border-color)' : 'transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="text-xl font-mono font-bold tracking-widest block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ヴァン
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5D098] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={onToggleTheme}
              className="text-gray-400 hover:text-[#C5D098] transition-colors p-1"
              aria-label="Toggle light and dark mode"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>

            <motion.a 
              href="https://www.instagram.com/vnnzas_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#C5D098] transition-colors p-1"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="h-5 w-5" />
            </motion.a>

            <motion.a 
              href="https://wa.me/6282143579191"
              className="text-gray-400 hover:text-[#C5D098] transition-colors p-1"
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone className="h-5 w-5" />
            </motion.a>

            <motion.a 
              href="mailto:evanarsap@gmail.com"
              className="text-gray-400 hover:text-[#C5D098] transition-colors p-1"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>

            <motion.a 
              href="#contact"
              className="border border-gray-600 hover:border-[#C5D098] text-gray-300 hover:text-white px-4 py-2 text-sm transition-colors rounded-full font-medium"
              whileHover={{ scale: 1.05, borderColor: 'var(--text-color)' }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden py-4 space-y-4 border-t border-gray-800 overflow-hidden"
            >
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
                <button
                  onClick={onToggleTheme}
                  className="text-gray-400 hover:text-[#C5D098] transition-colors"
                  aria-label="Toggle light and dark mode"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <a href="https://www.instagram.com/vnnzas_" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-[#C5D098] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://wa.me/6282143579191"
                   className="text-gray-400 hover:text-[#C5D098] transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="mailto:evanarsap@gmail.com"
                   className="text-gray-400 hover:text-[#C5D098] transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#contact"
                   className="border border-gray-600 hover:border-[#C5D098] text-gray-300 hover:text-white px-4 py-2 text-sm transition-colors rounded-full">
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}