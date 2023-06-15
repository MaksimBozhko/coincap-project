import { CaseItemType, ItemType } from "../../widgets/Table/model/types"
import { LOCAL_STORAGE_KEY } from "./types"

export const loadState = () => {
  try {
    const persistedTodoString = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (persistedTodoString === null) return undefined
    return { coins: { case: JSON.parse(persistedTodoString), coins: [], coin: {} as ItemType }}
  } catch (err) {
    return undefined
  }
}

type SelectedState = CaseItemType[]

export const saveState = (stateName: string = "", state?: SelectedState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(stateName, serializedState)
  } catch {
    // ignore write errors
  }
}
