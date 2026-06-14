"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimatedTextProps {
  heading: string;
  subheading?: string;
  className?: string;
}

export default function BannerText({
  heading,
  subheading,
  className = "",
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let headingSplit: SplitText | null = null;
    let subheadingSplit: SplitText | null = null;

    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      gsap.set(containerRef.current, {
        opacity: 1,
      });

      if (headingRef.current) {
        headingSplit = SplitText.create(headingRef.current, {
          type: "words",
          aria: "hidden",
        });

        gsap.from(headingSplit.words, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 1.08,
          ease: "power3.out",
        });
      }

      if (subheadingRef.current) {
        subheadingSplit = SplitText.create(subheadingRef.current, {
          type: "words",
          aria: "hidden",
        });

        gsap.from(subheadingSplit.words, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 1.05,
          ease: "power3.out",
          delay: 0.3,
        });
      }
    });

    return () => {
      headingSplit?.revert();
      subheadingSplit?.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`opacity-0 flex flex-col items-center justify-center ${className}`}
    >
      {/* Animated Heading */}
      <div
        ref={headingRef}
        aria-hidden="true"
      >
        <h1 className="text-5xl md:text-9xl font-light text-center">
          {heading}
        </h1>
      </div>

      {/* Screen Reader Heading */}
      <h1 className="sr-only">{heading}</h1>

      {subheading && (
        <>
          {/* Animated Subheading */}
          <div
            ref={subheadingRef}
            aria-hidden="true"
          >
            <p className="mt-6 text-center font-light text-lg md:text-xl max-w-3xl mx-auto">
              {subheading}
            </p>
          </div>

          {/* Screen Reader Subheading */}
          <p className="sr-only">{subheading}</p>
        </>
      )}
    </div>
  );
}