import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import gentlemen from "./Image/173021.jpg";
import VideoRow from "./VideoRow";
import tm1 from "./Image/thumbnail1.png";

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
          image={tm1}
          channel="Alan smith"
          subs="1000K"
          title="how to create youtube in 30 min this is so helpful and funny video!"
          timestamp="3分前"
          noOfVideos={382}
          description="He is so genius. I can't believe that he exist because he is super talented"/>
    <VideoRow
          image={tm1}
          channel="Alan smith"
          subs="1000K"
          title="how to create youtube in 30 min this is so helpful and funny video!"
          timestamp="3分前"
          noOfVideos={382}
          description="He is so genius. I can't believe that he exist because he is super talented"/>
    <VideoRow
          image={tm1}
          channel="Alan smith"
          subs="1000K"
          title="how to create youtube in 30 min this is so helpful and funny video!"
          timestamp="3分前"
          noOfVideos={382}
          description="He is so genius. I can't believe that he exist because he is super talented"/>
    <VideoRow
          image={tm1}
          channel="Alan smith"
          subs="1000K"
          title="how to create youtube in 30 min this is so helpful and funny video!"
          timestamp="3分前"
          noOfVideos={382}
          description="He is so genius. I can't believe that he exist because he is super talented"/>
    <VideoRow
          image={tm1}
          channel="Alan smith"
          subs="1000K"
          title="how to create youtube in 30 min this is so helpful and funny video!"
          timestamp="3分前"
          noOfVideos={382}
          description="He is so genius. I can't believe that he exist because he is super talented"/>
    <VideoRow
          image={tm1}
          channel="Alan smith"
          subs="1000K"
          title="how to create youtube in 30 min this is so helpful and funny video!"
          timestamp="3分前"
          noOfVideos={382}
          description="He is so genius. I can't believe that he exist because he is super talented"/>
    <VideoRow
          image={tm1}
          channel="Alan smith"
          subs="1000K"
          title="how to create youtube in 30 min this is so helpful and funny video!"
          timestamp="3分前"
          noOfVideos={382}
          description="He is so genius. I can't believe that he exist because he is super talented"/>
    <VideoRow
          image={tm1}
          channel="Alan smith"
          subs="1000K"
          title="how to create youtube in 30 min this is so helpful and funny video!"
          timestamp="3分前"
          noOfVideos={382}
          description="He is so genius. I can't believe that he exist because he is super talented"/>
    </div>

  );
}

export default SearchPage;
