import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const{id} = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

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

  if(loading) return <p>Loading movie...</p>
  if(error) return <p>{error}</p>
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
    <section className='relative isolate overflow-hidden'>
      {movie?.backdrop_path && (
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className='absolute inset-0 -z-20 h-full w-full object-cover'/>
      )}
      <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie.title} />
      <div>
        <h1>{movie?.title}</h1>
        {movie?.original_title !== movie?.title && (
          <p>Original Title: {movie?.original_title}</p>
        )}
        {movie?.tagline && <p>{movie.tagline}</p> }
        <p>{movie?.overview}</p>
        <p>⭐ Rating: {movie?.vote_average?.toFixed(1)}/10</p>
        <p>Votes: {movie?.vote_count}</p>
        <p>Release Date: {movie?.release_date}</p>
        <p>Runtime: {movie?.runtime} minutes</p>
        <p>
          Genres:{""}
          {movie?.genres?.map((genre) => genre.name).join(", ")}
        </p>
        <p>Language: {movie?.original_language?.toUpperCase()}</p>
        <p>Status: {movie?.status}</p>
        {movie?.budget > 0 && (
          <p>Budget: ${movie.budget.toLocaleString()}</p>
        )}
        {movie?.revenue > 0 && (
          <p>Revenue: ${movie.revenue.toLocaleString()}</p>
        )}
        {movie?.homepage && (
          <a href={movie.homepage} target='_blank' rel='noreferrer'>Official Website</a>
        )}
      </div>
    </section>
    </main>
  )
}

export default MovieDetails