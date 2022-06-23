import React from "react";
import "./VideoCard.css";
import { Avatar } from "@mui/material";

function VideoCard({ image, title, channel, views, timestamp, channelImage,url }) {
  return (
    <a className="videoCard__link" target="_blank" rel="noreferrer" href={`https://youtu.be/${url}`}>
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
      <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
      <div className="videoCard__text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views}・{timestamp}
        </p>
      </div>
      </div>
    </div>
    </a>
  );
}

export default VideoCard;
