import React, { useState } from 'react'
import parachainsArr from '../parachainsArr';

export default function ChainsSection() {
	const [loadMore, setLoadMore] = useState<boolean>(false);

  const parachains = loadMore ? parachainsArr : parachainsArr.slice(0,12);

	const chainCircle = (image:string, title:string) => {
    const link = ["moonbase", "moonriver", "moonbeam", "kilt", "automata"].includes(title) ? `https://${title}.polkassembly.network` : `https://${title}.polkassembly.io`;
    
    return(
      <a href={link} key={title} rel="noopener noreferrer" target="_blank" className="flex flex-col justify-self-center self-center items-center justify-center my-2 lg:my-0 mx-auto md:mx-6 rounded-full h-24 w-24 md:h-48 md:w-48 border-[1px] border-pa-pink-light transition-transform transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_8px_10px_-5px_#E5007A]">
        <img src={image} className="rounded-full h-auto w-8 md:w-16 mx-auto" />
        <h3 className='mt-1 md:mt-5 text-xs md:text-lg font-semibold text-gray-600 capitalize tracking-normal lg:tracking-widest'>{title}</h3>
      </a>
    )
  }
	
	return (
		<div className='container'>
			<div className="grid grid-cols-2 lg:grid-cols-4 mx-6 xl:mx-48 gap-y-4 lg:gap-y-14 mt-20 lg:mt-32">
				{parachains.map(parachainObj =>
					chainCircle(parachainObj.image, parachainObj.title)
				)}
			</div>

			<div className='flex items-center justify-center my-16'>
				<button onClick={() => setLoadMore(!loadMore)} className="rounded-full bg-pa-pink text-white hover:bg-pa-purple hover:text-pa-pink px-5 py-2">{loadMore ? 'Show Less' : 'Load More'}</button>
			</div>
		</div>
	)
}
