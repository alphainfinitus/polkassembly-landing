import React, { useState } from 'react'
import SectionHeading from './SectionHeading'

import polkadotLogo from '../../assets/parachain-logos/polkadot-logo.jpg'
import kusamaLogo from '../../assets/parachain-logos/kusama-logo.gif'
import moonriverLogo from '../../assets/parachain-logos/moonriver-logo.png'
import moonbeamLogo from '../../assets/parachain-logos/moonbeam-logo.png'
import acalaLogo from '../../assets/parachain-logos/acala-logo.jpg'
import acuityLogo from '../../assets/parachain-logos/acuity-logo.jpg'
import altairLogo from '../../assets/parachain-logos/altair-logo.jpeg'
import amplitudeLogo from '../../assets/parachain-logos/amplitude-logo.png'
import astarLogo from '../../assets/parachain-logos/astar-logo.png'
import automataLogo from '../../assets/parachain-logos/automata-logo.jpg'
import basiliskLogo from '../../assets/parachain-logos/basilisk-logo.jpg'
import bifrostLogo from '../../assets/parachain-logos/bifrost-logo.png'
import calamariLogo from '../../assets/parachain-logos/calamari-logo.png'
import centrifugeLogo from '../../assets/parachain-logos/centrifuge-logo.png'
import gearLogo from '../../assets/parachain-logos/gear-logo.jpg'
import heikoLogo from '../../assets/parachain-logos/hydradx-logo.jpg'
import hydradxLogo from '../../assets/parachain-logos/hydradx-logo.jpg'
import karuraLogo from '../../assets/parachain-logos/karura-logo.jpg'
import khalaLogo from '../../assets/parachain-logos/khala-logo.png'
import kiltLogo from '../../assets/parachain-logos/kilt-logo.png'
import mantaLogo from '../../assets/parachain-logos/manta-logo.jpg'
import moonbaseLogo from '../../assets/parachain-logos/moonbase-logo.png'
import parallelLogo from '../../assets/parachain-logos/parallel-logo.jpg'
import pendulumLogo from '../../assets/parachain-logos/pendulum-logo.jpg'
import pioneerLogo from '../../assets/parachain-logos/bitcountrypioneer-logo.jpg'
import polkadexLogo from '../../assets/parachain-logos/polkadex-logo.jpg'
import robonomicsLogo from '../../assets/parachain-logos/robonomics-logo.jpg'
import shibuyaLogo from '../../assets/parachain-logos/shiden-logo.jpg'
import shidenLogo from '../../assets/parachain-logos/shiden-logo.jpg'
import tanganikaLogo from '../../assets/parachain-logos/tanganika-logo.png'
import tinkerLogo from '../../assets/parachain-logos/chain-logo.jpg'
import turingLogo from '../../assets/parachain-logos/turing-logo.png'
import westendLogo from '../../assets/parachain-logos/westend-logo.jpg'



