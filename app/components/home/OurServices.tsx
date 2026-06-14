import Image from 'next/image'
import React from 'react'
import SpinText from '../ui/SpinText'

export default function OurServices() {
  return (
    <>
    <section className='bg-linear-to-t from-[#050d15] to-violet-900 py-14'>
        {/* Heading */}
        <div className="mb-20 text-center flex flex-col items-center ">
          <span className="text-md uppercase tracking-widest font-medium text-white">
            Our Services
          </span>

          <h2 className="mt-3 text-md font-bold  md:text-3xl tet">
           
           <SpinText
                                  className="text-4xl md:text-2xl text-center font-bold text-white max-w-3xl"
                                  text="End-to-End Services to Accelerate Your Growth"
                                  duration={1}
                                  stagger={0.03}
                                  delay={0.5}
                                  />
          </h2>
        </div>
        <div className="container mx-auto px-3.5 md:px-20">
            <div className="grid grid-cols-12 gap-5 place-content-stretch plce-items-stretch">
                {/* AI Development */}
                <div className='col-span-12 lg:col-span-3 bg-linear-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff] p-5 rounded-xl flex flex-col gap-5'>
                 <div><Image src={'/assest/ai-development.svg'} alt='AI Development' width={40} height={40} /></div>
                 <div className='flex flex-col gap-2.5 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-slate-900 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-black'>
                    <h4>AI Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </div>
                {/* Cloud Engineering */}
                <div className='col-span-12 lg:col-span-3 bg-linear-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff] p-5 rounded-xl flex flex-col gap-5'>
                    <div><Image src={'/assest/cloud-engineering.svg'} alt='Cloud Engineering' width={40} height={40} /></div>
                 <div className='flex flex-col gap-2.5 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-slate-900 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-black'>
                    <h4>Cloud Engineering</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </div>
                {/* Data Analytics */}
                <div className='col-span-12 lg:col-span-6 bg-linear-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff] p-5 rounded-xl flex flex-col gap-5'>
                    <div><Image src={'/assest/data-analytics.svg'} alt='Data Analytics' width={40} height={40} /></div>
                 <div className='flex flex-col gap-2.5 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-slate-900 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-black'>
                    <h4>Data Analytics</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                </div>
                {/* Cyber Security */}
                <div className='col-span-12 lg:col-span-6 bg-linear-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff] p-5 rounded-xl flex flex-col gap-5'>
                    <div><Image src={'/assest/cyber-security.svg'} alt='Cyber Security' width={40} height={40} /></div>
                 <div className='flex flex-col gap-2.5 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-slate-900 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-black'>
                    <h4>Cyber Security</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </div>
                {/* Automation */}
                <div className='col-span-12 lg:col-span-3 bg-linear-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff] p-5 rounded-xl flex flex-col gap-5'>
                    <div><Image src={'/assest/automation.svg'} alt='Automation' width={40} height={40} /></div>
                 <div className='flex flex-col gap-2.5 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-slate-900 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-black'>
                    <h4>Automation</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                </div>
                {/* Digital Transformation */}
                <div className='col-span-12 lg:col-span-3 bg-linear-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff] p-5 rounded-xl flex flex-col gap-5'>
                    <div><Image src={'/assest/digital-transformation.svg'} alt='Digital Transformation' width={40} height={40} /></div>
                 <div className='flex flex-col gap-2.5 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-slate-900 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-black'>
                    <h4>Digital Transformation</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}
