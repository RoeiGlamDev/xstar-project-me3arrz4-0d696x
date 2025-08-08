import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  return (
    <motion.div
      position={position}
      animate={{ y: [0, 0.2, 0], opacity: [1, 0.8, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color="#FFA500" />
    </motion.mesh>
  );
};

const FloatingElements: React.FC = () => {
  const elements = [
    [1, 1, -2],
    [-1, 0.5, -3],
    [2, 0, -4],
    [-2, 1.5, -1],
  ];

  return (
    <>
      {elements.map((position, index) => (
        <FloatingElement key={index} position={position as [number, number, number]} />
      ))}
    </>
  );
};

const FloatingElementsComponent: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElements />
      </Canvas>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-orange-500">luxury LRP cosmetics</h1>
        <p className="mt-4 text-xl text-gray-700">
          Experience the elegance of luxury LRP cosmetics, where beauty meets sophistication.
        </p>
      </div>
    </div>
  );
};

export default FloatingElementsComponent;