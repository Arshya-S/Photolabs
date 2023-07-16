import React, { useReducer } from 'react';

const initialState = {
  likedPhotos: [],
  photoClicked: false,
  photoClickedInfo: {},
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'LIKE_PHOTO':
    return {
      ...state,
      likedPhotos: [...state.likedPhotos, action.id],
    };
  case 'UNLIKE_PHOTO':
    return {
      ...state,
      likedPhotos: state.likedPhotos.filter(photo => photo !== action.id),
    };
  case 'SET_PHOTO_CLICKED':
    return {
      ...state,
      photoClicked: action.clicked,
    };
  case 'SET_PHOTO_CLICKED_INFO':
    return {
      ...state,
      photoClickedInfo: action.info,
    };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const likePhoto = (id) => {
    dispatch({ type: 'LIKE_PHOTO', id });
  };

  const unLikePhoto = (id) => {
    dispatch({ type: 'UNLIKE_PHOTO', id });
  };

  const setPhotoClicked = (clicked) => {
    dispatch({ type: 'SET_PHOTO_CLICKED', clicked });
  };

  const setPhotoClickedInfo = (info) => {
    dispatch({ type: 'SET_PHOTO_CLICKED_INFO', info });
  };

  const convertToArray = (photos) => {
    const newArray = Object.values(photos).map(photo => photo);
    return newArray;

  };

  const stateFunctions = {
    state: state,
    updateFavPhotos: { likePhoto, unLikePhoto },
    setPhotoSelected: { setPhotoClicked, setPhotoClickedInfo },
    convertArr: { convertToArray }
  };

  return stateFunctions;

};

export default useApplicationData;