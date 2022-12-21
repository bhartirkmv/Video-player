import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = { videos : [], selectedVideo: null};

  // The component did mount will attempt to do a default search , when this app 
  // is rendered to the screen.

  componentDidMount () {
    this.onTermSubmit('buildings');
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    
    });
  };

  


  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };


  render() {
    return (

      // In order to display these elements side by side, we are going to use semantic UI
      // Grid system.
      <div className='ui container'>
        <SearchBar onFormSubmit = { this.onTermSubmit }/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail  video = { this.state.selectedVideo }/>
            </div>
            
            <div className='five wide column'>
            <VideoList onVideoSelect = { this.onVideoSelect } videos = { this.state.videos } />
            </div>
            
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;