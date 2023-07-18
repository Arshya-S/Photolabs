import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';

export const PhotoDetailsModal = (props) => {
  
  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button'
        onClick={() => {
          props.setPhotoClicked(!props.photoClicked);
        }}
      >
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      

      <PhotoListItem
        classNameImage={'photo-details-modal__image'}
        classNameItem={'photo-details-modal__item'}
        imageSource={props.photoClickedInfo.urls.regular}
        photoClickedInfo={props.photoClickedInfo}
        likedPhotos={props.likedPhotos}
        likePhoto={props.likePhoto}
        unLikePhoto={props.unLikePhoto}
        id={props.photoClickedInfo.id}
        profileImage={props.photoClickedInfo.user.profile}
        userName={props.photoClickedInfo.user.username}
        userCity={props.photoClickedInfo.location.city}
        userCountry={props.photoClickedInfo.location.country}
      />
      <br />

      <p className='photo-details-modal__header'>Similar Photos</p>
      <div className='photo-details-modal__images'>
        <PhotoList
          photos={props.photoClickedInfo.similar_photos}
          likedPhotos={props.likedPhotos}
          likePhoto={props.likePhoto}
          unLikePhoto={props.unLikePhoto}
        />
      </div>
    </div>
  );
  
};

export default PhotoDetailsModal;