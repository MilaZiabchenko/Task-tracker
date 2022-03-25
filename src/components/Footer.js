import { useLocation, Link } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer>
      {pathname === '/' ? (
        <Link to='/about'>About</Link>
      ) : (
        <Link to='/'>Go Back</Link>
      )}
    </footer>
  );
};

export default Footer;
