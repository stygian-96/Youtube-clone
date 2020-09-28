import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const HomeVideoContainer = ({video}) => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchUrl = () => {
        setLoading(true)
        Axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&key=AIzaSyAkQT0cnUuujogGxvZpN6raT02NdS_tWH0`)
            .then( res => {
                setUrl(res.data.items[0].snippet.thumbnails.default.url)
                setLoading(false)
            }).catch( err => console.log(err))
    }

    useEffect(() => {
        fetchUrl()
    }, [])

    return (
        <div>
            <div className="video-card-thumbnail">
                <img src={video.snippet.thumbnails.medium.url} alt='Thumbnails' /> 
            </div>
            <div className="video-card-contents">
                <div className = "channel-img">
                    {loading ? null:
                        <img src={url} />    
                    }
                </div>
                <div className = "video-details-onsuccess">
                    <div className="video-details-title-onsuccess">{video.snippet.title}</div>
                    <div className="video-details-channel-title-onsuccess">{video.snippet.channelTitle}</div>
                </div>
            </div>
        </div>
    )
}

export default HomeVideoContainer
