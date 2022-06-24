import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

function VideoCard({
  title,
  channel,
  channelImage,
  url,
  videoId,
  clickHandler,
}) {
  const clickHandle = () => {
    const id = videoId;
    clickHandler(id);
  };
  return (
    <Link to="detail/id" className="videoCard__link" onClick={clickHandle}>
      <div className="videoCard">
        <iframe
          className="videoCard__thumbnail"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="videoCard__info">
          <Avatar
            className="videoCard__avatar"
            alt={channel}
            src={channelImage}
          />
          <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
