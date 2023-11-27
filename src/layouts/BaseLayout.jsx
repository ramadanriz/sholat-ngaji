import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const BaseLayout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default BaseLayout
