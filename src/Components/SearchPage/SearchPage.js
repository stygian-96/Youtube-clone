import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../Styles/SearchPage/SearchPage.css'
import SearchVideoContainer from './SearchVideoContainer'

const SearchPage = (props) =>{
    const {match, paddingLeft} = props

    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

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
                    maxResults: 10,
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
            {!loading && searchResults.length &&
                <SearchVideoContainer searchResults={searchResults}/>
            }
        </div>
    )
}

export default SearchPage