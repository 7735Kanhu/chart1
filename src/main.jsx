import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgsQsYJdHthm1pay-MPX5KF82KkvnK-wA",
  authDomain: "tk-survey.firebaseapp.com",
  databaseURL: "https://tk-survey-default-rtdb.firebaseio.com",
  projectId: "tk-survey",
  storageBucket: "tk-survey.appspot.com",
  messagingSenderId: "656760605822",
  appId: "1:656760605822:web:07d3f9cbe57ed923995c2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
