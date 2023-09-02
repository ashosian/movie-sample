import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { useGetMovieBySearchQuery } from '../features/MovieApi';

const Search = () => {
  const { search } = useParams();
  console.log(search)

  const nav = useNavigate();
  const { isLoading, isError, data, error } = useGetMovieBySearchQuery(search);


  if (isLoading) {
    return <div className="lottie h-[400px] w-[400px] mx-auto mt-7">
      <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_vut4pyyx.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  } else if (data.results.length < 1) {
    return <div>
      <h1>No results Found</h1>
    </div>
  }


  return (
    <div className="searching grid grid-cols-4 gap-5 p-7  ">
      {data?.results?.map((movie) => {
        return <div onClick={() => nav(`/movie/detail/${movie.id}`)} className="box1 cursor-pointer hover:scale-105 transition-all delay-75 shadow-lg " key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="" />

          <div className="item1">
            <div className='p-3 space-y-2'>
              <h1 className='text-xl font-bold'>{movie.title}</h1>
              <p>{movie.overview.substring(0, 150) + '...'}</p>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default Search
