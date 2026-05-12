import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24">
        <Hero />

        {/* Space between sections: py-32 (desktop), py-20 (mobile) */}
        <div className="space-y-32">
          <Projects />
          <About />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
