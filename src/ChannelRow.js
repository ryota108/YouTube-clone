import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  descriptions,
}) {
  return <div className="channelRow">
    <Avatar className="channelRow__logo" alt={channel} src={image}/>
    <div className="channelRow__text">
      <h4>{channel} {verified && <CheckCircleOutlineIcon/> }</h4>
      <p>
        {subs} subscribers ・ {noOfVideos} videos
      </p>
      <p>{descriptions}</p>
    </div>
  </div>;
}

export default ChannelRow;
