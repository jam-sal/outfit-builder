import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      setPrevScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className={`header ${isScrolled ? 'scroll-down' : ''}`}>
      <nav className='navbar'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>Outfit Builder</h1>
          <ul>
            <li className="nav-item"><Link to={"/clothes"}>Clothes</Link></li>
            <li className="nav-item"><Link to={"/outfits"}>Outfits</Link></li>
            <li className="nav-item">Change Theme</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}