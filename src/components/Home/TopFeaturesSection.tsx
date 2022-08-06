import React from 'react'
import SectionHeading from './SectionHeading'

export default function TopFeaturesSection() {
	return (
		<section id="top-features-section" className="my-28">
       {/* heading */}
			 <SectionHeading title='Top Features' />

       {/* sub-heading */}
      <div className="flex justify-center mt-24">
         {/* Connecting the Dots */}
        <div data-type="topFeature" className="w-96 mx-9 active">
          <a href="#" className="relative block group h-36">
            <span className="absolute rounded-3xl inset-0 border-2 border-pa-pink border-dashed"></span>
          
            <div
              className="relative rounded-3xl h-full bg-pa-pink-light border-2 border-pa-pink-light transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
              <div className="px-6 opacity-100 relative">
                <h2 className="mt-8 text-2xl font-medium text-pa-pink">Connecting the Dots</h2>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto mt-8 mr-2 text-pa-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
              </svg>
            </div>
          </a>
        </div>

         {/* Intuitive UI/UX */}
        <div data-type="topFeature" className="w-96 mx-9">
          <a href="" className="relative block group h-36">
            <span className="absolute rounded-3xl inset-0 border-2 border-pa-pink border-dashed"></span>
          
            <div
              className="relative rounded-3xl h-full bg-pa-purple border-2 border-pa-purple transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
              <div className="px-6 opacity-100 relative">
                <h2 className="mt-8 text-2xl font-medium">Intuitive UI/UX</h2>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div id="top-features-content" className="mt-28 mx-auto h-auto max-w-[90vw]">
        <img src="images/connecting-dots.svg" className="mx-auto h-auto w-[40rem] max-w-[90vw]" />
      </div>

    </section>
	)
}
