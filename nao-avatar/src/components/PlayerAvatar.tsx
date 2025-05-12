// components/PlayerAvatar.tsx
'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

export function PlayerAvatar({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const avatarRef = useRef<THREE.Object3D>(null)
  const [velocity] = useState(new THREE.Vector3())

  const keys = useRef<{ [key: string]: boolean }>({})

  useEffect(() => {
    const down = (e: KeyboardEvent) => (keys.current[e.key.toLowerCase()] = true)
    const up = (e: KeyboardEvent) => (keys.current[e.key.toLowerCase()] = false)

    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  useFrame(() => {
    if (!avatarRef.current) return
    velocity.set(0, 0, 0)
    if (keys.current['w']) velocity.z -= 0.05
    if (keys.current['s']) velocity.z += 0.05
    if (keys.current['a']) velocity.x -= 0.05
    if (keys.current['d']) velocity.x += 0.05
    avatarRef.current.position.add(velocity)
  })

  return <primitive ref={avatarRef} object={scene} scale={1.5} position={[0, 0, 0]} />
}
