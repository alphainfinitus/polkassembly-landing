import React from 'react'
import headerImg from '../../assets/images/header-img.svg'
import aboutImg from '../../assets/images/about-img.svg'
import SectionHeading from './SectionHeading'


export default function AboutSection() {
	return (
		<section id="about-section" className="my-28 mx-auto container">
      <SectionHeading title='About' withDots={false} />
      
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="flex flex-row">
          <p className='w-80 h-52 p-8 rounded-3xl mx-6 text-center leading-8 border border-pa-purple shadow-[13px_8px_10px_-5px_#F9D2FF]'>Polkassembly is the most unified platform to discuss and vote on governance proposals, motions and referandas.</p>

          <p className='w-80 h-52 p-8 rounded-3xl mx-6 text-center leading-8 border border-pa-purple shadow-[13px_8px_10px_-5px_#F9D2FF]'>Your community comes together at Polkassembly to engage and take decisions on the future of your protocol. </p>
        </div>
        <img src={aboutImg} className="bg-white -mt-8 h-auto w-36 mx-auto rounded-3xl border border-pa-purple shadow-[13px_8px_10px_-5px_#F9D2FF] p-8" />
      </div>
    </section>
	)
}
