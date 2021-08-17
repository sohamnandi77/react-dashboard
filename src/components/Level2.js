import React from "react";
import CardNav from "./CardNav";
import ProfileCard from "./ProfileCard";

export default function Level2() {
  return (
    <div className="level-2 mt-5">
      <CardNav title="Suggested Projects" text="view all projects" />
      <div className="row mt-3">
        <div className="col-sm-4 col-12 mb-sm-0 mb-3">
          <ProfileCard
            imgUrl="user-1"
            backgroundColor="#FFD7AB"
            username="Alice Martin"
            subtitle="5 hours ago"
            tag="html"
            cardText="Design and develop a website for an educational platform focusing on the growth of children."
            eth="1.2"
            btc="0.3"
            dollar="760"
          />
        </div>
        <div className="col-sm-4 col-12 mb-sm-0 mb-3">
          <ProfileCard
            imgUrl="user-2"
            backgroundColor="#FFABAB"
            username="Alberto Donko"
            subtitle="Yesterday, 9:40pm"
            tag="ruby"
            cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            eth="3"
            btc="1"
            dollar="3360"
          />
        </div>
        <div className="col-sm-4 col-12 mb-sm-0 mb-3">
          <ProfileCard
            imgUrl="user-3"
            backgroundColor="#BCD0E7"
            username="Alexander Goe"
            subtitle="Yesterday, 2:00pm"
            tag="ruby"
            cardText="Scrambled it to make a type specimen book. It has survived not only five centuries."
            eth="1"
            btc="0.2"
            dollar="620"
          />
        </div>
      </div>
    </div>
  );
}
