import { useEffect, useState } from 'react'
import './css/App.css'
import ArticlesList from './components/ArticleList'
import { getArticleById, getArticles } from './helpers'
import SkeletonArticles from './components/SkeletonArticles'
import ArticlePage from './components/ArticlePage'
import SkeletonArticle from './components/SkeletonArticle'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from './redux-state/store'

export default function App() {
  const dispatch = useDispatch<AppDispatch>()
  
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const [articleClicked, setArticleClicked] = useState(false)
  const [articleLoading, setArticleLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getArticles(currentPage, dispatch).finally(() => setIsLoading(false))
  }, [currentPage])
  
  function handleArticleClick(id: number) {
    setArticleClicked(true)
    setArticleLoading(true)
    getArticleById(id, dispatch).finally(() => setArticleLoading(false))
  }

  return (
    <>
      {articleClicked ? articleLoading ? <SkeletonArticle />
      : <ArticlePage setArticleClicked={setArticleClicked} /> : 
          isLoading ? <main><SkeletonArticles /></main> : 
          <main>
            <ArticlesList 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            handleArticleClick={handleArticleClick} />
          </main>
      }
    </>
  )
}