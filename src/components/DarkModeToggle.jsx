import { useEffect, useState } from "react"
import { IoMdMoon, IoMdSunny } from "react-icons/io"

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("forest")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])

  return (
    <label className='swap swap-rotate'>
      {/* this hidden checkbox controls the state */}
      <input type='checkbox' onChange={handleToggle} checked={theme === "light" ? false : true} className='theme-controller' value='synthwave' />

      {/* sun icon */}
      <IoMdSunny className='swap-on fill-current text-3xl' />

      {/* moon icon */}
      <IoMdMoon className='swap-off fill-current text-3xl' />
    </label>
  )
}

export default DarkModeToggle
