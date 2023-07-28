import React from 'react';
import '../styles/header.css'

const Header: React.FC = () => {
  return (
    <header>
      <h1>My React Website</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
