import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { useMovieByPageQuery } from '../features/MovieApi';


const PageMovie = () => {
  const { page, category } = useParams();
  const { data, isLoading, isError, error } = useMovieByPageQuery({
    page,
    category
  });

  const nav = useNavigate();

  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }



  return (
    <>
      <div className='grid grid-cols-4 gap-5 p-6'>
        {data.results.map((movie) => {
          return <div onClick={() => nav(`/movie/detail/${movie.id}`)} key={movie.id} className='cursor-pointer hover:scale-105 transition-all delay-75 shadow-lg'>
            <img className='h-[400px] w-full' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="" />

            <div className='p-3 space-y-2'>
              <h1 className='text-xl font-bold'>{movie.title}</h1>
              <p>{movie.overview.substring(0, 150) + '...'}</p>
            </div>



          </div>
        })}
      </div>


      <div className='flex justify-center pb-5 shadow-2xl'>
        <div className='flex space-x-5'>

          <div className='flex space-x-5'>
            <button onClick={() => nav(-1)} >PREV</button>
            <h1>{data.page}</h1>
            <button onClick={() => nav(`/searchpage/${category}/${data.page + 1}`)} >Next</button>
          </div>


        </div>

      </div>

    </>
  )
}

export default PageMovie
