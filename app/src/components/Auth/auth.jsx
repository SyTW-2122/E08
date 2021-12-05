import React, { Component } from 'react';
import { Register } from './register';
import { Login } from './login';
import '../css/auth.css'

export class Auth extends Component {

    onHandleNavClick = (e) => {
        this.setState({
            actualTap: e.target.id
        })
    }

    render() {
        return (
            <div className="authContainer">
                <div className="autenticationContaier">
                    <div className="containerNavigations">
                        <div
                            className="authTap tapActive"
                            id="login"
                            onClick={this.onHandleNavClick}>Login</div>

                        <div
                            className="authTap"
                            id="register"
                            onClick={this.onHandleNavClick}>Register</div>
                    </div>
                    <div className="containerForm">
                        <Login />
                        <Register />
                    </div>
                </div>
            </div>
        )
    }
}
