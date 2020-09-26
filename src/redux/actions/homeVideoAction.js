import Axios from "axios";

export function fetchHomeVideos() {
	return function(dispatch) {
        dispatch(requestHomeVideos());
        Axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                key: 'AIzaSyDdXPJ_qshotI7fxmBT8S_ihw33BOkvvBo',
                maxResults: 28,
                regionCode:'IN'
            }.then( (res) => {
                let videos = res.data.items
                dispatch(receiveHomeVideos(videos))
            }).catch( error => {
                dispatch(errorHomeVideos(error))
            })
        })
	}
}

export const requestHomeVideos = () => ({
	type: 'REQUEST_HOME_VIDEOS'
});

export const receiveHomeVideos = (videos) => ({
	type: 'RECEIVE_HOME_VIDEOS',
	videos
});

export const errorHomeVideos = (error) => ({
	type: 'ERROR_HOME_VIDEOS',
	error
});