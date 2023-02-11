import React from 'react';
import Logo from '../assets/logo-2.png';

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt='' />
      <a href='/'>Home</a>
    </header>
  );
};
