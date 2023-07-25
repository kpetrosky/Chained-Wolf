import React from 'react';

const PaymentOptions = () => {
  return (
    <div>
      <h2>Payment Options</h2>
      <p>
        Choose from various payment options to complete your purchase. We
        accept the following methods of payment:
      </p>
      <ul>
        <li>Credit Card</li>
        <li>Debit Card</li>
        <li>PayPal</li>
        <li>Apple Pay</li>
        {/* Add more payment options as needed */}
      </ul>
      {/* Add any other payment-related information or functionality */}
    </div>
  );
};

export default PaymentOptions;

