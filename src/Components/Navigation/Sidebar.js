import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import MenuIcon from '@material-ui/icons/Menu';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import '../../Styles/Navigation/sidebar.css'
import SidebarItem from './SidebarItem';

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

            <SidebarItem 
                title="Home" 
                icon={() => <HomeIcon className="sidebar-item-icon"/>} />
            <SidebarItem 
                title="Trending"
                icon={() => <WhatshotIcon className="sidebar-item-icon"/>}/>
            <SidebarItem 
                title="Subscriptions" 
                icon={() => <SubscriptionsIcon className="sidebar-item-icon"/>}/>
            

            {/* break */}
            <div className="break" ></div>

            <SidebarItem 
                title="Library" 
                icon={() => <VideoLibraryIcon className="sidebar-item-icon"/>} />
            <SidebarItem 
                title="History"
                clsName="show-item" 
                icon={() => <HistoryIcon className="sidebar-item-icon"/>} />
            <SidebarItem 
                title="Watch Later"
                clsName="show-item" 
                icon={() => <WatchLaterIcon className="sidebar-item-icon"/>} />
            <SidebarItem 
                title="Playlist 1"
                clsName="show-item" 
                icon={() => <PlaylistAddIcon className="sidebar-item-icon"/>} />
            <SidebarItem 
                title="Playlist 2"
                clsName="show-item" 
                icon={() => <PlaylistAddIcon className="sidebar-item-icon"/>} />


            {/* break */}
            <div className="break" ></div>

            <div className = "sidebar-item-head show-item">
                <div className = "sidebar-item-title">
                    Subscriptions
                </div>
            </div>
        </div>
    )
}

export default Sidebar
