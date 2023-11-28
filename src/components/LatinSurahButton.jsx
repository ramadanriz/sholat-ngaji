import { BsTranslate } from "react-icons/bs"
import PropTypes from "prop-types"

const LatinSurahButton = ({ onLatin }) => {
  return (
    <button className='flex items-center space-x-1' onClick={() => onLatin()}>
      <BsTranslate /> <p className='text-lg font-bold'>Latin</p>
    </button>
  )
}

LatinSurahButton.propTypes = {
  onLatin: PropTypes.func,
}

export default LatinSurahButton
