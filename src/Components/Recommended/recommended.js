import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchHomeVideos } from '../../redux/actions/homeVideoAction'
import '../../style/Recommended/recommended.css'

const skeletonCards = () => {
    const row = []
    for (var i=0; i<28; i++){
        row.push(
            <div className="video-card-container">
                <div className="video-card-thumbnail"></div>
                <div className="video-card-contents">
                    <div className = "channel-img"></div>
                    <div className = "video-details">
                        <div className="video-details-title"></div>
                        <div className="video-details-channel-title"></div>
                    </div>
                </div>
            </div>
        )
    }
    return row
}

const Recommended = ({paddingLeft, fetchHomeVideos}) => {
    const recommendedBodyPadding = {paddingLeft : `${paddingLeft}`}
    const containerWidth = {width: `calc(100% - 8px)`}

    useEffect(() => {
        fetchHomeVideos()
    }, [])

    return (
        <div className="recommended-body" style={recommendedBodyPadding}>
            <p className="header">Recommended</p>
            <div className="container" style={containerWidth}>
                {skeletonCards()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        homeVideos: state.homeVideos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHomeVideos: () => dispatch(fetchHomeVideos)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommended)  