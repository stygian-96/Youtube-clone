import React,{useState, useEffect} from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import MenuIcon from '@material-ui/icons/Menu';
import '../../style/Navigation/sidebar.css'

function Sidebar() {
    return (
        <div className = "watch-sidebar-open">
            <div className = "watch-sidebar-logo show">
                <div className="watch-sidebar-icon">
                    <MenuIcon />
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
            <div className="break" ></div>
        </div>
    )
}

export default Sidebar
