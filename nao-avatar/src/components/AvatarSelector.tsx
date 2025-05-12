// src/components/AvatarSelector.tsx
'use client'

import { Avatar } from './Avatar'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment } from '@react-three/drei'

const avatars = [
  { name: 'Avatar 1', url: '/models/avatar1.glb' },
  { name: 'Avatar 2', url: '/models/avatar2.glb' }
]

export default function AvatarSelector({
  selectedUrl,
  setSelectedUrl
}: {
  selectedUrl: string
  setSelectedUrl: (url: string) => void
}) {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        {avatars.map((avatar) => (
          <button
            key={avatar.url}
            onClick={() => setSelectedUrl(avatar.url)}
            className={`p-2 border rounded ${selectedUrl === avatar.url ? 'bg-blue-200' : 'bg-white'}`}
          >
            {avatar.name}
          </button>
        ))}
      </div>
      <div style={{ width: '100%', height: '300px' }}>
        <Canvas
          camera={{ position: [0, 1.2, 1.8], fov: 45 }}
          shadows
          frameloop="demand"
          dpr={0.5} // さらに負荷軽減
        >
          <ambientLight intensity={0.3} />
          {/* directionalLightをコメントアウトしてもOK */}
          {/* <directionalLight position={[2, 2, 5]} intensity={0.4} /> */}
          <Suspense fallback={null}>
            <Environment preset="sunset" background resolution={16} />
            <Avatar url={selectedUrl} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
