import React from "react";
import SearchBar from "../components/SearchBar";
import youtube from "../APIs/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import './App.css';

class App extends React.Component {

    state = {videos: [], selectedVideo: null}

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({videos: response.data.items});

    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="big-container">
                    <div className="box">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="box">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>

            </div>

        );
    }
}

export default App;