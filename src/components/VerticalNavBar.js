import React from 'react';
import { Link } from 'react-router-dom';
import {  } from "./VerticalNavBar.css";

function VerticalNavBar({ currentPage, handlePageChange }) {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Product Details', link: '/product-details' },
    { name: 'Customer Reviews', link: '/customer-reviews' },
    { name: 'Shipping and Returns', link: '/shipping-and-returns' },
    { name: 'Payment Options', link: '/payment-options' },
    { name: 'Cart and Checkout', link: '/cart-and-checkout' },
  ];

  return (
    <nav className="vertical-nav">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              onClick={() => handlePageChange(item.name)}
              className={currentPage === item.name ? 'active' : ''}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default VerticalNavBar;
