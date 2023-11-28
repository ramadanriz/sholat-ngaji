import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const SurahItem = (surah) => {
  return (
    <Link key={surah.number} to={`/quran/${surah.number}`} className='rounded-sm w-full md:w-[315px] bg-base-300 border-2 border-neutral'>
      <div className='flex flex-col p-4 text-left'>
        <p className='text-right font-semibold tracking-wide'>{surah.revelation.id}</p>
        <span className='text-xl font-bold'>{surah.number}</span>
        <p className='text-lg font-bold'>{surah.name.transliteration.id}</p>
        <p className='font-medium'>{surah.name.translation.id}</p>
        <p className='mt-0.5'>Jumlah: {surah.numberOfVerses} ayat</p>
      </div>
    </Link>
  )
}

SurahItem.propTypes = {
  surah: PropTypes.array,
}

export default SurahItem
