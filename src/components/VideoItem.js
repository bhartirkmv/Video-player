
import React from 'react';
import './VideoItem.css';

const VideoItem = ( { video , onVideoSelect }) => {
  // It is preferable to have the root classname to be equal to the 
  // component name, so that there is clarity regarding the item that 
  // We are going to render.
  return (
    // If we put only onVideoSelect then the function will be called , but will not be called 
    // With video. If we do like this --> onVideoSelect(video) then the function will be 
    // Called immediateky. In order to avoid all these, we are passing the value of onclickl
    // inside an arrow function.
    <div onClick={ () => { onVideoSelect(video) }} className= 'video-item item'> 
      <img  className='ui image' alt= "Thumbnail" src = { video.snippet.thumbnails.medium.url } />
      <div className='content'>
        <div> { video.snippet.title } </div>
      </div>
      
      
    </div>

  );
};

export default VideoItem;