export default function LiveChainsSection() {
  const [currPage, setCurrPage] = useState<number>(1);

  const parachains: {title:string, image:string}[] = [
    {
      image: polkadotLogo,
      title: 'polkadot'
    },
    {
      image: kusamaLogo,
      title: 'kusama'
    },
    {
      image: moonriverLogo,
      title: 'moonriver'
    },
    {
      image: moonbeamLogo,
      title: 'moonbeam'
    },
    {
      image: acalaLogo,
      title: 'ACALA'
    },
    {
      image: acuityLogo,
      title: 'acuity'
    },
    {
      image: altairLogo,
      title: 'altair'
    },
    {
      image: amplitudeLogo,
      title: 'amplitude'
    },
    {
      image: astarLogo,
      title: 'astar'
    },
    {
      image: automataLogo,
      title: 'automata'
    },
    {
      image: basiliskLogo,
      title: 'basilisk'
    },
    {
      image: bifrostLogo,
      title: 'bifrost'
    },
    {
      image: calamariLogo,
      title: 'calamari'
    },
    {
      image: centrifugeLogo,
      title: 'centrifuge'
    },
    {
      image: gearLogo,
      title: 'gear'
    },
    {
      image: heikoLogo,
      title: 'heiko'
    },
    {
      image: hydradxLogo,
      title: 'hydradx'
    },
    {
      image: karuraLogo,
      title: 'karura'
    },
    {
      image: khalaLogo,
      title: 'khala'
    },
    {
      image: kiltLogo,
      title: 'kilt'
    },
    {
      image: mantaLogo,
      title: 'manta'
    },
    {
      image: moonbaseLogo,
      title: 'moonbase'
    },
    {
      image: parallelLogo,
      title: 'parallel'
    },
    {
      image: pendulumLogo,
      title: 'pendulum'
    },
    {
      image: pioneerLogo,
      title: 'pioneer'
    },
    {
      image: polkadexLogo,
      title: 'polkadex'
    },
    {
      image: robonomicsLogo,
      title: 'robonomics'
    },
    {
      image: shibuyaLogo,
      title: 'shibuya'
    },
    {
      image: shidenLogo,
      title: 'shiden'
    },
    {
      image: tanganikaLogo,
      title: 'tanganika'
    },
    {
      image: tinkerLogo,
      title: 'tinker'
    },
    {
      image: turingLogo,
      title: 'turing'
    },
    {
      image: westendLogo,
      title: 'westend'
    }
  ];

  const chainCircle = (image:string, title:string) => {
    const link = ["moonbase", "moonriver", "moonbeam", "kilt", "automata"].includes(title) ? `https://${title}.polkassembly.network` : `https://${title}.polkassembly.io`;
    
    return(
      <a href={link} key={title} rel="noopener noreferrer" target="_blank" className="flex flex-col items-center justify-center my-2 lg:my-0 mx-auto md:mx-6 rounded-full h-24 w-24 md:h-48 md:w-48 border-[1px] border-pa-pink-light transition-transform transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_8px_10px_-5px_#E5007A]">
        <img src={image} className="rounded-full h-auto w-8 md:w-16 mx-auto" />
        <h3 className='mt-1 md:mt-5 text-xs md:text-lg font-semibold text-gray-600 capitalize tracking-normal lg:tracking-widest'>{title}</h3>
      </a>
    )
  }

  const chainPage = (parachainList: {title:string, image:string}[]) => {
    return (
      <>
        <div className="hidden lg:flex lg:flex-row items-center justify-center">
          {parachainList.slice(0, parachainList.length > 3 ? 4 : parachainList.length).map(parachainObj =>
            chainCircle(parachainObj.image, parachainObj.title)
          )}
        </div>

        {parachainList.length > 4 &&
          <div className="hidden lg:flex lg:flex-row items-center justify-center mt-0 lg:mt-12">
            {parachainList.slice(4, parachainList.length).map(parachainObj =>
              chainCircle(parachainObj.image, parachainObj.title)
            )}
          </div>
        }

        <div id='mobileLiveChains' className="grid grid-cols-3 gap-1 lg:hidden">
          {parachainList.map(parachainObj =>
            chainCircle(parachainObj.image, parachainObj.title)
          )}
        </div>
      </>
    );
  }

  const paginationCircle = (index:number) => <span 
    key={index}
    onClick={() => setCurrPage(index)}
    className={`mx-1 cursor-pointer inline-block ${currPage == index ? 'bg-pa-pink' : 'bg-gray-500'} rounded-full h-[14px] w-[14px]`}
    ></span>;
  
  const totalPages:number = Math.ceil(parachains.length/7);

  const pagination = () => {
    const divItems=[];

    for (let i = 1; i <= totalPages; i++) {
      divItems.push(
        paginationCircle(i)
      );
    }

    return (
      <div> {divItems} </div>
    )
  }
        

	return (
		<section className="my-28 mx-auto">
      <SectionHeading title='Live Chains' />

      <div className="mt-20">
        { chainPage(parachains.slice((currPage - 1) * 7, parachains.length > currPage * 7 ? currPage * 7 : parachains.length)) }
      </div>

      <div className="w-full flex justify-center items-center mt-20">
        { pagination() }
      </div>
      
    </section>
	)
}
