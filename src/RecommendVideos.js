import React from "react";
import "./RecommendVideos.css";
import VideoCard from "./VideoCard";
import axios from "axios";
import { useEffect, useState } from "react";
import tm1 from "./Image/thumbnail1.png";
import gentlemen from "./Image/173021.jpg";

function RecommendVideos() {
  const [videos, setVideos] = useState([]);
  const YOUTUBE_API_KEY = "AIzaSyAZgQzYbgU7IT9nFpCJc55j4aNnadW0Irc";

  const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=早稲田&maxResults=10&key=${YOUTUBE_API_KEY}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch(() => {
        console.log("通信に失敗しました");
      });
  }, [url]);
  return (
    <div className="recommendVideos">
      <h2 style={{fontFamily:"serif"}}>あなたにおすすめ</h2>
      <div className="recommendVideos__videos">
        {videos.map((video) => {
          return (
            <VideoCard
              url={video?.id.videoId}
              title={video?.snippet.title}
              views="2.3M Views"
              timestamp="3 days ago"
              channelImage={gentlemen}
              channel={video?.snippet.channelTitle}
              image={video?.snippet.thumbnails.medium.url}
            />
          );
        })}

        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020/2022"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={gentlemen}
          channel="Ryota Kodama"
          image={tm1}
        />
      </div>
    </div>
  );
}

export default RecommendVideos;
