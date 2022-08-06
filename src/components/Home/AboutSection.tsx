import React from 'react'
import headerImg from '../../assets/images/header-img.svg'
import aboutImg from '../../assets/images/about-img.svg'
import SectionHeading from './SectionHeading'


export default function AboutSection() {
	return (
		<section id="about-section" className="my-28 mx-auto">
      <SectionHeading title='About' />

      {/* content */}
      <div className="flex items-center justify-center mt-24">
        <img src={aboutImg} className="h-auto w-36 mr-8" />
        <p className="text-center w-[500px] text-lg">
          Polkassembly is a platform to discuss and vote on governance proposals, motions and referandas. This is a place where your community engages, to take decisions on the future of your protocol.
        </p>
      </div>
    </section>
	)
}
