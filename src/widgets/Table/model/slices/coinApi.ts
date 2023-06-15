import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { coinsActions } from "./slice"

export const coinApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2' }),
  endpoints: (builder) => ({
    getPrices: builder.query<any, string[]>({
      query: (assets) => `prices?assets=${assets.join(',')}`,
      async onQueryStarted(_, { dispatch }) {
        const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin');


        pricesWs.onmessage = function (msg) {
          const data = JSON.parse(msg.data);
          console.log(data)
          dispatch(coinsActions.setPrices(data));
        };
      },
    }),
  }),
});

export const { useGetPricesQuery } = coinApi;
export default coinApi;