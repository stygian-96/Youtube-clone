import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import '../../style/Navigation/topnav.css'
import '@polymer/paper-ripple/paper-ripple.js';

const TopNav = ({changeSidebarState}) => {
    return (
        <div className = "top-nav">
            <div className = "logo">
                <div className="icon" onClick = {changeSidebarState}>
                    <MenuIcon className="nav-icon"/>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube"
                    className="nav-logo"
                />
            </div>
            <div className="search">
                <form>
                    <input placeholder="Search"/>
                    <div className="search-icon-container">
                        <SearchIcon className="nav-icon"/>
                    </div>
                </form>
            </div>
            <div className="right">
                <div className="icon">
                    <VideoCallIcon className="nav-icon"/>
                </div>
                <div className="icon">
                    <AppsIcon className="nav-icon"/>
                </div>
                <div className="icon">
                    <NotificationsIcon className="nav-icon"/>
                </div>
                <div className="nav-profile"></div>
            </div>
        </div>
    )
}

export default TopNav