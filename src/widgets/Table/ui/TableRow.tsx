import React from "react"

const TableRow = ({ data }: any) => {
  return (
    <tr>
      {data.map((item: any) => {
        return <td key={item}>{item}</td>
      })}
    </tr>
  )
}

export default TableRow