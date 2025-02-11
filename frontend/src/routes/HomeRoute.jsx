import React from "react";
import '../styles/HomeRoute.scss';
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";


const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        likedPhotos={props.likedPhotos}
        setTopicChosen={props.setTopicChosen}
        setPhotos={props.setPhotos}
        photos={props.photos}
        originalState={props.originalState}
      />

      <PhotoList
        photos={props.photos}
        likedPhotos={props.likedPhotos}
        likePhoto={props.likePhoto}
        unLikePhoto={props.unLikePhoto}
        setPhotoClicked={props.setPhotoClicked}
        photoClicked={props.photoClicked}
        photoClickedInfo={props.photoClickedInfo}
        setPhotoClickedInfo={props.setPhotoClickedInfo}
      />
    </div>
    
  );
};


export default HomeRoute;