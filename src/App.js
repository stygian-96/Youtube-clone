import React,{useState} from 'react';
import './App.css'
import Navigation from './Components/Navigation/Navigation';
import Recommended from './Components/Recommended/recommended';

const App = () => {
  const [paddingLeft, setPaddingLeft] = useState({paddingLeft: "256px"})

  const changePadding = (amount) => {
    setPaddingLeft({paddingLeft: `${amount}px`})
  }

  return (
    <div>
      <Navigation changePadding={changePadding}/>
      <Recommended paddingLeft={paddingLeft}/>
    </div>
  );
}

export default App;
