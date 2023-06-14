import { RootState } from "../../../../app/store/store"

export const getCoins = (state: RootState) => state.coins.coins
export const getCoin = (state: RootState) => state.coins.coin
