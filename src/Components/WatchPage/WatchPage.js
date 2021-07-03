import React, { useState, useEffect } from 'react'
import '../../Styles/WatchPage/watchPage.css'
import Axios from 'axios'
import clsx from 'clsx'
import {
    ThumbUp,
    ThumbDown,
    Share,
    PlaylistAdd,
    MoreHoriz
} from '@material-ui/icons'
import Channel from './Channel'
import Description from './Description'

const WatchPage = (props) => {
    const {match, setIsWatchPage, isWatchPageSidebarOpen} = props

    const [laoding, setLoading] = useState(true)
    const [snippet, setSnippet] = useState([])
    const [statistics, setStatistics] = useState([])
    const [playerHeight, setPlayerHeight] = useState(100)
    const [playerWidth, setPlayerWidth] = useState(100)

    const extractWidth = (value) => {
        let idx = value.indexOf("width")+7
        while(value[idx]!='"'){
            idx++;
        }
        console.log(value.slice(value.indexOf("width")+7,idx))
        return value.slice(value.indexOf("width")+7,idx);
    }

    const extractHeight = (value) => {
        let idx = value.indexOf("height")+8
        while(value[idx]!='"'){
            idx++;
        }
        console.log(value.slice(value.indexOf("height")+8,idx))
        return value.slice(value.indexOf("height")+8,idx);
    }

    useEffect(() => {
        // getPlayerDetails()
        setIsWatchPage(true)
    }, [])

    const getPlayerDetails = () => {
        setLoading(true)
        Axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params:{
                part: 'player',
                key: process.env.REACT_APP_API_KEY,
                id: match.params.id,
            }
        }).then( (res) => {
            setLoading(false)
            console.log(res)
            setPlayerWidth(extractWidth(res.data.items[0].player.embedHtml))
            setPlayerHeight(extractHeight(res.data.items[0].player.embedHtml))
        }).catch( err => {
            setLoading(false)
            console.log(err)
        })
    }


    return (
        <div className="watchpage-body">
            <div className={clsx({["watchpage-body-cover"]: isWatchPageSidebarOpen})}></div>
            <div className="container-width">
                <div className="video-comments-section-container">
                    <div className='iframe-container'>
                        <iframe 
                            className='iframe'
                            src={`https://www.youtube.com/embed/${match.params.id}`} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            style={{paddingTop: `${playerWidth/playerHeight}`}}
                        >
                        </iframe>
                    </div>
                    <div className='video-details-container'>
                        <div className='video-details-title'>Learn About 3rd Normal Form || Learn About 3rd Normal Form || Learn About 3rd Normal Form || Learn About 3rd Normal Form</div>
                        <div className='video-details-stats'>
                            <div className='video-details-stats__views'>
                                369,999 views <span>•</span> Feb 25, 2099
                            </div>
                            <div className='video-details-stats__info'>
                                <div className='video-details-stats__info__element'>
                                    <div className='video-details-stats__info__element--icon'>
                                        <ThumbUp/>
                                    </div> 7.4K
                                </div>
                                <div className='video-details-stats__info__element'>
                                    <div className='video-details-stats__info__element--icon'>
                                        <ThumbDown/>
                                    </div> 233
                                </div>
                                <div className='video-details-stats__info__element'>
                                    <div className='video-details-stats__info__element--icon'>
                                        <Share/>
                                    </div> SHARE
                                </div>
                                <div className='video-details-stats__info__element'>
                                    <div className='video-details-stats__info__element--icon'>
                                        <PlaylistAdd/>
                                    </div> SAVE
                                </div>
                                <div className='video-details-stats__info__element'>
                                    <div className='video-details-stats__info__element--icon'>
                                        <MoreHoriz/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='video-secondary-details'>
                        <Channel />
                        <Description />
                    </div>
                    <div className='video-secondary-details'>
                        <Channel />
                        <Description />
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default WatchPage
