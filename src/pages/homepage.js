import React from "react";
import { Link } from "react-router-dom";

export function Home() {
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
