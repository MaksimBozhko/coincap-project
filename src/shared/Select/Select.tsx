import React, { KeyboardEvent, useEffect, useState } from "react"
import s from "./Select.module.css"

type SelectPropsType = {
  value: any
  items: { value: string; title: any }[]
  setValue: (value: any) => void
}

export const Select: React.FC<SelectPropsType> = ({ value, items, setValue }) => {
  const [isActive, setIsActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(value)

  useEffect(() => {
    setHoveredElementValue(value)
  }, [value])

  const toggleItems = () => {
    setIsActive(!isActive)
  }

  const onClickHandler = (value: string) => {
    setValue(value)
    setIsActive(!isActive)
  }

  const selectedItem = items.find(i => i.value === value)
  const hoveredItem = items.find(i => i.value === hoveredElementValue)
  const options = items.map(i => (
    <div
      onMouseEnter={() => setHoveredElementValue(i.value)}
      className={hoveredItem === i ? " " + s.select_option : " "}
      onClick={() => onClickHandler(i.value)}
      key={i.value}>
      {i.title}
    </div>
  ))

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < items.length; i++) {
        if (items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === "ArrowDown" ? items[i + 1] : items[i - 1]

          if (pretendentElement) {
            setValue(pretendentElement.value)
            return
          }
        }
      }
      setValue(items[0].value)
    }

    if (e.key === "Enter") {
      setValue(hoveredElementValue)
      setIsActive(!isActive)
    }

    if (e.key === "Escape") {
      setIsActive(false)
    }
  }

  const isActiveClass = s.select_selected + (isActive ? " " + s.active : "")

  return (
    <div onKeyUp={onKeyUp} className={s.select} tabIndex={0}>
      <div onClick={toggleItems} className={isActiveClass}>
        {selectedItem && selectedItem.title}
      </div>
      {isActive && <div className={s.select_options}>{options}</div>}
    </div>
  )
}
