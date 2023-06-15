export type PaginationType = {
  totalUserCount: number
  currentPage: number
  portionSize?: number
  pageSize?: number
  onPageChange?: (pageNumber: number) => void
}
