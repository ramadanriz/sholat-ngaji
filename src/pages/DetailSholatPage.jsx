import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { format } from "date-fns"
import id from "date-fns/locale/id"
import { jadwalSholatList } from "../utils/constant"
import Heading from "../fragments/Heading"
import JadwalSholatTable from "../fragments/JadwalSholatTable"

const DetailSholatPage = () => {
  const { cityId } = useParams()
  const { data, isLoading } = useFetch(`https://adzan-indonesia-api.vercel.app/adzan?cityId=${cityId}`)
  const thisMonth = format(new Date(), `MMMM yyyy`, {
    locale: id,
  })

  return (
    <div className='min-h-screen py-10 px-5'>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <span className='loading loading-dots loading-md'></span>
        </div>
      ) : (
        <>
          <Heading title={"Jadwal Sholat " + data.data.city.city} subTitle={"Bulan " + thisMonth} />
          <div className='overflow-x-auto my-10'>
            <JadwalSholatTable heading={jadwalSholatList} data={data} />
          </div>
        </>
      )}
    </div>
  )
}

export default DetailSholatPage
