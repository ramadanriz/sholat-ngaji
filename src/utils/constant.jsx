import { format } from "date-fns"
import id from "date-fns/locale/id"
import { MdHome, MdAccessTime } from "react-icons/md"
import { FaBookQuran, FaHandsPraying, FaList } from "react-icons/fa6"

export const date = new Date()
export const tahun = format(date, "yyyy")
export const bulan = format(date, "MM")
export const hari = format(date, "dd")
export const hours = date.getHours()
export const currentDate = format(date, "dd MMMM yyyy", { locale: id })

export const numTahun = Number(tahun)
export const numBulan = Number(bulan)
export const numTanggal = Number(hari)
export const matchDate = format(date, "yyyy-MM-dd")

export const browser = typeof window !== "undefined"

export const navbarLinks = [
  {
    link: "/",
    name: "home",
    icon: <MdHome />,
  },
  {
    link: "/sholat",
    name: "sholat",
    icon: <MdAccessTime />,
  },
  {
    link: "/quran",
    name: "qur'an",
    icon: <FaBookQuran />,
  },
  {
    link: "/doa",
    name: "doa",
    icon: <FaHandsPraying />,
  },
  {
    link: "/asmaul-husna",
    name: "asmaul husna",
    icon: <FaList />,
  },
]

export const jadwalSholatList = [
  { id: 1, name: "Tanggal" },
  { id: 2, name: "Imsak" },
  { id: 3, name: "Subuh" },
  { id: 4, name: "Terbit" },
  { id: 5, name: "Dhuha" },
  { id: 6, name: "Dzuhur" },
  { id: 7, name: "Ashar" },
  { id: 8, name: "Maghrib" },
  { id: 9, name: "Isya" },
]
