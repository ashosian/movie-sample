import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMovieByCategoryQuery } from '../features/MovieApi';

const Category = () => {
  const { category } = useParams();
  // console.log(category)
  const { isLoading, isError, data, error } = useMovieByCategoryQuery(category);

  const nav = useNavigate();

  if (isLoading) {
    return <div className="lottie h-[400px] w-[400px] mx-auto mt-7">
      <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_vut4pyyx.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }
  // console.log(data);



  return (
    <div>
      <div className="nowPlaying grid grid-cols-4 gap-5 p-7  ">
        {data.results.map((movie) => {
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


      <div className='flex justify-center pb-5 shadow-2xl'>
        <div className='flex space-x-5'>
          {data.page > 1 && <button>Prev</button>}
          <h1>1</h1>
          <button onClick={() => nav(`/searchpage/${category}/${data.page + 1}`)} >Next</button>
        </div>

      </div>


    </div>
  )
}

export default Category
