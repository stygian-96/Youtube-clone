import React from 'react';
import './App.css'
import Sidebar from './Components/Navigation/Sidebar';
import TopNav from './Components/Navigation/TopNav';
import Recommended from './Components/Recommended/recommended';

function App() {
  return (
    <div>
      <TopNav/>
      <Sidebar/>
      <Recommended/>
    </div>
  );
}

export default App;
