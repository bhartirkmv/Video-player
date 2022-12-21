
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ( { videos, onVideoSelect }) => {
  const renderedList = videos.map(( video ) => {
    // These VideoItem components need to be given a key property which is going to be internally used 
    // By react to make sure it efficiently re-renders the app over time.
    return <VideoItem  key= {video.id.videoId } onVideoSelect= { onVideoSelect } video = { video }/>;
  });
  return (
    <div  className='ui relaxed divided list'>{ renderedList }</div>
  );
};

export default VideoList;