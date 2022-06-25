import React from "react";
import "./VideoRow.css";
import {Link} from "react-router-dom";
import { Avatar } from "@mui/material";
function VideoRow({ channelImage, channel, title, videoId,clickHandler}) {
  const clickHandle = () => {
    const id = videoId;
    clickHandler(id);
  };
  return (
    <div className="videoRow"  onClick={clickHandle}>
      <iframe
        className="videoRow__subVideo"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <div className="videoRow__headline">
          <Avatar
            className="videoRow__avatar"
            alt={channel}
            src={channelImage}
          />
          <p>{channel}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
