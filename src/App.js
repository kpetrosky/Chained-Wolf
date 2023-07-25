import React from 'react';
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
  return (
    <div className="App">
      <Header />
      <CartAndCheckout />
      <CustomerReviews />
      <PaymentOptions />
      <ProductDetails />
      <ShippingAndReturns />
      <HomePage />
      <Gallery />     
      <Footer />
    </div>
  );
}

export default App;
