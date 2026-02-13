import React from 'react'
import './Experience.css'

const experiences = [
  {
    role: 'MLE',
    company: 'RUTGERS_RUCI',
    location: 'NJ',
    period: '2024-PRESENT',
    description: [
      'Quantified transit resilience :: NetworkX + GeoPandas (1.2M+ riders)',
      'Built attention network :: PostGIS + Python (2.23M edges)',
      'Optimized model iteration :: -17% training time',
      'Lead Author :: Climate Hazards & Transit Accessibility (Under Review)'
    ]
  },
  {
    role: 'SWE',
    company: 'RUTGERS_CAIT',
    location: 'NJ',
    period: '2024-2025',
    description: [
      'Vision pipeline :: Python + OpenCV (8% error reduction)',
      'Aerial detection :: Retrained YOLO models (+14% accuracy)',
      'Data pipeline :: Automated annotation (-94% manual effort)'
    ]
  },
  {
    role: 'RA',
    company: 'RAIL_TRANSIT',
    location: 'NYC',
    period: '2024-2024',
    description: [
      'Inference optimization :: Sub-200ms arrival predictions',
      'GPS accuracy boost :: +30% via sensor fusion',
      'CI/CD deployment :: AWS implementation (-37.9% friction)'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-prefix">01.</span> EXPERIENCE_LOG
        </h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-entry">
              <div className="entry-header">
                <span className="entry-role">[{exp.role}]</span>
                <span className="entry-company">@{exp.company}</span>
                <span className="entry-period">// {exp.period}</span>
              </div>
              <ul className="entry-details">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
