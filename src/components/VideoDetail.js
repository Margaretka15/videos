import React from "react";

const VideoDetail = ({video}) => {
    if (!video) {
        return <div></div>
    }

    const videoSource = 'https://www.youtube.com/embed/' + video.id.videoId;

    return (
        <div>

            <div className="ui embed">
                <iframe title="video player" src={videoSource} frameBorder="0"/>
            </div>
            <div className="ui segment">
                <div>
                    <h4 className="header ui">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>

        </div>


    );

};

export default VideoDetail;