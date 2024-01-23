import LatinSurahButton from "../components/LatinSurahButton"
import PropTypes from "prop-types"
import TafsirButton from "../components/TafsirButton"
import MurottalButton from "../components/MurottalButton"

const DetailSurahFeature = ({ onLatin, onMurottal }) => {
  return (
    <div className='mt-1 mb-2 flex space-x-4 flex-wrap justify-center items-center'>
      <LatinSurahButton onLatin={onLatin} />
      <TafsirButton />
      <MurottalButton onMurottal={onMurottal} />
    </div>
  )
}

DetailSurahFeature.propTypes = {
  onLatin: PropTypes.func,
  onMurottal: PropTypes.func,
}

export default DetailSurahFeature
