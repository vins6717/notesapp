import React from 'react';
import ReactDOM from 'react-dom/client';
import NotesApp from './components/NotesApp';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <NotesApp />
      </BrowserRouter>
   
  </React.StrictMode>
);


