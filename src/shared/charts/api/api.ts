import { instance } from "app/api/api"
import { RequestType } from "../model/types"

export const chartAPI = {
  data({ id, interval, end, start }: RequestType) {
    return instance.get(`assets/${id}/history`, {
      params: {
        interval,
        start,
        end
      }
    })
  }
}
