
import React from "react";
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyDWmmkQIqNbpEL5Da6TZt6Dbxutg8_Rro8';


 class Content extends React.Component {

    state = {
        videos: []
    };
    handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });
        
        this.setState({videos: response.data.items
        
        });
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
       

        return (
            <div className='ui container' style={{marginTop: '4em'}}>
            <SearchBar handleFormSubmit={this.handleSubmit}/>
            I have {this.state.videos.length} videos.
            <div className='ui grid'>
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Content;
