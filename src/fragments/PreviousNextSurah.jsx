import PropTypes from "prop-types"
import PreviousSurahButton from "../components/PreviousSurahButton"
import NextSurahButton from "../components/NextSurahButton"

const PreviousNextSurah = ({ surahNumber }) => {
  return (
    <div className={`flex w-full space-x-3 ${surahNumber > 1 ? "justify-between" : "justify-end"} `}>
      <PreviousSurahButton surahNumber={surahNumber} />
      <NextSurahButton surahNumber={surahNumber} />
    </div>
  )
}

PreviousNextSurah.propTypes = {
  surahNumber: PropTypes.string,
}

export default PreviousNextSurah
