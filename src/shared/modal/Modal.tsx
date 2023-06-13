import React, { ReactNode, useCallback, useRef, useState, MouseEvent, useEffect } from "react"
import classNames, { Mods } from "shared/lib/classNames/classNames";
import { Portal } from "../portal/Portal";
import s from "./modal.module.scss"


type ModalPropsType = {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
};
export const Modal = ({
                        isOpen = true,
                        onClose,
                        className,
                        children
                      }: ModalPropsType) => {
  const [isClosing, setIsClosing] = useState<boolean>(false)

  // eslint-disable-next-line no-undef
  const timerRef = useRef<NodeJS.Timeout>()

  const closeHandler = useCallback( () => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 100)
    }
  }, [onClose])

  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback( (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown)
      return () => {
        window.removeEventListener("keydown", onKeyDown)
        clearTimeout(timerRef.current)
      }
    }
  }, [onKeyDown, isOpen])

  const mods: Mods = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing
  }

  return (
    <Portal>
      <div className={classNames(s.modal, mods, [className])}>
        <div className={s.overlay} onClick={closeHandler}>
          <div className={s.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}