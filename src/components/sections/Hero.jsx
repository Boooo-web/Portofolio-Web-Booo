import React, { useState, useEffect } from 'react'
import { ArrowRight, Instagram, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
}

const rightColumnVariants = {
  hidden: { x: 60, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
      delay: 0.5,
    },
  },
}

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:justify-items-center">
          {/* Left Content */}
          <motion.div 
            className="max-w-3xl space-y-10 text-center lg:text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div className="flex justify-center" variants={itemVariants}>
              <span className="inline-flex items-center rounded-full border border-[#C5D098]/20 bg-[#C5D098]/10 px-3 py-1 text-xs font-medium text-[#C5D098]">
                <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-[#C5D098]" />
                Available for work
              </span>
            </motion.div>

            {/* Headline with typing animation */}
            <motion.div variants={itemVariants}>
              <TypingHeadline />
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed mx-auto">
                {`Bridging ideas through technology and secure networks. Specialist in Mikrotik configurations and digital system management.`}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center" variants={itemVariants}>
              <motion.button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-black/60 px-6 py-3 text-sm text-gray-300 transition-colors hover:border-[#C5D098] hover:text-white"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex items-center justify-center space-x-6" variants={itemVariants}>
              <motion.a 
                href="https://www.instagram.com/vnnzas_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C5D098] transition-colors p-1"
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              
              <motion.a 
                href="https://wa.me/6282143579191"
                className="text-gray-400 hover:text-[#C5D098] transition-colors p-1"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone className="h-5 w-5" />
              </motion.a>
              
              <motion.a 
                href="mailto:evanarsap@gmail.com"
                className="text-gray-400 hover:text-[#C5D098] transition-colors p-1"
                whileHover={{ scale: 1.2, rotate: -8 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Circular Photo & Stats */}
          <motion.div 
            className="hidden lg:flex flex-col items-center justify-center gap-8"
            variants={rightColumnVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Circular Photo with Hover Scale */}
            <motion.div 
              className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#C5D098] shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img 
                src="/asset_images/avatar.jpeg" 
                alt="Evan Arya Saputra" 
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 text-center">
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="text-3xl font-bold text-[#C5D098]">6+</div>
                <p className="text-sm text-gray-400 mt-2">Projects Completed</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="text-3xl font-bold text-[#C5D098]">3+</div>
                <p className="text-sm text-gray-400 mt-2">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TypingHeadline() {
  const lines = [
    'UI/UX Designer',
    'Based in',
    'Surabaya, Indonesia'
  ]

  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let charIndex = 0
    let typingTimer

    const typeLine = () => {
      const line = lines[currentLine]
      if (charIndex <= line.length) {
        setDisplayText(line.slice(0, charIndex))
        charIndex += 1
        typingTimer = setTimeout(typeLine, 60)
      } else {
        // pause then move to next line
        setTimeout(() => {
          if (currentLine < lines.length - 1) {
            setCurrentLine((c) => c + 1)
            setDisplayText('')
          }
        }, 500)
      }
    }

    typeLine()

    return () => clearTimeout(typingTimer)
  }, [currentLine])

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tighter text-center">
      <div>{currentLine > 0 ? lines[0] : displayText}{currentLine === 0 && <span className="typing-caret" />}</div>
      <div>{currentLine > 1 ? lines[1] : (currentLine === 1 ? displayText : '')}{currentLine === 1 && <span className="typing-caret" />}</div>
      <div className="text-[#C5D098]">{currentLine > 2 ? lines[2] : (currentLine === 2 ? displayText : '')}{currentLine === 2 && <span className="typing-caret" />}</div>
    </h1>
  )
}