import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {toAddPost} from  './redux/state';  
import {updateNewPostText} from './redux/state';
import {updateNewMessageText} from './redux/state';
import {toAddMessage} from './redux/state';
import {subscribe} from './redux/state';

let renderedEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App state = {state} 
             toAddPost={toAddPost} 
             updateNewPostText={updateNewPostText}
             updateNewMessageText={updateNewMessageText}
             toAddMessage={toAddMessage}
        />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

renderedEntireTree();

subscribe(renderedEntireTree);

reportWebVitals();
