import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/base.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import dataState from "./state/dataState"
import { HashRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./state/store";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement

);
root.render(
  <Provider store={store} >
    <HashRouter>
      <App dialogsData={dataState.dialogsPage.dialogsData} messagesData={dataState.dialogsPage.messagesData}
        postsData={dataState.profilePage.postsData} friendsData={dataState.friendsPage.friendsData} />
    </HashRouter>
  </Provider>

);

reportWebVitals();
