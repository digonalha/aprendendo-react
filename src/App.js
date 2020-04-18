import React from 'react';
import './App.css';

import profile from './assets/profile.jpeg';
//precisa estar presente em todo o lugar q utilizarmos o JSX
function App() {
  return <img width="200" src={profile} />
}

export default App;