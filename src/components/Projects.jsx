import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn } from './FadeIn'
import './Projects.css'

const projectsData = [
  {
    id: '01',
    title: 'Utilbelt.io',
    desc: 'Privacy-first developer toolkit with 100% client-side logic via WebAssembly and JS. Zero data leaves the browser.',
    stack: ['React', 'Vite', 'PWA', 'WebAssembly'],
    link: 'https://utilbelt.io',
    color: 'var(--color-accent)'
  },
  {
    id: '02',
    title: 'Doc Smart',
    desc: 'RAG-powered document intelligence system. Smart 1000-char chunking with semantic vector retrieval for enterprise docs.',
    stack: ['Python', 'LangChain', 'ChromaDB', 'FastAPI'],
    link: '#',
    color: 'var(--color-accent-secondary)'
  },
  {
    id: '03',
    title: 'SigFlow',
    desc: 'NASDAQ ITCH v5 protocol parser. Nanosecond-level order book reconstruction using CUDA-accelerated processing.',
    stack: ['CUDA', 'C++', 'Python', 'NumPy'],
    link: '#',
    color: 'var(--color-accent)'
  },
  {
    id: '04',
    title: 'R-Nav',
    desc: 'Autonomous navigation CNN achieving 95.7% accuracy. GPU-optimized training pipeline with real-time ROS integration.',
    stack: ['PyTorch', 'CNN', 'ROS', 'Python'],
    link: '#',
    color: 'var(--color-accent-secondary)'
  }
]

function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -6, y: x * 6 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <FadeIn delay={0.1 + index * 0.12}>
      <a
        href={project.link}
        target={project.link.startsWith('http') ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="proj__card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Background number */}
        <span className="proj__bg-num" style={{ color: project.color }}>{project.id}</span>

        <div className="proj__card-header">
          <span className="proj__num" style={{ color: project.color }}>/{project.id}</span>
          <div className="proj__arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h3 className="proj__title">{project.title}</h3>
        <p className="proj__desc">{project.desc}</p>

        <div className="proj__stack">
          {project.stack.map((tech, i) => (
            <span key={i} className="proj__tag">{tech}</span>
          ))}
        </div>
      </a>
    </FadeIn>
  )
}

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">03</span>
            <span className="section-title">Projects</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        <div className="proj__grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
