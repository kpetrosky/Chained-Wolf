import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          About:
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Catalog"
          onClick={() => handlePageChange('Catalog')}
          className={currentPage === 'Catalog' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          Catalog:
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          Contact:
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#custom"
          onClick={() => handlePageChange('Custom Work')} // Update the page value to 'Custom Work'
          className={currentPage === 'Custom Work' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 32px
        >
          Custom Work:
        </a>
      </li>

    </ul>
  );
}

export default Header;

