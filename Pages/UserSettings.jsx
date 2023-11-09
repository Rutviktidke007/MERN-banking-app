// UserSettings.js
import React, { useState } from 'react';
import '../styles/style.css';

/**
 * The UserSettings component allows users to customize and manage their account settings
 * within the "Transformer Bank" web application.
 *
 * Created by Kiran Yadav (c3395436), this React component utilizes the useState hook to manage
 * user data such as notification preferences, language settings, favorites, font size, login time,
 * and session timeout.
 *
 * The initial settings are set with default values, and separate state variables are used to
 * track changes for each setting.
 *
 * The 'handleSaveSettings' function is triggered when the user clicks the "Save Settings" button,
 * allowing users to persist their customized preferences.
 *
 * Input fields include checkboxes for receiving notifications, managing favorites, adjusting font size,
 *
 * The component is styled using CSS styles from the 'style.css' file, ensuring a consistent and visually
 * appealing design across the application.
 *
 * Overall, the UserSettings component empowers users to tailor their banking experience, contributing
 * to a personalized and user-centric application interface.
 */

function UserSettings() {
  const [notification, setNotification] = useState(true);
  const [language, setLanguage] = useState('English');
  const [favorites, setFavorites] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [saveMessage, setSaveMessage] = useState('');


  const handleSaveSettings = () => {
    setSaveMessage('Settings saved successfully!');


  };

  return (
    <div className="dashboard">
      <div className="account-setting">
        <h2>Account Settings</h2>
      </div>
      <div className="user-settings">
        <div className="setting-item">
          <label htmlFor="notification">Receive Notifications:</label>
          <input
            type="checkbox"
            id="notification"
            checked={notification}
            onChange={() => setNotification(!notification)}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="language">Preferred Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Hindi">Hindi</option>
            <option value="Chinese">Chinese</option>
            <option value="Korean">Korean</option>

          </select>
        </div>
        <div className="setting-item">
          <label htmlFor="favorites">Manage Favorites:</label>
          <input
            type="checkbox"
            id="favorites"
            checked={favorites}
            onChange={() => setFavorites(!favorites)}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="fontSize">Font Size:</label>
          <select
            id="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        
       
      </div>
      <div className="save-settings-footer">
      <button className="cta-button" onClick={handleSaveSettings}>
  Save Settings
</button>
{saveMessage && <div className="save-message">{saveMessage}</div>}

      </div>
    </div>
  );
}

export default UserSettings;
