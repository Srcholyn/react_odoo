import React, { useState, useEffect } from 'react';
import Navitems from './Navitems';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import tsclogo from '../img/TSC-logo-white.png';

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('');
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  return (
    <div className={`header ${stickyClass}`}>
      <div className='container'>
        <a href='/'>
          <img alt='Link to' src={tsclogo} height={100} width={150} />
        </a>
        <div className='tsc'>Thai Space Consortium</div>
        <div className='line'></div>
        <div className='header-con'>
          <nav>
            <ul className='menu'>
              <Navitems item='Mission' tolink='/Mission' />
              <Navitems item='Project_timeline' tolink='/Projecttimeline' />
              <Navitems item='Organization_chart' tolink='/Organizationchart' />
              <Navitems item='News' tolink='/News' />
              <Navitems item='RnD_project' tolink='/RnDproject' />
              <Navitems item='Co_operative' tolink='/Co-operative' />
              <Navitems item='Careers' tolink='/Careers' />
              <Navitems item='Contact' tolink='/Contact' />
            </ul>
          </nav>
        </div>
        <div className='mobile-menu' onClick={handleClick}>
          {click ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
