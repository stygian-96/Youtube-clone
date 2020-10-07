import React from 'react'
import Icon from '@material-ui/core/Icon';
import '../../Styles/Navigation/sidebar.css';

const SidebarItem = ({title, iconName}) => {
    return (
            <div className = "sidebar-item">
                <Icon className="sidebar-item-icon"> {iconName} </Icon>
                <div className = "sidebar-item-title">
                    {title}
                </div>
            </div>
    )
}

export default SidebarItem
