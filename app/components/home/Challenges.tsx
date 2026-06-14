"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpinText from "../ui/SpinText";
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Legacy Systems",
    description:
      "Outdated infrastructure that can't scale with modern business needs.",
  },
  {
    title: "Slow Delivery",
    description:
      "Manual workflows and disconnected teams slow innovation.",
  },
  {
    title: "High Costs",
    description:
      "Inefficient operations increase overhead and reduce ROI.",
  },
  {
    title: "Legacy Systems",
    description:
      "Outdated infrastructure that can't scale with modern business needs.",
  },
  {
    title: "Slow Delivery",
    description:
      "Manual workflows and disconnected teams slow innovation.",
  },
  {
    title: "High Costs",
    description:
      "Inefficient operations increase overhead and reduce ROI.",
  },
];


export default function Challenges() {
    const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const scrollAmount = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollAmount}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);
  return (
    <>
    <section className="bg-linear-to-t from-[#050d15] to-violet-900 py-14">
        <div className="mx-auto px-4 flex flex-col items-center text-center gap-2">
            <h2 className="text-md uppercase tracking-widest font-normal text-white">Challenge</h2>
            <SpinText
            className="text-4xl md:text-2xl font-bold text-white max-w-3xl"
            text="Enterprises face complex challenges in a digital-first world."
            duration={1}
            stagger={0.03}
            delay={0.5}
            />
        </div>
    <div ref={sectionRef} className="h-screen overflow-hidden">
        <div
        ref={trackRef}
        className="flex h-screen items-center gap-8 px-20 w-max"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-75 h-75 rounded-3xl border border-white/10 bg-white p-10"
          >
            <div className="mb-10 h-20 w-20 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <Image src={"/assest/ser-icon4.png"} alt="alert" width={24} height={24} />
            </div>

            <h3 className="text-xl font-bold text-black mb-6">
              {card.title}
            </h3>

            <p className="text-black text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
    </>
  )
}
