"use client";
import SpinText from '../ui/SpinText'

const processSteps = [
  {
    step: "STEP -01",
    title: "Discover",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
  },
  {
    step: "STEP -02",
    title: "Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://images.unsplash.com/photo-1675557009875-436f4d1b65b4?q=80&w=800",
  },
  {
    step: "STEP -03",
    title: "Build",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=800",
  },
  {
    step: "STEP -04",
    title: "Scale",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800",
  },
];

export default function OurSolution() {
  return (
    <section className="relative overflow-hidden bg-[#050d15] py-24 px-20">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/circuit-board.png')",
        }}
      />

      <div className="container relative mx-auto px-4">
        {/* Heading */}
        <div className="mb-20 text-center flex flex-col items-center">
          <span className="text-md uppercase tracking-widest font-medium text-violet-600">
            Our Solution
          </span>

          <h2 className="mt-3 text-md font-bold  md:text-3xl">
          
           <SpinText
                                             className="text-4xl md:text-2xl text-center font-bold text-white max-w-3xl"
                                             text=" A Proven AI-Driven Transformation Process"
                                             duration={1}
                                             stagger={0.03}
                                             delay={0.5}
                                             />
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[80px] bg-[#0d141c] border border-gray-600 px-8 pb-10 pt-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Circle Image */}
              <div className="mx-auto mb-8 flex h-52 w-52 items-center justify-center rounded-full bg-[#f5f5f5]">
                <div className="h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>

              <span className="text-xl font-medium tracking-wide text-white">
                {item.step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}