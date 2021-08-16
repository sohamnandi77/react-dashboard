import React from "react";
import Tag from "./Tag";

export default function BTC({ value }) {
  return (
    <>
      <Tag
        value={`${value} BTC`}
        color="#D28E62"
        background="rgba(210, 142, 98,0.1)"
      />
    </>
  );
}
