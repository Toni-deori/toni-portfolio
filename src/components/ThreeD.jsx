import React from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Desktop } from './Desktop';
import { Suspense } from "react";
const ThreeD = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }} gl={{ toneMappingExposure: 1 }}>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5,5,5]} intensity={1}/>
        <spotLight
      position={[0, 10, 0]}
      angle={Math.PI / 8}
      penumbra={0.1}
      intensity={80}
      color="#4cc9f0"
    />
     <spotLight
      position={[1, 3, 4]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="#9d4edd"
    />
    <pointLight
  position={[1, 2, 3]}      
  intensity={20}           
  distance={10}           
  decay={2}
  color="#4cc9f0"        
  castShadow={true}
/>
        <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
      <group
          scale={isMobile ? 0.5 : .7}
          position={isMobile? [0.5,-2.7,0]:[1.5, -2.7, 0]}
          rotation={[0, -(Math.PI / 3-.2), 0]}
        >
            <Desktop />
        </group>
      </Suspense>
    </Canvas>
  )
}

export default ThreeD
