import React,{useState, useEffect, createRef} from 'react';
import './App.css'
import Navigation from './Components/Navigation/Navigation';
import Recommended from './Components/HomePage/HomePage';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import WatchPage from './Components/WatchPage/WatchPage';

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
      <BrowserRouter>
        <Navigation changePadding={changePadding}/>
        <Switch>
          <Route exact path="/" render={() => <Recommended paddingLeft={paddingLeft}/>} />
          <Route exact path="/watch" render={() => <WatchPage/>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
