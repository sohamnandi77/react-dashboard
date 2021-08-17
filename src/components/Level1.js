import React from "react";
import Earning from "./Earning";
import Rank from "./Rank";

export default function Level1() {
  return (
    <>
      <div className="level-1 mt-5">
        <div className="row">
          <div className="col-sm-8 col-12 mb-sm-0 mb-3">
            <Earning />
          </div>
          <div className="col-sm-4 col-12">
            <Rank />
          </div>
        </div>
      </div>
    </>
  );
}
