import React from 'react';
import './App.css';
import { CityCard } from './components/CityCard/CityCard';
import { Navigation } from './components/Navigation/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home/Home';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/weather-report' element={<CityCard/>}/>
            </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
