import React from 'react'
import { Instagram, Mail, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t theme-border theme-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm theme-muted">
              © 2024 Evan Arya Saputra. All rights reserved.
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Built with React & Tailwind
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/vnnzas_" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-[#C5D098] transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://wa.me/6282143579191"
               className="text-gray-400 hover:text-[#C5D098] transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.922 5.488-4.922 9.52C1.331 15.895 3.697 22 8.974 22h5.679V2.556A9.9 9.9 0 0012.051 6.979z" />
              </svg>
            </a>
            <a href="mailto:evanarsap@gmail.com"
               className="text-gray-400 hover:text-[#C5D098] transition-colors">
              <Mail className="h-4 w-4" />
            </a>

            <div className="w-px h-6 bg-gray-800" />

            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-[#C5D098] transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}