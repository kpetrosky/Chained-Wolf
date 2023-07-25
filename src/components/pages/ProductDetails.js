import React from 'react';

const ProductDetails = () => {
  // Replace the following data with your actual product data
  const product = {
    id: 1,
    name: 'Sample Product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 19.99,
    imageUrl: '/path/to/product-image.jpg',
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add any other product details or functionality */}
    </div>
  );
};

export default ProductDetails;
