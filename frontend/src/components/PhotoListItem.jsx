import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {

  // Boolean value to determine if a photo item is liked sent as prop
  const photoIsLiked = props.likedPhotos.includes(props.photo);

  

  return (
    <article className={props.classNameItem}>
      <PhotoFavButton
        likedPhotos={props.likedPhotos}
        likePhoto={props.likePhoto}
        unLikePhoto={props.unLikePhoto}
        id={props.id}
        photoIsLiked = {photoIsLiked}
        photo={props.photo}
      />
      <img src={props.imageSource} className={props.classNameImage}
        onClick={() => {
          props.setPhotoClicked(!props.photoClicked);
          props.setPhotoClickedInfo(props.photo);
        }}
      />
      <div className='photo-list__user-details'>
        <img src={props.profileImage}  className='photo-list__user-profile'/>
        <div className='photo-list__user-info'>
          <h3>{props.userName}</h3>
          <h5>{props.userCity}, {props.userCountry}</h5>
        </div>
      </div>
    </article>
  );
};


export default PhotoListItem;