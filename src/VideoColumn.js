import React from "react";
import "./VideoColumn.css";
import VideoRow from "./VideoRow";
import tm1 from "./Image/thumbnail1.png";
import data from "./Data/data";

function VideoColumn(props) {
  const clickHandler = (id) => {
    props.onHelper(id);
  };
  return (
    <div className="videoColumn">
      {data.map((video) => {
        return (
          <VideoRow
            channel={video.channel}
            channelImage={video.channelImg}
            title={video.title}
            videoId={video.videoId}
            key={video.videoId}
            clickHandler={clickHandler}
          />
        );
      })}
    </div>
  );
}

export default VideoColumn;
