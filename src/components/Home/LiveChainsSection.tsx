import React, { useState } from 'react'
import SectionHeading from './SectionHeading'

import kusamaLogo from '../../assets/parachain-logos/kusama-logo.gif'
import polkadotLogo from '../../assets/parachain-logos/polkadot-logo.jpg'


export default function LiveChainsSection() {
  const [currPage, setCurrPage] = useState<number>(1);

  const parachains: {title:string, image:string}[] = [
    {
      image: kusamaLogo,
      title: 'Kusama'
    },
    {
      image: polkadotLogo,
      title: 'Polkadot'
    },
    {
      image: kusamaLogo,
      title: '3'
    },
    {
      image: polkadotLogo,
      title: '4'
    },
    {
      image: kusamaLogo,
      title: '5'
    },
    {
      image: polkadotLogo,
      title: '6'
    },
    {
      image: kusamaLogo,
      title: '7'
    },
    {
      image: polkadotLogo,
      title: '8'
    },
    {
      image: kusamaLogo,
      title: '9'
    },
    {
      image: polkadotLogo,
      title: '10'
    },
    {
      image: kusamaLogo,
      title: '11'
    },
    {
      image: polkadotLogo,
      title: '12'
    },
    {
      image: polkadotLogo,
      title: '13'
    },
    {
      image: polkadotLogo,
      title: '14'
    }
  ];

  const chainCircle = (image:string, title:string) => {
    return(
      <div key={title} className="flex flex-col items-center justify-center my-2 lg:my-0 mx-auto md:mx-6 rounded-full h-24 w-24 md:h-48 md:w-48 border-[1px] border-pa-pink-light transition-transform transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_8px_10px_-5px_#E5007A]">
        <img src={image} className="rounded-full h-auto w-8 md:w-16 mx-auto" />
        <h3 className='mt-1 md:mt-5 text-sm md:text-lg font-bold text-gray-600 capitalize'>{title}</h3>
      </div>
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
		<section id="about-section" className="my-28 mx-auto">
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
