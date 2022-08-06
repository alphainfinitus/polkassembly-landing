import React from 'react'
import { Link } from 'react-router-dom'
import polkassemblyLogo from '../assets/images/pa-logo.svg'

export default function Navbar() {
	return (
		<nav className="flex justify-space-between bg-slate-900 text-white text-center py-3">
      <Link to='/' className="logo ml-6">
        <img src={polkassemblyLogo} className="h-auto w-32" />
      </Link>
      <div className="ml-auto mr-6 flex items-center">
        <Link to='/about' className="mx-2">About</Link>
        <Link to='/sign-in' className="mx-2">Sign In</Link>
      </div>
    </nav>
	)
}
