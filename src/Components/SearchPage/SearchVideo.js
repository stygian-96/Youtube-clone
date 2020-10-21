import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Moment from 'react-moment'
import '../../Styles/SearchPage/SearchVideoContainer.css'

const SearchVideo = ({id, channelId, thumbnail, title, channelTitle, publishedAt, description}) => {
    const[channelThumb, setChannelThumb] = useState('')
    const[views, setViews] = useState(0)
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        // Axios.get('https://www.googleapis.com/youtube/v3/channels',{
        //     params:{
        //         part: 'snippet',
        //         id: channelId,
        //         key: process.env.REACT_APP_API_KEY,
        //     }}).then( (res) => {
        //         setChannelThumb(prev => res.data.items[0].snippet.thumbnails.default.url)
        //     }).catch((err) => {
        //         console.log(err)
        //     })
        // Axios.get('https://www.googleapis.com/youtube/v3/videos',{
        //     params: {
        //         part: 'statistics',
        //         id: id,
        //         key: process.env.REACT_APP_API_KEY,
        //     }}).then( (res) => {
        //         setViews(prev => res.data.items[0].statistics.viewCount, setLoading(false))
        //     }).catch( error => {
        //         console.log(error)
        //     })
        let channelThumbApiCall = Axios.get('https://www.googleapis.com/youtube/v3/channels',{
                                        params:{
                                            part: 'snippet',
                                            id: channelId,
                                            key: process.env.REACT_APP_API_KEY,
                                        }})
        let viewCountApiCall = Axios.get('https://www.googleapis.com/youtube/v3/videos',{
                                        params: {
                                            part: 'statistics',
                                            id: id,
                                            key: process.env.REACT_APP_API_KEY,
                                        }})
        Promise.all([channelThumbApiCall, viewCountApiCall])
                .then( values => {
                    setChannelThumb(prev => values[0].data.items[0].snippet.thumbnails.default.url)
                    setViews(prev => values[1].data.items[0].statistics.viewCount, setLoading(false))
                })
    }, [])

    const toFilter = (d) => {
        let date = '';
        if (d[0]==='a'){
            date = '1'+ d.slice(1)
            return date
        }
        else return d;
    }

    const formatViewCount = (views) => {
        let value = `${views}`;
        if (views>=1000000000000) value = `${Math.floor(views/1000000000000)}T` 
        else if (views>=1000000000) value = `${Math.floor(views/1000000000)}B` 
        else if (views>=1000000) value = `${Math.floor(views/1000000)}M` 
        else if (views>=1000) value = `${Math.floor(views/1000)}K`
        return value; 
    }

    return (
        <>
        {!loading && 
        <div className="video-card-container--search">
            <div className="img-container">
                <img src={thumbnail} alt="No thumbnail" />
            </div>
            <div className="details--search">
                <div className="details--search__title">{title}</div>
                <div className="details--search__viewcount">
                    {formatViewCount(views)}<span>•</span>
                    <Moment filter={toFilter} fromNow>{publishedAt}</Moment>
                </div>
                <div className="details--search__channel-details">
                    <div className="channel-thumb">
                        <img src={channelThumb} />
                    </div>
                    <div className="channel-title">{channelTitle}</div>
                </div>
                <div className="details--search__description">{description}</div>
            </div>
        </div>}
        </>
    )
}

export default SearchVideo
