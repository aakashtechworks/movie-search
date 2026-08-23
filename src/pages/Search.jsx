import React, { useEffect, useState } from 'react'

const Search = () => {
  const [searchHistory, setSearchHistory] = useState(()=> {
    const savedHistory = localStorage.getItem("searchHistory")
    return savedHistory ? JSON.parse(savedHistory) : []
  })

  const [selectedMovie, setSelectedMovie] = useState(null)

  
  return (
    <main className='min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold sm:text-4xl'>Search History</h1>
        <p className='mt-2 text-white/50'>Your recent movie searches</p>
        
          {searchHistory.length > 0 ? (
            <div className='mt-8 grid gap-5 sm:grid-cols-1 lg:grid-cols-3'>
          {(selectedMovie ? [selectedMovie] : searchHistory).map((movie) => (
            <div key={movie.id} onClick={() => setSelectedMovie(movie)} className='cursor-pointer overflow-hidden rounded-xl border text-white border-white/10 bg-white/5 transition hover:scale-105 hover:bg-white/10'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='aspect-[2/3] w-full object-cover'/>
              <div className='p-3'>
                <h2 className='truncate font-semibold '>{movie.title}</h2>
                <p className='mt-1 text-sm text-white/50'>{movie.vote_average?.toFixed(1)}</p>
              </div>
            </div>
          ))}
        </div>
        ) : ( <p className='mt-8 text-white/50'>No recent searches yet.</p>
        )}

        {selectedMovie && (
          <button onClick={() => setSelectedMovie(null)}
          className='mt-6 rounded-lg bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-700'>
            Show All Searches
          </button>
        )}
      </div>
      
    </main>
  )
}

export default Search