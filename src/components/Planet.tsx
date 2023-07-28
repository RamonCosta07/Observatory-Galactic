'use client';
// Interfaces
import { PlanetProps } from "@/interfaces/iComponents/IPlanet";
// Hooks
import { useRef, useEffect, useState } from "react";
// Three
import * as THREE from "three";
// Components
import Loading from "./Loading";

const Planet: React.FC<PlanetProps> = ({ diameter, texture }) => {
  const [loading, setLoading] = useState(false);
  const mountRef = useRef<HTMLDivElement>(null);
  let animationFrameId: number | null = null;

  useEffect(() => {
    if (!mountRef.current) return;
    setLoading(true);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    renderer.setClearColor(0x0d0d1a, 0);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(diameter / 2, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const textureMap = textureLoader.load(texture);
    const material = new THREE.MeshBasicMaterial({ map: textureMap });
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);

    camera.position.z = 5;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
    setLoading(false);

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId); // Interrompe a animação quando o componente é desmontado
      }

      mountRef.current?.removeChild(renderer.domElement);

      // Libera recursos e limpa referências
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      scene.remove(sphere);
    };
  }, [diameter, texture]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ width: "100%", height: "100%" }} ref={mountRef} />
      )}
    </>
  );
};

export default Planet;
