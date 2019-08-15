import React from "react";
import "./header-style.css";

const Header = props => {
  return (
    <header>
      <div href="#" className="register">
        Register
      </div>
      <a href="#" className="login">
        Login
      </a>
    </header>
  );
};

export default Header;
