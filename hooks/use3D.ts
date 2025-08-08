import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactions for luxury LRP cosmetics.
 * This hook sets up a 3D scene using Three.js, tailored for luxury cosmetics presentation.
 * 
 * @returns {Object} - Contains the ref to the 3D canvas and a method to start the 3D scene.
 */
const use3D = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const scene = useRef<THREE.Scene | null>(null);
    const camera = useRef<THREE.PerspectiveCamera | null>(null);
    const renderer = useRef<THREE.WebGLRenderer | null>(null);

    /
     * Initializes the 3D scene for luxury LRP cosmetics.
     */
    const initScene = () => {
        if (!canvasRef.current) return;

        // Create a new scene
        scene.current = new THREE.Scene();
        camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.current.setSize(window.innerWidth, window.innerHeight);
        
        // Set background color to white
        scene.current.background = new THREE.Color(0xffffff);

        // Add lighting for luxury effect
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.current.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffa500, 1);
        directionalLight.position.set(5, 5, 5);
        scene.current.add(directionalLight);

        // Set camera position
        camera.current.position.z = 5;

        // Create a luxury LRP cosmetics product representation (e.g., a bottle)
        const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xffa500, metalness: 0.8, roughness: 0.2 });
        const cylinder = new THREE.Mesh(geometry, material);
        scene.current.add(cylinder);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cylinder.rotation.y += 0.01; // Rotate for a dynamic effect
            renderer.current?.render(scene.current, camera.current);
        };
        animate();
    };

    useEffect(() => {
        initScene();

        // Handle window resize
        const handleResize = () => {
            if (renderer.current) {
                renderer.current.setSize(window.innerWidth, window.innerHeight);
                camera.current.aspect = window.innerWidth / window.innerHeight;
                camera.current.updateProjectionMatrix();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { canvasRef };
};

export default use3D;