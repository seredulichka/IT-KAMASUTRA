import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile" render ={ ()=> <Profile/>}/>
          <Route path="/users" render ={ ()=> <UsersContainer/>}/>
          <Route path="/dialogs"render ={ ()=> <DialogsContainer/> } />
          <Route path="/news" render ={ ()=> <News/> } />
          <Route path="/music" render ={ ()=> <Music/> } />
          <Route path="/settings" render ={ ()=> <Settings/> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;