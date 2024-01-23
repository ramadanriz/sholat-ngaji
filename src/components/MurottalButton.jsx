import { IoMdVolumeHigh } from "react-icons/io";
import PropTypes from "prop-types"

const MurottalButton = ({ onMurottal }) => {
  return (
    <button className='flex items-center space-x-1' onClick={() => onMurottal()}>
      <IoMdVolumeHigh /> <p className='text-lg font-bold'>Murottal</p>
    </button>
  );
};

MurottalButton.propTypes = {
    onMurottal: PropTypes.func,
  }

export default MurottalButton;
