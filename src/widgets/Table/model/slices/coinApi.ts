import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { coinsActions } from "./slice"

export const coinApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coincap.io/v2" }),
  endpoints: builder => ({
    getPrices: builder.query<any, void>({
      query: () => `prices`,
      async onQueryStarted(_, { dispatch }) {
        const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=ALL`)
        pricesWs.onmessage = function (msg) {
          const data = JSON.parse(msg.data)
          dispatch(coinsActions.setPrices(data))
        }
      }
    })
  })
})

export const { useGetPricesQuery } = coinApi
