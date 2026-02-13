import React from 'react'
import './Projects.css'

const projectsData = [
  {
    id: '01',
    title: 'UTILBELT.IO',
    desc: 'Privacy-first developer toolkit. Logic runs 100% client-side via WebAssembly/JS.',
    stack: ['REACT', 'VITE', 'PWA'],
    link: 'https://utilbelt.io'
  },
  {
    id: '02',
    title: 'DOC_SMART',
    desc: 'RAG-based doc intelligence. 1000-char chunking strategy with semantic retrieval.',
    stack: ['PYTHON', 'LANGCHAIN', 'VECTOR_DB'],
    link: '#'
  },
  {
    id: '03',
    title: 'SIG_FLOW',
    desc: 'NASDAQ ITCH v5 parser. Nanosecond-level order book reconstruction via CUDA.',
    stack: ['CUDA', 'CPP', 'PYTHON'],
    link: '#'
  },
  {
    id: '04',
    title: 'R_NAV',
    desc: 'Autonomous navigation CNN. 95.7% accuracy with optimized GPU training pipeline.',
    stack: ['PYTORCH', 'CNN', 'ROS'],
    link: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
         <h2 className="section-title">
          <span className="section-prefix">02.</span> SYSTEMS_DEPLOYED
        </h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <a href={project.link} key={project.id} className="project-card" target={project.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
              <div className="card-header">
                <span className="project-id">#{project.id}</span>
                <div className="card-arrow">↗</div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
