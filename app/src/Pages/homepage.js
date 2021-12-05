import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Welcome</h1>
          <p>
            <Link to="/auth">Logout</Link>
          </p>
        </div>
      </div>
    );
  }
}

const homeComponent = connect()(Home);
export { homeComponent as Home };
