import React, { useEffect, useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="pt-24">
        <Hero />

        {/* Space between sections: py-32 (desktop), py-20 (mobile) */}
        <div className="space-y-32">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
