export type WalletModalPropsType = {
  name: string
  isOpen?: boolean
  onClose?: () => void
  className?: string
  callback?: (count: string) => void
}
