import { BiComment } from "react-icons/bi"

const TafsirButton = () => {
  return (
    <button className='flex items-center space-x-1' onClick={() => document.getElementById("modal").showModal()}>
      <BiComment /> <p className='text-lg font-bold'>Tafsir</p>
    </button>
  )
}

export default TafsirButton
