import React,{useState,useEffect} from 'react'
import '../../style/Recommended/recommended.css'
import Axios from 'axios'
import HomeVideoContainer from './homeVideoContainer'

const Recommended = ({paddingLeft}) => {
    const recommendedBodyPadding = {paddingLeft : `${paddingLeft}`}
    const containerWidth = {width: `calc(100% - 8px)`}

    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState([])
    const [channelThumb, setChannelThumb] = useState([])

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

    const videoCard = (videos,channelThumb) => {
        if(videos){
            const row = []
            for (var i=0; i<videos.length; i++){
                row.push(
                    <div className="video-card-container" key={videos[i].id}>
                        <HomeVideoContainer video = {videos[i]}/>
                    </div>
                )
            } 
            return row
        }
        else return null
    }

    const fetchChannelThumbs = async (videosList) => {
        let i=0;
        let list=[]
        for(i;i< videosList.length;i++){
            const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${videosList[i].snippet.channelId}&key=AIzaSyCAL5lhzq8YSeWvVYrZYW0M60Cxv-7BLes`)
            const json = await response.json()
            list.push(json.items[0].snippet.thumbnails.default.url)
        }
        setChannelThumb(list)
    }

    useEffect(() => {
        setLoading(true)
        Axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                key: 'AIzaSyAkQT0cnUuujogGxvZpN6raT02NdS_tWH0',
                maxResults: 28,
                regionCode:'IN'
            }}).then( (res) => {
                setLoading(false)
                setVideos([...res.data.items])
                // fetchChannelThumbs([...res.data.items])
            }).catch( error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="recommended-body" style={recommendedBodyPadding}>
            <p className="header">Recommended</p>
            <div className="container" style={containerWidth}>
                {loading ? 
                    skeletonCards() : 
                    videoCard(videos,channelThumb)
                }
            </div>
        </div>
    )
}

export default Recommended