import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Views = ({video}) => {
    const[views, setViews] = useState(0)
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        Axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params: {
                part: 'statistics',
                id: video.id.videoId,
                key: process.env.REACT_APP_API_KEY,
            }}).then( (res) => {
                setViews(prev => res.data.items[0].statistics.viewCount, setLoading(false))
            }).catch( error => {
                console.log(error)
            })
    }, [])

    const formatViewCount = (views) => {
        let value = `${views}`;
        if (views>=1000000000000) value = `${Math.floor(views/1000000000000)}T` 
        else if (views>=1000000000) value = `${Math.floor(views/1000000000)}B` 
        else if (views>=1000000) value = `${Math.floor(views/1000000)}M` 
        else if (views>=1000) value = `${Math.floor(views/1000)}K`
        return value; 
    }

    return (
        <div>
            {!loading && formatViewCount(views)}
            <span>•</span>
        </div>
    )
}

export default Views
