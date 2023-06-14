import { createSlice, current, PayloadAction } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "shared/utils/create-app-async-thunk"
import { coinsAPI } from "../../api/api"
import { InitStateType, ItemType, SetCoinsType } from "./types"
import { chartThunks } from "shared/charts/areaChart/model/slices/slice"
import { RequestType } from "shared/charts/areaChart/model/slices/types"


export const initialState: InitStateType = {
  coins: [],
  case: [],
  coin: {} as ItemType
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
const getItem = createAppAsyncThunk<ItemType, RequestType>("coins/getItem", async (arg, {
  rejectWithValue,
  dispatch
}) => {
  try {
    const res = await coinsAPI.item(arg.id)
    dispatch(chartThunks.getHistoryData(arg))
    return res.data.data
  } catch (e) {
    return rejectWithValue(e)
  }
})


const slice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins: (state, action: PayloadAction<SetCoinsType>) => {
      const { count, name } = action.payload
      const coin = state.coins.find((item) => item.name === name)
      const isMatch = state.case.find((item) => item.name === coin?.name)
      if (isMatch) {
        isMatch.count += count
      } else if (coin) {
        const newCoin = { ...coin, count }
        state.case.push(newCoin)
      }
    },
    removeCoins: (state, action: PayloadAction<string>) => {
      state.case = state.case.filter(item => item.name !== action.payload)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getItems.fulfilled, (state, { payload }) => {
        state.coins = payload.map((item: ItemType) => ({
            id: item.id,
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
      .addCase(getItem.fulfilled, (state, { payload }) => {
        state.coin = payload
      })
  }
})

export const coinsSlice = slice.reducer
export const coinsActions = slice.actions
export const coinsThunks = { getItems, getItem }