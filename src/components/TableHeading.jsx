import PropTypes from "prop-types"

const TableHeading = ({ heading }) => {
  return (
    <thead className='text-lg font-semibold'>
      <tr>
        {heading.map((item) => (
          <th key={item.id}>{item.name}</th>
        ))}
      </tr>
    </thead>
  )
}

TableHeading.propTypes = {
  heading: PropTypes.arrayOf(PropTypes.object),
}

export default TableHeading
