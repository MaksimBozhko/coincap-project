import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'
import { coinsActions } from "../../widgets/Table/model/slices/slice"

export const handleServerNetworkError = (e: unknown, dispatch: Dispatch) => {
	const err = e as Error | AxiosError<{ error: string }>
	if (axios.isAxiosError(err)) {
		const error = err.response?.data ? err.response.data.error : err.message
		dispatch(coinsActions.setError({ error }))
	} else {
		dispatch(coinsActions.setError({ error: `Native error ${err.message}` }))
	}
}
