import PropTypes from "prop-types"

const Title = ({ children }) => {
  return <h1 className='text-3xl font-semibold text-center capitalize'>{children}</h1>
}

Title.propTypes = {
  children: PropTypes.string,
}

export default Title
