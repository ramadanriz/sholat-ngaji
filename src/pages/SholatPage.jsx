import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import Heading from "../fragments/Heading"
import Search from "../components/Search"

const SholatPage = () => {
  const { data, isLoading } = useFetch("https://api.myquran.com/v1/sholat/kota/semua")
  const [searchItem, setSearchItem] = useState("")
  const [filteredCities, setFilteredCities] = useState([])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value
    setSearchItem(searchTerm)

    const filteredItems = data.filter((city) => city.id !== "3212" && city.lokasi.toLowerCase().includes(searchTerm.toLowerCase()))

    setFilteredCities(filteredItems)
  }

  return (
    <div className='min-h-screen py-10 px-5'>
      <Heading title='jadwal sholat' subTitle='Berikut daftar Kabupaten/Kota yang tersedia' />
      <div className='flex justify-center'>
        <Search keyword={searchItem} inputChange={handleInputChange} placeholder='Cari berdasarkan nama kabupaten/kota' />
      </div>
    </div>
  )
}

export default SholatPage
