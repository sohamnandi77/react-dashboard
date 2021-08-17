import React from "react";
import CardTop from "./shared/CardTop";
export default function UserRanking({
  backgroundColor,
  imgUrl,
  username,
  subtitle,
}) {
  return (
    <>
      <div className="user-ranking">
        <CardTop
          backgroundColor={backgroundColor}
          imgUrl={imgUrl}
          username={username}
          subtitle={subtitle}
          fontSize="1rem"
        />
      </div>
    </>
  );
}
