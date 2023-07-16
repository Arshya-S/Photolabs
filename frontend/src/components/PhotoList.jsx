import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const photos = props.photos.map(photo => (
    <PhotoListItem
      photo={photo}
      key={photo.id}
      id={photo.id}
      imageSource={photo.urls.regular}
      likedPhotos={props.likedPhotos}
      likePhoto={props.likePhoto}
      unLikePhoto={props.unLikePhoto}
      photoClicked={props.photoClicked}
      setPhotoClicked={props.setPhotoClicked}
      photoClickedInfo={props.photoClickedInfo}
      setPhotoClickedInfo={props.setPhotoClickedInfo}
      classNameImage={'photo-list__image'}
      classNameItem={'photo-list__item '}
      profileImage={photo.user.profile}
      userName={photo.user.username}
      userCity={photo.location.city}
      userCountry={photo.location.country}
      
    />
  ));
  
  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
  
};


export default PhotoList;