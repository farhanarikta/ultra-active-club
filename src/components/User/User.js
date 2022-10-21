import React from "react";
import userImage from "../../images/man.png";
import "./User.css";
import { GoLocation } from "react-icons/go";
const User = () => {
  return (
    <div className="user-container">
      <div className="user-profile">
        <div className="user-img">
          <img src={userImage} alt="" />
        </div>
        <div className="user-info">
          <h2 className="name">MICHEL JESS</h2>
          <p className="address">
            <GoLocation></GoLocation> Street:  341 Laurel Lee, Sedalia,Missouri.
          </p>
        </div>
      </div>
      <div className="user-details">
        <div className="age">
          <h1>27</h1>
          <p>Age</p>
        </div>
        <div className="Avarage">
          <h1>8</h1>
          <p>Desired Score</p>
        </div>
      </div>
    </div>
  );
};

export default User;
