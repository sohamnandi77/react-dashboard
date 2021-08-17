import "./App.css";
import Navbar from "./components/navbar/Navbar";
import EarningCard from "./components/EarningCard";
import RankCard from "./components/RankCard";
import SuggestedProject from "./components/SuggestedProject";
import SlackCard from "./components/SlackCard";
import CardNav from "./components/shared/CardNav";
import ActivityCard from "./components/ActivityCard";
import EarnersCard from "./components/EarnersCard";

function App() {
  return (
    <div className="App">
      <div className="blue-bg"></div>
      <div className="container-lg main">
        <Navbar />
        <div className="mt-5">
          <div className="row">
            <div className="col-sm-8 col-12 mb-sm-0 mb-3">
              <EarningCard />
            </div>
            <div className="col-sm-4 col-12">
              <RankCard />
            </div>
          </div>
        </div>
        <SuggestedProject />
        <SlackCard />
        <div className="level-4 my-5">
          <div className="row">
            <div className="col-sm-8 col-12 mb-sm-0 mb-4">
              <div className="pb-3">
                <CardNav title="Activity" text="view all activity" />
              </div>
              <ActivityCard />
            </div>
            <div className="col-sm-4 col-12">
              <div className="pb-3">
                <CardNav title="Top Earners" text="view all" />
              </div>
              <EarnersCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
