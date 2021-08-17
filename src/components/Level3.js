import React from "react";

export default function Level3() {
  return (
    <div className="level-3 mt-5">
      <div className="py-4 px-4 py-sm-3 px-sm-5">
        <div className="row">
          <div className="col-sm-1 col-12">
            <img
              className="img-fluid hashtag mx-auto d-block"
              src="./asset/svgs/slack.svg"
              alt=""
            />
          </div>
          <div className="col-sm-6 col-12 my-sm-0 my-3">
            <div className="card-body">
              <div className="card-title">Join the conversation on Slack</div>
              <div className="card-title-text">
                Stay up to date on the latest news and special programs that
                only take place within the slack channel.
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-12 btn-layout">
            <button className="btn px-sm-4 me-2 py-sm-3" type="button">
              Remind Later
            </button>
            <button
              className="btn px-sm-4 py-sm-3 ms-2 ms-sm-3 active"
              type="button"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
