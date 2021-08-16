import React from "react";
import CardHead from "./CardHead";
import GreyTag from "./GreyTag";
import CardTitle from "./CardTitle";

export default function Rank() {
  return (
    <div className="card">
      <div className="m-3">
        <div className="row">
          <div className="col-6">
            <CardHead head="Rank" img="star" num="607" />
            <div className="para">
              You’re in top <span style={{ color: "#10C176" }}>40%</span>
            </div>
          </div>
          <div className="col-6">
            <CardHead head="Projects" img="project" num="42" />
            <div className="para">
              <span style={{ color: "#10C176" }}>10</span> in this month
            </div>
          </div>
        </div>
        <div className="line my-4"></div>
        <CardTitle title="Top Categories" />
        <div className="tags mt-3">
          <div className="me-3">
            <GreyTag value="ruby" />
          </div>
          <div className="me-3">
            <GreyTag value="clojure" />
          </div>
          <div className="me-3">
            <GreyTag value="java" />
          </div>
        </div>
      </div>
    </div>
  );
}
