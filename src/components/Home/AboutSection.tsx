import React from 'react'
import headerImg from '../../assets/images/header-img.svg'
import aboutImg from '../../assets/images/about-img.svg'


export default function AboutSection() {
	return (
		<section id="about-section" className="my-28 mx-auto">
      {/* heading */}
      <div className="flex justify-between items-center">
        <img src={headerImg} className="h-auto w-1/3 rotate-180" />
        <div className="flex items-center">
          <span className="pink-circle"></span>
          <h1 className="text-3xl mx-6">About</h1>
          <span className="pink-circle"></span>
        </div>
        <img src={headerImg} className="h-auto w-1/3" />
      </div>

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
