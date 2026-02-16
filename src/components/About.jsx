import React from 'react'
import { motion } from 'framer-motion'
import { FadeIn, StaggerGroup, staggerItem } from './FadeIn'
import './About.css'
import headshot from '../assets/headshot.jpg'

const skills = [
  'Python', 'C++', 'Java', 'JavaScript', 'SQL', 'PyTorch', 'TensorFlow',
  'CUDA', 'OpenCV', 'LangChain', 'FastAPI', 'React', 'Docker', 'Kubernetes',
  'AWS', 'PostgreSQL', 'Redis', 'Git'
]

export function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">01</span>
            <span className="section-title">About</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        <div className="about__grid">
          {/* Left: Image */}
          <FadeIn direction="left" delay={0.1}>
            <div className="about__image-wrap">
              <img src={headshot} alt="Harshish Bedi" className="about__image" />
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div className="about__content">
            <FadeIn direction="right" delay={0.2}>
              <div className="about__bio-card">
                <p className="about__bio">
                  Machine Learning Engineer with a sharp focus on <em>performance-critical systems</em>.
                  I architect solutions that bridge the gap between research and production — from
                  CUDA-accelerated parsers to real-time inference pipelines.
                </p>
                <p className="about__bio">
                  Currently pursuing my MS in Computer Science at <strong>Rutgers University</strong>,
                  where I research transit resilience using graph neural networks and build
                  computer vision pipelines for aerial infrastructure detection.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="about__edu">
                <h3 className="about__subtitle">Education</h3>
                <div className="about__edu-item">
                  <div className="about__edu-degree">MS Computer Science</div>
                  <div className="about__edu-meta">
                    <span>Rutgers University, NJ</span>
                    <span className="about__edu-year">2024 — 2026</span>
                  </div>
                </div>
                <div className="about__edu-item">
                  <div className="about__edu-degree">BE Computer Science</div>
                  <div className="about__edu-meta">
                    <span>University of Mumbai, IN</span>
                    <span className="about__edu-year">2019 — 2023</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Skills Marquee */}
        <FadeIn delay={0.4}>
          <div className="about__skills">
            <div className="about__marquee">
              <div className="about__marquee-track">
                {[...skills, ...skills].map((skill, i) => (
                  <span key={i} className="about__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
