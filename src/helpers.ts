import { setArticleCount, setArticles, setCurrentArticle, setFilteredCount, setFilterResults } from "./redux-state/articleSlice"
import type { AppDispatch } from "./redux-state/store"

export async function getArticles(currentPage: number = 1, dispatch: AppDispatch) {
  const offset = (currentPage - 1) * 9
  
  try {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?ordering=-published_at&limit=9&offset=${offset}`)
    const articlesData = await response.json()

    if (!articlesData?.results || articlesData.count === 0) {
      console.log("No articles found")
      dispatch(setArticles([]))
      return
    }

    dispatch(setArticles(articlesData.results))

    dispatch(setArticleCount(articlesData.count))
  } catch (error) {
    console.log("Error while fetching articles", error)
  }
}

export async function getArticleById(id: number, dispatch: AppDispatch) {
  try {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}/`)
    const article = await response.json()

    dispatch(setCurrentArticle(article))
  } catch (error) {
    console.log("Error while fetching your article", error)
  }
}

export async function filterSearchResults(currentPage: number, query: string, dispatch: AppDispatch) {
  const offset = (currentPage - 1) * 9

  try {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?search=${query}&limit=9&offset=${offset}`)
    const filterResults = await response.json()

    dispatch(setFilterResults(filterResults.results ?? []))
    dispatch(setFilteredCount(filterResults.count))

  } catch (error) {
    console.log("Error while filtering your query", error)
  }
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate()

  const suffix = ((d: number) => {
    if (d > 3 && d < 21) return 'th'
    switch (d % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  })
  const suffixDate = suffix(day)
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)
  const year = date.getFullYear()

  return `${month} ${day}${suffixDate}, ${year}`
}