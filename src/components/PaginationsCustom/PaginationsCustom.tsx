import { ChangeEvent, useCallback } from 'react'
import './index.scss'
import { Box, Pagination, Stack } from '@mui/material'

type Props = {
  currentPage: number
  pagesCount: number
  setCurrentPage: (currPage: number) => void
}

export const PaginationsCustom = ({ pagesCount, currentPage, setCurrentPage }: Props) => {
  const setCurrentPageHandler = useCallback(
    (e: ChangeEvent<unknown>, page: number) => {
      setCurrentPage(page)
    },
    [currentPage]
  )

  if (pagesCount === 0) return null

  return (
    <Box className="pagination">
      <Stack spacing={10}>
        <Pagination
          count={pagesCount}
          size="small"
          siblingCount={4}
          shape="rounded"
          page={currentPage}
          onChange={setCurrentPageHandler}
        />
      </Stack>
    </Box>
  )
}
