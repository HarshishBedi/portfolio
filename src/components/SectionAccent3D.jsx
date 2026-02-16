import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const VARIANT_STYLE = {
  about: { primary: '#6F7D4B', secondary: '#C4A15B' },
  experience: { primary: '#667444', secondary: '#C3A15A' },
  projects: { primary: '#5E6C40', secondary: '#C4A15B' },
  contact: { primary: '#627041', secondary: '#C4A15B' },
}

function AccentLayout({ variant }) {
  const style = VARIANT_STYLE[variant] || VARIANT_STYLE.about

  return (
    <>
      <mesh position={[-2.9, 1.45, -3.2]} scale={[1.08, 1.08, 1.08]}>
        <sphereGeometry args={[1.45, 20, 20]} />
        <meshBasicMaterial
          color={style.primary}
          wireframe
          transparent
          opacity={0.26}
        />
      </mesh>

      <mesh position={[2.9, -1.25, -3.1]} rotation={[0.95, 0.28, 0.12]}>
        <torusGeometry args={[1.25, 0.016, 8, 96]} />
        <meshBasicMaterial
          color={style.secondary}
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      <mesh position={[0.8, 0.2, -4]} scale={[1.4, 1.4, 1]}>
        <ringGeometry args={[0.96, 1.01, 80]} />
        <meshBasicMaterial
          color={style.secondary}
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

export function SectionAccent3D({ variant }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 44 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      dpr={[0.7, 1]}
      frameloop="demand"
      style={{ background: 'transparent' }}
    >
      <AccentLayout variant={variant} />
    </Canvas>
  )
}
