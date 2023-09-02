import { configureStore } from '@reduxjs/toolkit'
import { MovieApi } from './MovieApi'




export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [MovieApi.reducerPath]: MovieApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([MovieApi.middleware]),
})