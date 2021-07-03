import React,{useState, useEffect, createRef} from 'react';
import './App.css'
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage/SearchPage';
import WatchPage from './Components/WatchPage/WatchPage';


const App = () => {
  const [paddingLeft, setPaddingLeft] = useState("256px")
  const [isWatchPageSidebarOpen, setIsWatchPageSidebarOpen] = useState(false)
  const [isWatchPage, setIsWatchPage] = useState(false)

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
        <Navigation setIsWatchPageSidebarOpen={setIsWatchPageSidebarOpen} isWatchPage={isWatchPage} changePadding={changePadding}/>
        <Switch>
          <Route exact path="/" render={() => <HomePage setIsWatchPage={setIsWatchPage} paddingLeft={paddingLeft}/>} />
          <Route exact path="/search/:q" render={(props) => <SearchPage setIsWatchPage={setIsWatchPage} paddingLeft={paddingLeft} {...props}/>} />
          <Route exact path="/watch/:id" render={(props) => <WatchPage isWatchPageSidebarOpen={isWatchPageSidebarOpen} setIsWatchPage={setIsWatchPage} paddingLeft={paddingLeft} {...props}/>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
