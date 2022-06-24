import React,{useState} from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import gentlemen from "./Image/173021.jpg";
import logo from "./Image/logo.png";
import {Link} from "react-router-dom";


function Header(props) {
  const [close, setClose] = useState(false);
  const [search,setSearch] = useState("")
  const clickHandler = ()=>{
    setClose((prev)=>!prev);
    props.onSubmit(close);
  }
  return (
    <div className="header">
      <div className="header__right">
        <MenuIcon onClick={clickHandler}/>
        <Link to="/">
        <img className="header__logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" onChange={(e)=> setSearch(e.target.value)} value={search} />
        <Link to={`/search/${search}`}>
        <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon  className="header__icon"/>
        <AppsIcon className="header__icon"  />
        <NotificationsIcon className="header__icon" />
        <Avatar alt="Aran" src={gentlemen} />
      </div>
    </div>
  );
}

export default Header;
