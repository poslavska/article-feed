import React, { useState } from 'react'
import '../css/ArticleList.css'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../redux-state/store'
import SearchArticle from './SearchArticle'
import ArticleCard from './ArticleCard'
import PaginationPanel from './PaginationPanel'

export type ArticleListProps = {
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  handleArticleClick: (id: number) => void
}

export default function ArticlesList({currentPage, setCurrentPage, handleArticleClick}: ArticleListProps) {
  const articles = useSelector((state: RootState) => state.articles.results)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <SearchArticle /> {/* додати коли з фільтр то {} опшнл на основі цього і напис ноу артіклс фаунд */}
      <section className='articles-wrapper'>
        {articles.map((article) => <ArticleCard key={article.id}
          id={article.id} image_url={article.image_url} 
          published_at={article.published_at} summary={article.summary} 
          title={article.title} handleArticleClick={handleArticleClick} /> 
        )}
      </section>
      <PaginationPanel currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}