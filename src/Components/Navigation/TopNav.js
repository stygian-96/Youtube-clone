import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import '../../Styles/Navigation/topnav.css'

const TopNav = ({changeSidebarState}) => {
    const [searchQuery, setSearchQuery] = useState('')
    const history = useHistory()

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        console.log('Hello')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search/${searchQuery}`)
    }

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
                <form onSubmit={handleSubmit}>
                    <input placeholder="Search" onChange={handleChange}/>
                    <button type="submit" className="search-icon-container">
                        <SearchIcon className="nav-icon"/>
                    </button>
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
                    <img 
                        src="https://lh3.googleusercontent.com/-rW0mpavz1eo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclprhZYyE8IHU8g2ALJYt0B46E3Vg/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg"
                        alt = "P"
                        />
                </div>
            </div>
        </div>
    )
}

export default TopNav