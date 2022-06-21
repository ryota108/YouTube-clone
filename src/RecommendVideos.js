import React from "react";
import "./RecommendVideos.css";
import VideoCard from "./VideoCard";
import tm1 from "./Image/thumbnail1.png";
import gentlemen from "./Image/173021.jpg";

function RecommendVideos() {
  return (
    <div className="recommendVideos">
      <h2>あなたにおすすめ</h2>
      <div className="recommendVideos__videos">
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
