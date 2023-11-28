import SubTitle from "../components/SubTitle"
import Title from "../components/Title"
import PropTypes from "prop-types"

const Heading = ({ title, subTitle }) => {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default Heading
