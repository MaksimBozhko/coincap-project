export type SelectPropsType = {
  value: string
  items: { value: string; title: string | number }[]
  setValue: (value: string) => void
}
