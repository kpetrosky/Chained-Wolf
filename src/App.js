import React, { useState } from 'react';
import './App.css';

// Import other components used on the homepage
import Header from './components/header';
import CartAndCheckout from './components/pages/CartAndCheckout'; // Correct import path
import CustomerReviews from './components/pages/CustomerReviews'; // Correct import path
import Gallery from './components/pages/Gallery'; // Correct import path
import PaymentOptions from './components/pages/PaymentOptions'; // Correct import path
import ProductDetails from './components/pages/ProductDetails'; // Correct import path
import ShippingAndReturns from './components/pages/ShippingAndReturns'; // Correct import path
import HomePage from './components/pages/homePage'; // Correct import path
import Footer from './components/footer'; // Correct import path

function App() {
  // Define state to manage the current page
  const [currentPage, setCurrentPage] = useState('homePage');

  // Define a function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Render the content based on the selected page
  let pageContent;
  switch (currentPage) {
    case 'cartAndCheckout':
      pageContent = <CartAndCheckout />;
      break;
    case 'customerReviews':
      pageContent = <CustomerReviews />;
      break;
    case 'gallery':
      pageContent = <Gallery />;
      break;
    case 'paymentOptions':
      pageContent = <PaymentOptions />;
      break;
    case 'productDetails':
      pageContent = <ProductDetails />;
      break;
    case 'shippingAndReturns':
      pageContent = <ShippingAndReturns />;
      break;
    case 'homePage':
    default:
      pageContent = <HomePage />;
      break;
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="App-content">
        {pageContent}
      </main>
      <Footer />
    </div>
  );
}

export default App;

