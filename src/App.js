import React from 'react';
import './App.css';
// import Login from './components/Login';
// import Chat from './components/Chat';
// import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';



function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<Layout />}>
     
    </Route>
   </Routes>
    </>
  );
}

export default App;
