import { NavLink } from "react-router-dom"
import { navbarLinks } from "../utils/constant"
import DarkModeToggle from "./DarkModeToggle"

const Navbar = () => {
  return (
    <div className='btm-nav'>
      {navbarLinks.map((link) => (
        <NavLink key={link.name} to={link.link} className={({ isActive }) => (isActive ? "active text-accent" : "")}>
          <div className='text-3xl'>{link.icon}</div>
          <span className='btm-nav-label capitalize'>{link.name}</span>
        </NavLink>
      ))}
      <DarkModeToggle />
    </div>
  )
}

export default Navbar
