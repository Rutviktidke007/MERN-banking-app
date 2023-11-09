// Author: [Kiran Yadav (c3395436)]

import React from 'react';
import '../styles/style.css';
import TransactionService from "../services/TransactionService";

/**
 * Kiran Yadav (c3395436)
 * The TransactionHistory component presents a detailed overview of past transactions
 * within the "Transformer Bank" web application.
 *
 * This React component includes a predefined array of transactions, each with a unique identifier (id),
 * a description of the transaction, the transaction amount, and the date of the transaction.
 *
 * The transaction data is displayed in a table format, with columns for the date, description, and amount.
 * Amounts are styled differently based on whether they represent expenses or income, enhancing
 * the visual representation of financial transactions.
 *
 * The component utilizes CSS styles from the application's stylesheet to maintain a consistent
 * and visually appealing design.
 *
 * Overall, the TransactionHistory component contributes to a comprehensive financial record
 * for users, offering transparency and insights into their spending and income patterns.
 */

function TransactionHistory() {
  const transactionService = new TransactionService();
  const transactionFromDb =  transactionService.getAllTransactions();

  console.log(transactionFromDb)

  return (
      <div className="transaction-history">
        <h2>Transaction History</h2>
        <table>
          <thead>
          <tr>
            <th>Recipient</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>
          {transactionFromDb.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.recipient}</td>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td className={`transaction-amount ${transaction.amount < 0 ? 'expense' : 'income'}`}>
                  ${Math.abs(transaction.amount)}
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default TransactionHistory;
