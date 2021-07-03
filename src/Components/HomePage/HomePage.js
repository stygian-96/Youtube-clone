import React,{useState,useEffect} from 'react'
import '../../Styles/HomePage/HomePage.css'
import Axios from 'axios'
import HomeVideoContainer from './HomeVideoContainer'

const HomePage = ({paddingLeft, setIsWatchPage}) => {
    const bodyPadding = {paddingLeft : `${paddingLeft}`}
    const containerWidth = {width: `calc(100% - 8px)`}
    
    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState([])

    // To set sidebar state
    useEffect(() => {
        setIsWatchPage(false)
    }, [])

    const skeletonCards = () => {
        const row = []
        for (var i=0; i<28; i++){
            row.push(
                <div className="video-card-container">
                    <div className="thumbnail"></div>
                    <div className="contents">
                        <div className = "channel-img"></div>
                        <div className = "details">
                            <div className="details__title"></div>
                            <div className="details__channel-title"></div>
                        </div>
                    </div>
                </div>
            )
        }
        return row
    }

    const videoCard = (videos) => {
        if(videos){
            let row = []
            row = videos.map(video => {
                return(
                    <div className="video-card-container" key={video.id}>
                        <HomeVideoContainer video = {video}/>
                    </div>
                )
            })
            return row
        }
        else return null
    }

    useEffect(() => {
        setLoading(true)
        Axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params: {
                part: 'snippet,statistics',
                chart: 'mostPopular',
                key: process.env.REACT_APP_API_KEY,
                maxResults: 28,
                regionCode:'IN'
            }}).then( (res) => {
                setLoading(false)
                setVideos([...res.data.items])
                console.log(res.data.items)
            }).catch( error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="homepage-body" style={bodyPadding}>
            <div className="container" style={containerWidth}>
            <p className="header" style={containerWidth}>Recommended</p>
                {loading ? 
                    skeletonCards() : 
                    videoCard(videos)
                }
            </div>
        </div>
    )
}

export default HomePage