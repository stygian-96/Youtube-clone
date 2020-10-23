import Axios from 'axios'
import React, { createContext, useReducer } from 'react'

export const HomePageContext = createContext()

const initialState = {
    loading: true,
    homeVideos: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                homeVideos: [
                    ...action.payload
                ],
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                homeVideos: [],
                error: 'Something Went Wrong!'
            }
        default:
            return state
    }
}

const HomePageContextProvider = ({children}) => {
    const [homeVideosState, homeVideosDispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        Axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params: {
                part: 'snippet,statistics',
                chart: 'mostPopular',
                key: process.env.REACT_APP_API_KEY,
                maxResults: 28,
                regionCode:'IN'
            }}).then( (res) => {
                homeVideosDispatch({ type: 'FETCH_SUCCESS', payload: [...res.data.items]})
            }).catch( error => {
                homeVideosDispatch({ type: 'FETCH_ERROR'})
            })
    }, [])

    return (
        <HomePageContext.Provider value={{ homeVideosState, homeVideosDispatch }}>
            {children}
        </HomePageContext.Provider>
    )
}