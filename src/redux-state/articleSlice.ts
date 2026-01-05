import { createSlice } from "@reduxjs/toolkit"
import type { ArticleShort, ArticleType } from "../types"

const initialArticlesState: { count: number, results: ArticleType[], currentArticle: ArticleShort, 
  filteredResults: ArticleType[], filteredCount: number} = { 
  count: 0, 
  results: [], 
  currentArticle: { id: 0, image_url: "", summary: "", title: "" },
  filteredResults: [],
  filteredCount: 0
}

const initialSearchState: { searchBtnPressed: boolean, 
  keywords: string[], searchTerm: string } = {
  searchBtnPressed: false,
  keywords: [],
  searchTerm: ""
}

export const articlesSlice = createSlice({
  name: "articles",
  initialState: initialArticlesState,
  reducers: {
    setArticles: (state, action) => {
      state.results = action.payload
    },
    setArticleCount: (state, action) => {
      state.count = action.payload
    },
    setCurrentArticle: (state, action) => {
      state.currentArticle = action.payload
    },
    setFilterResults: (state, action) => {
      state.filteredResults = action.payload
    },
    clearFilteredArr: (state) => {
      state.filteredResults = []
      state.filteredCount = 0
    },
    setFilteredCount: (state, action) => {
      state.filteredCount = action.payload
    }
  }
})

export const searchInputSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setSearchBtnPressed: (state, action) => {
      state.searchBtnPressed = action.payload
    },
    setKeywords: (state, action) => {
      state.keywords = action.payload
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  }
})

export const { setArticles, setArticleCount, setCurrentArticle, setFilterResults, 
  clearFilteredArr, setFilteredCount
 } = articlesSlice.actions

export const { setSearchBtnPressed, setKeywords, setSearchTerm } = searchInputSlice.actions

export const articlesReducer = articlesSlice.reducer
export const searchReducer = searchInputSlice.reducer