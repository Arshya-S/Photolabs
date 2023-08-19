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
  } = useApplicationData();


  // state of photos and topics based on api given data
  const [photos, setPhotos] = useState([]);
  const [originalState, setOriginalState] = useState([]);
  const [topics, setTopics] = useState([]);



  
  // Api get request for photo and topic data
  useEffect(() => {
    const getPhotos = axios.get('/api/photos');
    const getTopics = axios.get('api/topics');

    const getRequests = [getPhotos, getTopics];
    Promise.all(getRequests)
      .then(response => {
        setPhotos(response[0].data);
        setTopics(response[1].data);
        setOriginalState(response[0].data);
      });
    
  },[]);



  // State of topic chosen
  const [topicChosen, setTopicChosen] = useState('');

  // Api get request for topic chosen specific photos
  useEffect(() => {
    if (topicChosen) {
      axios.get(`/api/topics/photos/${topicChosen}`)
        .then(response => {
          setPhotos(response.data);
        })
        .catch(err => {
          console.log('Topic get request error: ', err);
        });
    }
    
  }, [topicChosen]);


  
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
        setTopicChosen={setTopicChosen}
        setPhotos={setPhotos}
        originalState={originalState}
      />

      {state.photoClicked &&
        <PhotoDetailsModal
          photoClicked={state.photoClicked}
          setPhotoClicked={setPhotoSelected.setPhotoClicked}
          photoClickedInfo={state.photoClickedInfo}
          setPhotoClickedInfo={setPhotoSelected.setPhotoClickedInfo}
          photos={photos}
          likedPhotos={state.likedPhotos}
          likePhoto={updateFavPhotos.likePhoto}
          unLikePhoto={updateFavPhotos.unLikePhoto}
          
        />
      }
    </div>
  );
};

export default App;