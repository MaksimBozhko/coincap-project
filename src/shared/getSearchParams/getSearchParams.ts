export const getSearchParams = (searchParams: any) => {
  const search: any = {}
  for (let [key, value] of searchParams.entries()) {

    search[key] = value;
  }
  return search
};