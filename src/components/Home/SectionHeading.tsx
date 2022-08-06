import React from 'react'
import headerImg from '../../assets/images/header-img.svg'

export default function SectionHeading({title}: {title: string}) {
	const pinkCircle = <span className="hidden md:inline-block bg-pa-pink rounded-full h-[18px] w-[18px]"></span>;

	return (
		<div className="container">
			<div className="grid grid-cols-3">
				<img src={headerImg} className="h-auto rotate-180" />

				<div className="flex items-center justify-center">
					{pinkCircle}
					<h1 className="text-3xl mx-6 capitalize text-center">{title}</h1>
					{pinkCircle}
				</div>
				
				<img src={headerImg} className="h-auto" />
			</div>
		</div>
	)
}
