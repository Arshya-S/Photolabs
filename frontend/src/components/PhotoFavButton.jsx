import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const  PhotoFavButton = function(props) {

  
  // Change color based on boolean photoIsLiked prop
  const color = props.photoIsLiked ? '#db0d0d' : '#EEEEEE';
  
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => {
        props.photoIsLiked === false ? props.likePhoto(props.id) : props.unLikePhoto(props.id);
      }}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          width= {20}
          height= {27}
          fill= {color}
          outlineWidth= {2}
          stroke= {'#C80000'}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;