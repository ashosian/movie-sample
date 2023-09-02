import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTI5NzkzNmZhZDhjY2IzNWVmZTc3NDgwZGIyNTgxMCIsInN1YiI6IjY0OWFkMDRjMjk3NWNhMDBjODgyZTcwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuvjmmQtmPre8rZsIG2wgmZLxHs2TpE7eoYr0eoeLt4';

export const MovieApi = createApi({
  reducerPath: 'MovieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3'
  }),

  endpoints: (builder) => ({


    nowPlaying: builder.query({
      query: () => ({
        url: '/movie/now_playing',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }

      })
    }),






    movieByCategory: builder.query({
      query: (category) => ({
        url: `/movie/${category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }

      })

    }),


    videoByCategory: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }

      })

    }),


    getMovieById: builder.query({
      query: (id) => ({
        url: `/movie/${id}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }

      })

    }),


    getMovieBySearch: builder.query({
      query: (search) => ({
        url: `/search/movie`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },

        params: {
          query: search,

        }

      })

    }),


    movieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {
          page: query.page
        }
      })

    }),





  })
})

export const { useMovieByCategoryQuery, useNowPlayingQuery, useVideoByCategoryQuery, useGetMovieByIdQuery, useGetMovieBySearchQuery, useMovieByPageQuery } = MovieApi