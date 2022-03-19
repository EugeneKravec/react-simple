import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Dimych" },
  { id: 7, name: "Andrey" },
  { id: 8, name: "Sveta" },
  { id: 9, name: "Sasha" },
  { id: 10, name: "Viktor" },
];

const messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are your education?" },
  { id: 3, message: "Yo-yo" },
  { id: 4, message: "Yo-yo" },
  { id: 5, message: "Yo-yo" },
  { id: 3, message: "Yo-yo" },
  { id: 4, message: "Yo-yo" },
  { id: 5, message: "Yo-yo" },
  { id: 3, message: "Yo-yo" },
  { id: 4, message: "Yo-yo" },
];

const posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 34 },
  { id: 2, message: "It's my first post", likesCount: 23 },
  { id: 2, message: "Blalal", likesCount: 67 },
  { id: 2, message: "Yo=yoyoyoy", likesCount: 1245 },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      posts={posts}
      messages={messages}
      dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
