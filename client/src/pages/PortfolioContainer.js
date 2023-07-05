import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Custom from './pages/Custom'; // Import the CustomWork component
import Footer from '../Footer';
import backgroundImage9 from '../images/wolf-2.jpg';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const divStyle = {
    color: '#1b9aaaff',
    // backgroundColor: '#e5446dff',
    padding: '20px',
    backgroundImage: `url(${backgroundImage9})`,
  };

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Catalog') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    } 
    if (currentPage === 'Custom Work') {
      return <Custom />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div style={divStyle}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
