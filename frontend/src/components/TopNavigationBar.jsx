import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';



const TopNavigation = (props) => {
 
  // Boolean for seeing if state array has values
  const likedStatus = props.likedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => {
        props.setPhotos(props.originalState);
      
      }}>PhotoLabs</span>
      <div className='topics-liked'>
        <TopicList topics={props.topics} setTopicChosen={props.setTopicChosen}/>
        <div className='fav-badge-div' onClick={() =>{
          props.setPhotos(props.likedPhotos);
        }}>
          <FavBadge isFavPhotoExist={likedStatus} />
        </div>

      </div>
    </div>
  );
};

export default TopNavigation;