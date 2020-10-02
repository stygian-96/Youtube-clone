import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../Styles/SearchPage/SearchPage.css'

const SearchPage = (props) =>{
    const {match, paddingLeft} = props

    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    const bodyPadding = {paddingLeft : `${paddingLeft}`}

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
                    maxResults: 5,
                    key: 'AIzaSyCAOqa8HRKgCjnKzewdIax9XBViYzeFB4M',
                    q: searchQuery
                }
            }).then(res => {
                setSearchResults([...res.data.items])
            }).catch(err => console.log(err))
        }
    }, [searchQuery])

    useEffect(()=>{
        if(searchResults.length) setLoading(false)
    }, [searchResults])

    return (
        <div className='search-page-body' style={bodyPadding}>
            {!loading && 
            <div className = "search-video-container">
                <img src = {searchResults[0].snippet.thumbnails.medium.url} alt="No thumbnail" />
                <div className = "search-video-body">
                    <p className = "search-video-title" >{searchResults[0].snippet.title}</p>
                    <p className = "search-video-channel-title" >
                        {searchResults[0].snippet.channelTitle}
                        <span>•</span>
                        Views
                        <span>•</span>
                        Time    
                    </p>
                    <p className = "search-video-description">{searchResults[0].snippet.description}</p>
                </div>
            </div>}
        </div>
    )
}

export default SearchPage