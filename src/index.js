import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





;

// Initialize Firebase
firebase.initializeApp(
{ 
  apiKey: "AIzaSyA_b6yH-nVdcaQegSjwaD-6U3jQe35677E",
  authDomain: "chat-react-ac320.firebaseapp.com",
  projectId: "chat-react-ac320",
  storageBucket: "chat-react-ac320.appspot.com",
  messagingSenderId: "1089084867935",
  appId: "1:1089084867935:web:2e1a6fbf2010380f7ba2ea",
  measurementId: "G-GPLEH998JY"
}
);


export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();















const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
      }}>
     <HashRouter>
      <App />
      </HashRouter>
    </Context.Provider>
  </React.StrictMode>
);


