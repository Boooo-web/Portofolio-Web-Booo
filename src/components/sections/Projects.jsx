import React from 'react'
import { ExternalLink, Github, Star, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Admin Dashboard',
    description: 'Modern admin dashboard for e-commerce platform with comprehensive product management and analytics.',
    category: 'Web App',
    status: 'Live',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveUrl: 'https://demo.example.com',
    featured: true,
    stars: 45,
  },
  {
    id: 2,
    title: 'Mikrotik Network Configuration',
    description: 'Complete network infrastructure setup and Mikrotik configuration for enterprise clients with routing optimization.',
    category: 'Network',
    status: 'Live',
    tech: ['Mikrotik', 'Routing', 'Network Admin', 'Security'],
    featured: true,
  },
  {
    id: 3,
    title: 'Arduino IoT System Development',
    description: 'IoT system development using Arduino for smart home automation and sensor network management.',
    category: 'IoT',
    status: 'Live',
    tech: ['Arduino', 'IoT', 'C++', 'Sensor Integration'],
    featured: true,
  },
  {
    id: 4,
    title: 'LAN Infrastructure & Cabling',
    description: 'Professional LAN design and fiber optic cabling installation for corporate offices and data centers.',
    category: 'Infrastructure',
    status: 'Live',
    tech: ['Fiber Optic', 'CAT6', 'Network Design', 'Installation'],
    featured: true,
  },
  {
    id: 5,
    title: 'Design System Documentation',
    description: 'Comprehensive design system with reusable components, patterns, and UI guidelines for consistent branding.',
    category: 'Design',
    status: 'Live',
    tech: ['Figma', 'Design System', 'UI/UX', 'Documentation'],
  },
  {
    id: 6,
    title: 'User Testing & Prototyping',
    description: 'Complete user testing framework and interactive prototypes for product validation and iteration.',
    category: 'UX Research',
    status: 'Live',
    tech: ['User Testing', 'Prototyping', 'Figma', 'Analytics'],
  },
]

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-gray-900 border border-white/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C5D098]/40">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                project.status === 'Live'
                  ? 'bg-[#C5D098]/10 text-[#C5D098] border border-[#C5D098]/20'
                  : 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
              }`}>
                {project.status}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold group-hover:text-[#C5D098] transition-colors mb-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.stars && (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Star className="h-3 w-3 fill-current" />
                <span>{project.stars}</span>
              </div>
            )}
          </div>

          <a
            href={`/projects/${project.id}`}
            className="text-sm text-[#C5D098] hover:text-[#B5C088] transition-colors"
          >
            View Details →
          </a>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  
  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A selection of recent work spanning web development, network infrastructure, and design systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 hover:border-[#C5D098] hover:text-white transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}