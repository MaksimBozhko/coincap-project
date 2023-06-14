import { instance } from "app/api/api"

export const coinsAPI = {
  items() {
    return instance.get("assets")
  },
  item(id: string) {
    return instance.get(`assets/${id}`)
  },
}