import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
      </Routes>
    </Router>
  </div>;
};

export default App;
