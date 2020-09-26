const initialState = {}

const homeVideos = (state = initialState, action) => {
    switch(action.types){
        case 'REQUEST_HOME_VIDEOS':
            return {
                ...state,
                loading: true,
            }
        case 'RECEIVE_HOME_VIDEOS':
            return {
                ...state,
                loading: false,
                videos: action.videos
            }
        case 'ERROR_HOME_VIDEOS':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return null
    }
}

export default homeVideos