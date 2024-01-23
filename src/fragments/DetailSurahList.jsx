import PropTypes from "prop-types"
import DetailSurahItem from "../components/DetailSurahItem"

const DetailSurahList = ({ data, latinStatus, murottalStatus }) => {
  return (
    <div className='w-full flex flex-col space-y-7 my-7 text-end'>
      {data.data.verses.map((verse) => (
        <DetailSurahItem key={verse.number.inQuran} verse={verse} latinStatus={latinStatus} murottalStatus={murottalStatus} />
      ))}
    </div>
  )
}

DetailSurahList.propTypes = {
  data: PropTypes.object,
  latinStatus: PropTypes.bool,
  murottalStatus: PropTypes.bool,
}

export default DetailSurahList
