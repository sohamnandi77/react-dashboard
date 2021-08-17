import React from "react";
import CardTop from "../shared/CardTop";
import Tag from "../shared/Tag";
import Dollar from "../shared/Dollar";

export default function UserActivity({
  symbol,
  backgroundColor,
  imgUrl,
  username,
  subtitle,
  time,
  value,
  color,
  background,
  dollarValue,
}) {
  return (
    <>
      <div className="user-activity">
        <div>
          <img
            className="rounded-circle img-fluid"
            alt="100x100"
            src={`./asset/svgs/${symbol}.svg`}
            data-holder-rendered="true"
          />
        </div>
        <div className="user">
          <CardTop
            backgroundColor={backgroundColor}
            imgUrl={imgUrl}
            username={username}
            subtitle={subtitle}
            fontSize="0.9rem"
          />
        </div>
        <div className="user-subtitle" style={{ fontSize: "0.8rem" }}>
          {time}
        </div>
      </div>
      <div className="user-earning my-2">
        <Tag value={value} color={color} background={background} />
        <div className="ms-3">
          <Dollar value={dollarValue} fontSize="1rem" />
        </div>
      </div>
    </>
  );
}
