import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function WirePlanet({ scrollProgressRef, scrollSpeedRef, isInViewRef }) {
  const meshRef = useRef()
  
  // Visual constants
  const baseScale = 1.0

  useFrame((state, delta) => {
    // SAFE OPTIMIZATION: Skip updates if not visible or mesh not ready
    if (!isInViewRef.current || !meshRef.current) return

    const scrollProgress = scrollProgressRef.current
    const scrollSpeed = scrollSpeedRef.current
    
    // Rotation based only on scroll
    const rotY = scrollProgress * 0.88 + scrollSpeed * 0.72
    
    meshRef.current.rotation.x = 0 // Keep it level
    meshRef.current.rotation.y = rotY
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, 0.05, -1.5]}
      scale={baseScale}
    >
      <sphereGeometry args={[0.88, 64, 64]} />
      <meshBasicMaterial
        color="#6F7D4B"
        wireframe
        transparent
        opacity={0.32}
      />
    </mesh>
  )
}

export function HeroScene() {
  const containerRef = useRef(null)
  
  // Refs for performance (Mutable state)
  const scrollProgress = useRef(0)
  const scrollSpeed = useRef(0)
  const isInView = useRef(true) // Track visibility in Ref for useFrame access

  const lastY = useRef(0)
  const lastT = useRef(0)
  const targetSpeed = useRef(0)
  
  // Clean up animation frame / timeout
  const rafId = useRef(null)
  const timeoutId = useRef(null)

  useEffect(() => {
    // --- 1. Visibility Observer ---
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting
      },
      { threshold: 0 } // Trigger as soon as 1 pixel enters/leaves
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    // --- 2. Scroll Handler ---
    const onScroll = () => {
      // Optimization: simple throttle via rAF is often enough
      if (rafId.current) return

      rafId.current = requestAnimationFrame(() => {
        const now = performance.now()
        const y = window.scrollY
        
        // Calculate physics
        const dy = y - lastY.current
        const dt = Math.max(1, now - lastT.current)
        const pxPerMs = dy / dt
        
        // Update Scroll Progress
        const maxScroll = document.body.scrollHeight - window.innerHeight
        scrollProgress.current = maxScroll > 0 ? y / maxScroll : 0

        // Update Speed (Target)
        // Clamp speed to avoid spinning too fast on huge scrolls
        const rawSpeed = clamp(pxPerMs / 3.2, -0.85, 0.85)
        targetSpeed.current = rawSpeed

        lastY.current = y
        lastT.current = now
        rafId.current = null

        // Decay speed when scroll stops
        if (timeoutId.current) clearTimeout(timeoutId.current)
        timeoutId.current = setTimeout(() => {
          targetSpeed.current = 0
        }, 100)
      })
    }
    
    // --- 3. Animation Loop (Speed Interpolation) ---
    // Instead of a separate loop, we can just let useFrame handle the interpolation?
    // Actually, running a small logic loop for speed interpolation outside of React is efficient.
    let animId
    const loop = () => {
      // Only interpolate if visible to save CPU
      if (isInView.current) {
        // Linear interpolation (Lerp) for smooth speed decay
        scrollSpeed.current += (targetSpeed.current - scrollSpeed.current) * 0.1
      } else {
        // If not visible, just snap speeds to 0 or pause updates
        // Snapping creates a "jump" when reappearing, so maybe just pause.
        // Let's assume we pause.
      }
      animId = requestAnimationFrame(loop)
    }
    loop()

    // Setup
    window.addEventListener('scroll', onScroll, { passive: true })
    lastY.current = window.scrollY
    lastT.current = performance.now()
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
      cancelAnimationFrame(animId)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      if (timeoutId.current) clearTimeout(timeoutId.current)
    }
  }, [])

  return (
    <div className="hero-scene-container" ref={containerRef}>
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 40 }}
        gl={{ 
          antialias: false, 
          alpha: true, 
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: true 
        }}
        dpr={[0.7, 1]}
        frameloop="always" // Keep context alive!
        style={{ background: 'transparent' }}
      >
        <WirePlanet 
          scrollProgressRef={scrollProgress} 
          scrollSpeedRef={scrollSpeed}
          isInViewRef={isInView} 
        />
      </Canvas>
    </div>
  )
}
