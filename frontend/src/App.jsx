import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  
  const {
    state,
    updateFavPhotos,
    setPhotoSelected,
    convertArr
  } = useApplicationData();

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