import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

  useEffect (() =>{
    window.scrollTo({
      top: 0,
      behavior: "instant"
    })
  }, [])
  
  const{id} = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [cast, setCast] = useState([])
  const [videos, setVideos] = useState([])



  useEffect(()=>{
    const fetchMovieDetails = async () => {
      try {
        setLoading(true)
        setError("")
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        if(!response.ok){
          throw new Error("failed to fetch movie details")
        }
        const data = await response.json()
        setMovie(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMovieDetails()
  }, [id])

  useEffect(()=>{
    const fetchCast = async() => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        )
        if(!response.ok) {
          throw new Error("Failed to fetch cast")
        }
        const data = await response.json()
        setCast(data.cast)
      } catch(error){
        console.log(error)
      }
    }
    fetchCast()
  }, [id])

  useEffect(()=>{
    const fetchVideos = async() => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        )
        if(!response.ok) {
          throw new Error("Failed to fetch videos")
        }
        const data = await response.json()
        setVideos(data.results)
      } catch(error){
        console.log(error)
      }
    }
    fetchVideos()
  }, [id])


  if(loading) return <p className='flex text-slate-950 items-center justify-center my-44 font-bold text-3xl lg:text-5xl'>Loading movie...</p>
  if(error) return <p className='flex text-slate-950 items-center justify-center my-44 font-bold text-3xl lg:text-5xl'>{error}</p>
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
    <section className='relative isolate overflow-hidden'>
      {movie?.backdrop_path && (
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className='absolute inset-0 -z-20 h-full w-full object-cover'/>
      )}
      <div className='absolute inset-0 -z-10 bg-slate-950/80'></div>
      <div className='absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40 '></div>
      <div className='absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-slate-950 to-transparent'></div>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20'>
        <div className='grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-14'>
          <div className='mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-[300px]'>
            <div className='overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur-sm'>
              <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie.title} 
              className='h-auto w-full object-cover'/>
            </div>
          </div>
          <div className='max-w-4xl '>
            <div className='mb-4 flex flex-wrap gap-2'>
              {movie?.genres?.map((genre) => (
                <span key={genre.id} className='rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md'>
                  {genre.name}
                </span>))}
            </div>
            <h1 className='text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl'>{movie?.title}</h1>
             {movie?.original_title !== movie?.title && (
             <p className='mt-2 text-sm text-white/50'>Original Title: {movie?.original_title}</p>
              )}
              {movie?.tagline && (<p className='mt-5 text-lg italic text-white/70 sm:text-4xl'>{movie.tagline}</p> )}
              <div className='mt-6 flex flex-wrap items-center gap-3 font-semibold text-sm text-white/70'>
                <span className='flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5'>⭐ {movie?.vote_average?.toFixed(1)}</span>
                <span>.</span>
                <span>{movie?.release_date}</span>
                <span>.</span>
                <span>{movie?.runtime} min</span>
                <span>.</span>
                <span>{movie?.original_language?.toUpperCase()}</span>
              </div>
              <div className='mt-8'>
                <h2 className='mb-3 text-xl font-bold'>Overview</h2>
                <p className='max-w-3xl text-sm leading-7 text-white/65 sm:text-base'>{movie?.overview || "No overview available."}</p>
              </div>

              <div className='mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4'>
                <div className='rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'>
                  <p className='text-xs text-white/40'>Status</p>
                  <p className='mt-1 font-semibold'>{movie?.status}</p>
                </div>

                <div className='rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'>
                  <p className='text-xs text-white/40'>Votes</p>
                  <p className='mt-1 font-semibold'>{movie?.vote_count?.toLocaleString()}</p>
                </div>

                <div className='rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'>
                  <p className='text-xs text-white/40'>Budget</p>
                  <p className='mt-1 font-semibold'>{movie?.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}</p>
                </div>

                <div className='rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'>
                  <p className='text-xs text-white/40'>Revenue</p>
                  <p className='mt-1 font-semibold'>{movie?.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}</p>
                </div>
              </div>
              {movie?.homepage && (
              <a href={movie.homepage} target='_blank' rel='noreferrer' className='mt-8 inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-white/90'>Official Website</a>
              )}
          </div>
        </div>
      </div>
    </section>
    <section className='mt-12'>
      <h2 className='mb-5 text-2xl font-bold text-center'>
        Top Cast
      </h2>
      <div className='flex items-center justify-center pb-4'>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center-center'>
          {cast.slice(0, 10).map((actor)=> (
          <div key={actor.id} className='min-w-[130px] overflow-hidden rounded-xl border border-white/10 bg-white/5'>
            {actor.profile_path ? (
              <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name} className='h-44 w-full object-cover'/>
            ) : (<div className='flex h-44 items-center justify-center bg-white/10 text-xs text-white/40'>No Image</div> )}
            <div className='p-3'>
              <p className='truncate text-sm font-semibold'>{actor.name}</p>
              <p className='mt-1 truncate text-xs text-white/50'>{actor.character}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
    <section className=' mt-12 pb-8'>
      <h2 className='mb-5 text-2xl font-bold text-center'>Trailer</h2>
      {videos.filter(
        (video) => video.site === "YouTube" && video.type === "Trailer"
      ).length > 0 ? (
        <div className='mx-auto w-[85%] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/40 '>
          <div className='aspect-video w-full'>
            <iframe className='block h-full w-full touch-auto' src={`https://www.youtube.com/embed/${
            videos.filter(
              (video)=> video.site === "YouTube" && video.type === "Trailer"
            )[0].key
            }?playsline=1&rel=0`} title='Movie Trailer' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen/>
          </div>
        </div>
      ) : ( <p className='text-white/50'>Trailer not available</p> )}
    </section>
    </main>
  )
}

export default MovieDetails