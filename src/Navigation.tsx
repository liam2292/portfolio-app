// Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/websites">My Websites</Link>
        </li>
        <li>
          <Link to="/games">My Games</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
