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
                <div className = "video-card-container--search">
                    <img src = {video.snippet.thumbnails.medium.url} alt="No thumbnail" />
                    <div className = "details--search">
                        <p className = "details--search__title" >{video.snippet.title}</p>
                        <p className = "details--search__channel-title" >
                            {video.snippet.channelTitle}
                            <span>•</span>
                            <Views video={video}/>
                            <Moment filter={toFilter} fromNow>{video.snippet.publishedAt}</Moment>
                        </p>
                        <p className = "details--search__description">{video.snippet.description}</p>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default SearchVideoContainer