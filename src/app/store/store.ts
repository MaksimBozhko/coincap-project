import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { loadState, saveState } from "shared/localStorage/localStorage"
import { coinsSlice } from "../../widgets/Table/model/slices/slice"

const rootReducer = combineReducers({
  coins: coinsSlice
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState()
})

store.subscribe(() => {
  saveState("caseCoins", store.getState().coins.case)
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore["dispatch"];