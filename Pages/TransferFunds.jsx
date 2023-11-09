// Author: [Kiran Yadav (c3395436)]

import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import TransactionService from "../services/TransactionService";

function TransferFunds() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [currentBalance, setCurrentBalance] = useState(() => {
    // Retrieve the balance from local storage or default to 5000
    const storedBalance = localStorage.getItem('currentBalance');
    return storedBalance ? parseFloat(storedBalance) : 5000;
  });
  const [transferMessage, setTransferMessage] = useState('');
  const transactionService = new TransactionService();
  const maxTransactionLimit = 5000;

  useEffect(() => {
    // Update local storage when the balance changes
    localStorage.setItem('currentBalance', currentBalance.toString());
  }, [currentBalance]);

  const handleTransfer = (e) => {
    e.preventDefault();

    const date = new Date();
    const monthName = date.toLocaleDateString('en-US', { month: 'short' });
    const day = String(date.getDate()).padStart(2, '0');
    console.log(transactionService.getId(), 'id')

    const newTransactionAmount = parseFloat(amount);

    const existingTransactions = transactionService.getAllTransactions();
    const totalTransactionsAmount = existingTransactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
    const potentialTotalAmount = totalTransactionsAmount + newTransactionAmount;

    if (potentialTotalAmount <= maxTransactionLimit) {
      transactionService.insertTransaction({
        "id": transactionService.getId(),
        "recipient": recipient,
        "description": description,
        "amount": amount,
        "date": `${date.getFullYear()}-${monthName}-${day}`
      });

      setRecipient('');
      setAmount('');
      setDescription('');

      const newBalance = currentBalance - newTransactionAmount;
      setCurrentBalance(newBalance);

      setTransferMessage('Funds transferred successfully!');
    } else {
      setTransferMessage('Transaction failed: Insufficient funds. Exceeds maximum allowed limit.');
    }
  };

  return (
    <div className="transfer-funds">
      <h2>Transfer Funds</h2>
      <p>Current Balance: ${currentBalance}</p>
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


