import React from 'react'
import '../css/ArticleList.css'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../redux-state/store'
import ArticleCard from './ArticleCard'
import PaginationPanel from './PaginationPanel'
import vector from '../assets/vector.svg'
import clear from '../assets/clear-img.png'
import useFilter from '../useFilter'
import SkeletonArticles from './SkeletonArticles'
import { setSearchTerm } from '../redux-state/article/articleSlice'

export type ArticleListProps = {
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  handleArticleClick: (id: number) => void
}

export default function ArticlesList({currentPage, setCurrentPage, handleArticleClick}: ArticleListProps) {
  const dispatch = useDispatch<AppDispatch>()
  const articles = useSelector((state: RootState) => state.articles.results)
  const totalArticles = useSelector((state: RootState) => state.articles.count)
  const totalFilteredArticles = useSelector((state: RootState) => state.articles.filteredCount)

  const {
    searchTerm, searchBtnPressed,
     clearFilter, filtered, handleFilter, highlightText, 
     keywords, isFilterLoading
  } = useFilter()

  const titleMatches = filtered.filter(article =>
    keywords.some(k => article.title.toLowerCase().includes(k.toLowerCase()))
  )
  const summaryMatches = filtered.filter(article =>
    keywords.some(k => article.summary.toLowerCase().includes(k.toLowerCase())) &&
    !titleMatches.some(a => a.id === article.id)
  )
  const paginatedResults = [...titleMatches, ...summaryMatches]

  const hasMatches = titleMatches.length > 0 || summaryMatches.length > 0

  function handleEnterKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleFilter(1)
      setCurrentPage(1)
    }
  }

  return (
    <>
      <section className='filter-container'>
        <label htmlFor='filter-input' className='filter-label'>Filter by keywords</label>
        <div className='filter-input-group'>
          <div className='left-filter'>
            <button className='search-btn' onClick={() => {
              handleFilter(1)
              setCurrentPage(1)
              }}
              disabled={!searchTerm}>
              <img src={vector} alt="Magnifying glass search icon" className='vector-img' />
            </button>
            <input type="text"
            placeholder='The most successful IT companies in 2020'
            value={searchTerm} 
            id='filter-input'
            name='filter-input'
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            onKeyDown={handleEnterKey}
            className='filter-input' />
          </div>
          <button className='delete-btn' disabled={!searchTerm} onClick={clearFilter}>
            <img src={clear} alt="Delete icon" className='delete-img' />
          </button>
        </div>
      </section>
      
      {isFilterLoading ? <SkeletonArticles includeInput={false} /> 
        : hasMatches ?
          <>
            <p className='filter-label'>Results: {totalFilteredArticles}</p>
            <hr className='filter-line' />
          </>
        : (searchBtnPressed && <p className='no-results-msg'>No results found</p>)
      }

      <section className='articles-wrapper'>
        {(searchBtnPressed ? paginatedResults : articles).map(article => <ArticleCard key={article.id}
            id={article.id} image_url={article.image_url} 
            published_at={article.published_at} summary={article.summary}
            highlightedTitle={highlightText(article.title)}
            highlightedSummary={highlightText(article.summary)}
            title={article.title} handleArticleClick={handleArticleClick} /> 
        )}
      </section>
      {(searchBtnPressed ? totalFilteredArticles : totalArticles) > 0 && 
        <PaginationPanel
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          searchBtnPressed={searchBtnPressed}
          onSearchPageChange={handleFilter}
          total={searchBtnPressed ? totalFilteredArticles : totalArticles}
        />
      }
    </>
  )
}