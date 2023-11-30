import LatinSurahButton from "../components/LatinSurahButton"
import PropTypes from "prop-types"
import TafsirButton from "../components/TafsirButton"

const DetailSurahFeature = ({ onLatin }) => {
  return (
    <div className='mt-1 mb-2 flex space-x-4 flex-wrap justify-center items-center'>
      <LatinSurahButton onLatin={onLatin} />
      <TafsirButton />
    </div>
  )
}

DetailSurahFeature.propTypes = {
  onLatin: PropTypes.func,
}

export default DetailSurahFeature
