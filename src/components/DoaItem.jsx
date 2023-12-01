import PropTypes from "prop-types"

const DoaItem = (doa) => {
  return (
    <div className='flex flex-col items-end justify-end border-b-2 border-neutral py-4'>
      <p className='w-full mb-6 font-bold text-left'>{doa.judul}</p>
      <p className='text-right font-arab text-4xl font-bold leading-relaxed'>{doa.arab}</p>

      <div className='mb-6 flex w-full flex-col items-start justify-start'>
        <p className='mt-2 text-left italic font-medium text-primary'>{doa.latin}</p>
        <p className='mt-6 text-left font-medium leading-relaxed tracking-wide'>{doa.terjemah}</p>
      </div>
    </div>
  )
}

DoaItem.propTypes = {
  doa: PropTypes.array,
}

export default DoaItem
