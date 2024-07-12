import { OrbitControls, useHelper } from '@react-three/drei'
import { useControls } from 'leva'
import { useRef } from 'react'
import { DirectionalLight, DirectionalLightHelper } from 'three'

export const Experience = () => {
  const lightRef = useRef<DirectionalLight>(null!)
  useHelper(lightRef, DirectionalLightHelper, 1, 'yellow')

  const { directionalLightIntensity } = useControls('Vite + R3f', {
    directionalLightIntensity: {
      value: 2,
      min: 0,
      max: 10,
      step: 0.01,
    },
  })

  return (
    <>
      <OrbitControls />

      <directionalLight
        ref={lightRef}
        castShadow
        intensity={directionalLightIntensity}
        position={[0, 2, 0]}
      />

      <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>

      <mesh
        scale={5}
        position={[0, -1, 0]}
        rotation-x={-Math.PI / 2}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  )
}
