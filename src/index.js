import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA5onSfDpSHmkG6KC03epT5MTrasm1gTxs';

// Create a component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('woodworking');

  }

  videoSearch(term) {
    YTSearch( {key: API_KEY, term: term }, videos => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }


  render() {
    const videoSearch = _.debounce( (term) => {this.videoSearch(term) }, 500);

    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect={selectedVideo => this.setState({ selectedVideo }) }
      videos={this.state.videos}/>
      </div>
    );
  }
}

// Add it to the DOM
ReactDOM.render(<App />, window.document.querySelector('.container'));
