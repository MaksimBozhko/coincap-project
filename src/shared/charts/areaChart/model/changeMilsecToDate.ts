export function changeMilsecToDate(milliseconds: number) {
  const date = new Date(milliseconds)

  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${day}-${month.toString().padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`
}
