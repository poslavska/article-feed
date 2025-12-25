import { useEffect, useState } from 'react'
import './css/App.css'
import ArticlesList from './components/ArticleList'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from './redux-state/store'
import { getArticles } from './helpers'
import SkeletonArticles from './components/SkeletonArticles'

export default function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    setIsLoading(true)
    getArticles(currentPage, dispatch).finally(() => setIsLoading(false))
  }, [currentPage])

  return (
    <main>
      {isLoading ? <SkeletonArticles /> : <ArticlesList currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </main>
  )
}