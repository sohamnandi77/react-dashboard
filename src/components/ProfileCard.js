import React from "react";
import BTC from "./shared/BTC";
import ETH from "./shared/ETH";
import Dollar from "./shared/Dollar";
import GreyTag from "./shared/GreyTag";
import CardTop from "./shared/CardTop";

export default function ProfileCard({
  imgUrl,
  backgroundColor,
  username,
  subtitle,
  tag,
  cardText,
  eth,
  btc,
  dollar,
}) {
  return (
    <div className="card">
      <div className="m-3">
        <div className="card-top">
          <CardTop
            backgroundColor={backgroundColor}
            imgUrl={imgUrl}
            username={username}
            subtitle={subtitle}
            fontSize="0.8rem"
          />
          <div className="tag">
            <GreyTag value={tag} />
          </div>
        </div>
        <div className="card-body">{cardText}</div>
        <div className="line" style={{ border: "1px solid #E6EBF0" }}></div>
        <div className="card-end mt-4 mb-2">
          <div>
            <ETH value={eth} />
          </div>
          <div className="ms-3">
            <BTC value={btc} />
          </div>
          <div style={{ marginLeft: "auto" }}>
            <Dollar value={dollar} fontSize="1.2rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
