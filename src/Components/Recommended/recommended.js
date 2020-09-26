import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchHomeVideos } from '../../redux/actions/homeVideoAction'
import '../../style/Recommended/recommended.css'
import Axios from 'axios'

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

const Recommended = ({paddingLeft}) => {
    const recommendedBodyPadding = {paddingLeft : `${paddingLeft}`}
    const containerWidth = {width: `calc(100% - 8px)`}

    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        setLoading(true)
        Axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                key: 'AIzaSyDdXPJ_qshotI7fxmBT8S_ihw33BOkvvBo',
                maxResults: 28,
                regionCode:'IN'
            }}).then( (res) => {
                console.log(res)
                setLoading(false)
                setVideos([...res.data.items])
            }).catch( error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="recommended-body" style={recommendedBodyPadding}>
            <p className="header">Recommended</p>
            <div className="container" style={containerWidth}>
                {loading ? skeletonCards() : 
                    videos.map( video => {
                        return(
                            <div className="video-card-container" key={video.id}>
                                <div className="video-card-thumbnail">
                                    <img src={video.snippet.thumbnails.medium.url} alt='Thumbnails' /> 
                                </div>
                                <div className="video-card-contents">
                                    <div className = "channel-img"></div>
                                    <div className = "video-details">
                                        <div className="video-details-title"></div>
                                        <div className="video-details-channel-title"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         homeVideos: state.homeVideos
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchHomeVideos: () => dispatch(fetchHomeVideos)
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Recommended)  
export default Recommended