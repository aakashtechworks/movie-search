import React from 'react'
import { Link } from 'react-router-dom'

const Moviecard = ({movie, genres}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
    <article className='group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl'>
       <div className='relative overflow-hidden'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='h-72 w-full object-cover transition duration-500 group-hover:scale-105'/>

        <span className='absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md'>⭐{movie.vote_average?.toFixed(1)}</span>
       </div>
       <div className='p-4'>
        <div className='flex items-center justify-between gap-3'>
            <h2 className='truncate text-lg font-bold text-slate-400'>{movie.title}</h2>
            <span className='shrink-0 text-sm text-slate-400'>{movie.release_date?.slice(0,4)}</span>
        </div>
        <p className='mt-2 text-sm text-slate-400'>{movie.genre_ids?.map((id)=> genres.find((genre) => genre.id === id)?.name).filter(Boolean).join(", ")}</p>
        <button type='button' className='mt-4 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg'>View Details</button>
       </div>
    </article>
    </Link>
  )
}

export default Moviecard