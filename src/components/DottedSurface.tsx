import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function DottedSurface() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const particles = 1500;
    const positions = new Float32Array(particles * 3);
    for (let i = 0; i < particles * 3; i++) positions[i] = (Math.random() - 0.5) * 2000;
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0xFF5E0E, size: 2 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => { containerRef.current?.removeChild(renderer.domElement); };
  },[]);

  return <div ref={containerRef} className="fixed inset-0 -z-10 opacity-30" />;
}