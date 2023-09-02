import React from 'react'
import { useParams } from 'react-router';
import { useGetMovieByIdQuery, useVideoByCategoryQuery } from '../features/MovieApi';

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading: dataLoad, data: moviedata, } = useGetMovieByIdQuery(id);

  const { isLoading: videoLoad, data: videodata } = useVideoByCategoryQuery(id);

  console.log(moviedata)

  if (dataLoad) {
    return <div className="lottie h-[400px] w-[400px] mx-auto mt-7">
      <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_vut4pyyx.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }
  if (videoLoad) {
    return <div className="lottie h-[400px] w-[400px] mx-auto mt-7">
      <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_vut4pyyx.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }
  console.log(videodata)

  return (
    <div className="container grid grid-cols-4 max-w-full h-[95vh] bg-blue-gray-200 p-5">

      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${moviedata.poster_path}`} alt="" />
      <div className="box1 col-span-3 space-y-4 p-5">
        <p className=' flex justify-center text-lg font-bold'>{`Movie Title: ${moviedata.original_title}`
        }</p>
        <p>{`${moviedata.overview}`}</p>
        <div className="subBox grid grid-cols-3 font-bold">
          <p>{`language: ${moviedata.original_language}`}</p>
          <p>{`Popularity: ${moviedata.popularity}`}</p>
          <p>{`Release date: ${moviedata.release_date}`}</p>

          <div className='py-5 px-5'>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videodata.results[0]?.key}`} allowFullScreen></iframe>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Detail

