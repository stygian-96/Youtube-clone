import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const WatchPage = ({match}) => {
    const [laoding, setLoading] = useState(true)
    const [snippet, setSnippet] = useState([])
    const [statistics, setStatistics] = useState([])
    const [player, setPlayer] = useState('')

    useEffect(() => {
        Axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params:{
                part: 'snippet, statistics, player',
                key: process.env.REACT_APP_API_KEY,
                id: match.params.id,
            }
        }).then( (res) => {
            console.log(res)
            setPlayer(res.data.items[0].player.embedHtml)
        }).catch( err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <iframe  
                src={`https://www.youtube.com/embed/${match.params.id}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchPage
