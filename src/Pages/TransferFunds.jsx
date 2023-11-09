// Author: [Kiran Yadav (c3395436)]

import React, { useState } from 'react';
import '../styles/style.css';
import transactionService from "../services/TransactionService";
import TransactionService from "../services/TransactionService";
/**
 * Kiran Yadav (c3395436)
 * The TransferFunds component enables users to transfer funds to a recipient within
 * the "Transformer Bank" web application.
 *
 * This React component utilizes the useState hook to manage state variables for the recipient's name
 * and the amount to be transferred.
 *
 * The 'handleTransfer' function is triggered when the user submits the form, preventing the default form
 * submission and resetting the input values, ensuring a seamless transfer experience.
 *
 * The form includes input fields for the recipient's name and the transfer amount, with validation
 * to ensure that users provide the necessary information for a successful fund transfer.
 *
 * The component is styled using CSS styles from the 'style.css' file, maintaining a consistent and visually
 * appealing design across the application.
 *
 * Overall, the TransferFunds component provides users with a straightforward and secure method to transfer
 * funds, contributing to a seamless and efficient banking experience.
 */
function TransferFunds() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transferMessage, setTransferMessage] = useState('');
  const transactionService = new TransactionService();


  const handleTransfer = (e) => {
    e.preventDefault();

    const date = new Date();
    const monthName = date.toLocaleDateString('en-US', { month: 'short' });
    const day = String(date.getDate()).padStart(2, '0');
    console.log(transactionService.getId(), 'id')

    transactionService.insertTransaction({
      "id": transactionService.getId(),
      "recipient": recipient,
      "description": description,
      "amount": amount,
      "date": `${date.getFullYear()}-${monthName}-${day}`
    })

    setRecipient('');
    setAmount('');
    setDescription('')

    setTransferMessage('Funds transferred successfully!');
  };

  return (
    <div className="transfer-funds">
      <h2>Transfer Funds</h2>
      <form onSubmit={handleTransfer}>
        <div className="form-group">
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
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
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
          />
        </div>
        <button className="cta-button" type="submit">
          Transfer
        </button>
      </form>
      {transferMessage && <div className="transfer-message">{transferMessage}</div>}

    </div>
  );
}

export default TransferFunds;
