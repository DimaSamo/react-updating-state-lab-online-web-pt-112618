// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    onClickBitrateHandler = (event) => {
        this.setState({
            settings: {...this.state.settings, bitrate:12}
        })
    }

    onClickResolutionHandler = (event) => {
        this.setState({
            settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}
        })
    }

    render(){
        return(
            <div>
            <button class="bitrate" onClick={this.onClickBitrateHandler}>Bitrate</button>
            <button class="resolution" onClick={this.onClickResolutionHandler}>Resolution</button>
            </div>
        )
    }
}