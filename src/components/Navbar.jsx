import { NavLink } from "react-router-dom"
import { navbarLinks } from "../utils/constant"

const Navbar = () => {
  return (
    <div className='btm-nav'>
      {navbarLinks.map((link) => (
        <NavLink key={link.name} to={link.link} className={({ isActive }) => (isActive ? "active text-accent" : "")}>
          <div className='text-3xl'>{link.icon}</div>
          <span className='btm-nav-label capitalize hidden md:inline'>{link.name}</span>
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar
