import PropTypes from "prop-types"

const TafsirModal = ({ id, data }) => {
  return (
    <dialog id={id} className='modal'>
      <div className='modal-box w-11/12 max-w-5xl'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
        </form>
        <h3 className='font-bold text-lg'>Tafsir surah {data.data.name.transliteration.id}</h3>
        <p className='py-4'>{data.data.tafsir.id}</p>
      </div>
    </dialog>
  )
}

TafsirModal.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
}

export default TafsirModal
