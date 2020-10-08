import React from 'react'
import '../../Styles/Navigation/sidebar.css';

const SidebarItem = ({title, icon, clsName}) => {
    return (
            <div className = {`sidebar-item ${clsName}`}>
                {icon()}
                <div className = "sidebar-item-title">
                    {title}
                </div>
            </div>
    )
}

export default SidebarItem
