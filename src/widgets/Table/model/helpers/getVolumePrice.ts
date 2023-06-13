export function getVolumePrice(price: string) {
  const newPrice = Number(price)
  if (newPrice >= 1e9) {
    return (newPrice / 1e9).toFixed(2) + "b"
  } else if (newPrice >= 1e6) {
    return (newPrice / 1e6).toFixed(2) + "m"
  } else if (newPrice >= 1e3) {
    return (newPrice / 1e3).toFixed(2) + "k"
  } else {
    return newPrice.toFixed(2)
  }
}