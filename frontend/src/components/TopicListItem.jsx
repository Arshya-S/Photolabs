import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  
  return (
    <div className="topic-list__item span" onClick={() => {
      props.setTopicChosen(props.id);
    }}>
      {props.label}
    </div>
  );
  
};

export default TopicListItem;