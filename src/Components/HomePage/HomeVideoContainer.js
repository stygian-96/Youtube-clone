import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const HomeVideoContainer = ({video}) => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchUrl = () => {
        setLoading(true)
        Axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&key=${process.env.REACT_APP_API_KEY}`)
            .then( res => {
                setUrl(res.data.items[0].snippet.thumbnails.default.url)
                setLoading(false)
            }).catch( err => console.log(err))
    }

    const formatViewCount = (views) => {
        let value = `${views}`;
        if (views>=1000000000000) value = `${Math.floor(views/1000000000000)}T` 
        else if (views>=1000000000) value = `${Math.floor(views/1000000000)}B` 
        else if (views>=1000000) value = `${Math.floor(views/1000000)}M` 
        else if (views>=1000) value = `${Math.floor(views/1000)}K`
        return value; 
    }

    useEffect(() => {
        fetchUrl()
    }, [])

    const toFilter = (d) => {
        let date = '';
        if (d[0]==='a'){
            date = '1'+ d.slice(1)
            return date
        }
        else return d;
    }

    return (
        <Link to={`/watch/${video.id}`} className="home-video-link">
            <div className="video-card-thumbnail">
                <img src={video.snippet.thumbnails.medium.url} alt='Thumbnails' /> 
            </div>
            <div className="video-card-contents">
                <div className = "channel-img">
                    {loading ? null:
                        <img src={url} alt="C"/>    
                    }
                </div>
                <div className = "video-details-onsuccess">
                    <div className="video-details-title-onsuccess">{video.snippet.title}</div>
                    <div className="video-details-channel-title-onsuccess">{video.snippet.channelTitle}</div>
                    <div className="video-details-views-onsuccess">
                        {formatViewCount(video.statistics.viewCount)} views
                        <span>•</span>
                        <Moment filter={toFilter} fromNow>{video.snippet.publishedAt}</Moment>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HomeVideoContainer
