import React from 'react'

const SearchPage = (props) =>{
    const padding = { padding: '300px 300px'}
    console.log(props)

    return (
        <div style={padding}>
            SearchPage {props.match.params.q}
        </div>
    )
}

export default SearchPage