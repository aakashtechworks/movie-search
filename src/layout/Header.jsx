import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8'>
            <h1 className='text-2xl font-bold text-white'>movieHub</h1>

            <div className='hidden items-center gap-8 md:flex'>
                <NavLink to="/" className="text-sm font-medium text-slate-300 transition hover:text-white">Home</NavLink>
                <NavLink to="/search" className="text-sm font-medium text-slate-300 transition hover:text-white">Search</NavLink>
                <NavLink to="/movie/:id" className="text-sm font-medium text-slate-300 transition hover:text-white">Moviedetails</NavLink>
            </div>

            <button type='button' onClick={()=> setIsMenuOpen(!isMenuOpen)} className='rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden'>=</button>
        </nav>
        {isMenuOpen && (
            <div className='border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden'>
                <div className='flex flex-col gap-3'>
                    <NavLink to="/" onClick={()=> setIsMenuOpen(false)} className="rounded-lg px-3 py-2 text-slate-300">Home</NavLink>
                    <NavLink to="/search" onClick={()=> setIsMenuOpen(false)} className="rounded-lg px-3 py-2 text-slate-300">Search</NavLink>
                    <NavLink to="/movie/:id" onClick={()=> setIsMenuOpen(false)} className="rounded-lg px-3 py-2 text-slate-300">Moviedetails</NavLink>
                </div>
            </div>
        )}
    </header>
  )
}

export default Header