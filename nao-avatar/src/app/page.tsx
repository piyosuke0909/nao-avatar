// src/app/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AvatarSelector from '@/components/AvatarSelector'

export default function HomePage() {
  const [selectedUrl, setSelectedUrl] = useState('/models/avatar1.glb')
  const router = useRouter()

  const handleConfirm = () => {
    router.push(`/play?avatar=${encodeURIComponent(selectedUrl)}`)
  }

  return (
    <div>
      <AvatarSelector selectedUrl={selectedUrl} setSelectedUrl={setSelectedUrl} />
      <button onClick={handleConfirm} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        決定
      </button>
    </div>
  )
}
