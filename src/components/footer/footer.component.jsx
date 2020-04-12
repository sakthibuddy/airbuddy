import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <Link className="copyright" to="/">
      Copyright
    </Link>
    <div className="footer-options">
      <Link className="footer-option" to="/">
        How it works?
      </Link>
      <Link className="footer-option" to="/">
        About Us
      </Link>
    </div>
  </div>
);

export default Footer;
