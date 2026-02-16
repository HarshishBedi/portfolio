import React from 'react'
import { FadeIn } from './FadeIn'
import './Experience.css'

const experiences = [
  {
    role: 'Machine Learning Engineer',
    company: 'Rutgers RUCI',
    period: '2024 — Present',
    highlights: [
      'Transit resilience modeling with graph networks (1.2M+ riders)',
      'Graph attention network — 2.23M edge processing pipeline',
      'Lead Author: Climate Hazards & Transit paper'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Rutgers CAIT',
    period: '2024 — 2025',
    highlights: [
      'Computer vision pipeline — 8% error reduction',
      'YOLO retraining for aerial detection (+14% accuracy)',
      'Automated annotation — 94% manual effort saved'
    ]
  },
  {
    role: 'Research Assistant',
    company: 'Rail Transit Lab',
    period: '2024',
    highlights: [
      'Sub-200ms real-time arrival predictions',
      'GPS accuracy +30% via sensor fusion',
      'AWS CI/CD — 37.9% friction reduction'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">02</span>
            <span className="section-title">Experience</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        <div className="exp__timeline">
          <div className="exp__timeline-line"></div>

          {experiences.map((exp, index) => (
            <FadeIn
              key={index}
              direction={index % 2 === 0 ? 'right' : 'left'}
              delay={0.1 + index * 0.15}
            >
              <div className={`exp__item ${index % 2 === 0 ? 'exp__item--left' : 'exp__item--right'}`}>
                <div className="exp__dot"></div>
                <div className="exp__card">
                  <div className="exp__period">{exp.period}</div>
                  <h3 className="exp__role">{exp.role}</h3>
                  <span className="exp__company">{exp.company}</span>
                  <ul className="exp__highlights">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
