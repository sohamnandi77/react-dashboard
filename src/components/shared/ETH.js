import React from "react";
import Tag from "./Tag";

export default function ETH({ value }) {
  return (
    <>
      <Tag
        value={`${value} ETH`}
        color="#6271D2"
        background="rgba(98,113,210,0.1)"
      />
    </>
  );
}
