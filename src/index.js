// create new component that will produce html
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAd8PgOnrQ0JMcXu0p6mLOPGY6xf4y9MZ8';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }

        YTSearch({key: API_KEY, query: 'ethereum'}, (videos) => {
            this.setState({ videos }); // this.setState({ videos: videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}


//take this component's generated html and render it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));