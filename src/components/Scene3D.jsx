import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function WirePlanet({ scrollProgressRef }) {
  const meshRef = useRef()
  const materialRef = useRef()
  const [isHovered, setIsHovered] = useState(false)

  useFrame((state) => {
    if (!meshRef.current) return

    const t = state.clock.elapsedTime
    const scroll = scrollProgressRef.current

    const targetRotY = t * 0.16 + scroll * 1.35 + state.pointer.x * 0.2
    const targetRotX = state.pointer.y * 0.14 + Math.sin(t * 0.42) * 0.045
    const targetScale = isHovered ? 1.02 : 0.96
    const targetOpacity = isHovered ? 0.44 : 0.34

    meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.055
    meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.055
    meshRef.current.position.y = 0.05 + Math.sin(t * 0.68 + scroll * 2.1) * 0.04

    const nextScale = meshRef.current.scale.x + (targetScale - meshRef.current.scale.x) * 0.08
    meshRef.current.scale.setScalar(nextScale)

    if (materialRef.current) {
      materialRef.current.opacity += (targetOpacity - materialRef.current.opacity) * 0.08
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, 0.05, -1.5]}
      scale={0.96}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <sphereGeometry args={[0.88, 72, 72]} />
      <meshBasicMaterial
        ref={materialRef}
        color="#6F7D4B"
        wireframe
        transparent
        opacity={0.34}
      />
    </mesh>
  )
}

export function HeroScene() {
  const scrollProgressRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const denominator = window.document.body.scrollHeight - window.innerHeight
      scrollProgressRef.current = denominator > 0 ? window.scrollY / denominator : 0
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hero-scene-container">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.6]}
        style={{ background: 'transparent' }}
      >
        <WirePlanet scrollProgressRef={scrollProgressRef} />
      </Canvas>
    </div>
  )
}
