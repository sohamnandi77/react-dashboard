import React from "react";
import CardTitle from "./CardTitle";
import UserRanking from "./UserRanking";

export default function Earners() {
  return (
    <div style={{ height: "91.8%" }}>
      <div className="card">
        <div className="m-3">
          <div className="card-head mb-3">
            <CardTitle title="Rankings" />
            <div className="this-month me-3">This month</div>
            <div className="all-time">All Time</div>
          </div>
          <div className="user-rankings">
            <UserRanking
              backgroundColor="#BCD0E7"
              imgUrl="user-3"
              username="Mathew John"
              subtitle="$10938.34"
            />
            <div className="line my-3"></div>
            <UserRanking
              backgroundColor="#BCD0E7"
              imgUrl="user-4"
              username="Daniel Belu"
              subtitle="$9087.10"
            />
            <div className="line my-3"></div>
            <UserRanking
              backgroundColor="#FFD7AB"
              imgUrl="user-1"
              username="Elizabeth Kin"
              subtitle="$6789.90"
            />
            <div className="line my-3"></div>
            <UserRanking
              backgroundColor="#FFABAB"
              imgUrl="user-2"
              username="Arosuh Uyt"
              subtitle=" $6009.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
