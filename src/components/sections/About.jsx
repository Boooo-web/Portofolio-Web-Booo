import React from 'react'
import { MapPin, Calendar, Code, Palette, Zap, Coffee } from 'lucide-react'

const skills = [
  'Design System', 'User Testing', 'Prototyping', 
  'Mikrotik Configuration', 'Fiber Optic Installation', 'Network Routing'
]

const timeline = [
  {
    year: '2024',
    title: 'UI/UX Designer',
    company: 'Independent',
    description: 'Specializing in digital system management and network design with focus on user experience.',
  },
  {
    year: '2022',
    title: 'Network Specialist',
    company: 'Tech Solutions',
    description: 'Handled Mikrotik configurations and network infrastructure installations across multiple projects.',
  },
  {
    year: '2021',
    title: 'Junior Network Engineer',
    company: 'Digital Agency',
    description: 'Started career with fiber optic installation and basic network routing configuration.',
  },
]

function SkillBadge({ skill }) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full">
      {skill}
    </span>
  )
}

function TimelineItem({ item }) {
  return (
    <div className="flex gap-6 pb-8">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-[#C5D098] rounded-full" />
        <div className="w-px h-full bg-gray-800 mt-2" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-[#C5D098]">{item.year}</span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
        <p className="text-[#C5D098] font-medium mb-2">{item.company}</p>
        <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tighter">
            Tentang Saya
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Menghubungkan ide Anda menjadi kenyataan melalui desain dan teknologi.
          </p>
        </div>

        {/* Option A: 2 kolom (foto 1/3 + teks 2/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 mb-16">
          {/* Foto Column */}
          <div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gray-900">
              <img 
                src="/asset_images/avatar.jpeg" 
                alt="Evan Arya Saputra" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>

            {/* Quick Info */}
            <div className="mt-6 space-y-4 rounded-3xl border border-white/10 bg-gray-900 p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#C5D098]" />
                <div>
                  <p className="font-medium">Surabaya, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[#C5D098]" />
                <div>
                  <p className="font-medium">3+ years experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hi, I'm Evan</h3>
              <p className="text-[#C5D098] font-medium mb-4">UI/UX Designer & Network Specialist</p>
              <div className="space-y-4 text-gray-400 leading-relaxed text-center">
                <p>
                  Saya adalah seorang UI/UX designer dan network specialist dengan pengalaman lebih dari 3 tahun 
                  dalam menjembatani ide melalui teknologi dan jaringan yang aman. Saya mengkhususkan diri dalam menciptakan 
                  pengalaman digital yang luar biasa yang dikombinasikan dengan solusi infrastruktur yang kuat.
                </p>
                <p>
                  Keahlian saya mencakup sistem desain dan pengujian pengguna hingga konfigurasi Mikrotik dan 
                  infrastruktur jaringan. Saya percaya pada kekuatan desain yang matang dan sistem yang aman serta efisien 
                  untuk menghasilkan hasil bisnis yang nyata.
                </p>
              </div>
            </div>

            {/* Fun Facts */}
            <div>
              <h4 className="text-lg font-semibold mb-4">What I Do Best</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Coffee className="h-5 w-5 text-[#C5D098]" />
                  <span className="text-sm text-gray-400">Design thoughtful solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-[#C5D098]" />
                  <span className="text-sm text-gray-400">Build secure networks</span>
                </div>
                <div className="flex items-center gap-3">
                  <Palette className="h-5 w-5 text-[#C5D098]" />
                  <span className="text-sm text-gray-400">Create design systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-[#C5D098]" />
                  <span className="text-sm text-gray-400">Optimize infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section - Option A: Badge pills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Skills</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}