import React from "react";

export default function CardTop({
  backgroundColor,
  imgUrl,
  username,
  subtitle,
  fontSize,
}) {
  return (
    <>
      <div className="user-img">
        <img
          className="rounded-circle"
          style={{ backgroundColor }}
          alt="100x100"
          src={`./asset/svgs/${imgUrl}.svg`}
          data-holder-rendered="true"
        />
      </div>
      <div className="user-info ms-4">
        <div className="user-name">{username}</div>
        <div className="user-subtitle" style={{ fontSize }}>
          {subtitle}
        </div>
      </div>
    </>
  );
}
