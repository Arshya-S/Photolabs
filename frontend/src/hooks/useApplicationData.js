import React, { useReducer } from 'react';

export const ACTIONS = {
  LIKE_PHOTO: 'LIKE_PHOTO',
  UNLIKE_PHOTO: 'UNLIKE_PHOTO',
  SET_PHOTO_CLICKED: 'SET_PHOTO_CLICKED',
  SET_PHOTO_CLICKED_INFO: 'SET_PHOTO_CLICKED_INFO',
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.LIKE_PHOTO:
    return {
      ...state,
      likedPhotos: [...state.likedPhotos, action.photo],
    };
  case ACTIONS.UNLIKE_PHOTO:
    return {
      ...state,
      likedPhotos: state.likedPhotos.filter(photo => photo !== action.photo),
    };
  case ACTIONS.SET_PHOTO_CLICKED:
    return {
      ...state,
      photoClicked: action.clicked,
    };
  case ACTIONS.SET_PHOTO_CLICKED_INFO:
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

  const [state, dispatch] = useReducer(reducer, {
    likedPhotos: [],
    photoClicked: false,
    photoClickedInfo: {},
  });

  const likePhoto = (photo) => {
    dispatch({ type: ACTIONS.LIKE_PHOTO, photo });
  };

  const unLikePhoto = (photo) => {
    dispatch({ type: ACTIONS.UNLIKE_PHOTO, photo });
  };

  const setPhotoClicked = (clicked) => {
    dispatch({ type: ACTIONS.SET_PHOTO_CLICKED, clicked });
  };

  const setPhotoClickedInfo = (info) => {
    dispatch({ type: ACTIONS.SET_PHOTO_CLICKED_INFO, info });
  };



  const stateFunctions = {
    state: state,
    updateFavPhotos: { likePhoto, unLikePhoto },
    setPhotoSelected: { setPhotoClicked, setPhotoClickedInfo },
  };

  return stateFunctions;

};

export default useApplicationData;