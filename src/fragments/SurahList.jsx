import PropTypes from "prop-types"
import SurahItem from "../components/SurahItem"

const SurahList = ({ suwar }) => {
  return suwar.length > 0 ? (
    <div className='flex flex-wrap gap-3 justify-center text-center'>
      {suwar.map((surah) => (
        <SurahItem key={surah.number} {...surah} />
      ))}
    </div>
  ) : (
    <p>Tidak ada data</p>
  )
}

SurahList.propTypes = {
  suwar: PropTypes.array,
}

export default SurahList
