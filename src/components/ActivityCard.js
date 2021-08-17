import React from "react";
import UserActivity from "./UserActivity";
import CardTitle from "./shared/CardTitle";

export default function ActivityCard() {
  return (
    <div style={{ height: "91.8%" }}>
      <div className="card">
        <div className="m-3">
          <div className="card-head mb-3">
            <CardTitle title="Recent" />
          </div>
          <div className="user-Activities">
            <UserActivity
              symbol="dollar-green"
              imgUrl="user-4"
              backgroundColor="#BCD0E7"
              username="Daniel Belu"
              subtitle="Recieved $760 for a Ruby project."
              time="1 hours ago"
              value="1.2 ETH"
              color="#6271D2"
              background="rgba(98,113,210,0.1)"
              dollarValue="760"
            />
            <UserActivity
              symbol="dollar-green"
              imgUrl="user-2"
              backgroundColor="#FFABAB"
              username="Christophe F. Batista"
              subtitle="Received  $620 for an html project."
              time="3 hours ago"
              value="0.2 BTC"
              color="#D28E62"
              background="rgba(210, 142, 98,0.1)"
              dollarValue="620"
            />
            <UserActivity
              symbol="blue-code"
              imgUrl="user-1"
              backgroundColor="#BCD0E7"
              username="Alice Martin"
              subtitle="Submitted a project in html."
              time="5 hours ago"
              value="0.3 BTC"
              color="#D28E62"
              background="rgba(210, 142, 98,0.1)"
              dollarValue="760"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
