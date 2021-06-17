import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state = {props.state.sitebar} />
        <div className='app-wrapper-content'>
          <Route path="/profile" render ={ ()=> <Profile state = {props.state.profilePage} toAddPost={props.toAddPost} updateNewPostText={props.updateNewPostText}/> }/>
          <Route path="/dialogs"render ={ ()=> <Dialogs state = {props.state.dialogsPage}  toAddMessage={props.toAddMessage} updateNewMessageText={props.updateNewMessageText} newMessageText={props.state.dialogsPage.newMessageText}/> } />
          <Route path="/news" render ={ ()=> <News/> } />
          <Route path="/music" render ={ ()=> <Music/> } />
          <Route path="/settings" render ={ ()=> <Settings/> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;