import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const JadwalSholatItem = ({ id, lokasi }) => {
  return (
    <Link to={`/sholat/${id}`} key={id} className='card rounded-sm w-full md:w-[315px] bg-base-300 border-2 border-neutral'>
      <div className='card-body items-center'>
        <h2 className='card-title'>{lokasi}</h2>
      </div>
    </Link>
  )
}

JadwalSholatItem.propTypes = {
  id: PropTypes.string,
  lokasi: PropTypes.string,
}

export default JadwalSholatItem
