import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-white/10 bg-slate-950 text-slate-300'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-1 sm:px-6 lg:grid-cols-3 lg:px-8'>
            <div className=''>
                <h2 className='text-2xl font-bold text-white'>MovieHub</h2>
                <p className='mt-3 max-w-sm text-sm leading-6'>Discover amazing movies and find your next favorite film.</p>
            </div>

            <div>
                <h3 className='mb-4 font-semibold text-white'>Quick Links</h3>
                <div className='flex flex-col gap-3 text-sm'>
                    <NavLink to="/" className='text-slate-400'>
                        Home
                    </NavLink>
                    <NavLink to="/search" className='text-slate-400'>
                        Search
                    </NavLink>
                    <NavLink to="/movie/:id" className='text-slate-400'>
                        Moviedetails
                    </NavLink>
                </div>
                
            </div>

            <div >
                <h3 className='mb-4 font-semibold text-white'>Explore</h3>
                <div className='flex flex-col gap-3 text-sm'>
                    <span className='text-slate-400'>Popular Movies</span>
                    <span className='text-slate-400'>Top Rated</span>
                </div>
            </div>
        </div>
        <div className='border-t border-white/10'>
            <div className='mx-auto max-w-7xl flex flex-col gap-2 px-4 py-5 text-center text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg: justify-between lg:px-8 lg:text-left'>
                <p>&copy; 2026 MovieHub. All Rights Reserved</p>
                <p>Made with 💓 using react</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer