import React from 'react';

const Gallery = () => {
  // Replace the following data with your actual gallery data
  const chainmailPieces = [
    {
      id: 1,
      title: 'Chainmail Shirt',
      imageUrl: '/path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'Chainmail Coif',
      imageUrl: '/path/to/image2.jpg',
    },
    {
      id: 3,
      title: 'Chainmail Hauberk',
      imageUrl: '/path/to/image3.jpg',
    },
    // Add more chainmail pieces as needed
  ];

  return (
    <div>
      <h2>Gallery of Old Chainmail Pieces</h2>
      <div className="gallery-container">
        {chainmailPieces.map((piece) => (
          <div key={piece.id} className="gallery-item">
            <img src={piece.imageUrl} alt={piece.title} />
            <p>{piece.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
