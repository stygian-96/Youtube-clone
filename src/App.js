import React,{useState, useEffect, createRef} from 'react';
import './App.css'
import Navigation from './Components/Navigation/Navigation';
import Recommended from './Components/Recommended/recommended';

const App = () => {
  const [paddingLeft, setPaddingLeft] = useState("256px")

  const view = createRef()

  const changePadding = (amount) => {
    setPaddingLeft(`${amount}px`)
  }
  
  useEffect(() => {
    view.current.scrollIntoView()
  }, [])

  return (
    <>
      <div ref={view}></div>
      <Navigation changePadding={changePadding}/>
      <Recommended paddingLeft={paddingLeft}/>
    </>
  );
}

export default App;
