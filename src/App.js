/* Author: [Kiran Yadav (c3395436)] */

import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import TransactionHistory from './Pages/TransactionHistory';
import TransferFunds from './Pages/TransferFunds';
import Payment from './Pages/Payment';
import Profile from './Pages/Profile';
import Help from './Pages/Help';
import UserSettings from './Pages/UserSettings';
import Login from "./Pages/Login";
import UserActionService from "./services/UserActionService";
import {ProtectedRoute} from "./Components/ProtectedRoute";


const userActionService = new UserActionService();

const logOutUser = () => {
    userActionService.Logout()
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => localStorage.getItem('login_success') === "true" || false
    );

    const setAuth = (value) => {
        console.log(isAuthenticated, 'isAuthenticated')
        setIsAuthenticated(value);
    };

    useEffect(() => {
        window.addEventListener('beforeunload', logOutUser)
        return () => {
            window.removeEventListener('beforeunload', logOutUser)
        }
    })

    useEffect(() => {
        console.log(isAuthenticated, 'isAuthenticated')
        localStorage.setItem("login_success", JSON.stringify(isAuthenticated));
        setIsAuthenticated(localStorage.getItem('login_success') === "true")
    }, [isAuthenticated]);

    console.log(userActionService.isUserAuthenticated(), 'is authenticated')

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Login setAuth={setAuth}/>}/>
                    <Route exact path='/dashboard' element={<Dashboard/>}/>
                    <Route exact path='/history' element={
                        isAuthenticated ?
                            <TransactionHistory/> :
                            <Navigate to="/" replace/>
                    }/>
                    <Route exact path='/funds' element={<TransferFunds/>}/>
                    <Route exact path='/payment' element={<Payment/>}/>
                    <Route exact path='/profile' element={<Profile/>}/>
                    <Route exact path='/support' element={<Help/>}/>
                    <Route exact path='/settings' element={<UserSettings/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App;