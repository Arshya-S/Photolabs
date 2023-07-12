import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import FavIcon from './components/FavIcon';
import './App.scss';
const photos = [<PhotoListItem key={1}  />, <PhotoListItem key={2}/>,<PhotoListItem key={3}/>];


// Note: Rendering a single component to build components in isolation
const App = () => (
  

  <div className="App">
    {photos}
    
  </div>
);

export default App;