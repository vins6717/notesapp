import React from 'react';
import '../style.css';
import Sidebar from './Sidebar';
import {Routes, Route } from 'react-router-dom';
import NotePage from './NotePage';
import Home from './Home'

function NotesApp() {



  return (
    
    <div className="app-container">

    <Sidebar/>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="notes/:id" element={<NotePage/>} />
     </Routes>  
    </div>
  );
}

export default NotesApp
