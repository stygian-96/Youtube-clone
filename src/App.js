import React,{useState, useEffect, createRef} from 'react';
import './App.css'
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage/SearchPage';
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
          <Route exact path="/" render={() => <HomePage paddingLeft={paddingLeft}/>} />
          <Route exact path="/search/:q" render={(props) => <SearchPage paddingLeft={paddingLeft} {...props}/>} />
          <Route exact path="/watch/:id" render={(props) => <WatchPage paddingLeft={paddingLeft} {...props}/>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
