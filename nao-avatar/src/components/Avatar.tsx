import { useGLTF } from '@react-three/drei'

export function Avatar({ url }: { url: string }) {
  const { scene } = useGLTF(url)

  return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />
}
