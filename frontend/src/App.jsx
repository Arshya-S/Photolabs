import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {

  const {
    state,
    updateFavPhotos,
    setPhotoSelected,
    convertArr
  } = useApplicationData();


  // state of photos and topics based on api given data
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  // Api get request for photo and topic data
  useEffect(() => {
    const getPhotos = axios('/api/photos');
    const getTopics = axios('api/topics');

    const getRequests = [getPhotos, getTopics];

    Promise.all(getRequests)
      .then(response => {
        setPhotos(response[0].data);
        setTopics(response[1].data);
      });
  },[]);


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        photoClicked={state.photoClicked}
        setPhotoClicked={setPhotoSelected.setPhotoClicked}
        photoClickedInfo={state.photoClickedInfo}
        setPhotoClickedInfo={setPhotoSelected.setPhotoClickedInfo}
        likedPhotos ={state.likedPhotos}
        likePhoto={updateFavPhotos.likePhoto}
        unLikePhoto={updateFavPhotos.unLikePhoto}
      />

      {state.photoClicked &&
        <PhotoDetailsModal
          photoClicked={state.photoClicked}
          setPhotoClicked={setPhotoSelected.setPhotoClicked}
          photoClickedInfo={state.photoClickedInfo}
          setPhotoClickedInfo={setPhotoSelected.setPhotoClickedInfo}
          photos={photos}
          convertToArray={convertArr.convertToArray}
          likedPhotos={state.likedPhotos}
          likePhoto={updateFavPhotos.likePhoto}
          unLikePhoto={updateFavPhotos.unLikePhoto}
          
        />
      }
    </div>
  );
};

export default App;