import PropTypes from "prop-types"
import JadwalSholatItem from "../components/JadwalSholatItem"

const JadwalSholatList = ({ cities }) => {
  return cities.length > 0 ? (
    <div className='flex flex-wrap gap-3 justify-center text-center'>
      {cities.map((city) => (
        <JadwalSholatItem key={city.id} id={city.id} lokasi={city.lokasi} />
      ))}
    </div>
  ) : (
    <p>Tidak ada data</p>
  )
}

JadwalSholatList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
}

export default JadwalSholatList
