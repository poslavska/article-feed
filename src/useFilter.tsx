import { useState, type JSX } from 'react'
import { clearFilteredArr, setKeywords, setSearchBtnPressed, setSearchTerm } from './redux-state/articleSlice'
import type { AppDispatch, RootState } from './redux-state/store'
import { useDispatch, useSelector } from 'react-redux'
import { filterSearchResults } from './helpers'

export default function useArticles() {
  const filtered = useSelector((state: RootState) => state.articles.filteredResults)
  const dispatch = useDispatch<AppDispatch>()

  const searchTerm = useSelector((state: RootState) => state.search.searchTerm)
  const searchBtnPressed = useSelector((state: RootState) => state.search.searchBtnPressed)
  const keywords = useSelector((state: RootState) => state.search.keywords)
  const [isFilterLoading, setIsFilterLoading] = useState(false)
  
  function handleFilter(page = 1) {
    const words = searchTerm.split(' ').filter(k => k) //(k => k) removes spaces
    dispatch(setSearchBtnPressed(true))
    dispatch(setKeywords(words))
    setIsFilterLoading(true)
    filterSearchResults(page, searchTerm, dispatch).finally(() => setIsFilterLoading(false))
  }

  function clearFilter() {
    dispatch(setSearchTerm(""))
    dispatch(setKeywords([]))
    dispatch(setSearchBtnPressed(false))
    dispatch(clearFilteredArr())
  }

  const highlightText = (text: string) => {
    const result: (string | JSX.Element)[] = []
    let buffer = ''

    for (let i = 0; i < text.length; i++) {
      buffer += text[i]

      if (
        text[i] === ' ' ||
        ['.', ',', '!', '?', ';', ':'].includes(text[i]) ||
        i === text.length - 1
      ) {
        const cleanBuffer = buffer.trim().toLowerCase()
        const match = keywords.some(k => cleanBuffer.includes(k.toLowerCase()))

        if (match) {
          result.push(<span key={i} style={{ backgroundColor: 'yellow' }}>{buffer}</span>)
        } else {
          result.push(buffer)
        }
        buffer = ''
      }
    }

    return result
  }
  
  return (
    {
      searchTerm, searchBtnPressed, 
      clearFilter, filtered, handleFilter, highlightText, 
      keywords, isFilterLoading
    }
  )
}