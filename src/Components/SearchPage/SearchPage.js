import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchPage = ({match}) =>{
    const padding = { padding: '300px 300px'}
    const [searchQuery, setSearchQuery] = useState('')


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
        Axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: 'AIzaSyCAOqa8HRKgCjnKzewdIax9XBViYzeFB4M',
                q: searchQuery
            }
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }, [searchQuery])

    return (
        <div style={padding}>
            SearchPage {match.params.q}
        </div>
    )
}

export default SearchPage