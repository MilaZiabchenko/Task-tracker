import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const { pathname } = useLocation();

  return (
    <header className='header'>
      <h1 style={headingStyle}>{title}</h1>
      {pathname === '/' && (
        <Button text={showAdd ? 'Close' : 'Add'} onAdd={onAdd} />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'task tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: 'hsl(100, 65%, 65%)',
  textTransform: 'capitalize',
  fontSize: '2.2rem',
};

export default Header;
