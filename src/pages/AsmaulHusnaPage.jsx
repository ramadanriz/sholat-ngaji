import AsmaulHusnaList from "../fragments/AsmaulHusnaList"
import Heading from "../fragments/Heading"
import { useFetch } from "../hooks/useFetch"

const AsmaulHusnaPage = () => {
  const { data, isLoading } = useFetch("https://asmaul-husna-api.vercel.app/api/all")

  return (
    <div className='min-h-screen py-10 px-5'>
      <Heading title="asma'ul husna" subTitle='Hanya milik Allah Al Asmaa Al Husnaa, maka bermohonlah kepada-Nya.' />
      <div className='flex flex-wrap gap-3 justify-center my-10 text-center'>{isLoading ? <span className='loading loading-dots loading-md'></span> : <AsmaulHusnaList data={data.data} />}</div>
    </div>
  )
}

export default AsmaulHusnaPage
