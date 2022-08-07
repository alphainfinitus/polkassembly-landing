import React from 'react'
import polkassemblyLogo from '../../assets/images/pa-logo.svg'
import contactUsBg from '../../assets/images/contact-us-bg.svg'

export const socialLinksUL = (colorClass?: string, classes ?: string) => {
	return (
		<ul className={`ml-0 flex gap-6 mt-8 md:gap-8 ${classes}`}>
			<li>
				<a
					href="https://twitter.com/polk_gov"
					rel="noopener noreferrer"
					target="_blank"
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}
				>
					<span className="sr-only">Twitter</span>
					<svg
						className="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
						/>
					</svg>
				</a>
			</li>

			<li>
				<a
					href="https://discord.com/invite/CYmYWHgPha"
					rel="noopener noreferrer"
					target="_blank"
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}
				>
					<span className="sr-only">Discord</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/> </svg>
				</a>
			</li>

			<li>
				<a
					href="https://t.me/+6WQDzi6RuIw3YzY1"
					rel="noopener noreferrer"
					target="_blank"
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}
				>
					<span className="sr-only">Telegram</span>
					<svg fill="currentColor" className="w-6 h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.41421'><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>
				</a>
			</li>

			<li>
				<a
					href="https://polkassembly.medium.com/"
					rel="noopener noreferrer"
					target="_blank"
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}
				>
					<span className="sr-only">Medium</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16"> <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/> </svg>
				</a>
			</li>
		</ul>
	);
}

export default function Footer() {
	return (
		<>
			<div className='w-full -z-0 flex items-center flex-col'>
				<img src={contactUsBg} className='h-auto w-[45rem] -mb-32 md:-mb-72' />

				<h4 className='text-white text-center w-52 md:w-80 mb-6 md:mb-10 text-sm md:text-lg'>Want to know more about popular governance proposals and community updates?</h4>

				<a href="mailto:hello@polkassembly.io" rel="noopener noreferrer" target="_blank" className='mb-2 md:mb-10 rounded-full bg-white px-2 py-1 md:px-4 md:py-2 text-sm text-pa-pink font-bold'>
					Contact Us
				</a>
			</div>

			<footer className="bg-slate-900 relative z-10">
				<div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						{/* Logo and Socials */}
						<div className='md:-mt-5'>
							<div className="flex justify-center text-teal-300 sm:justify-start">
								<img src={polkassemblyLogo} className="h-auto w-52" />
							</div>

							{socialLinksUL('', 'md:ml-3 justify-center md:justify-start')}
						</div>

						{/* Links */}
						<div
							className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3"
						>
							<div className="text-center sm:text-left">
								<p className="text-lg font-medium text-white">Help Center</p>

								<nav className="mt-8">
									<ul className="space-y-4 text-sm">
										<li>
											<a className="text-white transition hover:text-purple-400/60" rel="noopener noreferrer" target='_blank' href="https://polkadot.polkassembly.io/terms-and-conditions">
												Terms and Condition
											</a>
										</li>

										<li>
											<a className="text-white transition hover:text-purple-400/60" rel="noopener noreferrer" target='_blank' href="https://github.com/polkassembly/polkassembly.github.io/issues">
												Report an Issue
											</a>
										</li>
									</ul>
								</nav>
							</div>

							<div className="text-center sm:text-left">
								<p className="text-lg font-medium text-white">Polkassembly</p>

								<nav className="mt-8">
									<ul className="space-y-4 text-sm">
										<li>
											<a className="text-white transition hover:text-purple-400/60" rel="noopener noreferrer" target='_blank' href="https://polkadot.polkassembly.io/terms-of-website">
												Terms of Website
											</a>
										</li>

										<li>
											<a className="text-white transition hover:text-purple-400/60" rel="noopener noreferrer" target='_blank' href="https://polkadot.polkassembly.io/privacy">
												Privacy Policy
											</a>
										</li>
									</ul>
								</nav>
							</div>

							<div className="text-center sm:text-left">
								<p className="text-lg font-medium text-white">Contact Us</p>

								<ul className="mt-8 space-y-4 text-sm">
									<li>
										<a
											className="flex items-center justify-center sm:justify-start gap-1.5 group"
											href="mailto:hello@polkassembly.io"
											rel="noopener noreferrer"
											target="_blank"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-5 h-5 text-white shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>

											<span className="text-white transition group-hover:text-purple-400/60">
												hello@polkassembly.io
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Bottom Line Content */}
					<div className="pt-6 mt-12 border-t border-gray-800">
						<div className="text-center sm:flex sm:justify-between sm:text-left">
							<p className="text-sm text-gray-400">
								<span className="block sm:inline">All rights reserved. </span>
							</p>

							<p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
								&copy; Premiurly {new Date().getFullYear()}
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
