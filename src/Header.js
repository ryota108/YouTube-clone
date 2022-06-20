import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import gentlemen from "./Image/173021.jpg";
import logo from "./Image/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__right">
        <MenuIcon />
        <img className="header__logo" src={logo} alt="" />
      </div>
      <div className="header__input">
        <input type="text" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon/>
        <AppsIcon/>
        <NotificationsIcon/>
        <Avatar alt="Aran" src={gentlemen} />
        </div>
    </div>
  );
}

export default Header;
