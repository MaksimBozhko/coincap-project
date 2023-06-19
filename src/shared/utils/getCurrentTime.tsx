import React from "react"

export function getCurrentTime() {
  const currentDate = new Date()
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }
  const formattedDate = currentDate.toLocaleDateString("en-US", options)

  return <span>{formattedDate}</span>
}
