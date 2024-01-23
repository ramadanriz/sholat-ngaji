import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useState } from "react"
import Heading from "../fragments/Heading"
import DetailSurahList from "../fragments/DetailSurahList"
import DetailSurahFeature from "../fragments/DetailSurahFeature"
import TafsirModal from "../components/TafsirModal"
import PreviousNextSurah from "../fragments/PreviousNextSurah"

const DetailSurahPage = () => {
  const { surahId } = useParams()
  const { data, isLoading } = useFetch(`https://api.quran.gading.dev/surah/${surahId}`)
  const [isLatinOpen, setIsLatinOpen] = useState(false)
  const [isMurottalOpen, setIsMurottalOpen] = useState(false)

  function latinToggle() {
    setIsLatinOpen((isLatinOpen) => !isLatinOpen)
  }

  function murottalToggle() {
    setIsMurottalOpen((isMurottalOpen) => !isMurottalOpen)
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
          <DetailSurahFeature onLatin={latinToggle} onMurottal={murottalToggle} />
          <TafsirModal id='modal' data={data} />
          <div className='my-7 w-full'>
            <PreviousNextSurah surahNumber={surahId} />
            <DetailSurahList data={data} latinStatus={isLatinOpen} murottalStatus={isMurottalOpen} />
            <PreviousNextSurah surahNumber={surahId} />
          </div>
        </>
      )}
    </div>
  )
}

export default DetailSurahPage
