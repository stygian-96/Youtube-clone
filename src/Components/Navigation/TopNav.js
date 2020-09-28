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
                <div className="nav-profile">
                    <img src="https://lh3.googleusercontent.com/-rW0mpavz1eo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclprhZYyE8IHU8g2ALJYt0B46E3Vg/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default TopNav