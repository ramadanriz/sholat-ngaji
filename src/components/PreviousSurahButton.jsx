import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { FaArrowLeft } from "react-icons/fa"

const PreviousSurahButton = ({ surahNumber }) => {
  return surahNumber > 1 ? (
    <Link to={`/quran/${parseInt(surahNumber) - 1}`} className='btn'>
      <FaArrowLeft />
      Sebelumnya
    </Link>
  ) : null
}

PreviousSurahButton.propTypes = {
  surahNumber: PropTypes.string,
}

export default PreviousSurahButton
