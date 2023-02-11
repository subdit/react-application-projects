import Logo from '../assets/1.jpg';
import './header.css';
export const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={Logo} alt='' />
    </div>
  );
};
