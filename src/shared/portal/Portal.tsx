import React, { ReactNode } from "react"
import { createPortal } from "react-dom"

type PortalPropsType = {
  children: ReactNode
  element?: HTMLElement
};
export const Portal = (props: PortalPropsType) => {
  const {
    children,
    element = document.body
  } = props
  return createPortal(children, element)
}