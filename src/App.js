import "./App.css";
import NavBar from "./components/NavBar";
import "./style/landingpage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      {/* intro */}
      <div className="myBG">
        <NavBar />
        <Intro />
      </div>
      {/* intro end */}

      {/* trending */}
      <div className="trending">
        <Trending />
      </div>
      {/* trending end */}

      {/* superhero */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* superhero end */}
    </div>
  );
}

export default App;
