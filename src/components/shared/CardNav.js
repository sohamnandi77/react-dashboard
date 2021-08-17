import React from "react";
import CardTitle from "./CardTitle";

export default function CardNav({ title, text }) {
  return (
    <div className="card-nav">
      <div className="card-nav-title">{title}</div>
      <CardTitle title={text} />
      <div className="ms-2">
        <img src="./asset/svgs/arrow-right.svg" alt="" />
      </div>
    </div>
  );
}
