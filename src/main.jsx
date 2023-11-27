import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "@fontsource-variable/rubik"
import "@fontsource-variable/noto-naskh-arabic"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
