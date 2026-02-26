import React, { useRef, useState } from 'react'
import { FadeIn } from './FadeIn'
import './Projects.css'
import { useSiteContent } from '../content/SiteContext'
import { SectionAccent3D } from './SectionAccent3D'

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
        <span className="proj__bg-num">{project.id}</span>

        <div className="proj__card-header">
          <span className="proj__num">/{project.id}</span>
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
  const { sections, projects } = useSiteContent()

  return (
    <section id="projects" className="projects section">
      <div className="projects__ornament" aria-hidden="true">
        <SectionAccent3D variant="projects" />
      </div>

      <div className="container">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">{sections.projects.number}</span>
            <span className="section-title">{sections.projects.title}</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        <div className="proj__grid">
          {projects.items.map((project, index) => (
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
