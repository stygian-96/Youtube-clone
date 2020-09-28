import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import MenuIcon from '@material-ui/icons/Menu';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import '../../style/Navigation/sidebar.css'

const Sidebar = ({clsName, changeSidebarState}) => {
    return (
        <div className = {`sidebar ${clsName}`}>
            <div className = "watch-sidebar-logo show">
                <div className="watch-sidebar-icon">
                    <MenuIcon onClick={changeSidebarState}/>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube"
                    className="watch-sidebar-nav-logo"
                />
            </div>
            <div className = "sidebar-item">
                <HomeIcon className="sidebar-item-icon" />
                <div className = "sidebar-item-title">
                    Home
                </div>
            </div>
            <div className = "sidebar-item">
                <WhatshotIcon className="sidebar-item-icon" />
                <div className = "sidebar-item-title">
                    Trending
                </div>
            </div>
            <div className = "sidebar-item">
                <SubscriptionsIcon className="sidebar-item-icon" />
                <div className = "sidebar-item-title">
                    Subscriptions
                </div>
            </div>

            {/* break */}
            <div className="break" ></div>


            <div className = "sidebar-item">
                <VideoLibraryIcon className="sidebar-item-icon" />
                <div className = "sidebar-item-title">
                    Library
                </div>
            </div>
            <div className = "sidebar-item show-item">
                <HistoryIcon className="sidebar-item-icon" />
                <div className = "sidebar-item-title">
                    History
                </div>
            </div>
            <div className = "sidebar-item show-item">
                <WatchLaterIcon className="sidebar-item-icon" />
                <div className = "sidebar-item-title">
                    Watch Later
                </div>
            </div>
            <div className = "sidebar-item show-item">
                <PlaylistAddIcon className="sidebar-item-icon" />
                <div className = "sidebar-item-title">
                    Playlist 1
                </div>
            </div>
            <div className = "sidebar-item show-item">
                <PlaylistAddIcon className="sidebar-item-icon" />
                <div className = "sidebar-item-title">
                    Playlist 2
                </div>
            </div>

            {/* break */}
            <div className="break" ></div>
        </div>
    )
}

export default Sidebar
