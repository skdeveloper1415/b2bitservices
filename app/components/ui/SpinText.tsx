"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface SpinTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

export default function SpinText({
  text,
  className = "",
}: SpinTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    let split: SplitText;

    document.fonts.ready.then(() => {
      if (!textRef.current) return;

      split = SplitText.create(textRef.current, {
        type: "chars,words,lines",
      });

      gsap.set(textRef.current, {
        perspective: 500,
        perspectiveOrigin: "50% 50%",
        transformStyle: "preserve-3d",
      });

        const tl = gsap.timeline({
        scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        },
        });

      tl.from(split.chars, {
        y: "random(-75,75)",
        x: "random(-150,150)",
        rotation: "random(0,720)",
        opacity: 0,
        ease: "back.out(1.7)",
        duration: 0.8,
        stagger: 0.02,
      });

      tl.to(split.chars, {
        transformOrigin: "50% 50% -30px",
        rotationY: -360,
        rotationX: 360,
        rotation: 360,
        ease: "elastic.inOut",
        duration: 4,
        stagger: 0.02,
      });
    });

    return () => {
      split?.revert();
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
}