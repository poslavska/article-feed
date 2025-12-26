import type { ArticleListProps } from './ArticleList'
import { Pagination, Stack } from '@mui/material'

type PaginationProps = Omit<ArticleListProps, 'handleArticleClick'> & {
  searchBtnPressed: boolean
  onSearchPageChange: (page: number) => void,
  total: number
}

export default function PaginationPanel({currentPage, setCurrentPage,searchBtnPressed,
  onSearchPageChange, total}: PaginationProps) {

  return (
    <Stack sx={{
      justifyContent: "center",
      alignItems: "center",
      mt: "1.625em"
    }}>
      <Pagination count={Math.ceil(total / 9)} shape="rounded"
        page={currentPage}
        onChange={(_, page) => {
          setCurrentPage(page)
           if (searchBtnPressed) onSearchPageChange(page)
        }}
      />
    </Stack> 
  )
}