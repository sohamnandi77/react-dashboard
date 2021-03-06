import React from "react";
import Navlink from "./Navlink";

export default function DownNavbar() {
  return (
    <nav className="navbar navbar-expand-sm m-0 my-sm-5">
      <div className="container-fluid">
        <div
          className="hamburger navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div></div>
        </div>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Navlink name="Home" url="#" cname="active" />
            <Navlink name="My Projects" url="#" cname="" />
            <Navlink name="Payments" url="#" cname="" />
            <Navlink name="Activity" url="#" cname="" />
            <Navlink name="Settings" url="#" cname="" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
