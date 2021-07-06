import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';


let renderedEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App state = {store.getState()} dispatch={store.dispatch.bind(store)} 
        />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

renderedEntireTree();

store.subscribe(renderedEntireTree);

reportWebVitals();
