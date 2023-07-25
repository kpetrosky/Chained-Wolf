import React, { useState } from 'react';

const CustomerReviews = () => {
  // Define state to hold customer reviews
  const [reviews, setReviews] = useState([]);

  // Add a sample review
  const addReview = () => {
    const newReview = {
      id: reviews.length + 1,
      author: 'John Doe',
      reviewText: 'This product is amazing!',
      rating: 5,
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <h2>Customer Reviews</h2>
      <button onClick={addReview}>Add Sample Review</button>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.author}</strong> - Rating: {review.rating}
            <p>{review.reviewText}</p>
          </li>
        ))}
      </ul>
      {/* Additional review-related functionality can be added here */}
    </div>
  );
};

export default CustomerReviews;
