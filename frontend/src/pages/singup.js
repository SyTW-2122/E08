import React from 'react'
import axios from 'axios';


function SignUp() {
    const [Username, setUsername] = ('')
    const [Password, setPassword] = ('')

    const register = () => {
        const json = ({
            username: Username,
            password: Password
        })
        axios.post("http://localhost:3100/singup", json)
            .then(res => {
                alert(res.data.message)
            })
    }
    return (
        <div className="authContainer">
            <div className="autenticationContaier">
                <div className="containerForm">
                    <div className="formSend">
                        <form action="#">
                            <div className="form-group">
                                <input type="text" id="usermane" onChange={(e) => setUsername(e.target.value)} name="usermane" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} name="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                            </div>
                            <button onClick={register} className="button-send">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;