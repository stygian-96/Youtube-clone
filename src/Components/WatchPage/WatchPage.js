import React from 'react'

const WatchPage = ({match,location}) => {
    console.log(location)
    return (
        <div>
            <iframe 
                width="853" 
                height="480" 
                src={`https://www.youtube.com/embed/${match.params.id}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            
                </iframe>    
        </div>
    )
}

export default WatchPage
