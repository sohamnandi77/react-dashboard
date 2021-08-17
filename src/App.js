import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import Level4 from "./components/Level4";

function App() {
  return (
    <div className="App">
      <div className="blue-bg"></div>
      <div className="container-lg main">
        <div className="top-nav">
          <Header />
          <Navbar />
        </div>
        <Level1 />
        <Level2 />
        <Level3 />
        <Level4 />
      </div>
    </div>
  );
}

export default App;
