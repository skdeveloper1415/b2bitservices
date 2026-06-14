"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import BannerText from "./BannerText";
import Link from "next/link";
import Image from 'next/image'

export default function ParticleMorphScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let animationId: number;

    const mouse = {
      x: 0,
      y: 0,
    };

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );

    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    containerRef.current.appendChild(renderer.domElement);

    // ===================================
    // Particles
    // ===================================

    const particleCount = 15000;

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#8b5cf6"); // Purple
    const color2 = new THREE.Color("#06b6d4"); // Cyan

    for (let i = 0; i < particleCount; i++) {
      const radius = 20;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      positions[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      positions[i * 3 + 2] =
        radius * Math.cos(phi);

      const mixedColor = new THREE.Color();

      mixedColor.lerpColors(
        color1,
        color2,
        Math.random()
      );

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(
      geometry,
      material
    );

    scene.add(particles);

    // ===================================
    // Mouse Move
    // ===================================

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      mouse.x =
        (event.clientX / window.innerWidth) * 2 -
        1;

      mouse.y =
        -(event.clientY / window.innerHeight) * 2 +
        1;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    // ===================================
    // Animation
    // ===================================

    const clock = new THREE.Clock();

    const animate = () => {
      animationId =
        requestAnimationFrame(animate);

      const elapsed =
        clock.getElapsedTime();

      // Floating effect
      particles.position.y =
        Math.sin(elapsed * 0.8) * 0.8;

      // Auto rotate
      particles.rotation.y += 0.001;

      // Mouse follow
      particles.rotation.y +=
        (mouse.x * 0.8 -
          particles.rotation.y) *
        0.03;

      particles.rotation.x +=
        (mouse.y * 0.4 -
          particles.rotation.x) *
        0.03;

      renderer.render(scene, camera);
    };

    animate();

    // ===================================
    // Resize
    // ===================================

    const handleResize = () => {
      camera.aspect =
        window.innerWidth /
        window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // ===================================
    // Cleanup
    // ===================================

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (
        containerRef.current &&
        renderer.domElement.parentNode
      ) {
        containerRef.current.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <>
    <div
      ref={containerRef}
      className="bg-black h-screen w-full overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        <div className="flex flex-col gap-5 items-center justify-center [&_h1]:text-white [&_h1]:text-4xl font-bold">
          <BannerText
            heading="Transform Your Digital Presence"
          subheading="We build high-performance websites and digital experiences that drive business growth."
          />
          <Link href={'/'} className="group inline-flex items-center gap-3 rounded-xl text-sm lg:text-xl bg-linear-to-r from-violet-600 to-indigo-500 px-5 lg:px-10 py-4 font-medium text-white transition hover:scale-105"> <span>Discover More</span> <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill="#fff" width="15px" height="15px" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 267 512.43"><path fill-rule="nonzero" d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 3.22 18.9z"/></svg></Link>
 
        </div>
        </div>      
    </div>
    </>
  );
}