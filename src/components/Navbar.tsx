import React from 'react'
import { Link } from 'react-router-dom'
import polkassemblyLogo from '../assets/images/pa-logo.svg'

export default function Navbar() {
	return (
		<nav className="bg-slate-900">
      <div className="container flex justify-space-between text-white text-center py-3">
        <Link to='/' className="logo ml-6">
          <img src={polkassemblyLogo} className="h-auto w-32" />
        </Link>
        <div className="ml-auto mr-6 flex items-center">
          <Link to='/launch-app' className="mx-2">Launch App</Link>
        </div>
      </div>
    </nav>
	)
}
