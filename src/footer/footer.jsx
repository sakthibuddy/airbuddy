import React from "react";
import "./footer-style.css";

const Footer = props => {
  return (
    <div class="footer">
      Copyright © XXXX
      <a href="#" className="footer-links-alignment">
        About us
      </a>
      <a href="#" className="footer-links-alignment">
        Terms & Conditions
      </a>
      <a href="#" className="footer-links-alignment">
        Privacy Policy
      </a>
    </div>
  );
};

export default Footer;
