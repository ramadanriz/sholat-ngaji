import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { format, setMonth } from "date-fns"
import id from "date-fns/locale/id"
import { jadwalSholatList } from "../utils/constant"
import Heading from "../fragments/Heading"
import JadwalSholatTable from "../fragments/JadwalSholatTable"

const DetailSholatPage = () => {
  const { cityId } = useParams()

  const thisMonth = format(new Date(), `MM`, {
    locale: id,
  })

  const thisYear = format(new Date(), `yyyy`, {
    locale: id,
  })

  const monthNumberToName = (monthNumber) => {
    const date = setMonth(new Date(), monthNumber - 1) // setMonth menggunakan 0-based index
    return format(date, "MMMM", { locale: id })
  }

  const { data, isLoading } = useFetch(`https://api.myquran.com/v2/sholat/jadwal/${cityId}/${thisYear}/${thisMonth}`)

  return (
    <div className='min-h-screen py-10 px-5'>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <span className='loading loading-dots loading-md'></span>
        </div>
      ) : (
        <>
          <Heading title={"Jadwal Sholat " + data.data.lokasi} subTitle={`Bulan ${monthNumberToName(thisMonth)} ${thisYear}`} />
          <div className='overflow-x-auto my-10'>
            <JadwalSholatTable heading={jadwalSholatList} data={data} />
          </div>
        </>
      )}
    </div>
  )
}

export default DetailSholatPage
