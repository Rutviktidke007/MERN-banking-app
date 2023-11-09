import React from 'react';
// Author: [Kiran Yadav (c3395436)]
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

/**
 * Kiran Yadav (c3395436)
 * The Header component represents the navigation bar for the "Transformer Bank" web application.
 * It is a functional React component structured with JSX for a clear and concise layout.
 *
 * The header includes a clickable logo that links to the home page and a navigation menu
 * with links to different sections of the banking application. The navigation links cover
 * essential features such as account summary, transaction history, fund transfers, bill payment,
 * profile details, and customer support.
 *
 * The use of React's Link component suggests the application is built with React Router,
 * enabling seamless client-side navigation without full page reloads.
 *
 * Overall, this Header component establishes a foundation for a user-friendly and well-organized
 * interface, making it easy for users to navigate through the various functionalities of the
 * banking application.
 */
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          <Link to="/">Transformer Bank</Link>
        </h1>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Account Summary</Link>
            </li>
            <li>
              <Link to="/history">Transaction History</Link>
            </li>
            <li>
              <Link to="/funds">Transfer Funds</Link>
            </li>
            <li>
              <Link to="/payment">Bill Payment</Link>
            </li>
            <li>
              <Link to="/profile">Profile Detail</Link>
            </li>
            <li>
              <Link to="/settings">User Preferences</Link>
            </li>
            <li>
              <Link to="/support">Help</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
