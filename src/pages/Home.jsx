import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Moviecard from '../components/Moviecard'




const Home = () => {

  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, seteError] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [searchLoading, setSearchLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [searchPage, setSearchPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [paginationLoading, setPaginationLoading] = useState(false)
  const [debouncedSearch, setDebouncedSearch] = useState("")
  

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`

  useEffect(()=>{
     setPaginationLoading(true);
     fetch(apiUrl).then((Response) => Response.json()).then((data) => {setMovies(data.results); setTotalPages(data.total_pages); setLoading(false)})
     .catch((err)=> {console.log(err); seteError("Failed to load Movies"); setLoading(false);})
     setPaginationLoading(false);
  }, [page])

  useEffect(()=>{
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    ).then((Response)=> Response.json()).then((data)=>{setGenres(data.genres)})

  }, [])

  useEffect(()=> {
    if(!debouncedSearch.trim()) {
      setMovies([]);
      return;
    }
      
    

    const searchMovies = async () => {
      try{
        setSearchLoading(true)
        setMovies([]);
        // setError("")

      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(debouncedSearch)}&page=${searchTerm ? searchPage : page}`
      
      const response = await fetch(searchUrl)

      if(!response.ok){
        throw new Error("Failed to search movies");
      }

      const data = await response.json();
      
      setMovies(data.results);

      } catch(err){
      seteError("Failed to search movies");
    } finally {
      setSearchLoading(false);
      
    }
    }
    searchMovies()
  }, [debouncedSearch])

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebouncedSearch(searchQuery)
    }, 500);
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])


  return (
    <main>
      <section className='relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl'></div>
         <div className='relative z-10 mx-auto max-w-4xl text-center'>
           <span className='inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-purple-300 backdrop-blur-md'>🎬Movie Search App</span>
           <h1 className='mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>Discover Your{" "} <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Next Movie</span></h1>

           <p className='mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg'>Search thousands of movies and find something you'll love. Discover popular films, hidden gems and your next favourite movie.</p>

           <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchTerm={setSearchTerm} setPage={setPage} setSearchPage={setSearchPage}/>
           
         </div>
        {/* search bar */}
      </section>

      <section className='bg-slate-950 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='text-2xl sm:text-3xl font-bold text-white text-center'>{searchTerm ? `Search Results for "${searchTerm}"` : "Popular Movies"}</h2>

          <p className='text-slate-400 text-center my-4'>Explore popular movies and discover something new.</p>

          

          <div className='mt-8 grid  grid-cols-1 gap-6 lg:grid-cols-3'>
            {searchLoading ? (
              <div className='col-span-full flex items-center justify-center mt-12 mb-48 lg:mb-0'>
                 <p className='text-3xl lg:text-7xl font-bold text-white'>Searching Movies...</p>
              </div>
            ) : loading ? (
              <div className='col-span-full flex items-center justify-center mt-12 mb-48 lg:mb-0'>
                 <p className='text-3xl lg:text-7xl font-bold text-white'>Loading Movies...</p>
              </div>
            ) : error ? (
              <div className='col-span-full flex items-center justify-center mt-12 mb-48 lg:mb-0'>
                <p className='text-3xl lg:text-7xl font-bold text-white'>{error}</p>
              </div>
            ) : paginationLoading ? (
              <div className='col-span-full flex items-center justify-center mt-12 mb-48 lg:mb-0'>
                <p className='text-3xl lg:text-7xl font-bold text-white'>Loading Movies...</p>
              </div>
            ) : (
              movies.map((movie)=>(
                <Moviecard key={movie.id} movie={movie} genres={genres}/>
              ))
              )
            }
          </div>
          <div className='flex justify-center items-center gap-4 mt-8'>
            <button onClick={()=> searchTerm ? setSearchPage(searchPage - 1) : setPage(page - 1)} disabled={searchTerm ? searchPage === 1 : page === 1} className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'>
              Previous
            </button>
            <span className='text-white'>Page {searchTerm ? searchPage : page}</span>
            <button onClick={()=> setPage(page + 1) } disabled={page === totalPages} className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'>
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home