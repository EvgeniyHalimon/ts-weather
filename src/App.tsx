import React from 'react';
import './App.css';
import { CityCard } from './components/CityCard/CityCard';
import { Navigation } from './components/Navigation/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home/Home';

function App() {
  return (
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/weather-report' element={<CityCard/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
