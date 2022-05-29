import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDOYC_myNNEgFJL10Yyaby0y2XJ1bqiooY",
  authDomain: "fire-gl.firebaseapp.com",
  projectId: "fire-gl",
  storageBucket: "fire-gl.appspot.com",
  messagingSenderId: "40248851661",
  appId: "1:40248851661:web:30935188e21adc66f8fd84",
  measurementId: "G-H6KTCK2TJR"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
