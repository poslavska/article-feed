import { configureStore } from "@reduxjs/toolkit";
import { articlesReducer, searchReducer } from './articleSlice'

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    search: searchReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch