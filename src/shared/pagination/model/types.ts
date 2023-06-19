export type PaginationType = {
  totalUserCount?: number
  portionSize?: number
  pageSize?: number
  onPageChange?: (pageNumber: number) => void
}