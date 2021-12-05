import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function SignIn() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const login = () => {
        const json = ({
            username: Username,
            password: Password
        })
        axios.post("http://localhost:3100/singin", json)
            .then(res => {
                alert(res.data.message)
            })
    }

    return (
        <div className="authContainer">
            <div className="autenticationContaier">
                <div className="containerForm">
                    <div className="formSend">
                        <form>
                            <div className="form-group">
                                <input type="text" id="usermane" onChange={(e) => setUsername(e.target.value)} name="usermane" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} name="password" className="form-control" placeholder="Password" />
                            </div>
                            <button onClick={login} className="button-send">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;