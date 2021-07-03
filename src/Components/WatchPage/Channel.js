import React from 'react'
import '../../Styles/WatchPage/Channel.css'
import ChannelImg from '../../Assets/Channel/Channel.jpg'

function Channel() {
    return (
        <div className='video-secondary-details__channel'>
            <div className='video-secondary-details__channel--img-container'>
                <img src={ChannelImg} className='video-secondary-details__channel--img' />
            </div>
            <div className='video-secondary-details__channel--details-container'>
                <div className='video-secondary-details__channel--details-name'>Channel Name</div>
                <div className='video-secondary-details__channel--details-noofsubs'>533K Subscribers</div>
            </div>
            <div className='video-secondary-details__channel--buttons'>
                <button className='video-secondary-details__channel--buttons-join'>JOIN</button>
                <button className='video-secondary-details__channel--buttons-subscribe'>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default Channel
