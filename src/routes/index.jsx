import { createBrowserRouter } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import { HomePage, ErrorPage, SholatPage, QuranPage, DetailSholatPage, DetailSurahPage, DoaPage } from "../pages"
import AsmaulHusnaPage from "../pages/AsmaulHusnaPage"

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
      {
        path: "/doa",
        element: <DoaPage />,
      },
      {
        path: "/asmaul-husna",
        element: <AsmaulHusnaPage />,
      },
    ],
  },
])
