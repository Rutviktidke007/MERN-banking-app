// Author: [Kiran Yadav (c3395436)]
import React, { useState } from 'react';
import '../styles/style.css'; 
/**
 * Kiran Yadav (c3395436
 * The Payment component allows users to make bill payments within the "Transformer Bank" web application.
 * This React component includes a form with input fields for the bill name and amount to be paid.
 *
 * State variables, 'billName' and 'amount', are managed using the useState hook to dynamically update
 * and reflect the user's input in the form.
 *
 * The 'handlePayment' function is triggered when the form is submitted, preventing the default form submission
 * and resetting the input values, providing a seamless user experience.
 *
 * The form includes input validation with 'required' attributes to ensure that users provide the necessary
 * information for a successful bill payment.
 *
 * The component is styled using CSS styles from the 'style.css' file, maintaining a consistent and visually
 * appealing design across the application.
 *
 * Overall, the Payment component offers a user-friendly interface for making bill payments, enhancing the
 * financial management experience within the application.
 */
function Payment() {
  const [billName, setBillName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');


  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentMessage('Bill payment successful!');

    setBillName('');
    setAmount('');
  };

  return (
    <div className="bill-payment">
      <h2>Bill Payment</h2>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="billName">Bill Name:</label>
          <input
            type="text"
            id="billName"
            value={billName}
            onChange={(e) => setBillName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button className="cta-button" type="submit">
          Pay Bill
        </button>
      </form>
      {paymentMessage && <div className="payment-message">{paymentMessage}</div>}

    </div>
  );
}

export default Payment;





