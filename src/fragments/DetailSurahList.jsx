import PropTypes from "prop-types"
import DetailSurahItem from "../components/DetailSurahItem"

const DetailSurahList = ({ data }) => {
  return (
    <div className='w-full flex flex-col space-y-7 my-7 text-end'>
      {data.data.verses.map((verse) => (
        <DetailSurahItem key={verse.number.inQuran} verse={verse} />
      ))}
    </div>
  )
}

DetailSurahList.propTypes = {
  data: PropTypes.object,
}

export default DetailSurahList
