import PropTypes from "prop-types"

const SubTitle = ({ children }) => {
  return <p className='text-center max-w-2xl mx-auto'>{children}</p>
}

SubTitle.propTypes = {
  children: PropTypes.string,
}

export default SubTitle
