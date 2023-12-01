import PropTypes from "prop-types"
import DoaItem from "../components/DoaItem"

const DoaList = ({ data }) => {
  return data.length > 0 ? (
    <div className='grid grid-cols-1 gap-3 justify-center text-center'>
      {data.map((doa) => (
        <DoaItem key={doa.id} {...doa} />
      ))}
    </div>
  ) : (
    <p>Tidak ada data</p>
  )
}

DoaList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export default DoaList
