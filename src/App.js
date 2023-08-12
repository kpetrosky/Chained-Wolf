import React, { useState } from 'react';
import Header from './components/Header';
import VerticalNavBar from './components/VerticalNavBar';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import ProductDetails from './components/pages/ProductDetails';
import CustomerReviews from './components/pages/CustomerReviews';
import ShippingAndReturns from './components/pages/ShippingAndReturns';
import PaymentOptions from './components/pages/PaymentOptions';
import CartAndCheckout from './components/pages/CartAndCheckout';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  let pageComponent;

  switch (currentPage) {
    case 'Gallery':
      pageComponent = <Gallery />;
      break;
    case 'Product Details':
      pageComponent = <ProductDetails />;
      break;
    case 'Customer Reviews':
      pageComponent = <CustomerReviews />;
      break;
    case 'Shipping and Returns':
      pageComponent = <ShippingAndReturns />;
      break;
    case 'Payment Options':
      pageComponent = <PaymentOptions />;
      break;
    case 'Cart and Checkout':
      pageComponent = <CartAndCheckout />;
      break;
    default:
      pageComponent = <Home />;
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <VerticalNavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {pageComponent}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
