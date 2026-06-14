import React from 'react'
import SpinText from '../ui/SpinText'

export default function InquairySection() {
  return (
    <>
    <section className="bg-[#050d15] py-24 px-10 lg:px-20 ">
        <div className='bg-linear-to-r from-[#151149] via-[#130f26] to-[#0f112e] flex items-center justify-between py-10 px-10 lg:px-20 rounded-3xl border border-gray-800 max-lg:grid max-lg:grid-cols-1'>
        <div>
        <SpinText
        className="text-xl md:text-2xl font-bold text-white max-w-3xl"
        text="Ready to Build the Future of your Business? "
        duration={1}
        stagger={0.03}
        delay={0.5}
        />            
        </div>
        <div className='text-white'>
            Let's create intelligent that drive real results.
        </div>
        <div>
            <button
              className="group inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-violet-600 to-indigo-500 px-10 py-4 font-medium text-white transition hover:scale-105"
            >
              Start Your Project →
            </button>
        </div>
        </div>
    </section>
    </>
  )
}
