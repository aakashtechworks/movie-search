import React from 'react'
import SearchBar from '../components/SearchBar'
import Moviecard from '../components/Moviecard'




const Home = () => {
  // const movies = [
  //   {
  //     id: 1,
  //     title: "Intersteller",
  //     poster: "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     ratiing: 8.7,
  //     year: 2014,
  //   },
  //   {
  //     id: 2,
  //     title: "Intersteller",
  //     poster: "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     ratiing: 9.7,
  //     year: 2017,
  //   },
  //   {
  //     id: 3,
  //     title: "Intersteller",
  //     poster: "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     ratiing: 8.9,
  //     year: 2010,
  //   },
  // ]
  return (
    <main>
      <section className='relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl'></div>
         <div className='relative z-10 mx-auto max-w-4xl text-center'>
           <span className='inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-purple-300 backdrop-blur-md'>🎬Movie Search App</span>
           <h1 className='mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>Discover Your{" "} <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Next Movie</span></h1>

           <p className='mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg'>Search thousands of movies and find something you'll love. Discover popular films, hidden gems and your next favourite movie.</p>

           <SearchBar />
         </div>
        {/* search bar */}
      </section>

      <section className='bg-slate-950 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='text-2xl sm:text-3xl font-bold text-white text-center'>Popular Movies</h2>

          <p className='text-slate-400 text-center my-4'>Explore popular movies and discover something new.</p>

          <div className='mt-8 grid  grid-cols-1 gap-6 lg:grid-cols-3'>
            <Moviecard />
            <Moviecard />
            <Moviecard />

            {/* {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))} */}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home