import "./App.css";
import Gifs from "./components/Gifs";
import PostMessage from "./components/PostMessage";

function App() {
  return (
    <div className="App">
      <PostMessage />
      <Gifs />
    </div>
  );
}

export default App;
