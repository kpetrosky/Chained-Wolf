import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="App-header">
      <div className="header-container">
      <div className="container">
        <h1 className="title">Chained Wolfe MetalCrafts</h1>
      </div>
        {/* <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#Home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Gallery"
              onClick={() => handlePageChange('Gallery')}
              className={currentPage === 'Gallery' ? 'nav-link active' : 'nav-link'}
            >
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#ProductDetails"
              onClick={() => handlePageChange('ProductDetails')}
              className={currentPage === 'ProductDetails' ? 'nav-link active' : 'nav-link'}
            >
              Product Details
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#CustomerReviews"
              onClick={() => handlePageChange('CustomerReviews')}
              className={currentPage === 'CustomerReviews' ? 'nav-link active' : 'nav-link'}
            >
              Customer Reviews
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#ShippingAndReturns"
              onClick={() => handlePageChange('ShippingAndReturns')}
              className={currentPage === 'ShippingAndReturns' ? 'nav-link active' : 'nav-link'}
            >
              Shipping And Returns
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#PaymentOptions"
              onClick={() => handlePageChange('PaymentOptions')}
              className={currentPage === 'PaymentOptions' ? 'nav-link active' : 'nav-link'}
            >
              Payment Options
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#CartAndCheckout"
              onClick={() => handlePageChange('CartAndCheckout')}
              className={currentPage === 'CartAndCheckout' ? 'nav-link active' : 'nav-link'}
            >
              Cart And Checkout
            </a>
          </li>
        </ul> */}
      </div>
      {/* <div className="container">
        <h1 className="title">Chained Wolfe MetalCrafts</h1>
      </div> */}
    </header>
  );
}

export default Header;
