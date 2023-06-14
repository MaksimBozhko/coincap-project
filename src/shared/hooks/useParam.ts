import { useSearchParams } from "react-router-dom"
import { getSearchParams } from "../getSearchParams/getSearchParams"

export const useParam = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  return {
    search: getSearchParams(searchParams),
    setSearchParams
  }
}