import { instance } from "app/api/api"
import { QueryParamType } from "../model/types"

export const coinsAPI = {
  items({ limit, offset }: QueryParamType) {
    return instance.get("assets", {
      params: {
        limit,
        offset
      }
    })
  },
  item(id: string) {
    return instance.get(`assets/${id}`)
  }
}
