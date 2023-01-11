import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinners';

const override = {
  display: 'block',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  background: '#dedede',
  zIndex: '1500',
};

export const MyLoader = ({ isLoading }) => {
  return (
    <BarLoader
      cssOverride={override}
      loading={isLoading}
      color=" #07bc0c "
      height={4}
      aria-label="Loading Spinner"
      speedMultiplier={0.5}
    />
  );
};

MyLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
