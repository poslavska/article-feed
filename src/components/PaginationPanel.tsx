import type { ArticleListProps } from './ArticleList'
import { Pagination, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux-state/store'

export default function PaginationPanel({currentPage, setCurrentPage}: ArticleListProps) {
  const totalArticles = useSelector((state: RootState) => state.articles.count)

  return (
    <Stack sx={{
      justifyContent: "center",
      alignItems: "center",
      mt: "1.625em"
    }}>
      <Pagination count={Math.ceil(totalArticles / 9)} shape="rounded"
        page={currentPage}
        onChange={(_, page) => setCurrentPage(page)}
      />
    </Stack> 
  )
}