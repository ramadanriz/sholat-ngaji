import PropTypes from "prop-types"
import TableHeading from "../components/TableHeading"
import TableBody from "../components/TableBody"

const JadwalSholatTable = ({ heading, data }) => {
  return (
    <table className='table text-center'>
      <TableHeading heading={heading} />
      <TableBody data={data} />
    </table>
  )
}

JadwalSholatTable.propTypes = {
  heading: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.object,
}

export default JadwalSholatTable
