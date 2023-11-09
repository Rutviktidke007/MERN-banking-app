// Author: [Kiran Yadav (c3395436)]
import React from 'react';
import '../styles/Footer.css';
/**
 * Kiran Yadav c3395436
 * The Footer component represents the footer section of the "Transformer Bank" web application.
 * Created by Kiran Yadav (c3395436), this React component includes essential information,
 * such as the bank's logo, copyright notice, and contact details.
 *
 * The footer is styled using a separate 'Footer.css' file, providing a consistent and
 * visually appealing design across the application.
 *
 * The 'Transformer Bank' logo is displayed along with copyright information, indicating
 * that all rights are reserved in the year 2023. Contact information is provided for user support
 * through the email address help@transformer.com.
 *
 * Overall, the Footer component adds a professional and polished touch to the application's
 * visual presentation, contributing to a cohesive user experience.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span>Transformer Bank</span>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 Transformer Bank. All rights reserved.</p>
          <p>Contact: help@transformer.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
