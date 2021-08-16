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
        <div className="col-sm-8 col-12">
          <div className="mb-3">
            <CardNav title="Activity" text="view all activity" />
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="mb-3">
            <CardNav title="Top Earners" text="view all" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 col-12">
          <Activity />
        </div>
        <div className="col-sm-4 col-12">
          <Earners />
        </div>
      </div>
    </div>
  );
}
