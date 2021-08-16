import React from "react";

export default function Level3() {
  return (
    <div className="level-3 mt-5">
      <div className="py-3 px-5">
        <div className="row">
          <div className="col-sm-1 col-12">
            <img className="img-fluid" src="./asset/svgs/slack.svg" alt="" />
          </div>
          <div className="col-sm-6 col-12">
            <div className="card-body">
              <div className="card-title">Join the conversation on Slack</div>
              <div className="card-title-text">
                Stay up to date on the latest news and special programs that
                only take place within the slack channel.
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-12 btn-layout">
            <button className="btn px-4 py-2" type="button">
              Remind Later
            </button>
            <button className="btn px-4 py-2 ms-3 active" type="button">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
