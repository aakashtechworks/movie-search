import React from 'react'

const Moviecard = () => {
  return (
    <article className='group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl'>
       <div className='relative overflow-hidden'>
        <img src="https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-72 w-full object-cover transition duration-500 group-hover:scale-105'/>

        <span className='absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md'>8.5</span>
       </div>
       <div className='p-4'>
        <div className='flex items-center justify-between gap-3'>
            <h2 className='truncate text-lg font-bold text-slate-400'>Interseller</h2>
            <span className='shrink-0 text-sm text-slate-400'>2014</span>
        </div>
        <p className='mt-2 text-sm text-slate-400'>Sci-Fi . Adventure . Drama</p>
        <button type='button' className='mt-4 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg'>View Details</button>
       </div>
    </article>
  )
}

export default Moviecard