import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendVideos from "./RecommendVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
      <Sidebar/>
      <RecommendVideos/>
      </div>
    </div>
  );
}

export default App;
