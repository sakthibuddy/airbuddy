import React from "react";
import "./header-style.css";

const Header = props => {
  return (
    <header>
      <a href="#" className="register">
        Register
      </a>
      <a href="#" className="login">
        Login
      </a>
    </header>
  );
};

export default Header;
