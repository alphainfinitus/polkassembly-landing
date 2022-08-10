import React from 'react'
import SectionHeading from './SectionHeading'
import substrateBuilders from '../../assets/images/substrate-builders.svg'
import web3Grant from '../../assets/images/web3-grant.svg'


export default function RecognitionSection() {
	return (
		<section className="my-28 mx-auto">
      <SectionHeading title='Recognition' />
      
      <div className="flex flex-col lg:flex-row items-start justify-center mt-20">
        <div className='mx-5 lg:mx-0'>
          <img src={web3Grant} className="h-auto w-80 mx-auto" />

          <h2 className='text-xl font-bold text-center mt-8'>Supported by Web3 Foundation</h2>

          <p className="text-center mt-1 py-6 px-12 lg:w-[450px] text-lg">
            Polkassembly is a recipient of a technical grant from Web3 Foundation.
            We have successfully delivered the milestones described in our grant applications.
            Please see the Wave 7 Grants blog from Web 3 Foundation that mentions our project.
            <br/>
            <u> <a href='https://medium.com/web3foundation/web3-foundation-grants-wave-7-recipients-15043dbc9198' target='_blank' className='text-center text-pa-pink font-semibold'>Read More</a> </u>
          </p>
        </div>

        <div className='mx-5 lg:mx-0 mt-20 lg:mt-0'>
          <img src={substrateBuilders} className="h-auto w-80 mx-auto" />

          <h2 className='text-xl font-bold text-center mt-8'>Substrate Builders Program</h2>

          <p className="text-center mt-1 py-6 px-12 lg:w-[450px] text-lg">
            Polkassembly is one of the projects that have been carefully selected by Parity to participate in Substrate Builders Program.
            Please see the Substrate projects page that mentions our project.
            <br/>
            <u> <a href='https://substrate.io/ecosystem/projects/' target="_blank" rel="noopener noreferrer" className="text-center text-pa-pink font-semibold">Read More</a> </u>
          </p>
        </div>
      </div>
    </section>
	)
}
