import React from 'react'

export function Login() {
    return (
        
        <div className="formSend">
            <form>
                <div className="form-group">
                    <input type="text" id="usermane" name="usermane" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="password" id="password" name="password" className="form-control" placeholder="Password" />
                </div>
                <button className="button-send">Login</button>
            </form>
        </div>
    );
}