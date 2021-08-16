import React from "react";

export default function Dollar({ value, fontSize }) {
  return (
    <div className="dollar" style={{ fontSize }}>
      <span style={{ color: "#79828B", fontSize }}>$</span>
      {value}
    </div>
  );
}
