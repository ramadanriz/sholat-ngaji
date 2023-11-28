import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import Heading from "../fragments/Heading"
import DetailSurahList from "../fragments/DetailSurahList"
import { useState } from "react"
import DetailSurahFeature from "../fragments/DetailSurahFeature"

const DetailSurahPage = () => {
  const { surahId } = useParams()
  const { data, isLoading } = useFetch(`https://api.quran.gading.dev/surah/${surahId}`)
  const [isLatinOpen, setIsLatinOpen] = useState(false)

  function latinToggle() {
    setIsLatinOpen((isLatinOpen) => !isLatinOpen)
  }

  return (
    <div className='min-h-screen py-10 px-5'>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <span className='loading loading-dots loading-md'></span>
        </div>
      ) : (
        <>
          <Heading title={data.data.name.transliteration.id} subTitle={data.data.name.translation.id + ". Surah ke-" + data.data.number + ". " + data.data.revelation.id} />
          <DetailSurahFeature onLatin={latinToggle} />
          <div className='my-7 w-full'>
            <DetailSurahList data={data} latinStatus={isLatinOpen} />
          </div>
        </>
      )}
    </div>
  )
}

export default DetailSurahPage
