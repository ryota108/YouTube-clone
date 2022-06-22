import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import gentlemen from "./Image/173021.jpg";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
      image={gentlemen}
      channel="Alan smith"
      verified
      subs="1000K"
      noOfVideos={382}
      descriptions="He is so genius. I can't believe that he exist because he is super talented"/>
    <hr/>

    <VideoRow
          image={gentlemen}
          channel="Alan smith"
          subs="1000K"
          title="funny video!"
          timestamp="3分前"
          noOfVideos={382}
          descriptions="He is so genius. I can't believe that he exist because he is super talented"/>
    </div>

  );
}

export default SearchPage;
