"use client";

import { Sidebar } from "primereact/sidebar";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { gsap } from "gsap";
import SpinText from "./ui/SpinText";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);
 const items = [
        {
            label: 'Home',
             url: "/",
        },
        {
            label: 'Service',
            url: "/",
        },
        {
            label: 'Case Studio',
            url: "/",
        },        
        {
            label: 'Blog',
            url: "/",
        },
        {
            label: 'About',
            url: "/",
        },
        {
            label: 'Contact',
            url: "/",
        }
    ];

  

  const topBarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(topBarRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    tl.from(
      navRef.current,
      {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    gsap.from(".brand-logo", {
      opacity: 0,
      y: -20,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
      delay: 0.4,
    });

    gsap.from(".nav-item", {
      opacity: 0,
      y: -15,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.5,
    });

    const handleScroll = () => {
      if (window.scrollY > 80) {
        gsap.to(navRef.current, {
          height: 70,
          duration: 0.3,
        });
      } else {
        gsap.to(navRef.current, {
          height: 88,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <header className={`fixed top-0 w-full z-50 pt-4 max-lg:px-5 transition delay-150 duration-300 ease-in-out ${
      isSticky
        ? "bg-linear-to-r from-blue-600 to-violet-600 shadow-lg py-2 [&_.group]:from-black [&_.group]:to-gray-800"
        : "bg-transparent py-6 "
    }`} ref={topBarRef}>
      <div ref={navRef} className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
            <SpinText
                        className="text-2xl md:text-2xl font-bold text-white max-w-3xl"
                        text="NexaForge"
                        duration={1}
                        stagger={0.03}
                        delay={0.5}
                        />
            </Link>
            <div className="flex items-center justify-center gap-30 max-lg:hidden">
              <div className="flex items-center gap-10 [&_li]:list-none [&_a]:text-white [&_a]:text-md [&_a]:font-light">
              {items.map((item, index) => (
              <li key={index}>
              <Link
              href={item.url}
              className="hover:text-purple-600 transition"
              >
              {item.label}
              </Link>
              </li>
              ))}
              </div>
              <div className="flex items-center gap-3 ">
                <SpinText
                        className="group inline-flex items-center gap-3 rounded-xl text-sm bg-linear-to-r from-violet-600 to-indigo-500 px-5 py-2.5 font-medium text-white transition hover:scale-105"
                        text="Let's Talk"
                        duration={1}
                        stagger={0.03}
                        delay={0.5}
                        />
            </div>
            
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setVisible(true)}
              className="lg:hidden"
            >
              <Image src={"/assest/hamburger-menu.svg"} alt="menu" width={24} height={24} />
            </button>
      </div>
    </header>

    {/* Sidebar */}
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="w-[320px] bg-white p-10"
        showCloseIcon={false}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold">
            Menu
          </h2>

          <button
            onClick={() => setVisible(false)}
          >
            <Image src={"/assest/close-circle.svg"} alt="close" width={24} height={24} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li key={index}>
              <button
                className="text-lg font-medium"
                onClick={() =>
                  setVisible(false)
                }
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4">
        
        </div>
      </Sidebar>
    
    
    </>
  );
}