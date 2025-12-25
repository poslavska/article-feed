import { createSlice } from "@reduxjs/toolkit"
import type { ArticleType } from "../../types"

const initialState: { count: number, results: ArticleType[]} = { count: 0, results: []}

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.results = action.payload
    },
    setArticleCount: (state, action) => {
      state.count = action.payload
    }
  }
})

export const { setArticles, setArticleCount } = articlesSlice.actions

export default articlesSlice.reducer