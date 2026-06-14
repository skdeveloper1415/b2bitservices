"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const testimonials = [
  {
    id: 1,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assest/boy-face-icon.svg",
    review:
      "Pyramid Talent brings value to our partnership by providing hard-to-find skills and resources.",
  },
  {
    id: 2,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assest/boy-face-icon.svg",
    review:
      "Their flexible delivery models bring significant value to the table.",
  },
  {
    id: 3,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assest/boy-face-icon.svg",
    review:
      "We achieve a close, intimate relationship by having them as our local partner.",
  },
  {
    id: 4,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assest/boy-face-icon.svg",
    review:
      "Pyramid Talent consistently delivers high quality talent solutions.",
  },
];

export default function Testimonial() {
   const swiperRef = useRef<any>(null);
  return (
    <>
    <section className="relative overflow-hidden bg-[#050d15] py-0 px-20">
      {/* Heading */}
      
          <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={32}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-4xl overflow-hidden bg-[#0d141c] border border-gray-600 h-full">

                {/* Top */}
                

                {/* Bottom */}
                <div className="p-8">
                  <div className="mb-6 text-yellow-500">
                    ★★★★★
                  </div>

                  <p className="text-md leading-relaxed text-white">
                    "{item.review}"
                  </p>
                </div>
                <div className="px-8 py-6 flex justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-md font-bold text-white">
                        {item.name}
                      </h3>

                      <p className="text-white text-sm">
                        {item.designation}
                      </p>
                    </div>
                  </div>

                  <div className="text-white text-6xl">
                    ”
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 text-center flex items-center justify-center">
              
              {/* Navigation */}
          <div className="flex gap-4 [&_button]:cursor-pointer">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="h-14 w-30 rounded-full bg-[#0d141c]  border border-gray-600 flex items-center justify-center capitalize text-white"
            >
              ← previous
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="h-14 w-30 rounded-full bg-[#0d141c]  border border-gray-600 flex items-center justify-center capitalize text-white"
            >
              next →
            </button>
          </div>
          </div>
    </section>
    </>
  )
}
