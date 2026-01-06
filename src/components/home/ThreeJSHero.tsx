import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Optimized LogoCube with reduced complexity
const LogoCube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
  });

  const materials = useMemo(() => ({
    glow: new THREE.MeshStandardMaterial({
      color: '#ff9500',
      emissive: '#ff9500',
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.2,
    }),
    base: new THREE.MeshStandardMaterial({
      color: '#1a1a1a',
      metalness: 0.5,
      roughness: 0.2,
    })
  }), []);

  return (
    <group ref={meshRef}>
      <mesh material={materials.base} scale={[2, 2, 2]}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <mesh position={[0, 0.4, 0.51]} material={materials.glow}>
        <boxGeometry args={[1.5, 0.15, 0.02]} />
      </mesh>
      <mesh position={[0, 0, 0.51]} material={materials.glow}>
        <boxGeometry args={[1, 0.15, 0.02]} />
      </mesh>
    </group>
  );
};

// Reduced particle count for better performance
const Particles = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 200; // Reduced from 500
  
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 8 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);
      
      col[i3] = 1.0;
      col[i3 + 1] = 0.6;
      col[i3 + 2] = 0.15;
    }
    
    return { positions: pos, colors: col };
  }, []);
  
  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.001;
    }
  });
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.6} />
    </points>
  );
};

const ThreeJSHero: React.FC = () => {
  return (
    <Canvas camera={{ position: [3, 0, 6], fov: 50 }} performance={{ min: 0.5 }}>
      <fog attach="fog" args={['#000000', 5, 20]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#ff9d26" />
      
      <Environment preset="night" />
      
      <group position={[3, 0, 0]}>
        <LogoCube />
      </group>
      
      <Particles />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

export default ThreeJSHero;