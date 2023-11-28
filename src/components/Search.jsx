import { FaSearch } from "react-icons/fa"
import PropTypes from "prop-types"

const Search = ({ keyword, inputChange, placeholder }) => {
  return (
    <div className='relative w-full md:w-1/2 lg:w-2/5'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <FaSearch className='text-neutral-content' />
      </div>
      <input className='block p-2 my-4 w-full ps-10 bg-base-200 border border-neutral rounded-[4px]' type='text' placeholder={placeholder} value={keyword} onChange={inputChange} autoFocus />
    </div>
  )
}

Search.propTypes = {
  keyword: PropTypes.string,
  inputChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default Search
