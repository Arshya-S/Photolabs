import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  const topics = props.topics.map((topic) => <TopicListItem key ={topic.id} label={topic.title} />);

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
  
};

export default TopicList;