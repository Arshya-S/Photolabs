
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import TopicList from './TopicList';


const PhotoListItem = (props) => {
  return (
    <article className='photo-list__item'>
      <PhotoFavButton />
      <img src={props.imageSource} className='photo-list__image' />
    </article>
  );
  
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;