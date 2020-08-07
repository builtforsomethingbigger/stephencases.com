import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.slice()
    .sort((a,b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt))
    .map((video) => {
        return (
            <VideoItem key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}
            /> 
        ) 
    })
    console.log(videos)
    
    return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div> 
    )
}
export default VideoList