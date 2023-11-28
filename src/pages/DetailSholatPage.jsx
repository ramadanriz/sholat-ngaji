import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { format } from "date-fns"
import id from "date-fns/locale/id"
import { jadwalSholatList, numBulan, numTahun } from "../utils/constant"
import Heading from "../fragments/Heading"
import JadwalSholatTable from "../fragments/JadwalSholatTable"

const DetailSholatPage = () => {
  const { cityId } = useParams()
  const { data, isLoading } = useFetch(`https://api.myquran.com/v1/sholat/jadwal/${cityId}/${numTahun}/${numBulan}`)
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
          <Heading title={"Jadwal Sholat " + data.data.lokasi} subTitle={"Provinsi " + data.data.daerah + ", Bulan " + thisMonth} />
          <div className='overflow-x-auto my-10'>
            <JadwalSholatTable heading={jadwalSholatList} data={data} />
          </div>
        </>
      )}
    </div>
  )
}

export default DetailSholatPage
