// Styles
import { CanvasSolarSystem } from "@/styles/SolarSystemStyles";
// React
import React, { useEffect, useRef, useState } from "react";
// Bibliotecas
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";
// Components
import Loading from "./Loading";

const SolarSystem: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDesktopLarge = useMediaQuery({ minWidth: 1200 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isMobileMini = useMediaQuery({ maxWidth: 380 });

  // Define diferentes diâmetros para cada tamanho de tela
  let scale:number;
  if (isDesktopLarge) {
    scale = 1.6;
  } else if (isTablet) {
    scale = 1.4;
  } else if (isMobile) {
    scale = .8;
  } else if (isMobileMini) {
    scale = .7;
  } else {
    scale = 1.6; // Valor padrão
  }

  useEffect(() => {
    setLoading(true);
    if (canvasRef.current) {
      let frameId: number;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x0d0d1a, 0);

      // Sol
      const sunGeometry = new THREE.SphereGeometry(1.5 * scale, 32, 32);
      const sunTexture = new THREE.TextureLoader().load("/sun_texture.jpg");
      const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });
      const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
      scene.add(sunMesh);

      // Mercúrio
      const mercuryOrbitRadius = 2;
      const mercuryGeometry = new THREE.SphereGeometry(0.3 * scale, 32, 32);
      const mercuryTexture = new THREE.TextureLoader().load(
        "/mercury_texture.jpg"
      );
      const mercuryMaterial = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
      scene.add(mercuryMesh);

      // Vênus
      const venusOrbitRadius = 3;
      const venusGeometry = new THREE.SphereGeometry(0.4 * scale, 32, 32);
      const venusTexture = new THREE.TextureLoader().load("/venus_texture.jpg");
      const venusMaterial = new THREE.MeshStandardMaterial({
        map: venusTexture,
      });
      const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
      scene.add(venusMesh);

      // Terra
      const earthOrbitRadius = 4;
      const earthGeometry = new THREE.SphereGeometry(0.5 * scale, 32, 32);
      const earthTexture = new THREE.TextureLoader().load("/earth_texture.jpg");
      const earthMaterial = new THREE.MeshStandardMaterial({
        map: earthTexture,
      });
      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earthMesh);

      // Marte
      const marsOrbitRadius = 5;
      const marsGeometry = new THREE.SphereGeometry(0.45 * scale, 32, 32);
      const marsTexture = new THREE.TextureLoader().load("/mars_texture.jpg");
      const marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
      const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
      scene.add(marsMesh);

      // Júpiter
      const jupiterOrbitRadius = 7;
      const jupiterGeometry = new THREE.SphereGeometry(1 * scale, 32, 32);
      const jupiterTexture = new THREE.TextureLoader().load(
        "/jupiter_texture.jpg"
      );
      const jupiterMaterial = new THREE.MeshStandardMaterial({
        map: jupiterTexture,
      });
      const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
      scene.add(jupiterMesh);

      // Saturno
      const saturnOrbitRadius = 9;
      const saturnGeometry = new THREE.SphereGeometry(0.8 * scale, 32, 32);
      const saturnTexture = new THREE.TextureLoader().load(
        "/saturn_texture.jpg"
      );
      const saturnMaterial = new THREE.MeshStandardMaterial({
        map: saturnTexture,
      });
      const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
      scene.add(saturnMesh);

      // Anéis de Saturno
      const saturnRingGeometry = new THREE.RingGeometry(
        1.2 * scale,
        2 * scale,
        64
      );
      const saturnRingTexture = new THREE.TextureLoader().load(
        "/saturn_ring_texture.jpg"
      );
      const saturnRingMaterial = new THREE.MeshBasicMaterial({
        map: saturnRingTexture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const saturnRingMesh = new THREE.Mesh(
        saturnRingGeometry,
        saturnRingMaterial
      );
      saturnRingMesh.rotation.x = Math.PI / 2; // Ajusta a orientação dos anéis
      scene.add(saturnRingMesh);

      // Urano
      const uranusOrbitRadius = 11;
      const uranusGeometry = new THREE.SphereGeometry(0.7 * scale, 32, 32);
      const uranusTexture = new THREE.TextureLoader().load(
        "/uranus_texture.jpg"
      );
      const uranusMaterial = new THREE.MeshStandardMaterial({
        map: uranusTexture,
      });
      const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
      scene.add(uranusMesh);

      // Netuno
      const neptuneOrbitRadius = 13;
      const neptuneGeometry = new THREE.SphereGeometry(0.65 * scale, 32, 32);
      const neptuneTexture = new THREE.TextureLoader().load(
        "/neptune_texture.jpg"
      );
      const neptuneMaterial = new THREE.MeshStandardMaterial({
        map: neptuneTexture,
      });
      const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
      scene.add(neptuneMesh);

      // Plutão
      const plutoOrbitRadius = 15;
      const plutoGeometry = new THREE.SphereGeometry(0.25 * scale, 32, 32);
      const plutoTexture = new THREE.TextureLoader().load("/pluto_texture.jpg");
      const plutoMaterial = new THREE.MeshStandardMaterial({
        map: plutoTexture,
      });
      const plutoMesh = new THREE.Mesh(plutoGeometry, plutoMaterial);
      scene.add(plutoMesh);

      const light = new THREE.PointLight(0xffffff, 1);
      light.position.set(0, 0, 5);
      scene.add(light);

      camera.position.z = 20;

      const animate = () => {
        frameId = requestAnimationFrame(animate);

        // Rotação dos planetas
        sunMesh.rotation.y += 0.015;
        mercuryMesh.rotation.y += 0.04;
        venusMesh.rotation.y += 0.03;
        earthMesh.rotation.y += 0.02;
        marsMesh.rotation.y += 0.016;
        jupiterMesh.rotation.y += 0.01;
        saturnMesh.rotation.y += 0.006;
        uranusMesh.rotation.y += 0.004;
        neptuneMesh.rotation.y += 0.002;
        plutoMesh.rotation.y += 0.003;

        // Atualização das posições dos planetas em relação ao Sol
        mercuryMesh.position.x =
          Math.cos(mercuryMesh.rotation.y) * mercuryOrbitRadius;
        mercuryMesh.position.z =
          Math.sin(mercuryMesh.rotation.y) * mercuryOrbitRadius;

        venusMesh.position.x =
          Math.cos(venusMesh.rotation.y) * venusOrbitRadius;
        venusMesh.position.z =
          Math.sin(venusMesh.rotation.y) * venusOrbitRadius;

        earthMesh.position.x =
          Math.cos(earthMesh.rotation.y) * earthOrbitRadius;
        earthMesh.position.z =
          Math.sin(earthMesh.rotation.y) * earthOrbitRadius;

        marsMesh.position.x = Math.cos(marsMesh.rotation.y) * marsOrbitRadius;
        marsMesh.position.z = Math.sin(marsMesh.rotation.y) * marsOrbitRadius;

        jupiterMesh.position.x =
          Math.cos(jupiterMesh.rotation.y) * jupiterOrbitRadius;
        jupiterMesh.position.z =
          Math.sin(jupiterMesh.rotation.y) * jupiterOrbitRadius;

        saturnMesh.position.x =
          Math.cos(saturnMesh.rotation.y) * saturnOrbitRadius;
        saturnMesh.position.z =
          Math.sin(saturnMesh.rotation.y) * saturnOrbitRadius;
        saturnRingMesh.rotation.y += 0.006;

        saturnRingMesh.position.x =
          Math.cos(saturnMesh.rotation.y) * saturnOrbitRadius;
        saturnRingMesh.position.z =
          Math.sin(saturnMesh.rotation.y) * saturnOrbitRadius;

        uranusMesh.position.x =
          Math.cos(uranusMesh.rotation.y) * uranusOrbitRadius;
        uranusMesh.position.z =
          Math.sin(uranusMesh.rotation.y) * uranusOrbitRadius;

        neptuneMesh.position.x =
          Math.cos(neptuneMesh.rotation.y) * neptuneOrbitRadius;
        neptuneMesh.position.z =
          Math.sin(neptuneMesh.rotation.y) * neptuneOrbitRadius;

        plutoMesh.position.x =
          Math.cos(plutoMesh.rotation.y) * plutoOrbitRadius;
        plutoMesh.position.z =
          Math.sin(plutoMesh.rotation.y) * plutoOrbitRadius;

        renderer.render(scene, camera);
      };

      animate();
      setLoading(false);
      return () => {
        cancelAnimationFrame(frameId);
      };
    }
  }, []);

  return (
    <>
      {loading ? <Loading /> : <CanvasSolarSystem ref={canvasRef} />}
    </>
  );
};

export default SolarSystem;
