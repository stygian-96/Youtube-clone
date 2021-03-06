import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../Styles/SearchPage/SearchPage.css'
import SearchVideo from './SearchVideo'

const SearchPage = (props) =>{
    const {match, setIsWatchPage, paddingLeft} = props

    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

    const bodyPadding = {paddingLeft : `${paddingLeft}`}

    // To set sidebar state
    useEffect(() => {
        setIsWatchPage(false)
    }, [])

    // To handle props change
    useEffect(() => {
        let str = match.params.q
        if(str.trim()){
            if(searchQuery !== str.trim()) setSearchQuery(str.trim())
        }
    }, [match])

    // To handle state change
    useEffect(() => {
        console.log('I executed')
        if(searchQuery.trim()){
            console.log('Inside condition')
            setLoading(true)
            Axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part: 'snippet',
                    type: 'video',
                    maxResults: 10,
                    key: process.env.REACT_APP_API_KEY,
                    q: searchQuery
                }
            }).then(res => {
                setSearchResults(prevState => [...res.data.items])
            }).catch(err => console.log(err))
        }
    }, [searchQuery])

    useEffect(()=>{
        if(searchResults.length) setLoading(false)
    }, [searchResults])

    return (
        <div className='searchpage-body' style={bodyPadding}>
            {!loading && searchResults.length &&
                searchResults.map( video => {
                    return (
                        <>
                            <SearchVideo 
                                key={video.id.videoId}
                                id={video.id.videoId}
                                channelId={video.snippet.channelId}
                                thumbnail={video.snippet.thumbnails.medium.url}
                                title={video.snippet.title}
                                channelTitle={video.snippet.channelTitle}
                                publishedAt={video.snippet.published}
                                description={video.snippet.description}
                            />
                        </>
                    )
                })
            }
        </div>
    )
}

export default SearchPage