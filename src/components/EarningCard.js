import React from "react";
import ETH from "./shared/ETH";
import BTC from "./shared/BTC";
import Dollar from "./shared/Dollar";
import CardTitle from "./shared/CardTitle";

export default function EarningCard() {
  return (
    <div className="card earning">
      <div className="m-3">
        <CardTitle title="Earning" />
        <div className="row flex-column-reverse flex-sm-row">
          <div className="col-sm-3 col-12">
            <div className="row flex-sm-row">
              <div className="col-sm-12 col-6">
                <Dollar value="2878.90" fontSize="2rem" />
                <div className="card-text" style={{ color: "#79828B" }}>
                  <span style={{ color: "#10C176" }}>+42</span> since last week
                </div>
              </div>
              <div className="col-sm-12 col-6">
                <div className="mt-4">
                  <ETH value="0.9087" />
                </div>
                <div className="mt-4">
                  <BTC value="0.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-12">
            <img
              className="img-fluid graph-mobile"
              src="./asset/svgs/graph-mobile.svg"
              alt=""
            />
            <img
              className="img-fluid graph"
              src="./asset/svgs/graph.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
