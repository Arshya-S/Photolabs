import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const  PhotoFavButton = function() {
  const [like, setLike] = useState(false);
  const color = like ? '#db0d0d' : '#EEEEEE';
  
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => {
        like === false ? setLike(true) : setLike(false);
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