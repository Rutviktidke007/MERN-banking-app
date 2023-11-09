import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserActionService from "../services/UserActionService";

function Login({setAuth}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const userActionService = new UserActionService();
        const users = userActionService.getAllUsers();

        const validUser = users.filter(u => u.userName.toLowerCase() === username.toLowerCase() && u.password === password)

        if(validUser.length > 0){
            userActionService.successLogin();
            setAuth(true);
            navigate('/dashboard')
            console.log('message from login')
        }else{
            setAuth(false);
            userActionService.Logout();
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button style={{margin: '10px'}} className="cta-button" type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
