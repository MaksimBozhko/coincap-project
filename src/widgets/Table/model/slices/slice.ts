import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "../../../../shared/utils/create-app-async-thunk"
import { coinsAPI } from "../../api/api"
import { ItemType } from "./types"

export const initialState = {
  coins: [] as ItemType[]
}

//thunks
const getItems = createAppAsyncThunk("coins/getItems", async (_, { rejectWithValue }) => {
  try {
    const res = await coinsAPI.items()
    return res.data.data
  } catch (e) {
    return rejectWithValue(e)
  }
})


const slice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getItems.fulfilled, (state, { payload }) => {
        state.coins = payload.map((item: ItemType) => ({
            rank: item.rank,
            name: item.name,
            priceUsd: item.priceUsd,
            marketCapUsd: item.marketCapUsd,
            vwap24Hr: item.vwap24Hr,
            supply: item.supply,
            volumeUsd24Hr: item.volumeUsd24Hr,
            changePercent24Hr: item.changePercent24Hr,
            symbol: item.symbol
          }
        ))
      })
  }
})

export const coinsSlice = slice.reducer
export const coinsActions = slice.actions
export const coinsThunks = { getItems }