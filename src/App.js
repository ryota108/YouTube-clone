import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import RecommendVideos from "./RecommendVideos";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Detail from "./Detail";
import data from "./Data/data";

function App() {
  // const [close, setClose] = useState(false);
  const [id, setId] = useState("");
  const detail = data.filter((video) => {
    return video.videoId === id;
  });

  // const submitHelper = (prev) => {
  //   setClose(prev);
  // };
  const clickHelper = (prev) => {
    setId(prev);
  };
  function Search() {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <SearchPage />
      </div>
    );
  }
  function Home() {
    return (
      <div className="App">
        <div className="app__page">
          <Sidebar />
          <RecommendVideos onHelper={clickHelper} />
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<Search />} />
        <Route
          path="/detail/:detail"
          element={
            <Detail
              title={detail[0]?.title}
              videoId={detail[0]?.videoId}
              channel={detail[0]?.channel}
              channelImg={detail[0]?.channelImg}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
