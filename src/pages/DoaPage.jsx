import { useFetch } from "../hooks/useFetch"
import Heading from "../fragments/Heading"
import DoaList from "../fragments/DoaList"

const DoaPage = () => {
  const { data, isLoading } = useFetch("https://open-api.my.id/api/doa")

  return (
    <div className='min-h-screen py-10 px-5'>
      <Heading title='doa-doa harian' subTitle='Berdoalah kepada Tuhanmu dengan berendah diri dan suara yang lembut.' />
      <div className='flex flex-wrap gap-3 justify-center my-10 text-center'>{isLoading ? <span className='loading loading-dots loading-md'></span> : <DoaList data={data} />}</div>
    </div>
  )
}

export default DoaPage
