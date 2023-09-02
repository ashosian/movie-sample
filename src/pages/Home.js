import React from 'react'
import { useMovieByCategoryQuery, useNowPlayingQuery } from '../features/MovieApi'
import { useNavigate } from 'react-router';

const Home = () => {
  // const data = useMovieByCategoryQuery();
  // console.log(data) 
  // (shows properties like isloading, staus, iserror etc)

  const { isLoading, isError, data, error } = useNowPlayingQuery();
  const nav = useNavigate();
  console.log(data);
  if (isLoading) {
    return <div className="lottie h-[400px] w-[400px] mx-auto mt-7">
      <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_vut4pyyx.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  if (isError) {
    return <div>
      <h1>{error.toString('no internet')}</h1>
    </div>
  }
  console.log(data);

  return (
    <div>

      <div className="nowPlaying grid grid-cols-4 gap-5 p-3 bg-blue-gray-300  ">
        {data.results.map((movie) => {
          return <div onClick={() => nav(`/movie/detail/${movie.id}`)} className="box1 cursor-pointer hover:scale-95 transition-all delay-75 shadow-lg " key={movie.id}>
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

      <div className='flex space-x-5'>
        <button onClick={() => nav(-1)} >PREV</button>
        <h1>{data.page}</h1>
        <button onClick={() => nav(`/searchpage/${data.page + 1}`)} >Next</button>
      </div>


    </div>
  )
}

export default Home

