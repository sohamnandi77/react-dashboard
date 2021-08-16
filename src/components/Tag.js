import React from "react";

export default function Tag({ value, color, background }) {
  return (
    <span className="tag-name px-3 py-1" style={{ color, background }}>
      {value}
    </span>
  );
}
