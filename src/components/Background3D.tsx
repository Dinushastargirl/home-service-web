import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useMode } from "@/context/ModeContext";

export const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  useEffect(() => {
    if (!containerRef.current || mode === "simple") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshNormalMaterial({ wireframe: true });
    const shapes: THREE.Mesh[] = [];

    for (let i = 0; i < 20; i++) {
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      shape.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      shape.scale.setScalar(Math.random() * 0.5 + 0.1);
      scene.add(shape);
      shapes.push(shape);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      shapes.forEach((shape) => {
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
      });
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [mode]);

  return (
    <div
      ref={containerRef}
      className="three-bg fixed inset-0 -z-10 pointer-events-none opacity-30"
    />
  );
};
