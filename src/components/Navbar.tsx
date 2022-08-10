import React from 'react'
import { Link } from 'react-router-dom'
import polkassemblyLogo from '../assets/images/pa-logo.svg'

export default function Navbar() {
	return (
		<nav className="bg-transparent">
      <div className="container flex justify-space-between text-black text-center py-3">
        <Link to='/' className="logo ml-6">
          <img src={polkassemblyLogo} className="h-auto w-32" />
        </Link>
        <div className="ml-auto mr-6 flex items-center">
          <Link to='/docs' className='mx-6 font-semibold hover:text-pa-pink'>About</Link>
          <Link to='/docs' className='mx-6 font-semibold hover:text-pa-pink'>Top Features</Link>
          <Link to='/docs' className='mx-6 font-semibold hover:text-pa-pink'>Roadmap</Link>
          <Link to='/docs' className='mx-6 font-semibold hover:text-pa-pink'>Docs</Link>
          <Link to='/launch-app' className="relative inline-flex items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-pa-pink transition duration-300 ease-out border-2 border-pa-pink rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pa-pink group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-pa-pink transition-all duration-300 transform group-hover:translate-x-full ease">Launch App</span>
            <span className="relative invisible">Launch App</span>
          </Link>
        </div>
      </div>
    </nav>
	)
}
