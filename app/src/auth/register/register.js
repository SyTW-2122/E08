import React, { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../../_action";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertUsername: false,
      alertPassword: false,
      alertConfirmPassword: false,
      alertResponse: false,
    };
  }

  authUsername(username) {
    if (username === "") {
      this.setState({
        alertUsername: true,
      });
      return false;
    } else {
      this.setState({
        alertUsername: false,
      });
      return true;
    }
  }

  authPassword(password) {
    if (password === "") {
      this.setState({
        alertPassword: true,
      });
      return false;
    } else {
      this.setState({
        alertPassword: false,
      });
      return true;
    }
  }

  authConfirmPassword(password, confirm) {
    if (password === confirm) {
      this.setState({
        alertConfirmPassword: false,
      });
      return true;
    } else {
      this.setState({
        alertConfirmPassword: true,
      });
      return false;
    }
  }

  onHandleSubmit = (e) => {
    e.preventDefault();

    if (this.authUsername(this.username.value))
      if (this.authPassword(this.password.value))
        if (this.authConfirmPassword(this.password.value, this.confirmPassword.value)) {
          const userObjet = {
            username: this.username.value,
            password: this.password.value,
          };

          this.props.register(userObjet);
        }
    this.setState({
      alertResponse: true,
    });
  };

  render() {
    const { authReducer } = this.props;

    return (
      <div className="formSend">
        <form action="#" onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              ref={(input) => (this.username = input)}
              name="username"
              className="form-control"
              placeholder="Username"
            />
            {this.state.alertUsername && <p>The username is required</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              ref={(input) => (this.password = input)}
              className="form-control"
              placeholder="Password"
            />
            {this.state.alertPassword && <p>The password is required</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              ref={(input) => (this.confirmPassword = input)}
              className="form-control"
              placeholder="Confirm Password"
            />
            {this.state.alertConfirmPassword && <p>The password does not match</p>}
          </div>
          <button className="button-send">Register</button>
        </form>

        {authReducer.responseApi && this.state.alertResponse && (
          <div>
            <span>{authReducer.response.message}</span>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authReducer } = state;
  return { authReducer };
}

const actionCreator = {
  register: authActions.register,
};

const registerComponent = connect(mapStateToProps, actionCreator)(Register);
export { registerComponent as Register };
