import { RootState } from "../../../../app/store/store"

export const getCoins = (state: RootState) => state.coins.coins
