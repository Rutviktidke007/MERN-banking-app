// Author: [Kiran Yadav (c3395436)]

import React from 'react';
import '../styles/style.css';

/**
 * Kiran Yadav (c3395436
 * The Help component provides information and resources for user assistance and support
 * within the "Transformer Bank" web application.
 *
 * Created by Kiran Yadav (c3395436), this React component displays contact details for support,
 * along with additional resources to aid users in finding answers to their queries.
 *
 * The component includes a section for contacting support via email, encouraging users to reach out
 * to 'support@Transformerbank.com' for assistance.
 *
 * The "Additional Resources" section provides quick access to frequently asked questions (FAQs),
 * video tutorials, and contact information through clickable links.
 *
 * The layout and styling of the component are defined in the 'style.css' file, ensuring a cohesive
 * and visually appealing presentation.
 *
 * Overall, the Help component serves as a centralized hub for users to seek guidance, fostering
 * a positive and supportive user experience within the application.
 */

function Help() {
  return (
    <div className="help-support">
      <h2>Help and Support</h2>
      <p>
        If you need assistance or have questions, please contact our support team at{' '}
        <a href="mailto:support@transformerbank.com">support@transformerbank.com</a>.
      </p>
      <h3>Additional Resources</h3>
      <ul>
        <li>
          <a href="https://transformerbank.com/faq">Frequently Asked Questions</a>
        </li>
        <li>
          <a href="https://transformerbank.com/tutorials">Video Tutorials</a>
        </li>
        <li>
          <a href="https://transformerbank.com/contact">Contact Information</a>
        </li>
      </ul>
    </div>
  );
}

export default Help;
