import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/* ══════════════════════════════════════════════════
   SINGLE INTERACTIVE HERO SCENE
   - Mouse-reactive morphing shape
   - Scroll-driven rotation
   - Hover glow effect
   - Minimal floating particles
   ══════════════════════════════════════════════════ */

function MouseTracker({ mouseRef }) {
  const { viewport } = useThree()

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return null
}

function InteractiveShape({ scrollProgress, isHovered }) {
  const meshRef = useRef()
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetRotation = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return

    // Mouse-driven rotation (smooth lerp)
    targetRotation.current.x = mouseRef.current.y * 0.4
    targetRotation.current.y = mouseRef.current.x * 0.5

    meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.04
    meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.04

    // Scroll-driven Z rotation
    meshRef.current.rotation.z = scrollProgress * Math.PI * 1.5
  })

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#1A1A1A"
          emissive="#7B61FF"
          emissiveIntensity={0.1}
          roughness={0.5}
          metalness={0.3}
          distort={0.2}
          speed={1.5}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function OrbitRing({ scrollProgress, isHovered }) {
  const ringRef = useRef()

  useFrame((state) => {
    if (!ringRef.current) return
    ringRef.current.rotation.x = scrollProgress * Math.PI * 0.5 + Math.PI / 3
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.15
    // Scale on hover
    const targetScale = isHovered ? 1.2 : 1
    const s = ringRef.current.scale.x + (targetScale - ringRef.current.scale.x) * 0.06
    ringRef.current.scale.setScalar(s)
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.2, 0.012, 16, 120]} />
      <meshStandardMaterial
        color="#FF3C28"
        emissive="#FF3C28"
        emissiveIntensity={isHovered ? 0.6 : 0.2}
        transparent
        opacity={isHovered ? 0.8 : 0.4}
      />
    </mesh>
  )
}

function FloatingDots({ scrollProgress }) {
  const count = 60
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 4 + Math.random() * 4
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02 + scrollProgress * 0.5
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#FF3C28"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export function HeroScene() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hero-scene-container">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
        <pointLight position={[-3, -2, 3]} intensity={0.3} color="#7B61FF" distance={15} />
        <InteractiveShape scrollProgress={scrollProgress} />
        <OrbitRing scrollProgress={scrollProgress} />
        <FloatingDots scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}
