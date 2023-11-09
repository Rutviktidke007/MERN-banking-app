import React, { useState, useEffect } from 'react';
import '../styles/style.css';

function Dashboard() {
  const [accountBalance, setAccountBalance] = useState(() => {
    const storedBalance = localStorage.getItem('currentBalance');
    return storedBalance ? parseFloat(storedBalance) : 5000;
  });

  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const handleZoomIn = () => {
    setIsZoomedIn(true);
  };

  const handleZoomOut = () => {
    setIsZoomedIn(false);
  };

  useEffect(() => {
    localStorage.setItem('currentBalance', accountBalance.toString());
  }, [accountBalance]);

  return (
    <div className={`dashboard ${isZoomedIn ? 'zoomed-in' : ''}`}>
      <div className="zoom-buttons">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
      <div className="account-summary">
        <h2>Account Summary</h2>
      </div>
      <div className="transaction-description">
        <p>Current Balance:</p>
        <p className="balance-amount">${accountBalance}</p>
      </div>
    </div>
  );
}

export default Dashboard;

