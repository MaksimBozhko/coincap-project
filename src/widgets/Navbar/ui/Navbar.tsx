import React from 'react';
import classNames from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss'
import { NavLink } from "react-router-dom"
import { activeType } from "../types/types"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const linkClass = ({ isActive }: activeType) => classNames(s.mainLink, { [s.active]: isActive })
  return (
    <div className={classNames(s.Navbar, {}, [])}>
      <div className={s.links}>
        <NavLink to={'/'} className={linkClass}>Coins</NavLink>
        <NavLink to={'/wallet'} className={linkClass}>wallet</NavLink>
      </div>
    </div>
  )
}

