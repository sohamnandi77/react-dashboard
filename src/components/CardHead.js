import React from "react";
import CardTitle from "./shared/CardTitle";

export default function CardHead({ head, img, num }) {
  return (
    <>
      <CardTitle title={head} />
      <div className="card-body p-0 pt-3">
        <div className="row">
          <div className="col-4">
            <img
              className="img-fluid"
              src={`./asset/svgs/${img}.svg`}
              alt={img}
            />
          </div>
          <div className="num col-8 ps-0 pe-0" style={{ fontSize: "2rem" }}>
            {num}
          </div>
        </div>
      </div>
    </>
  );
}
