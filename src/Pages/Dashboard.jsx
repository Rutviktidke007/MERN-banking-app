import React from 'react';
import '../styles/style.css';

/**
 * Kiran Yadav c3395436
 * The Dashboard component represents the main dashboard of the "Transformer Bank" web application.
 * It displays the account summary and recent transactions.
 *
 * The account summary includes the current balance, providing users with a quick overview of their financial status.
 *
 * Recent transactions are listed, each with a unique identifier (id), description, amount, and date.
 * Transaction amounts are styled differently based on whether they are expenses or income.
 *
 * The component utilizes CSS styles from the 'style.css' file to achieve a consistent and visually appealing layout.
 *
 * Overall, the Dashboard enhances the user experience by presenting key financial information in a clear and organized manner.
 */

function Dashboard() {
  const accountBalance = 5000;
  const recentTransactions = [
    { id: 1, description: 'Utility Bill', amount: -100, date: '2023-10-15' },
    { id: 2, description: 'Deposit', amount: 1000, date: '2023-10-10' },
    { id: 3, description: 'Groceries', amount: -50, date: '2023-10-05' },
  ];

  return (
    <div className="dashboard">
      <div className="account-summary">
        <h2>Account Summary</h2>
        
      </div>
      <div className="transaction-description">
          <p>Current Balance:</p>
          <p className="balance-amount">${accountBalance}</p>
        </div>
      <div className="recent-transactions">
        <h3>Recent Transactions</h3>
        <ul>
          {recentTransactions.map((transaction) => (
            <li key={transaction.id} className="transaction-item">
              <div className="transaction-description">{transaction.description}</div>
              <div className={`transaction-amount ${transaction.amount < 0 ? 'expense' : 'income'}`}>
                ${Math.abs(transaction.amount)}
              </div>
              <div className="transaction-date">{transaction.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
