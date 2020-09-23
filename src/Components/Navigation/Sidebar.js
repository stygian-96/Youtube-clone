import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import '../../style/Navigation/sidebar.css'

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebar-item">
                <HomeIcon className="sidebar-item-icon" />
                <div>
                    Home
                </div>
            </div>
            <div className = "sidebar-item">
                <WhatshotIcon className="sidebar-item-icon" />
                <div>
                    Trending
                </div>
            </div>
            <div className = "sidebar-item">
                <SubscriptionsIcon className="sidebar-item-icon" />
                <div>
                    Subscriptions
                </div>
            </div>
            <div className="break" ></div>
        </div>
    )
}

export default Sidebar
