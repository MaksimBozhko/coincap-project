import { AnyAction, combineReducers, configureStore, ThunkDispatch } from "@reduxjs/toolkit"
import { loadState, saveState } from "shared/localStorage/localStorage"
import { coinsSlice } from "../../widgets/Table/model/slices/slice"
import { chartSlice } from "../../shared/charts/areaChart/model/slices/slice"
import { coinApi } from "widgets/Table/model/slices/coinApi"
import { LOCAL_STORAGE_KEY } from "../../shared/localStorage/types"

const rootReducer = combineReducers({
  coins: coinsSlice,
  chart: chartSlice,
  [coinApi.reducerPath]: coinApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coinApi.middleware),
  preloadedState: loadState()
})

store.subscribe(() => {
  saveState(LOCAL_STORAGE_KEY, store.getState().coins.case)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore["dispatch"]
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
