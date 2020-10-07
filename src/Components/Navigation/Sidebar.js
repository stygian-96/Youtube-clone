import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SidebarIcon from './SidebarItem'
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

            <SidebarItem title="Home" iconName="home" />
            <SidebarItem title="Trending" iconName="whatshot"/>
            <SidebarIcon title="Subscriptions" iconName="subscriptions"/>
            

            {/* break */}
            <div className="break" ></div>

            <SidebarItem title="Library" iconName="video_library" />
            <SidebarItem title="History" iconName="history" />
            <SidebarItem title="Watch Later" iconName="watchlater" />
            <SidebarItem title="Playlist 1" iconName="playlist_add" />
            <SidebarItem title="Playlist 2" iconName="playlist_add" />


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
