import React from "react";
import TopNavbar from "./TopNavbar";
import DownNavbar from "./DownNavbar";
export default function Navbar() {
  return (
    <>
      <div className="top-nav">
        <TopNavbar />
        <DownNavbar />
      </div>
    </>
  );
}
