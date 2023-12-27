import PropTypes from "prop-types"
import { matchDate } from "../utils/constant"

const TableBody = ({ data }) => {
  return (
    <tbody className='text-lg font-semibold'>
      {data.data.data.map((sholat) => (
        <tr key={sholat.date} className={sholat.date === matchDate ? "bg-neutral text-neutral-content" : ""}>
          <td>{sholat.date}</td>
          <td>{sholat.adzan.Imsyak}</td>
          <td>{sholat.adzan.Shubuh}</td>
          <td>{sholat.adzan.Terbit}</td>
          <td>{sholat.adzan.Dhuha}</td>
          <td>{sholat.adzan.Dzuhur}</td>
          <td>{sholat.adzan.Ashr}</td>
          <td>{sholat.adzan.Maghrib}</td>
          <td>{sholat.adzan.Isya}</td>
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.object,
}

export default TableBody
