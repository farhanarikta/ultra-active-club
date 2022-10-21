import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="brand-title">
        <div className="brand-img">
          <img src={logo} alt="" />
        </div>
        <div>
          <h2>
            <span>IELTS</span> PREP
          </h2>
          <p>Best Web Application for IELTS Preparation.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
