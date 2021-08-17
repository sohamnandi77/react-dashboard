import React from "react";
import Activity from "./Activity";
import Earners from "./Earners";
import CardNav from "./CardNav";

export default function Level4({
  symbol,
  backgroundColor,
  imgUrl,
  username,
  subtitle,
}) {
  return (
    <div className="level-4 my-5">
      <div className="row">
        <div className="col-sm-8 col-12 mb-sm-0 mb-4">
          <div className="pb-3">
            <CardNav title="Activity" text="view all activity" />
          </div>
          <Activity />
        </div>
        <div className="col-sm-4 col-12">
          <div className="pb-3">
            <CardNav title="Top Earners" text="view all" />
          </div>
          <Earners />
        </div>
      </div>
    </div>
  );
}
