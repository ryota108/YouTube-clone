import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendVideos from "./RecommendVideos";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  function Search (){
    return(
      <div style={{display:"flex"}}>
      <Sidebar/>
      <SearchPage/>
      </div>
    )
  }
  function Home() {
    return (
      <div className="App">
        <div className="app__page">
          <Sidebar />
          <RecommendVideos />
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<Search/>} />
      </Routes>
    </>
  );
}

export default App;
