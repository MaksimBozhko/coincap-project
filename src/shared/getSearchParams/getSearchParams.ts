export const getSearchParams = (searchParams: URLSearchParams): Record<string, string> => {
  const search: Record<string, string> = {}

  for (let [key, value] of searchParams.entries()) {
    search[key] = value
  }

  return search
}
