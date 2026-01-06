import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// HeroModel components (replacing FloatingLogo)
const LogoCube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Animate the cube
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle rotation
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1 + state.clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.05;
    
    // Subtle hover effect
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
  });

  // Materials
  const primaryColor = new THREE.Color('#ff9500'); // Orange
  const accentColor = new THREE.Color('#faa307'); // Gold
  const baseColor = new THREE.Color('#1a1a1a');

  // Material with glow effect for the orange parts
  const glowingMaterial = new THREE.MeshStandardMaterial({
    color: primaryColor,
    emissive: primaryColor,
    emissiveIntensity: 0.5,
    metalness: 0.8,
    roughness: 0.2,
  });

  // Material for gold parts
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: accentColor,
    emissive: accentColor,
    emissiveIntensity: 0.3,
    metalness: 0.9,
    roughness: 0.1,
  });

  // Base cube material
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: baseColor,
    metalness: 0.5,
    roughness: 0.2,
  });

  return (
    <group ref={meshRef}>
      {/* Base cube */}
      <mesh receiveShadow castShadow scale={[3, 3, 3]} material={baseMaterial}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      
      {/* Top bar */}
      <mesh 
        receiveShadow 
        castShadow 
        position={[0, 0.4, 0.51]} 
        material={glowingMaterial}
      >
        <boxGeometry args={[1.8, 0.2, 0.02]} />
      </mesh>
      
      {/* Middle bar */}
      <mesh 
        receiveShadow 
        castShadow 
        position={[0, 0, 0.51]} 
        material={glowingMaterial}
      >
        <boxGeometry args={[1.2, 0.2, 0.02]} />
      </mesh>
      
      {/* Bottom bar left */}
      <mesh 
        receiveShadow 
        castShadow 
        position={[-0.3, -0.4, 0.51]} 
        material={goldMaterial}
      >
        <boxGeometry args={[0.8, 0.2, 0.02]} />
      </mesh>
      
      {/* Bottom bar right */}
      <mesh 
        receiveShadow 
        castShadow 
        position={[0.6, -0.4, 0.51]} 
        material={goldMaterial}
      >
        <boxGeometry args={[0.4, 0.2, 0.02]} />
      </mesh>
      
      {/* Side decorative elements */}
      <mesh 
        receiveShadow 
        castShadow 
        position={[0.51, 0.2, 0]} 
        rotation={[0, Math.PI/2, 0]}
        material={glowingMaterial}
      >
        <boxGeometry args={[0.4, 0.05, 0.02]} />
      </mesh>
      
      <mesh 
        receiveShadow 
        castShadow 
        position={[-0.51, -0.2, 0]} 
        rotation={[0, Math.PI/2, 0]}
        material={goldMaterial}
      >
        <boxGeometry args={[0.4, 0.05, 0.02]} />
      </mesh>
    </group>
  );
};

// Particles effect (same as original)
const Particles = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 500;
  
  // Create particles
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    // Random position in a sphere
    const radius = 10 + Math.random() * 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
    
    // Color gradients (orange to gold)
    const mixFactor = Math.random();
    colors[i3] = 1.0; // R
    colors[i3 + 1] = 0.6 + mixFactor * 0.3; // G
    colors[i3 + 2] = 0.15 + mixFactor * 0.1; // B
  }
  
  useFrame((state) => {
    if (!points.current) return;
    
    // Rotate the entire particle system
    points.current.rotation.y += 0.0005;
    points.current.rotation.x += 0.0002;
  });
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  );
};

// Grid plane (same as original)
const Grid = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshStandardMaterial
        color="#ff9d26"
        emissive="#ff9d26"
        emissiveIntensity={0.2}
        wireframe={true}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const ThreeJSHero: React.FC = () => {
  return (
    <Canvas camera={{ position: [3, 0, 8], fov: 60 }}>
      <fog attach="fog" args={['#000000', 5, 25]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff9d26" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffcc26" />
      
      <Environment preset="night" />
      
      <group position={[5, 0, 0]}>
        <LogoCube />
      </group>
      
      <Particles />
      <Grid />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};
export default ThreeJSHero;