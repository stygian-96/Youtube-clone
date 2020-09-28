import React,{useState,useEffect} from 'react'
import '../../style/Recommended/recommended.css'
import Axios from 'axios'
import HomeVideoContainer from './homeVideoContainer'

const Recommended = ({paddingLeft}) => {
    const recommendedBodyPadding = {paddingLeft : `${paddingLeft}`}
    const containerWidth = {width: `calc(100% - 8px)`}

    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState([])

    const skeletonCards = () => {
        const row = []
        for (var i=0; i<28; i++){
            row.push(
                <div className="video-card-container">
                    <div className="video-card-thumbnail"></div>
                    <div className="video-card-contents">
                        <div className = "channel-img"></div>
                        <div className = "video-details">
                            <div className="video-details-title"></div>
                            <div className="video-details-channel-title"></div>
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
                key: 'AIzaSyAkQT0cnUuujogGxvZpN6raT02NdS_tWH0',
                maxResults: 28,
                regionCode:'IN'
            }}).then( (res) => {
                setLoading(false)
                setVideos([...res.data.items])
            }).catch( error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="recommended-body" style={recommendedBodyPadding}>
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

export default Recommended