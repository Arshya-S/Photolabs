
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {

  // Boolean value to determine if a photo item is liked sent as prop
  const photoIsLiked = props.likedPhotos.includes(props.id);

  return (
    <article className='photo-list__item'>
      <PhotoFavButton
        likedPhotos={props.likedPhotos}
        likePhoto={props.likePhoto}
        unLikePhoto={props.unLikePhoto}
        id={props.id}
        photoIsLiked = {photoIsLiked}
      />
      <img src={props.imageSource} className='photo-list__image' />
    </article>
  );
  
};


export default PhotoListItem;