import { useSearchParams } from "react-router-dom"
import { getSearchParams } from "../getSearchParams/getSearchParams"

export const useParam = () => {
  const [searchParams, setSearchParams]: [URLSearchParams, Function] = useSearchParams()
  const search = getSearchParams(searchParams)
  const page = search.page ? Number(search.page) : 1
  return {
    search: { ...search, page },
    setSearchParams
  }
}
