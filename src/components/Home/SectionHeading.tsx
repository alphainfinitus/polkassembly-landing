import React from 'react'
import headerImg from '../../assets/images/header-img.svg'

export default function SectionHeading({title}: {title: string}) {
	return (
		<div className="container">
			<div className="grid grid-cols-3">
				<img src={headerImg} className="h-auto rotate-180" />

				<div className="flex items-center justify-center">
					<span className="pink-circle"></span>
					<h1 className="text-3xl mx-6 capitalize">{title}</h1>
					<span className="pink-circle"></span>
				</div>
				
				<img src={headerImg} className="h-auto" />
			</div>
		</div>
	)
}
