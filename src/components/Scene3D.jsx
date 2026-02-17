import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function WirePlanet({ scrollProgressRef, scrollSpeedRef }) {
  const meshRef = useRef()
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const opacity = isHovered ? 0.42 : 0.32
  const scale = isHovered ? 1.0 : 0.96

  useFrame(() => {
    if (!meshRef.current) return
    const scrollProgress = scrollProgressRef.current
    const scrollSpeed = scrollSpeedRef.current
    
    // Calculate rotation based on refs (no re-renders)
    const rotX = pointer.y * 0.24
    const rotY = scrollProgress * 0.88 + scrollSpeed * 0.72 + pointer.x * 0.22
    
    meshRef.current.rotation.x = rotX
    meshRef.current.rotation.y = rotY
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, 0.05, -1.5]}
      scale={scale}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      onPointerMove={(event) => {
        setPointer({
          x: clamp(event.pointer.x, -1, 1),
          y: clamp(event.pointer.y, -1, 1),
        })
      }}
    >
      <sphereGeometry args={[0.88, 18, 18]} />
      <meshBasicMaterial
        color="#6F7D4B"
        wireframe
        transparent
        opacity={opacity}
      />
    </mesh>
  )
}

export function HeroScene() {
  // Use refs for values that change constantly during scroll
  const scrollProgress = useRef(0)
  const scrollSpeed = useRef(0)
  
  const lastYRef = useRef(0)
  const lastTRef = useRef(0)
  const hasScrolledRef = useRef(false)
  const targetSpeedRef = useRef(0)
  const speedFrameRef = useRef(null)
  const stopTimerRef = useRef(null)

  useEffect(() => {
    let frameRequested = false
    
    // Animation loop for speed interpolation
    const startSpeedAnimation = () => {
      if (speedFrameRef.current) return

      const tick = () => {
        const current = scrollSpeed.current
        const next = current + (targetSpeedRef.current - current) * 0.2
        const settled =
          Math.abs(next - targetSpeedRef.current) < 0.003 &&
          Math.abs(targetSpeedRef.current) < 0.003

        if (settled) {
          scrollSpeed.current = targetSpeedRef.current // Snap to target
          speedFrameRef.current = null
          return
        }

        scrollSpeed.current = next
        speedFrameRef.current = window.requestAnimationFrame(tick)
      }

      speedFrameRef.current = window.requestAnimationFrame(tick)
    }

    const onScroll = () => {
      if (frameRequested) return
      frameRequested = true

      window.requestAnimationFrame(() => {
        const now = performance.now()
        const y = window.scrollY
        const dy = y - lastYRef.current
        const dt = Math.max(1, now - lastTRef.current)
        const pxPerMs = dy / dt
        const rawSpeed = clamp(pxPerMs / 3.2, -0.85, 0.85)
        const speed = hasScrolledRef.current ? rawSpeed : 0

        const denominator = window.document.body.scrollHeight - window.innerHeight
        const progress = denominator > 0 ? y / denominator : 0
        
        // Update refs directly - NO STATE UPDATE
        scrollProgress.current = progress
        targetSpeedRef.current = speed
        
        startSpeedAnimation()
        
        lastYRef.current = y
        lastTRef.current = now

        if (stopTimerRef.current) window.clearTimeout(stopTimerRef.current)
        stopTimerRef.current = window.setTimeout(() => {
          targetSpeedRef.current = 0
          startSpeedAnimation()
        }, 120)
        
        hasScrolledRef.current = true
        frameRequested = false
      })
    }

    // Initial setup
    const initialY = window.scrollY
    const denominator = window.document.body.scrollHeight - window.innerHeight
    scrollProgress.current = denominator > 0 ? initialY / denominator : 0
    scrollSpeed.current = 0
    
    lastYRef.current = initialY
    lastTRef.current = performance.now()
    
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (stopTimerRef.current) window.clearTimeout(stopTimerRef.current)
      if (speedFrameRef.current) window.cancelAnimationFrame(speedFrameRef.current)
    }
  }, [])

  return (
    <div className="hero-scene-container">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 40 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={[0.7, 1]}
        frameloop="always" 
        style={{ background: 'transparent' }}
      >
        <WirePlanet scrollProgressRef={scrollProgress} scrollSpeedRef={scrollSpeed} />
      </Canvas>
    </div>
  )
}

