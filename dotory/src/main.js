import React, { Component }  from 'react';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes} from 'react-router-dom';
import PocketPage from './pocket';
import Header from './components/header';
import './main.css';
import Calendar from './components/calendar';

function App() {
  
  return (
    <div className="App">
      <Header/>
``
      <Routes>
        <Route exact path="/" element={<Calendar/>}>
        </Route>
        <Route exact path="/pocket" element={<PocketPage/>}>
          
        </Route>
      </Routes>

    </div>
  );
}

export default App;