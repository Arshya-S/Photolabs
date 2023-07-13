import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import { Fragment } from 'react';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='topics-liked'>
        <TopicList />
        <FavBadge />
      </div>
      
    </div>
  );
};

export default TopNavigation;