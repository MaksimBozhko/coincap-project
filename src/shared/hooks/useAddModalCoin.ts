import { useActions } from "./useActions"
import { coinsActions } from "../../widgets/Table/model/slices/slice"
import { useState } from "react"

export const useAddModalCoin = () => {
  const { setCoins } = useActions(coinsActions)
  const [value, setValue] = useState("")
  const onBuyCoinsHandler = (count: number) => {
    console.log(typeof count)
    setCoins({ count, name: value })
  }
  const onCloseModal = () => {
    setValue("")
  }

  return {
    setCoins,
    value,
    setValue,
    onBuyCoinsHandler,
    onCloseModal
  }
}
