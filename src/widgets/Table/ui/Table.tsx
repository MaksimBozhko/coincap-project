import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";
import s from './Table.module.scss'
import classNames from "shared/lib/classNames/classNames"

interface TableProps {
  customClass?: string
}

export const Table = ({ customClass }: TableProps) => {
  const theadData = ["Name", "Email", "Date"];

  const tbodyData = [
    {
      id: "1",
      items: ["John", "john@email.com", "01/01/2021"],
    },
    {
      id: "2",
      items: ["Sally", "sally@email.com", "12/24/2020"],
    },
    {
      id: "3",
      items: ["Maria", "maria@email.com", "12/01/2020"],
    },
    {
      id: "2",
      items: ["Sally", "sally@email.com", "12/24/2020"],
    },
    {
      id: "3",
      items: ["Maria", "maria@email.com", "12/01/2020"],
    },
    {
      id: "2",
      items: ["Sally", "sally@email.com", "12/24/2020"],
    },
    {
      id: "3",
      items: ["Maria", "maria@email.com", "12/01/2020"],
    },
  ];
  return (
    <table className={classNames(s.table, [customClass])}>
      <thead className={s.thead}>
      <tr>
        {theadData.map((h: any) => {
          return <TableHeadItem key={h} item={h} />;
        })}
      </tr>
      </thead>
      <tbody>
      {tbodyData.map((item: any) => {
        return <TableRow key={item.id} data={item.items} />;
      })}
      </tbody>
    </table>
  );
};