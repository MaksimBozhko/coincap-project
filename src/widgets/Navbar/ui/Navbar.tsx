import React from "react"
import { Link } from "react-router-dom"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div>
      <div>
        <Link to={"/"}>Coins</Link>
        <Link to={"/case"}>Case</Link>
      </div>
    </div>
  )
}
