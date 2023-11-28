import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import Heading from "../fragments/Heading"
import Search from "../components/Search"
import SurahList from "../fragments/SurahList"

const QuranPage = () => {
  const { data, isLoading } = useFetch("https://api.quran.gading.dev/surah")
  const [searchItem, setSearchItem] = useState("")
  const [filteredSurah, setFilteredSurah] = useState([])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value
    setSearchItem(searchTerm)

    const filteredItems = data.data.filter((surah) => surah.name.transliteration.id.toLowerCase().includes(searchTerm.toLowerCase()))

    setFilteredSurah(filteredItems)
  }
  return (
    <div className='min-h-screen py-10 px-5'>
      <Heading title="tenangkan hatimu dengan membaca al-qur'an" subTitle='Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan.' />

      <div className='flex justify-center'>
        <Search keyword={searchItem} inputChange={handleInputChange} placeholder='Cari berdasarkan nama surah' />
      </div>

      <div className='flex flex-wrap gap-3 justify-center my-10 text-center'>{isLoading ? <span className='loading loading-dots loading-md'></span> : <SurahList suwar={searchItem == "" ? data.data : filteredSurah} />}</div>
    </div>
  )
}

export default QuranPage
