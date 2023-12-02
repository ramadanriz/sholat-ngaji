import PropTypes from "prop-types"
import AsmaulHusnaItem from "../components/AsmaulHusnaItem"

const AsmaulHusnaList = ({ data }) => {
  return data.length > 0 ? (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-center text-center'>
      {data.map((surah) => (
        <AsmaulHusnaItem key={surah.urutan} {...surah} />
      ))}
    </div>
  ) : (
    <p>Tidak ada data</p>
  )
}

AsmaulHusnaList.propTypes = {
  data: PropTypes.array,
}

export default AsmaulHusnaList
