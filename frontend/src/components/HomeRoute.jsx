import React, { useState }  from "react";
import '../styles/HomeRoute.scss';
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";





const HomeRoute = (props) => {

  // State for liked photos
  const [likedPhotos, setLikedPhotos] = useState([]);


  // Helper function to like a photo sent as prop
  const likePhoto = (id) => {
    const likedPhotosCopy = [...likedPhotos,id];
    setLikedPhotos(likedPhotosCopy);

  };

  // Helper function to unlike a photo sent as prop
  const unLikePhoto = (id) => {
    const likedPhotosCopy = [...likedPhotos];

    const unlikedPhotosCopy = likedPhotosCopy.filter(photo => photo !== id);
    setLikedPhotos(unlikedPhotosCopy);
    
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likedPhotos={likedPhotos}/>
      <PhotoList photos={props.photos} likedPhotos={likedPhotos} likePhoto={likePhoto} unLikePhoto={unLikePhoto}/>
    </div>
    
  );
};


export default HomeRoute;