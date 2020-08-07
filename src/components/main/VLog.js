import React from 'react'
import SearchBar from './vlog/SearchBar'
import youtube from './vlog/apis/vlog/youtube'
import VideoList from './vlog/VideoList'
import VideoDetail from './vlog/VideoDetail'

export default class VLog extends React.Component{

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.onTermSubmit(' ')
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
                    // 'q' is a youtube api query string param
            }
        })
        // console.log(response)
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar 
                    onTermSubmit={this.onTermSubmit} 
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail 
                                video={this.state.selectedVideo}
                            />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                            videos={this.state.videos} 
                            onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
