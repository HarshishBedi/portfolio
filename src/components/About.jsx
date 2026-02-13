import React from 'react'
import './About.css'
import headshot from '../assets/headshot.jpg'

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="section-prefix">00.</span> SYSTEM_PROFILE
        </h2>
        
        <div className="about-grid">
          <div className="profile-column">
            <div className="profile-frame">
              <img src={headshot} alt="HARSHISH_BEDI" className="profile-image" />
              <div className="frame-corner corner-tl"></div>
              <div className="frame-corner corner-tr"></div>
              <div className="frame-corner corner-bl"></div>
              <div className="frame-corner corner-br"></div>
            </div>
            <div className="profile-meta">
              <span>ID: HSB_001</span>
              <span>STATUS: ACTIVE</span>
            </div>
          </div>

          <div className="info-column">
            <div className="info-block">
              <h3 className="block-title">// BIO_DATA</h3>
              <p className="bio-text">
                Machine Learning Engineer specializing in high-performance computing and intelligent systems.
                Currently architecting scalable solutions at Rutgers University. Focus on LLM integration,
                computer vision pipelines, and real-time data processing.
              </p>
            </div>

            <div className="info-block">
              <h3 className="block-title">// EDUCATION_LOG</h3>
              <div className="edu-entry">
                <span className="edu-year">[2024-2026]</span>
                <strong>MS Computer Science</strong>
                <span className="edu-loc">Rutgers University, NJ</span>
              </div>
              <div className="edu-entry">
                <span className="edu-year">[2019-2023]</span>
                <strong>BE Computer Science</strong>
                <span className="edu-loc">University of Mumbai, IN</span>
              </div>
            </div>

            <div className="info-block">
              <h3 className="block-title">// TECHNICAL_STACK</h3>
              <div className="tech-grid">
                <div className="tech-category">
                  <span className="cat-name">LANGS:</span>
                  <span className="cat-val">Python, C++, Java, SQL, JavaScript</span>
                </div>
                <div className="tech-category">
                  <span className="cat-name">AI/ML:</span>
                  <span className="cat-val">PyTorch, TensorFlow, CUDA, OpenCV</span>
                </div>
                <div className="tech-category">
                  <span className="cat-name">INFRA:</span>
                  <span className="cat-val">AWS, Docker, Kubernetes, FastAPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
