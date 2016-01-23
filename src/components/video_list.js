import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const video = props.video;

  const videoItems = props.videos.map(function(item) {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={item.etag}
        video={item} />
    )
  });
  return (
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
  );
};

export default VideoList;
