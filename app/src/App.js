import React from "react";
import './App.css';
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import SignUp from './pages/singup';
import SignIn from './pages/singin';
import './components/css/auth.css'


export function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}
