import React from 'react'
import { MapPin, Calendar, Code, Palette, Zap, Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

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

function SkillBadge({ skill, variants }) {
  return (
    <motion.span 
      variants={variants}
      className="inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-white/5 hover:border-[#C5D098]/30 transition-colors"
      whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(197, 208, 152, 0.1)', color: '#C5D098' }}
    >
      {skill}
    </motion.span>
  )
}

function TimelineItem({ item, variants }) {
  return (
    <motion.div 
      variants={variants}
      className="flex gap-6 pb-8 group"
    >
      <div className="flex flex-col items-center">
        <motion.div 
          className="w-3.5 h-3.5 bg-gray-800 border-2 border-[#C5D098] rounded-full z-10" 
          whileInView={{ scale: [1, 1.3, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <div className="w-px h-full bg-gray-800 mt-2 group-last:bg-transparent" />
      </div>
      <div className="flex-1 bg-gray-900/40 hover:bg-gray-900/70 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-[#C5D098]">{item.year}</span>
        </div>
        <h3 className="text-lg font-semibold mb-1 group-hover:text-[#C5D098] transition-colors">{item.title}</h3>
        <p className="text-gray-400 font-medium mb-3 text-sm">{item.company}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export function About() {
  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  }

  const badgeVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 12 }
    }
  }

  const timelineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const timelineItemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  }

  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tighter">
            Tentang Saya
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Menghubungkan ide Anda menjadi kenyataan melalui desain dan teknologi.
          </p>
        </motion.div>

        {/* 2 Kolom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 mb-24">
          
          {/* Foto & Quick Info (Slides from Left) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            className="space-y-6"
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-gray-900 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/asset_images/avatar.jpeg" 
                alt="Evan Arya Saputra" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </motion.div>

            {/* Quick Info Card */}
            <div className="space-y-4 rounded-3xl border border-white/10 bg-gray-900/60 p-6 backdrop-blur-sm">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-5 w-5 text-[#C5D098]" />
                <div>
                  <p className="font-medium">Surabaya, Indonesia</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <Calendar className="h-5 w-5 text-[#C5D098]" />
                <div>
                  <p className="font-medium">3+ years experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column (Slides from Right) */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#C5D098]">Hi, I'm Evan</h3>
              <p className="text-lg font-medium text-gray-300 mb-4">UI/UX Designer & Network Specialist</p>
              <div className="space-y-4 text-gray-400 leading-relaxed">
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

            {/* Fun Facts / What I Do Best */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">What I Do Best</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <Coffee className="h-5 w-5 text-[#C5D098]" />
                  <span className="text-sm text-gray-400">Design thoughtful solutions</span>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <Code className="h-5 w-5 text-[#C5D098]" />
                  <span className="text-sm text-gray-400">Build secure networks</span>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <Palette className="h-5 w-5 text-[#C5D098]" />
                  <span className="text-sm text-gray-400">Create design systems</span>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <Zap className="h-5 w-5 text-[#C5D098]" />
                  <span className="text-sm text-gray-400">Optimize infrastructure</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section (Staggered Badges) */}
        <div className="mb-24">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h3>
          <motion.div 
            className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
            variants={badgeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} variants={badgeVariants} />
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline (Staggered Timeline Items) */}
        <div>
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h3>
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={timelineContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} variants={timelineItemVariants} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}