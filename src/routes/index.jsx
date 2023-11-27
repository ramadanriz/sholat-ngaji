import { createBrowserRouter } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import { HomePage, ErrorPage, SholatPage, QuranPage, DetailSholatPage, DetailSurahPage } from "../pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sholat",
        element: <SholatPage />,
      },
      {
        path: "/quran",
        element: <QuranPage />,
      },
      {
        path: "/sholat/:cityId",
        element: <DetailSholatPage />,
      },
      {
        path: "/quran/:surahId",
        element: <DetailSurahPage />,
      },
    ],
  },
])
