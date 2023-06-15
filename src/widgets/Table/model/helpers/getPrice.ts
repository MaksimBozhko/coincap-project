export function getPrice(price: string) {
  const formattedNumber = parseFloat(price).toFixed(2) // Округление до двух знаков после запятой
  const parts = formattedNumber.split(".") // Разделение на целую и десятичную части
  const integerPart = parts[0]
  const decimalPart = parts[1]

  // Добавление разделителя тысяч в целую часть числа
  const numberWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return "$" + numberWithCommas + "." + decimalPart
}
