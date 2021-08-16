import React from "react";

function Header(props) {
  return (
    <div className="nav-header">
      <div className="round-logo"></div>
      <div className="company-name ms-3">
        <span className="fw-bolder">Dash</span>
        <span className="fw-light spanText">Elements</span>
      </div>
      <div className="notification me-3">
        <i className="bi bi-bell-fill"></i>
        <div className="num-bg">
          <span className="num">3</span>
        </div>
      </div>
      <div className="user me-3 fw-bold">Alex Doe</div>
      <div className="down-arrow">
        <i className="bi bi-chevron-down"></i>
      </div>
    </div>
  );
}

export default Header;
