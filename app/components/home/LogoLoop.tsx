'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import SpinText from "../ui/SpinText";


const logos = [
  "/assest/logo/1.svg",
  "/assest/logo/2.svg",
  "/assest/logo/3.svg",
  "/assest/logo/4.svg",
  "/assest/logo/5.svg",
  "/assest/logo/6.svg",
  "/assest/logo/7.svg",
  "/assest/logo/8.svg",
  "/assest/logo/9.svg",
  "/assest/logo/10.svg",

];

export default function LogoLoop() {
    const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const tween = gsap.to(slider, {
      xPercent: -50,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    slider.addEventListener("mouseenter", () => {
      tween.pause();
    });

    slider.addEventListener("mouseleave", () => {
      tween.resume();
    });

    return () => {
      tween.kill();
    };
  }, []);
  return (
    <>
    <section className="bg-[#050d15] py-24 px-20">
        {/* Heading */}
        <div className="mb-10">
          <span className="text-md uppercase tracking-widest font-medium text-white">
            Trusted by Leading Enterprises Companies
          </span>

          <h2 className="mt-3 text-md font-bold  md:text-3xl">
           
           <SpinText
                       className="text-4xl md:text-2xl font-bold text-violet-600 max-w-3xl"
                       text="Powering Innovation for Global Leaders"
                       duration={1}
                       stagger={0.03}
                       delay={0.5}
                       />
          </h2>
        </div>
        <div className="overflow-hidden relative">
        <div
          ref={sliderRef}
          className="flex items-center gap-20 w-max"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative w-40 h-17.5 shrink-0 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Logo ${index}`}
                fill
                className="object-contain bg-white rounded-2xl px-5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
