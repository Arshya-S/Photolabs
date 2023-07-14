import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const photos = props.photos.map(photo => (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      imageSource={photo.urls.regular}
      likedPhotos={props.likedPhotos}
      likePhoto={props.likePhoto}
      unLikePhoto={props.unLikePhoto}
    />
  ));
  
  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
  
};


export default PhotoList;