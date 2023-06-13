import React from "react"
import { ItemType } from "../../model/slices/types"
import { getRowPrice } from "../../model/helpers/getRowPrice"

interface TableRowProps {
  data: ItemType
  cal: (name: string) => void
}

export const TableRow = ({ data, cal }: TableRowProps) => {
  const rowArr = getRowPrice(data)
  // const rowArr = ['85', 'FTX Token', '$0.83', '$272.26m', '$0.82', '$328.90m', '1.91m', '2.82', '+']
  const handleCellClick = () => {
    cal(data.name)
    console.log("Clicked on the last cell");
  };
  return (
    <>
      <tr>
        {rowArr.map((item, index) => {
          if (index === rowArr.length - 1) {
            return (
              <td key={`${item}_${index}`} onClick={handleCellClick}>
                {item}
              </td>
            );
          }
          return <td key={`${item}_${index}`}>{item}</td>;
        })}
      </tr>
    </>
  );
}