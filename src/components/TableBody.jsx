import PropTypes from "prop-types"
import { matchDate } from "../utils/constant"

const TableBody = ({ data }) => {
  console.log(matchDate)
  return (
    <tbody className='text-lg font-semibold'>
      {data.data.jadwal.map((sholat) => (
        <tr key={sholat.date} className={sholat.date === matchDate ? "bg-neutral text-neutral-content" : ""}>
          <td>{sholat.tanggal}</td>
          <td>{sholat.imsak}</td>
          <td>{sholat.subuh}</td>
          <td>{sholat.terbit}</td>
          <td>{sholat.dhuha}</td>
          <td>{sholat.dzuhur}</td>
          <td>{sholat.ashar}</td>
          <td>{sholat.maghrib}</td>
          <td>{sholat.isya}</td>
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.object,
}

export default TableBody
