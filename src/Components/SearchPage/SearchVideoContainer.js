import React from 'react'
import Moment from 'react-moment'
import '../../Styles/SearchPage/SearchVideoContainer.css'
import Views from './Views'

const SearchVideoContainer = ({searchResults}) => {
    const toFilter = (d) => {
        let date = '';
        if (d[0]==='a'){
            date = '1'+ d.slice(1)
            return date
        }
        else return d;
    }

    return (
        <>
        {searchResults.map( video => {
            return(
                <div className = "search-video-container">
                    <img src = {video.snippet.thumbnails.medium.url} alt="No thumbnail" />
                    <div className = "search-video-body">
                        <p className = "search-video-title" >{video.snippet.title}</p>
                        <p className = "search-video-channel-title" >
                            {video.snippet.channelTitle}
                            <span>•</span>
                            <Views video={video}/>
                            <Moment filter={toFilter} fromNow>{video.snippet.publishedAt}</Moment>
                        </p>
                        <p className = "search-video-description">{video.snippet.description}</p>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default SearchVideoContainer