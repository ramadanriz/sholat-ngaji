import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { FaArrowRight } from "react-icons/fa"

const NextSurahButton = ({ surahNumber }) => {
  return surahNumber < 114 ? (
    <Link to={`/quran/${parseInt(surahNumber) + 1}`} className='btn'>
      Selanjutnya
      <FaArrowRight />
    </Link>
  ) : null
}

NextSurahButton.propTypes = {
  surahNumber: PropTypes.string,
}

export default NextSurahButton
