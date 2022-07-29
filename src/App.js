import "./App.css";
import Profile from "./profile/Profile";

function App() {
  let url =
    "http://blog.trello.com/hubfs/2017-06-09_How-To-Handle-Inspiration-Overload_cover@2x.png";
  return (
    <div className="App">
      <Profile
        fullName="ala lamouchi"
        description="I call ala lamouchi vive ou bousalem student I like classical music and
        cinema and travel"
      >
        {url}
      </Profile>
    </div>
  );
}

export default App;
