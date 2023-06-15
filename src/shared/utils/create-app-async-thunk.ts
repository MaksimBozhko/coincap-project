import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppThunkDispatch, RootState } from "../../app/store/store"

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppThunkDispatch
  rejectValue: null | unknown | RejectValueType
}>()

export type RejectValueType = {
  data: ResponseType
}
export type ResponseType<D = {}> = {
  resultCode: number
  messages: string[]
  data: D
}
