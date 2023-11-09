// Author: [Kiran Yadav (c3395436)]

import React from 'react';
import '../styles/style.css';
/**
 * Kiran Yadav (c3395436
 * The Home component represents the landing page of the "Transformer Bank" web application.
 * This React component showcases a welcoming message, quick account overview, contact information,
 * and video tutorials to guide users through the platform.
 *
 * The layout is structured into sections, with the "home-content" section featuring a welcoming message,
 * emphasizing the simplicity and tailored experience for seniors in banking.
 *
 * The "Quick Account Overview" section provides a snapshot of the account balance and recent transactions,
 * giving users key information at a glance.
 *
 * The "Contact Us" section includes a prompt for assistance and contact details for reaching the support team.
 *
 * Video tutorials are embedded using an iframe, offering step-by-step guidance on using the platform.
 *
 * The component utilizes styles from the 'style.css' file to maintain a consistent and visually appealing design.
 *
 * Overall, the Home component serves as the introduction and central hub for users, encouraging engagement
 * and providing essential information for a positive onboarding experience.
 */

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h2>Welcome to Transformer Bank</h2>
        <p>Simplified Banking, Tailored for Seniors.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="quick-overview">
        <h3>Quick Account Overview</h3>
        <div className="account-summary">
          <div className="account-balance">
            <p>Account Balance:</p>
            <p>$5,000.00</p>
          </div>
          <div className="recent-transactions">
            <p>Recent Transactions:</p>
            <p>Deposit, Bill Payment, Withdrawal</p>
          </div>
        </div>
      </div>
      <div className="contact-support">
        <h3>Contact Us</h3>
        <p>If you need assistance or have questions, please contact our support team at <a href="tel:+44444444">44444444</a>.</p>
      </div>
      <div className="video-tutorials">
        <h3>Video Tutorials</h3>
        <p>Learn how to use our platform with step-by-step video tutorials.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Video Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      
    </div>
  );
}

export default Home;
