import PropTypes from "prop-types"

const DetailSurahItem = ({ verse, latinStatus, murottalStatus }) => {
  return (
    <div className='flex flex-col items-end justify-end border-b-2 border-neutral py-4'>
      <div className='relative flex w-full items-start justify-between'>
        <div className='bg-neutral text-neutral-content mr-2 flex h-12 w-12 items-center justify-center rounded-full p-6 font-bold'>
          <p className='font-bold'>{verse.number.inSurah}</p>
        </div>
        <p className='text-right font-arab text-4xl font-bold leading-relaxed'>{verse.text.arab}</p>
      </div>
      <div className='mb-6 flex w-full flex-col items-start justify-start'>
        {murottalStatus ? <audio src={verse.audio.primary} controls></audio> : null}
        {latinStatus ? <p className='mt-2 text-left italic font-medium text-primary'>{verse.text.transliteration.en}</p> : null}
        <p className='mt-6 text-left font-medium leading-relaxed tracking-wide'>{verse.translation.id}</p>
      </div>
    </div>
  )
}

DetailSurahItem.propTypes = {
  verse: PropTypes.object,
  latinStatus: PropTypes.bool,
  murottalStatus: PropTypes.bool,
}

export default DetailSurahItem
