'use client'

import { useSearchParams } from 'next/navigation'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from '@/components/Avatar'
import { Suspense } from 'react'
import Chat from '@/components/Chat'

export default function PlayPage() {
  const searchParams = useSearchParams()
  const avatarUrl = searchParams.get('avatar') ?? '/models/avatar1.glb'

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <ambientLight />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Avatar url={avatarUrl} />
        </Suspense>
        <OrbitControls />
      </Canvas>

      {/* 👇 チャットUIを追加！ */}
      <Chat />
    </div>
  )
}
