import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitStateType, RequestType, ResponseDataHistoryType } from "./types"
import { chartAPI } from "../../api/api"
import { createAppAsyncThunk } from "../../../../utils/create-app-async-thunk"

export const initialState: InitStateType = {
  priceUsd: [],
  time: [],
  startDayHistory: "2",
  interval: "4"
}

//thunks
const getHistoryData = createAppAsyncThunk<ResponseDataHistoryType, RequestType>(
  "chart/history",
  async (data, { rejectWithValue }) => {
    try {
      const res = await chartAPI.data(data)
      return res.data.data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

const slice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setInterval: (state, action: PayloadAction<string>) => {
      state.interval = action.payload
    },
    setHistoryDay: (state, action: PayloadAction<string>) => {
      state.startDayHistory = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getHistoryData.fulfilled, (state, { payload }) => {
      state.priceUsd = payload.map(({ priceUsd }) => priceUsd)
      state.time = payload.map(({ time }) => time)
    })
  }
})

export const chartSlice = slice.reducer
export const chartActions = slice.actions
export const chartThunks = { getHistoryData }
