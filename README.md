# 🏦 MERN Stack Banking Website for Elderly Users

## 📌 Project Overview
This project is a **user-friendly banking website** designed specifically for elderly users, ensuring **simplicity, accessibility, and security**. Built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**, this platform enables senior citizens to manage their finances with ease.

## 🚀 Features
### ✅ User-Friendly Interface
- Large fonts, high contrast, and simple navigation.
- Voice assistance for easy interaction.
- Multi-language support for accessibility.

### ✅ Secure Account Management
- User authentication (Signup/Login with JWT).
- Role-based access control for security.
- Two-factor authentication for extra protection.

### ✅ Banking Operations
- View account balance and transaction history.
- Transfer funds between accounts securely.
- Pay utility bills with a few clicks.

### ✅ Customer Support
- AI chatbot for instant assistance.
- Video call option with bank representatives.
- Request assistance with a single button click.

## 🛠️ Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)

## 📂 Folder Structure
```
📦 Banking-App
 ┣ 📂 client  # React Frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 App.js
 ┣ 📂 server  # Node.js Backend
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 controllers
 ┃ ┣ 📜 server.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Rutviktidke007/mern-banking-app.git
cd mern-banking-app
```

### 2️⃣ Install Dependencies
#### Frontend
```sh
cd client
npm install
```
#### Backend
```sh
cd server
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the `server` directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4️⃣ Run the Project
#### Start the Backend
```sh
cd server
npm start
```
#### Start the Frontend
```sh
cd client
npm start
```

### 5️⃣ Open in Browser
Go to `http://localhost:3000`

## 🛡️ Security Features
- **Data Encryption:** Ensures sensitive user data is secure.
- **Session Timeout:** Auto logout after inactivity.
- **Secure APIs:** Input validation and authentication.

## 🚀 Future Enhancements
- Mobile app support.
- AI-powered financial advice.
- Voice command-based transactions.

## 📜 License
This project is **open-source** under the [MIT License](LICENSE).

---
💡 **Developed with ❤️ for senior citizens to manage finances effortlessly!**
