import PropTypes from 'prop-types';

const Button = ({ text, onAdd }) => {
  return (
    <button className='btn btn-add' onClick={onAdd}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
