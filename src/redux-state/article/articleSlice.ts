import { createSlice } from "@reduxjs/toolkit"
import type { ArticleShort, ArticleType } from "../../types"

const initialState: { count: number, results: ArticleType[], currentArticle: ArticleShort} = { 
  count: 0, 
  results: [], 
  currentArticle: { id: 0, image_url: "", summary: "", title: "" }
}

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.results = action.payload
    },
    setArticleCount: (state, action) => {
      state.count = action.payload
    },
    setCurrentArticle: (state, action) => {
      state.currentArticle = action.payload
    }
  }
})

export const { setArticles, setArticleCount, setCurrentArticle } = articlesSlice.actions

export default articlesSlice.reducer