import React from "react";
import "./Detail.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import VideoColumn from "./VideoColumn";

function Detail({ videoId, title, channel, channelImg }) {
  return (
    <div className="Detail">
      <div className="leftScreen">
        <div className="Detail__youtube">
          <iframe
            className="Detail__mainVideo"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="Detail__videoInfo">
            <h1 className="Detail__title">{title}</h1>
            <ThumbUpOffAltIcon className="Detail__icon" />
            <ThumbDownOffAltIcon className="Detail__icon" />
            <ShareIcon className="Detail__icon" />
          </div>
          <hr />
          <div className="Detail__channelInfo">
            <img className="Detail__channelIcon" src={channelImg} />
            <p>
              <strong>{channel}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="rightScreen">
        <VideoColumn />
      </div>
    </div>
  );
}

export default Detail;
